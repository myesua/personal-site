import Header from '../header';
import styles from './styles.module.css';
import Image from 'next/legacy/image';
import norma from '../../assets/images/children1.svg';
import Footer from '../footer';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div>
          <Header />
        </div>
        <div className={styles.first__section}>
          <p>About Me</p>
        </div>
      </section>
      <section className={styles.about}>
        <h1>JOSHUA OGUNYELE MAYOWA</h1>
        <p>
          Joshua is a software developer and a cyber guy. He started his tech
          career while in college by making friends with CS students though his
          background is Accounting and Management. He enrolled into a computer
          school and later discovered his interest in programming. He has
          experience in several aspects of technology. Leaving a market research
          firm where he was an Assistant Data Analyst, he went fully into
          pursuing IT. He has worked as a Data Center Technician (for three
          years), configuring and cabling devices, and also relating with
          internet exchange, transit providers. Along side he worked with a
          Cybersecurity company as a Penetration Tester. After all these he
          decided to pick back Javascript and fully migrate to coding.
        </p>
        <p>
          He is a self starter and a great team player. Always eager to explore
          new adventure. His hobbies are researching and teaching. He has taught
          quite a few in web development and web pentesting. Some of them have
          come to stay with him to learn for some months.
        </p>
        <p>He is open to new opportunities and collaboration.</p>
      </section>
      <section className={styles.aboutFooter}>
        <Footer />
      </section>
    </div>
  );
};

export default AboutPage;
