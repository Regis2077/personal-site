import styles from "./page.module.css";
import LongText from "@/components/LongText";
import TypewriterText from "@/components/TypewriterText";
import homeImage from "@/assets/images/home.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} data-container-home>
        <h1 style={{ display: 'none' }}>Gabriel Regis Desenvolvedor Front-end | back-end | Full-stack | Projetos</h1>
        <TypewriterText
          text="Construindo, Aprendendo, Expandindo Ideias & Repetindo."
          speed={100}
          as="h2"
        />
        <LongText>
          {`
  Meu nome é Gabriel Regis. Você pode me encontrar profissionalmente nos links no footer e conhecer mais sobre mim na página [sobre](/about).

  Esse é meu digital Garden, fiz pra compartilhar experiências, hobbies, projetos e o que mais eu quiser da minha vida.
   `}
        </LongText>

        <div className={styles.imageContainer}>
          <Image
            src={homeImage.src}
            alt="Foto de perfil de Gabriel Regis"
            className={styles.image}
            width={800}
            height={500}
          />
          <span className={styles.imageLabel}>
            eu na IHAC Lab da{" "}
            <a
              href="https://www.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ufbaLink}
            >
              UFBA
            </a>
          </span>
        </div>
        <LongText>
          {`

  Pra não enrolar muito aqui vai um breve resumo profissional (que você pode ver em mais detalhes na página [work](/work)): Atualmente, atuo como Especialista em Engenharia de Front-End. No meu dia a dia, alterno entre construir novas funcionalidades, resolver problemas, evoluir projetos existentes e implementar melhorias voltadas à performance, SEO e experiência do usuário. Trabalho principalmente em projetos de e-commerce baseados em VTEX, participando de todo o ciclo de desenvolvimento, do planejamento à entrega. Essa abordagem é interessante pois me mantém em contato constante com áreas como backend e arquitetura, explorando o que há de mais moderno em tecnologias.

O que mais curto nisso tudo é criar coisas junto de outras pessoas, encarar desafios em cenários e contextos variados com diferentes tipos de pessoas. Pra você ter noção, a maior parte dos projetos que já toquei envolve clientes da América Latina e da Europa, então meu no meu dia preciso falar com gente de vários países, discutindo tarefas, prioridades, problemas e, principalmente, ideias. Isso faz eu ter perpectivas completamente amplas sobre tudo que me cerca!
          `}
        </LongText>
      </main>
    </div>
  );
}
