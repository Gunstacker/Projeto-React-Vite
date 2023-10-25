import React, { useRef } from 'react';
import styles from "./Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from '../Itens/Card';
import GameUpdates from '../Itens/GameUpdates';
import Carousel from "../Itens/Carousel";



function Home() {
  //criado para que eu possa chamar o carousels e passar seus parâmetros
  const carouselImages = [
    'https://pbs.twimg.com/media/FJP5Tn-XwAEHu3h.jpg:large',
    'https://assetsio.reedpopcdn.com/dark-souls-3-metroidvania.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
    'https://images3.alphacoders.com/129/thumb-1920-1298880.png'
    
  ];

  const carouselTitles = [
    'Sekiro em Pixel Art',
    'Dark Souls 2D',
    'Venda de Modelos 2D e 3D'
  ];

  const carouselDescriptions = [
    'Olha só o melhor jogo da história da humanidade em Pixel Art esta desenvolvimento!',
    'Quem diria o jogo um souls like de renome sendo portabilizado para um mundo 2D!',
    'Em BREVE o site tera portabilidade para cadastro, venda e compras de projetos 2D e 3D!'
  ];

   // Lógica para ocultar ou exibir o Carousel com base na largura da tela
   
  

    return (
      <div className={`container  ${styles['container']}`}>


        {/* Início do cabeçalho */}
        <div className={`container text-center ${styles['card-container']}`}>
          <h1 className="display-3 text-white">Bem-vindo ao nosso site</h1>
          <p className="text-white">
            Seu destino para descobrir e compartilhar jogos pixel art incríveis!
          </p>
          <p className="text-white">
            Visualize um pouco abaixo mais dos últimos e mais procurados pixels art
          </p>
        </div>
        {/* Fim do cabeçalho */}
  


        {/* Início dos cards */}
        <div className="container mt-5">
          <div className="row text-center">


            <div className="col-lg-4 col-md-6 mb-4">
              <Card 
                imageUrl='https://wallpaperaccess.com/full/6125599.jpg' 
                title="Spider Pixel" 
                text="Novidades chegaram agora ao Spider pixel, clique em mais detalhes para saber!" 
                button="Saiba mais"
                buttonHref="#Spider"
              />
            </div>


            <div className="col-lg-4 col-md-6 mb-4">
            <Card 
                imageUrl='https://moewalls.com/wp-content/uploads/2023/06/chill-mario-pixel-thumb.jpg' 
                title="Mario Pixel" 
                text="Novidades chegaram agora ao Mario pixel, clique em mais detalhes para saber!" 
                button="Saiba mais"
                buttonHref='#Mario'
              />
            </div>


            <div className="col-lg-4 col-md-6 mb-4">
            <Card 
                imageUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1aca8ec2-f92a-4bac-a43b-7e14db9b3e0d/deyhxqt-131f1bd4-c2fb-4ec2-b373-14cbf95fc510.jpg/v1/fill/w_894,h_894,q_70,strp/_pixel_art__gengar_by_echonovadesign_deyhxqt-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFhY2E4ZWMyLWY5MmEtNGJhYy1hNDNiLTdlMTRkYjliM2UwZFwvZGV5aHhxdC0xMzFmMWJkNC1jMmZiLTRlYzItYjM3My0xNGNiZjk1ZmM1MTAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YFf1NGSliZSprIJDeNrXu29CUpoRC0iQShmwvafVzDQ' 
                title="Gengar Pixel" 
                text="Novidades chegaram agora ao Gengar pixel, clique em mais detalhes para saber!" 
                button="Saiba mais"
                buttonHref='#Gengar'
              />
            </div>

          </div>
        </div>
        {/* Fim dos cards */}


        {/* Inicio do carousel */}
          <div className="d-none d-md-block">
            <Carousel images={carouselImages} titles={carouselTitles} descriptions={carouselDescriptions} />
          </div>
        {/* Fim do carousel */}



      {/* Inicio dos GameUpdates */}
      <div id="Spider">
        <GameUpdates
          title="Atualizações Spider Pixel"
          patchNumber="10.1"
          updates={[
            'Novo Sistema de teias;',
            'Novos Combos;',
            'Quests Diárias atualizadas;',
            'Sistema de recompensa melhor ranking.',
            'Novos Inimigos',
            'Novos níveis Desafiadores',
            'Personalização da Roupa'
          ]}
          imageUrl="https://e1.pxfuel.com/desktop-wallpaper/90/140/desktop-wallpaper-1680x1050-cool-art-spiderman-1680x1050-resolution-cool-style.jpg"
        />
      </div>

      <div id='Mario'>
        <GameUpdates
          title="Atualizações Mario Pixel"
          patchNumber="6.9"
          updates={[
            'Novas corridas adicionadass;',
            'Novos side-quests espalhadas;',
            'Quests Diárias atualizadas;',
            'Sistema de recompensa melhor ranking.',
            'Novas fases',
            'Novos inimigos da saga',
            'Mais Itens consúmiveis'
          ]}
          imageUrl="https://e1.pxfuel.com/desktop-wallpaper/473/884/desktop-wallpaper-super-mario-pixel-art-gaming-super-mario-pixel-background.jpg"
        />
      </div>

      <div id='Gengar'>
        <GameUpdates
          title="Atualizações Gengar Pixel"
          patchNumber="13.6"
          updates={[
            'Remake das sprites;',
            'Novo ratting de catch para suas evoluções;',
            'Chances de spawnar shynies;',
            'Drop de gengaritte.',
            'Novas Fases de Halloween',
            'Mini Game adicionado: Caça ao fantasma',
            'Chance de evolução para Mega Gengar'
          ]}
          imageUrl="https://i.pinimg.com/originals/a3/45/41/a345413d6c2e226edf2fc4039febf549.png"
        />
      </div>
      {/* Inicio dos GameUpdates */}


      </div>
    );
  }
  
  export default Home;