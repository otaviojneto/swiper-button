import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction"
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        {slides.map((slide, index) => (
          <button onClick={() => slideTo(index + 1)} className="prepend-slide">
            Slide {slide}
          </button>
        ))}
      </p>
    </>
  );
}
