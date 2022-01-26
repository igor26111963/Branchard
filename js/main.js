document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.header-nav').addEventListener('click', function () {
      document.querySelector('.header-nav').classList.toggle('header-nav--active');
      document.querySelector('.top-nav__inner').classList.toggle('top-nav__inner--active');
      document.querySelector('.header-button').classList.toggle('header-button--active');
  })
  
  document.querySelector('.header-form__label').addEventListener('click', function () {
    document.querySelector('.header-form__label').classList.toggle('header-form__label--active');
    document.querySelector('.header-form').classList.toggle('header-form--active');
})

  new Swiper('.swiper', {
    loop: true,
    speed: 500,
    slidesPerView: 'auto',
    centeredSlides: true,
    // autoplay: {
    //   delay: 5000,
    // },
  });
  
  new Swiper('.swiper-project', {
    loop: true,
    speed: 500,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 34,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: false,
        spaceBetween: 55,
        slidesOffsetBefore: 10,
      },
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  
  new Swiper ('.swiper-events', {
    loop: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30,
      },
      1024: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: false,
        spaceBetween: 55,
        slidesOffsetBefore: 10,
      },
    }
  })

})