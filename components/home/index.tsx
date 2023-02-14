import type { NextPage } from 'next';
import Divider from '../divider';
import FifthSection from '../sections/fifth';
import FirstSection from '../sections/first';
import Footer from '../footer';
import FourthSection from '../sections/fourth';
import Header from '../header';
import SecondSection from '../sections/second';
import ThirdSection from '../sections/third';
import styles from './styles.module.css';

// const styles = {
//   // wrapper: `bg-[#000F41] text-white`,
//   wrapper: 'bg-[url("../assets/images/classroom.svg")] bg-[#000F41] text-black',
// };

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.firstSectionContainer}>
          <FirstSection />
        </div>
      </section>
      <section className={styles.section}>
        <SecondSection />
      </section>
      <section className={styles.section}>
        <ThirdSection />
      </section>
      <section className={styles.section}>
        <FourthSection />
      </section>
      <section className={styles.section}>
        <FifthSection />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
