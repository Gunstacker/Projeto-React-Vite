import React from 'react';
import styles from './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
  button: string;
  buttonHref: string; 
}

const Card: React.FC<CardProps> = ({ imageUrl, title, text, button, buttonHref  }) => {
  return (       
    <div className={`card ${styles.card}`}>
      <img src={imageUrl} alt="Imagem do Card" className={`card-img-top ${styles.cardImage}`} />
      <div className={`card-title ${styles.cardTitle}`}>{title}</div>
      <div className={`card-text ${styles.cardText}`}>{text}</div>
      <a href={buttonHref} className={`card-button ${styles.cardButton}`}>{button}</a>
    </div>
     
  );
};

export default Card;