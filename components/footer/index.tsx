import Image from 'next/legacy/image';
import footergraphic from '../../public/images/graphic.svg';
import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.firstColumn}>
          <Link href="/">
            <div className={styles.logo}>Josh Dev</div>
          </Link>
          <p className={styles.beliefText}>
            I am on a journey, and I work hard at it. Striving always for
            excellence.
          </p>
        </div>
        <div className={styles.footerOtherColumnsContainer}>
          <ul className={styles.footerNavList}>
            <li>
              <Link href="mailto:info@webnxt.xyz" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" legacyBehavior>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.footerNavList}></ul>
          <ul className={styles.footerNavList}>
            <li>
              <Link href="https://twitter.com" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/mjosh51" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.footerGraphicContainer}>
            <Image
              src={footergraphic}
              width={70}
              height={70}
              alt=""
              layout="fixed"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
