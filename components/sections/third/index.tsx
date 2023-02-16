import Image from 'next/legacy/image';
import styles from './styles.module.css';
import { Key, useEffect, useState } from 'react';
import { images, imagesSmall } from '../../../data';
import leftArrow from '../../../public/icons/arrow-left-circle.svg';
import rightArrow from '../../../public/icons/arrow-right-circle.svg';

const ThirdSection = () => {
  const [data, setData] = useState(images);
  useEffect(() => {
    const backwardBtn = document.querySelector('#backward-button');
    const forwardBtn = document.querySelector('#forward-button');
    const carousel = Array.from(
      document.querySelectorAll<HTMLDivElement>('#carousel'),
    );

    const getDeviceWidth = () => {
      if (window.innerWidth < 800) setData(imagesSmall);
    };
    getDeviceWidth();

    let index = 0;
    const totalIndex = carousel.length;
    const lastIndex = totalIndex - 1;
    function defaultStyle() {
      let first = carousel[0];
      first.setAttribute('style', 'opacity: 1; right: 0; z-index: 10');
    }
    defaultStyle();

    function updateBackwardIndex() {
      carousel[index].style.opacity = '1';
      carousel[index].style.right = '0';
      carousel[index].style.zIndex = '10';
      carousel[index + 1].style.opacity = '0';
      carousel[index + 1].style.right = '-100px';
      carousel[index + 1].style.zIndex = '9';
    }
    function updateForwardIndex() {
      carousel[index].style.opacity = '1';
      carousel[index].style.right = '0';
      carousel[index].style.zIndex = '10';
      carousel[index - 1].style.opacity = '0';
      carousel[index - 1].style.right = '-100px';
      carousel[index - 1].style.zIndex = '9';
    }
    //
    function nextSlide() {
      index = index === lastIndex ? (index = 0) : index + 1;
      if (carousel[lastIndex].hasAttribute('style')) {
        carousel[lastIndex].removeAttribute('style');
      }
      if (index === 0) {
        carousel[index].style.opacity = '1';
        carousel[index].style.right = '0';
        carousel[index].style.zIndex = '10';
      } else {
        updateForwardIndex();
      }
    }

    function previousSlide() {
      index = index === 0 ? lastIndex : index - 1;
      if (carousel[0].hasAttribute('style')) {
        carousel[0].removeAttribute('style');
      }
      if (index === lastIndex) {
        carousel[index].style.opacity = '1';
        carousel[index].style.right = '0';
      } else {
        updateBackwardIndex();
      }
    }

    backwardBtn.addEventListener('click', previousSlide);
    forwardBtn.addEventListener('click', nextSlide);
  }, [data]);
  useEffect(() => {}, [data]);
  return (
    <div className={styles.parent}>
      <h2>Gallery</h2>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {data.map((image, index: Key) => (
            <div
              className={styles.carousel__container}
              id="carousel"
              key={index}>
              <img src={image} alt="image" />
            </div>
          ))}
        </div>
        <div className={styles.control__container}>
          <Image
            src={leftArrow}
            id="backward-button"
            alt="left-arrow"
            width={50}
            height={50}
            priority
          />
          <Image
            src={rightArrow}
            id="forward-button"
            alt="right-arrow"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
