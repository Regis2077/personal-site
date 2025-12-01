#!/usr/bin/env node

/**
 * Update Projects Script
 * Fetches repositories from GitHub and updates projects.json
 * 
 * Usage:
 *   npm run update:projects
 *   npm run update:projects -- --limit 10
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { createGitHubService } from '../src/services/github/index';

// Configuration
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Regis2077';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUTPUT_PATH_PT = join(process.cwd(), 'src/i18n/pt/projects.ts');
const OUTPUT_PATH_EN = join(process.cwd(), 'src/i18n/en/projects.ts');

// Parse command line arguments
const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const limit = limitIndex !== -1 ? parseInt(args[limitIndex + 1], 10) : undefined;

async function main() {
  console.log('🚀 Starting GitHub projects update...\n');
  console.log(`👤 Username: ${GITHUB_USERNAME}`);
  console.log(`🔑 Token: ${GITHUB_TOKEN ? '✅ Configured' : '⚠️  Not configured (rate limit: 60/hour)'}`);
  if (limit) console.log(`📊 Limit: ${limit} repositories`);
  console.log('');

  try {
    // Create GitHub service
    const github = createGitHubService({
      username: GITHUB_USERNAME,
      token: GITHUB_TOKEN,
      cacheTTL: 1000 * 60 * 5, // 5 minutes for script execution
    });

    // Fetch repositories with languages
    const projects = await github.fetchRepositoriesWithLanguages({
      excludeForks: true,
      minStars: 0,
      limit,
      sortBy: 'updated',
    });

    console.log(`\n✅ Successfully fetched ${projects.length} projects\n`);

    // Generate TypeScript content for PT
    const projectsArrayPT = JSON.stringify(projects, null, 2);
    const tsContentPT = `import { ProjectsTranslations, Project } from '../types';

// Project data imported from GitHub API
const projectsList: Project[] = ${projectsArrayPT};

const projectsPT: ProjectsTranslations = {
  page: {
    title: 'Projetos',
    description: 'Meus projetos e experimentos de código',
  },
  list: projectsList,
};

export default projectsPT;
`;

    // Generate TypeScript content for EN
    const projectsArrayEN = JSON.stringify(projects, null, 2);
    const tsContentEN = `import { ProjectsTranslations, Project } from '../types';

// Project data imported from GitHub API
const projectsList: Project[] = ${projectsArrayEN};

const projectsEN: ProjectsTranslations = {
  page: {
    title: 'Projects',
    description: 'My projects and code experiments',
  },
  list: projectsList,
};

export default projectsEN;
`;

    // Write to files
    writeFileSync(OUTPUT_PATH_PT, tsContentPT, 'utf-8');
    writeFileSync(OUTPUT_PATH_EN, tsContentEN, 'utf-8');

    console.log(`💾 Saved PT to: ${OUTPUT_PATH_PT}`);
    console.log(`💾 Saved EN to: ${OUTPUT_PATH_EN}`);
    console.log('\n📋 Summary:');
    console.log(`   Total projects: ${projects.length}`);

    if (projects.length > 0) {
      const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);
      const allTechs = new Set(projects.flatMap(p => p.technologies));

      console.log(`   Total stars: ${totalStars}`);
      console.log(`   Unique technologies: ${allTechs.size}`);
      console.log(`   Top technologies: ${Array.from(allTechs).slice(0, 5).join(', ')}`);
    }

    console.log('\n✨ Done!\n');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error updating projects:', error);

    if (error instanceof Error) {
      console.error(`   ${error.message}`);

      if (error.message.includes('rate limit')) {
        console.error('\n💡 Tip: Add a GITHUB_TOKEN to your .env.local file to increase rate limit');
        console.error('   Visit: https://github.com/settings/tokens');
      }
    }

    process.exit(1);
  }
}

main();
