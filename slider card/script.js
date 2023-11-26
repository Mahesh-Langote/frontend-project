var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  initialSlide: 0,
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    }
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    }
  }
});