import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './HowItWorksSlider.css';

const HowItWorksSlider = () => {
  const slides = [
    { title: 'Salle de bain', image: img1 },
    { title: 'Carrelage lumineux', image: img2 },
    { title: 'Vitrine', image: img3 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="how-it-works-slider">
      <h1 className="slider-heading">{slides[activeIndex].title}</h1>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-container"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HowItWorksSlider;
