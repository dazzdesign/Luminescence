import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './HowItWorksSlider.css';

const HowItWorksSlider = () => {
  const slides = [
    { title: 'Sublimez votre intérieur', image: img1 },
    { title: 'Illuminez votre piscine', image: img2 },
    { title: 'Valorisez vos sanitaires', image: img3 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="how-it-works-slider"
      aria-label="Carrousel présentant les différentes applications du carrelage lumineux"
    >
      <h2 className="visually-hidden">Applications du carrelage lumineux</h2>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <figure
              className="slide-container"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              aria-label={slide.title}
            >
              <div className="overlay" aria-hidden="true" />
              {index === activeIndex && (
                <figcaption className="slider-heading">
                  {slide.title}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HowItWorksSlider;
