import React from 'react';
import styles from "./Carousel.module.css"

const Carousel = () => {
  return (
    <div className={`card ${styles.card}`}>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item active`}>
          <img
            src="https://pbs.twimg.com/media/FJP5Tn-XwAEHu3h.jpg:large"
            className={` d-block w-100 ${styles.imgCarousel}`}
            alt="Imagem do Carrossel"
          />
          <hr className="carousel-divider" /> {/* Linha divisória */}
          <div className={`carousel-caption d-none d-md-block ${styles.carouselItem}`}>
            <h3 className="carousel-title">Agora Sekiro em pixel art</h3>
            <hr className="carousel-divider" /> {/* Linha divisória */}
            <p className="carousel-description">Desenvolvedores procuram modeladores de pixel art para complementarem o desenvolvimento de Sekiro em pixel art, o jogo 2D promete inovações.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://assetsio.reedpopcdn.com/dark-souls-3-metroidvania.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
            className={` d-block w-100 ${styles.imgCarousel}`}
            alt="Imagem do Carrossel"
          />
          <hr className="carousel-divider" /> {/* Linha divisória */}
          <div className={`carousel-caption d-none d-md-block ${styles.carouselItem}`}>
            <h3 className="carousel-title">Explore tambem DarkSouls 3 em pixel art</h3>
            <hr className="carousel-divider" /> {/* Linha divisória */}
            <p className="carousel-description">Dark souls em um mundo 2D, quem imaginaria tamanha construção, venha agora descobrir o novo conceito de souls like!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://w0.peakpx.com/wallpaper/429/177/HD-wallpaper-waifu2x-shopping-pixel-art-anime-games-stairs-scenery-hoodie-anime.jpg"
            className={` d-block w-100 ${styles.imgCarousel}`}
            alt="Imagem do Carrossel"
          />
          <hr className="carousel-divider" /> {/* Linha divisória */}
          <div className={`carousel-caption d-none d-md-block ${styles.carouselItem}`}>
            <h3 className="carousel-title">Novas Vendas de pixel art em BREVE!</h3>
            <hr className="carousel-divider" /> {/* Linha divisória */}
            <p className="carousel-description">Logo mais teremos vendas de projetos de pixel arts aqui no nosso site, teremos portabilidade para todo tipo de venda de projetos tanto 2D quanto 3D</p>
          </div>
        </div>
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
