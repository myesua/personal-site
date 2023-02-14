import Image from 'next/legacy/image';
import Link from 'next/link';
import MenuBar from '../../public/icons/menubar.svg';
import styles from './styles.module.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleHiddenMenu = () => {
    setOpen(!isOpen);
  };

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
            <Link href="/#gallery" legacyBehavior>
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.rightNav}>
          <li>
            <Link href="/#works" legacyBehavior>
              <a>Works</a>
            </Link>
          </li>
          <li className={styles.registerButton}>
            <Link href="mailto:info@webnxt.xyz" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {isOpen && (
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
                <Link href="/#gallery" legacyBehavior>
                  <a>Gallery</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/#works" legacyBehavior>
                  <a>Works</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="mailto:info@webnxt.xyz" legacyBehavior>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
