export default class Tabs {
  constructor() {}

  init() {
    function initTab(elem) {
      document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .js-tab-btn')) return
        else {
          if (!e.target.classList.contains('active')) {
            findActiveElementAndRemoveIt(elem + ' .js-tab-btn')
            findActiveElementAndRemoveIt(elem + ' .js-tab-content')
            e.target.classList.add('active')
            setTimeout(function () {
              var panel = document.querySelectorAll(
                elem + ' .js-tab-content.' + e.target.dataset.name
              )
              Array.prototype.forEach.call(panel, function (el) {
                el.classList.add('active')
              })
            }, 200)
          }
        }
      })
    }

    function findActiveElementAndRemoveIt(elem) {
      var elementList = document.querySelectorAll(elem)
      Array.prototype.forEach.call(elementList, function (e) {
        e.classList.remove('active')
      })
    }

    initTab('.tabs.js-tabs-videos')
    initTab('.measures__tab.js-tabs-measures')
    initTab('.header__nav-dropdown-col-left.js-nav-category-tabs')
    initTab('.pl-tabs.js-tabs-pricelist')
    initTab('.top-question__tabs.js-tabs-question')

    function initTabHover(elem) {
      document.addEventListener('mouseover', function (e) {
        if (!e.target.matches(elem + ' .js-tab-btn')) return
        else {
          if (!e.target.classList.contains('active')) {
            findActiveElementAndRemoveIt(elem + ' .js-tab-btn')
            findActiveElementAndRemoveIt(elem + ' .js-tab-content')
            e.target.classList.add('active')
            setTimeout(function () {
              var panel = document.querySelectorAll(
                elem + ' .js-tab-content.' + e.target.dataset.name
              )
              Array.prototype.forEach.call(panel, function (el) {
                el.classList.add('active')
              })
            }, 0)
          }
        }
      })
    }

    initTabHover('.header__nav-dropdown-inner.js-tabs-shop')
  }
}
