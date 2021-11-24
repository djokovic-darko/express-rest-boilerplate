/**
 * Carousel Gallery Slider component
 * Slider for Carousel Gallery type of section. Uses Swiper as a dependency.
 */
// swiper bundle styles
import 'swiper/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'

import Swiper, { Navigation } from 'swiper'

export default class Gallery {
  constructor() {
    /**
     * Carousel component DOM selectors
     * @type {{gallery: string, options: object}}
     */
    this.DOM = {
      gallery: '.js-gallery-slider',
    }

    this.options = {
      spaceBetween: 32,
      slidesPerView: 1,
      direction: 'horizontal',
      slideToClickedSlide: false,
      loop: true,
      noSwiping: true,
      allowTouchMove: false,
      centeredSlides: true,
      navigation: {
        nextEl: '.js-arrow-right-gallery',
        prevEl: '.js-arrow-prev-gallery',
      },
    }

    /**
     * Fetch swiper container DOM element
     * @type {Element}
     */
    this.swiperContainer = document.querySelector(this.DOM.gallery)
    this.init()
  }

  /**
   * Init
   */
  init() {
    if (this.DOM.gallery === null) {
      return
    }

    this.galleryMethod()
  }

  /**
   * Slider method
   * Initialize Swiper slider
   */
  galleryMethod() {
    let gallery = new Swiper(this.DOM.gallery, this.options)
  }
}

const gallery = new Gallery()
