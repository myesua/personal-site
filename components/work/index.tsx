import Image from 'next/image';
import styles from './styles.module.css';
import Eye from '../../public/icons/eye.svg';
import { useEffect } from 'react';

interface PropsType {
  bgcolor: string;
  color: string;
  image: string;
  title: string;
  text: string;
  accessKey: string;
}

const WorkUI = ({
  bgcolor,
  color,
  image,
  title,
  text,
  accessKey,
}: PropsType) => {
  const customParentStyle = {
    backgroundColor: bgcolor,
    color: color,
    cursor: 'pointer',
  };
  const customStyle = {
    backgroundColor: '#fff',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '300px',
  };
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLDivElement>('#card'),
    );
    cards[0].addEventListener('mouseenter', () =>
      cards[0].setAttribute('style', 'background-color: #fff'),
    );
    cards[2].addEventListener('mouseenter', () =>
      cards[2].setAttribute('style', 'background-color: #fff'),
    );
    cards[0].addEventListener('mouseleave', () =>
      cards[0].setAttribute(
        'style',
        `background-color: ${bgcolor}; color: #fff`,
      ),
    );
    cards[2].addEventListener('mouseleave', () =>
      cards[2].setAttribute(
        'style',
        `background-color: ${bgcolor}; color: #fff`,
      ),
    );
  }, []);
  return (
    <div
      className={styles.card}
      style={customParentStyle}
      id="card"
      accessKey={accessKey}>
      <div className={styles.card__inner}>
        <div className={styles.card__front}>
          {/* <div style={customStyle} id="card-head"></div> */}
          <div className={styles.card__body}>
            <h2 className={styles.card__title}>{title}</h2>
            <span className={styles.card__text}>{text}</span>
            <span className={styles.card__action}>
              <Image src={Eye} id="eye" alt="view" priority={true} />
            </span>
          </div>
        </div>
        <div className={styles.card__back} style={customStyle}></div>
      </div>
    </div>
  );
};

export default WorkUI;
