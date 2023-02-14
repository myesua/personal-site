import Image from 'next/image';
import styles from './styles.module.css';
import html from '../../../public/icons/html.svg';
import css from '../../../public/icons/css3.svg';
import bootstrap from '../../../public/icons/bootstrap.svg';
import tailwindCSS from '../../../public/icons/tailwindcss.svg';
import javascript from '../../../public/icons/javascript.svg';
import typescript from '../../../public/icons/typescript.svg';
import reactjs from '../../../public/icons/reactjs.svg';
import redux from '../../../public/icons/redux.svg';
import nextjs from '../../../public/icons/nextjs.svg';
import nodejs from '../../../public/icons/nodejs.svg';
import expressjs from '../../../public/icons/expressjs.svg';
import redis from '../../../public/icons/redis.svg';
import mongodb from '../../../public/icons/mongodb.svg';
import mongoose from '../../../public/icons/mongoose.svg';
import git from '../../../public/icons/git.svg';
import github from '../../../public/icons/github.svg';
import aws from '../../../public/icons/aws.svg';
import oracle from '../../../public/icons/oracle.svg';
import figma from '../../../public/icons/figma.svg';
import linux from '../../../public/icons/linux.svg';
import postman from '../../../public/icons/postman.svg';

const FourthSection = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Tools</h2>
      <div className={styles.container}>
        {/* Icons from https://icons8.com */}
        <Image src={html} alt="html-image" priority={true} />
        <Image src={css} alt="css-image" priority={true} />
        <Image src={bootstrap} alt="bootstrap-image" priority={true} />
        <Image src={tailwindCSS} alt="tailwindcss-image" priority={true} />
        <Image src={javascript} alt="javascript-image" priority={true} />
        <Image src={typescript} alt="typescript-image" priority={true} />
        <Image src={reactjs} alt="reactjs-image" priority={true} />
        <Image src={redux} alt="redux-image" priority={true} />
        <Image src={nextjs} alt="nextjs-image" priority={true} />
        <Image src={nodejs} alt="nodejs-image" priority={true} />
        <Image src={expressjs} alt="expressjs-image" priority={true} />
        <Image src={redis} alt="redis-image" priority={true} />
        <Image src={mongodb} alt="mongodb-image" priority={true} />
        <Image src={mongoose} alt="mongoose-image" priority={true} />
        <Image src={git} alt="git-image" priority={true} />
        <Image src={github} alt="github-image" priority={true} />
        <Image src={aws} alt="aws-image" priority={true} />
        <Image src={oracle} alt="oracle-image" priority={true} />
        <Image src={figma} alt="figma-image" priority={true} />
        <Image src={linux} alt="linux-image" priority={true} />
        <Image src={postman} alt="postman-image" priority={true} />
      </div>
    </div>
  );
};

export default FourthSection;
