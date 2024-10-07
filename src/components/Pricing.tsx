import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;


  const images = [
    {
      original: "assets/images/works/cocina_terminada.jpg",
      thumbnail: "assets/images/works/cocina_terminada.jpg",
    },
    {
      original: "assets/images/works/edificio-1.jpg",
      thumbnail: "assets/images/works/edificio-1.jpg",
    },
    {
      original: "assets/images/works/edificio-2.jpg",
      thumbnail: "assets/images/works/edificio-2.jpg",
    },
    {
      original: "assets/images/works/edificio_saavedra.jpeg",
      thumbnail: "assets/images/works/edificio_saavedra.jpeg",
    },
    {
      original: "assets/images/works/encofrado-1.jpg",
      thumbnail: "assets/images/works/encofrado-1.jpg",
    },
    {
      original: "assets/images/works/encofrado_2.jpg",
      thumbnail: "assets/images/works/encofrado_2.jpg",
    },
    {
      original: "assets/images/works/frente_casa.jpg",
      thumbnail: "assets/images/works/frente_casa.jpg",
    },
    {
      original: "assets/images/works/piedras_1.jpg",
      thumbnail: "assets/images/works/piedras_1.jpg",
    },
    {
      original: "assets/images/works/piedras_proceso.jpg",
      thumbnail: "assets/images/works/piedras_proceso.jpg",
    },
    {
      original: "assets/images/works/piedras_terminadas.jpg",
      thumbnail: "assets/images/works/piedras_terminadas.jpg",
    },
    {
      original: "assets/images/works/pileta_escalera.jpg",
      thumbnail: "assets/images/works/pileta_escalera.jpg",
    },
    {
      original: "assets/images/works/pileta_revocada.jpg",
      thumbnail: "assets/images/works/pileta_revocada.jpg",
    },
    {
      original: "assets/images/works/piso-piedras-1.jpg",
      thumbnail: "assets/images/works/piso-piedras-1.jpg",
    },
    {
      original: "assets/images/works/revoque_andamio.jpg",
      thumbnail: "assets/images/works/revoque_andamio.jpg",
    },
  ];
  

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`} style={{maxWidth: "100vw"}}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <ImageGallery items={images} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
