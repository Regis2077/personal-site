"use client"

import React from 'react';
import styles from './blog.module.scss';
import blogPosts from '@/content/pt/articles.json';

const BlogContent = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.blogContainer}>      
      <div className={styles.articlesContainer}>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <article 
              className={styles.articleCard}
              onClick={() => handleCardClick(post.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(post.url);
                }
              }}
            >
              <h2 className={styles.articleTitle}>
                {post.title}
              </h2>
              <div className={styles.metadata}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
            </article>
            {index < blogPosts.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlogContent; 