export default class Nav {
  constructor() {
    this.$nav = document.querySelector('.js-nav')
    this.nav = document.querySelector('.js-header')
    this.$hamburger = document.querySelector('.js-hamburger')
    this.$html = document.querySelector('html')
    this.scrollTop = 0
    this.scrolledDown = false
    this.height = 0
    this.navLinks = document.querySelectorAll('.js-nav-bar li a')
  }

  init() {
    this.onScrollStart()
    this.hideOnScroll()
    this.dropdownMenu()
  }

  onScrollStart() {
    window.removeEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    let self = this

    window.navHeight = this.nav.offsetHeight * 0.7

    setTimeout(() => {
      if (window.pageYOffset > 0) {
        self.nav.classList.add('scroll-start')
      }
    }, 0)

    function onScroll(e) {
      let s = window.pageYOffset

      if (s > 0) {
        self.nav.classList.add('scroll-start')
      } else {
        self.nav.classList.remove('scroll-start')
      }
    }
  }

  hideOnScroll() {
    this.scrollTop = 0
    this.scrolledDown = false

    window.removeEventListener('scroll', onScroll, {
      passive: true,
    })
    window.addEventListener('scroll', onScroll, {
      passive: true,
    })
    let self = this

    window.navHeight = 0
    this.nav.style.position = 'fixed'

    setTimeout(() => {
      if (window.pageYOffset > 0) {
        this.nav.classList.add('scrolled')
        this.nav.style.position = 'fixed'
        setTimeout(() => {
          this.nav.classList.add('scroll-start')
        }, 250)
      }
    }, 0)

    function onScroll(e) {
      let s = window.pageYOffset
      self.scrolledDown = self.scrollTop < s && s > 0

      if (s === 0) {
        self.nav.style.position = 'fixed'
        self.nav.classList.remove('scroll-start')
      } else if (s > 0 && !self.nav.classList.contains('scroll-start')) {
        self.nav.style.position = 'fixed'
        setTimeout(() => {
          self.nav.classList.add('scroll-start')
        }, 0)
      }

      self.scrollTop = s

      if (!self.nav.classList.contains('scrolled') && self.scrolledDown) {
        self.nav.classList.add('scrolled')
      }

      if (self.nav.classList.contains('scrolled') && !self.scrolledDown) {
        self.nav.classList.remove('scrolled')
      }
    }
  }

  dropdownMenu() {
    this.navLinks.forEach((links) => {
      function mouseOver() {
        if (links.nextElementSibling) {
          links.classList.add('is-active')
          links.nextElementSibling.classList.add('is-active')

          if (links.nextElementSibling.classList.contains('is-active')) {
            links.classList.add('is-active')
            document.querySelector('html').style.overflow = 'hidden'
          } else {
            links.classList.remove('is-active')
          }
        } else {
          return
        }
      }

      function mouseLeave() {
        if (links.nextElementSibling) {
          links.classList.remove('is-active')

          if (links.nextElementSibling) {
            links.nextElementSibling.classList.remove('is-active')
            document.querySelector('html').style.overflow = 'unset'
          }
        } else {
          return
        }
      }

      if (links.nextElementSibling) {
        links.nextElementSibling.onmouseover = mouseOver
        links.nextElementSibling.onmouseleave = mouseLeave
      }

      links.onmouseover = mouseOver
      links.onmouseleave = mouseLeave
    })
  }
}
