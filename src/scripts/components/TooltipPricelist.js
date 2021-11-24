import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export default class TooltipPricelist {
  constructor() {}

  init() {
    tippy('.js-tooltip-pricelist', { arrow: true })
  }
}
