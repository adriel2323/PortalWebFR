import React, { useState } from 'react';
import { Apiurl } from '../services/apiPortal';
import axios from 'axios';

const Carousel = ({ usuarios }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls=[(Apiurl+ "carrusel/imagenes/"+usuarios),(Apiurl+ "carrusel/imagenes/"+usuarios+1),(Apiurl+ "carrusel/imagenes/"+usuarios+2)]

  const src=(Apiurl+ "carrusel/imagenes/"+usuarios)||(Apiurl+ "novedades/imagenes/imageDefault")

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return imageUrls.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === imageUrls.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <img src={imageUrls[currentImageIndex]} alt="carousel-image" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;