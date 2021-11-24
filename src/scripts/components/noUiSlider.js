/**
 * noUiSlider Slider component
 * Slider for Measurs type of section. Uses Swiper as a dependency.
 */
// import noUiSlider from 'nouislider'
// Or the namespace:
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css'
import noUiSlider from 'nouislider'

export default class noUiSliderInit {
  constructor() {
    /**
     * Product component DOM selectors
     * @type {{noUiSliderEl: string, options: object}}
     */
    this.DOM = {
      noUiSliderEl: '.js-select-measures',
      noUiSliderValueElement: '.js-select-value',
      noUIHandle: '.noUi-handle',
    }

    this.options = {
      start: [70],
      connect: [true, false],
      step: 1,
      range: {
        min: [62],
        max: [80],
      },
      format: {
        to: (v) => v | 0,
        from: (v) => v | 0,
      },
    }

    /**
     * Fetch noUiSlider DOM element
     * @type {Element}
     */
    this.nouiSliderWrapper = document.querySelector(this.DOM.noUiSliderEl)
    this.nouiSliderValue = document.querySelector(
      this.DOM.noUiSliderValueElement
    )
    this.init()
  }

  /**
   * Init
   */
  init() {
    if (this.nouiSliderWrapper === null) {
      return
    }

    this.noUiSliderMethod()
    this.noUiSliderHeighValue()
  }

  /**
   * Slider method
   * Initialize noUiSlider slider
   */
  noUiSliderMethod() {
    let noUiSliderProgress = new noUiSlider.create(
      this.nouiSliderWrapper,
      this.options
    )
  }

  noUiSliderHeighValue() {
    this.nouiSliderWrapper.noUiSlider.on('update', function (values, handle) {
      document.querySelector('.js-select-value').innerHTML = values[handle]
    })
    var handle = this.nouiSliderWrapper.querySelector(this.DOM.noUIHandle)
  }
}

const selectMeasures = new noUiSliderInit()
