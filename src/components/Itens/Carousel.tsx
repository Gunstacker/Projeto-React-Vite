import React, { useEffect } from 'react';
import styles from "./Carousel.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = ({ images, titles, descriptions }) => {
  useEffect(() => {
    // Inicialize o Bootstrap Carousel aqui após o componente ser montado
    const carousel = document.getElementById('carouselExample');
    const bsCarousel = new window.bootstrap.Carousel(carousel);
  }, []); // O array vazio [] assegura que isso seja executado apenas uma vez após a montagem

  return (
    <div className={` ${styles.card}`}>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className={`d-block w-100 ${styles.imgCarousel}`}
                alt={`Imagem do Carrossel ${index}`}
              />
              <div className={`carousel-caption d-none d-md-block ${styles.carouselItem}`}>
                <h3>{titles[index]}</h3>
                <hr />
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;