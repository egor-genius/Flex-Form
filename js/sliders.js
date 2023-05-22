// Services Slider
var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 70,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      993: {
        slidesPerView: 'auto',
        spaceBetween: 70,
      },
      992: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      }
    }
});



// Team Slider
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 60,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    }
  }
});



// Gallery Slider
var swiper3 = new Swiper(".mySwiper3", {
  loop: false,
  spaceBetween: 60,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    993: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    }
  }
});