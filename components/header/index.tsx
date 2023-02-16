import Image from 'next/legacy/image';
import Link from 'next/link';
import MenuBar from '../../public/icons/menubar.svg';
import styles from './styles.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);

  const handleHiddenMenu = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    setHydrated(true);
  }, []);
  const customRef1 = useCallback((ref: HTMLAnchorElement) => {
    ref.setAttribute('style', 'cursor:pointer');
    ref.addEventListener('click', () => {
      const gallery = document.querySelector('#gallery') as HTMLElement;
      if (gallery === null) router.push('/#gallery');
      else gallery.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }, []);
  const customRef2 = useCallback((ref: HTMLAnchorElement) => {
    ref.setAttribute('style', 'cursor:pointer');
    ref.addEventListener('click', () => {
      const works = document.querySelector('#works') as HTMLElement;
      if (works === null) router.push('/#works');
      else works.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }, []);
  const customRef3 = useCallback((ref: HTMLAnchorElement) => {
    // ref element accessible here
    ref?.addEventListener('click', () => {
      const gallery = document.querySelector('#gallery') as HTMLElement;
      if (gallery === null) router.push('/#gallery');
      else gallery.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }, []);
  const customRef4 = useCallback((ref: HTMLAnchorElement) => {
    // ref element accessible here
    ref?.addEventListener('click', () => {
      const works = document.querySelector('#works') as HTMLElement;
      if (works === null) router.push('/#works');
      else works.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }, []);
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.container}>
        <div className={styles.leftNav}>
          <Link href="/">
            <div className={styles.logo}>Josh Dev</div>
          </Link>
        </div>
        <div className={styles.menuBarContainer}>
          <Image
            onClick={handleHiddenMenu}
            className={styles.menuBar}
            src={MenuBar}
            width={25}
            height={20}
            priority
          />
        </div>
        <ul className={styles.middleNav}>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
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
          <li>
            <a id="hgallery" ref={customRef1}>
              Gallery
            </a>
          </li>
        </ul>
        <ul className={styles.rightNav}>
          <li>
            <a id="hworks" ref={customRef2}>
              Works
            </a>
          </li>
          <li className={styles.registerButton}>
            <Link href="mailto:info@webnxt.xyz" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {!isOpen ? (
          <div className={styles.toggledMenuListContainer}>
            <div className={styles.closeIconContainer}></div>
            <ul className={styles.toggledMenuListParent}>
              <li className={styles.toggledMenuList}>
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/about" legacyBehavior>
                  <a>About</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/blog" legacyBehavior>
                  <a>Blog</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <a ref={customRef3}>Gallery</a>
              </li>
              <li className={styles.toggledMenuList}>
                <a ref={customRef4}>Works</a>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="mailto:info@webnxt.xyz" legacyBehavior>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Header;
