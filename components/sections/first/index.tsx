import Image from 'next/legacy/image';
import developer from '../../../public/images/developer.svg';
import Link from 'next/link';
import styles from './styles.module.css';
import { useEffect } from 'react';

const FirstSection = () => {
  useEffect(() => {
    // set up text to print, each item in array is new line
    var aText = new Array(
      'Hey, I am Josh,',
      'A passionate Software Developer growing businesses and tools.',
    );
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

      var destination = document.getElementById('big-text');

      while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
      }

      if (destination === null) {
        return;
      }
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + '_';
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }

    typewriter();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        <div className={styles.illustration__container}>
          <Image
            className={styles.illustration}
            src={developer}
            alt=""
            layout="fill"
            priority
          />
        </div>
        <div className={styles.container}>
          <p className={styles.bigText} id="big-text"></p>
          <p className={styles.smallText}>
            I help businesses reach their targets and continually win them with
            some lines of code.
          </p>
          <ul className={styles.actionButtons}>
            <Link href="https://linkedin.com/in/joshuaomayowa" legacyBehavior>
              <a>
                <li className={styles.registerButton}>Connect</li>
              </a>
            </Link>
            <Link href="mailto:info@webnxt.xyz" legacyBehavior>
              <a>
                <li className={styles.learnMoreButton}>Know more</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
