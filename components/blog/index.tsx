import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './styles.module.css';
import ComingSoon from '../../public/icons/comingsoon.svg';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.wrapper}>
            coming soon...
            <span>
              <Image src={ComingSoon} alt="" />
            </span>
          </div>
          <div className={styles.back}>
            <Link href="/" legacyBehavior>
              <a>Go Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
