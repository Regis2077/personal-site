import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__email}>
            <Image src="/mail.svg" alt="Email icon" width={16} height={16} />
            <p>gbregisdev@gmail.com</p>
          </div>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="github icon"
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="linkedin icon"
              width={16}
              height={16}
            />
            Linkedin
          </a>
          <button>
            <Image src="/download.svg" alt="Download icon" width={16} height={16} />
            Download CV
          </button>
        </div>
        <div className={styles.footer__copyright}>
          <p>© 2025 Regis. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;  