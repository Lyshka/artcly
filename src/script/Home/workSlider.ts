import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

new Swiper("#slider-work", {
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1500: {
      slidesPerView: 2,
      spaceBetween: 20,
      height: 519,
    },
    0: {
      height: 200,
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
