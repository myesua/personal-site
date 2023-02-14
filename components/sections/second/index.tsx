import Image from 'next/legacy/image';
import progress from '../../../assets/images/progress_1.svg';
import coach from '../../../assets/images/coach_2.svg';
import innovation from '../../../assets/images/innovation_1.svg';
import Link from 'next/link';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import WorkUI from '../../work';

const SecondSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const topRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = document.querySelector('#works') as HTMLDivElement;
    const topElement = section.querySelector('#top') as HTMLParagraphElement;
    const bottomElement = section.querySelector('#bottom') as HTMLDivElement;
    const leftElement = section.querySelector('#left') as HTMLDivElement;
    const rightElement = section.querySelector('#right') as HTMLDivElement;

    // set up text to print, each item in array is new line
    var aText = new Array('Here are some of my works');
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this position
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById('top');

      while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
      }
      if (aText[iIndex] !== undefined)
        destination.innerHTML =
          sContents + aText[iIndex].substring(0, iTextPos) + '_';
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length && aText[iIndex] !== undefined) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }

    function debounce(
      func: { (e: any): void; apply?: any },
      wait = 20,
      immediate = true,
    ) {
      var timeout: string | number | NodeJS.Timeout;
      return function () {
        var context: any,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function checkSlide(e: any) {
      // Top
      const slideInAt =
        window.scrollY + window.innerHeight - topElement.offsetHeight / 1.4; // slides in once scroll reaches more than half of element
      const elementBottom = topElement.offsetTop + topElement.offsetHeight;
      const isHalfShown = slideInAt > topElement.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
      if (isHalfShown && isNotScrolledPast) {
        setTimeout(typewriter, 1000);
      }

      // Left
      const slideInAtLeft =
        window.scrollY + window.innerHeight - leftElement.offsetHeight / 2; // slides in once sroll reaches middle of element
      const elementBottomLeft =
        leftElement.offsetTop + leftElement.offsetHeight;
      const isHalfShownLeft = slideInAtLeft > leftElement.offsetTop;
      const isNotScrolledPastLeft = window.scrollY < elementBottomLeft;
      if (isHalfShownLeft && isNotScrolledPastLeft) {
        leftElement.classList.add(`${styles.from__left}`);
      } else {
        leftElement.classList.remove(`${styles.from__left}`);
      }

      // Right
      const slideInAtRight =
        window.scrollY + window.innerHeight - rightElement.offsetHeight / 2; // slides in once sroll reaches middle of element
      const elementBottomRight =
        rightElement.offsetTop + rightElement.offsetHeight;
      const isHalfShownRight = slideInAtRight > rightElement.offsetTop;
      const isNotScrolledPastRight = window.scrollY < elementBottomRight;
      if (isHalfShownRight && isNotScrolledPastRight) {
        rightElement.classList.add(`${styles.from__right}`);
      } else {
        rightElement.classList.remove(`${styles.from__right}`);
      }

      // Bottom
      const slideInAtBottom =
        window.scrollY + window.innerHeight - bottomElement.offsetHeight / 2; // slides in once sroll reaches middle of element
      const elementBottomBottom =
        bottomElement.offsetTop + bottomElement.offsetHeight;
      const isHalfShownBottom = slideInAtBottom > bottomElement.offsetTop;
      const isNotScrolledPastBottom = window.scrollY < elementBottomBottom;
      if (isHalfShownBottom && isNotScrolledPastBottom) {
        bottomElement.classList.add(`${styles.from__bottom}`);
      } else {
        bottomElement.classList.remove(`${styles.from__bottom}`);
      }
    }

    window.addEventListener('scroll', debounce(checkSlide));
  }, []);
  useEffect(() => {
    const cardElement = Array.from(document.querySelectorAll('#card'));
    const blog = 'https://blog.bechellente.com';
    const academy = 'https://youngrise.org';
    const uiKit = 'https://github.com/mjosh51?tab=repositories';

    cardElement.forEach((element) => {
      const target = element as HTMLDivElement;
      if (target.accessKey === 'blog')
        target.addEventListener('click', () =>
          window.open(`${blog}`, '__blank'),
        );
      else if (target.accessKey === 'academy')
        target.addEventListener('click', () =>
          window.open(`${academy}`, '__blank'),
        );
      else
        target.addEventListener('click', () =>
          window.open(`${uiKit}`, '__blank'),
        );
    });
  }, []);
  return (
    <div className={styles.container} id="works">
      <p className={styles.work__heading} id="top">
        {/* Here are some of my works */}
      </p>
      <div className={styles.wrapper}>
        <div className={`${styles.feature__child} ${styles.left}`} id="left">
          <WorkUI
            bgcolor="var(--background-color-primary)"
            color="#fff"
            image={'/images/sample.png'}
            title="Blog for an automobile client"
            text="A full stack development of an automobile blog. With article editing, approval, deleting features, and statistics on author's performance."
            accessKey="blog"
          />
        </div>
        <div className={`${styles.feature__child} ${styles.right}`} id="right">
          <WorkUI
            bgcolor="#fff"
            color="#000"
            image={'/images/yrise.png'}
            title="A non-profit academy for learning skills"
            text="A full stack development of an academy where youth can learn skills ranging from technological skills to vocational skills."
            accessKey="academy"
          />
        </div>
        <div
          className={`${styles.feature__child} ${styles.bottom}`}
          id="bottom">
          <WorkUI
            bgcolor="var(--background-color-primary)"
            color="#fff"
            image={'/images/ui-kit.png'}
            title="UI-KIT for mostly used CSS, JavaScript."
            text="A personal project being developed as a to go for CSS and JavaScript components. Users can copy component code and use directly in their CSS, JavaScript files.Still in progress."
            accessKey="ui-kit"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
