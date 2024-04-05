import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

new Swiper("#slider-work", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 20,
  height: 519,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
