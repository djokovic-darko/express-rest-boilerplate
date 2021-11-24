export default class Accordion {
  constructor() {
    /**
     * Products component DOM selectors
     * @type {{accordionContainer: string}}
     */
    this.DOM = {
      accordionContainer: '.js-accordion',
    }

    this.$accordionBtn = document.querySelectorAll('.js-accordion-trigger')
    // this.$accordionContent = document.querySelectorAll('.js-accordion-content')
  }

  init() {
    if (this.accordionContainer === null) {
      return
    }
    this.accordion()
  }

  accordion() {
    let _self = this

    _self.$accordionBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        // let parent = e.target.parentNode
        // let child = parent.querySelector('.js-accordion-content')
        // let h = child.getBoundingClientRect().height + 'px'
        // child.style.height = h
        if (e.target.classList.contains('active')) {
          e.target.classList.remove('active')
          e.target.nextElementSibling.classList.remove('active')
          e.target.nextElementSibling.style.maxHeight = null
        } else {
          this.$accordionBtn.forEach((elem) => {
            elem.classList.remove('active')
            elem.nextElementSibling.classList.remove('active')
            elem.nextElementSibling.style.maxHeight = null
            e.target.nextElementSibling.style.maxHeight =
              e.target.nextElementSibling.scrollHeight + 'px'
          })
          e.target.classList.add('active')
          e.target.nextElementSibling.classList.add('active')
          e.target.nextElementSibling.style.maxHeight =
            e.target.nextElementSibling.scrollHeight + 'px'
        }
      })
    })
  }
}

new Accordion().init()
