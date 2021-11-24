/**
 * Carousel Gallery Slider component
 * Slider for Carousel Gallery type of section. Uses Swiper as a dependency.
 */
// swiper bundle styles
import 'swiper/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/scss/scrollbar'

import Swiper, { Navigation, Pagination } from 'swiper'

export default class CarouselSliderInit {
  constructor() {
    /**
     * Carousel component DOM selectors
     * @type {{sliderCarousel: string, options: object}}
     */
    this.DOM = {
      sliderCarousel: '.js-carousel-slider',
    }

    this.options = {
      spaceBetween: 32,
      slidesPerView: 2,
      direction: 'horizontal',
      slideToClickedSlide: false,
      scrollbar: {
        el: '.js-carousel-scrollbar',
        draggable: true,
        hide: false,
      },
    }

    /**
     * Fetch swiper container DOM element
     * @type {Element}
     */
    this.swiperContainer = document.querySelector(this.DOM.sliderCarousel)
    this.init()
  }

  /**
   * Init
   */
  init() {
    if (this.DOM.sliderCarousel === null) {
      return
    }

    this.sliderCarouselMethod()
  }

  /**
   * Slider method
   * Initialize Swiper slider
   */
  sliderCarouselMethod() {
    let carouselSlider = new Swiper(this.DOM.sliderCarousel, this.options)
  }
}

const carouselSliderGallery = new CarouselSliderInit()
