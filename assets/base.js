/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/base.js":
/*!*****************************!*\
  !*** ./src/scripts/base.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tabs */ "./src/scripts/components/tabs.js");
/* harmony import */ var _components_headerScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/headerScroll */ "./src/scripts/components/headerScroll.js");
/* harmony import */ var _components_CtaTapeHidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CtaTapeHidden */ "./src/scripts/components/CtaTapeHidden.js");
/* harmony import */ var _components_CarouselSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CarouselSlider */ "./src/scripts/components/CarouselSlider.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Gallery */ "./src/scripts/components/Gallery.js");
/* harmony import */ var _components_IncDecInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/IncDecInput */ "./src/scripts/components/IncDecInput.js");
/* harmony import */ var _components_TooltipPricelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TooltipPricelist */ "./src/scripts/components/TooltipPricelist.js");

var tabs = new _components_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]();
tabs.init();

new _components_headerScroll__WEBPACK_IMPORTED_MODULE_1__["default"]().init();

new _components_CtaTapeHidden__WEBPACK_IMPORTED_MODULE_2__["default"]().init();

new _components_CarouselSlider__WEBPACK_IMPORTED_MODULE_3__["default"]().init();

new _components_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"]().init();

new _components_IncDecInput__WEBPACK_IMPORTED_MODULE_5__["default"]().init();

new _components_TooltipPricelist__WEBPACK_IMPORTED_MODULE_6__["default"]().init();

/***/ }),

/***/ "./src/scripts/components/CarouselSlider.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/CarouselSlider.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CarouselSliderInit; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_scss_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/scss/scrollbar */ "./node_modules/swiper/modules/scrollbar/scrollbar.scss");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Carousel Gallery Slider component
 * Slider for Carousel Gallery type of section. Uses Swiper as a dependency.
 */
// swiper bundle styles
 // swiper core styles

 // modules styles




var CarouselSliderInit = /*#__PURE__*/function () {
  function CarouselSliderInit() {
    _classCallCheck(this, CarouselSliderInit);

    /**
     * Carousel component DOM selectors
     * @type {{sliderCarousel: string, options: object}}
     */
    this.DOM = {
      sliderCarousel: '.js-carousel-slider'
    };
    this.options = {
      spaceBetween: 32,
      slidesPerView: 2,
      direction: 'horizontal',
      slideToClickedSlide: false,
      scrollbar: {
        el: '.js-carousel-scrollbar',
        draggable: true,
        hide: false
      }
    };
    /**
     * Fetch swiper container DOM element
     * @type {Element}
     */

    this.swiperContainer = document.querySelector(this.DOM.sliderCarousel);
    this.init();
  }
  /**
   * Init
   */


  _createClass(CarouselSliderInit, [{
    key: "init",
    value: function init() {
      if (this.DOM.sliderCarousel === null) {
        return;
      }

      this.sliderCarouselMethod();
    }
    /**
     * Slider method
     * Initialize Swiper slider
     */

  }, {
    key: "sliderCarouselMethod",
    value: function sliderCarouselMethod() {
      var carouselSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](this.DOM.sliderCarousel, this.options);
    }
  }]);

  return CarouselSliderInit;
}();


var carouselSliderGallery = new CarouselSliderInit();

/***/ }),

/***/ "./src/scripts/components/CtaTapeHidden.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/CtaTapeHidden.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CtaTapeHidden; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CtaTapeHidden = /*#__PURE__*/function () {
  function CtaTapeHidden() {
    _classCallCheck(this, CtaTapeHidden);
  }

  _createClass(CtaTapeHidden, [{
    key: "init",
    value: function init() {
      var headerEl = document.querySelectorAll('.cta');
      var sentinalEl = document.querySelector('.js-select-class');
      var sentinalEl1 = document.querySelector('.js-off-cta');

      if (sentinalEl === null) {
        return;
      }

      var handler = function handler(entries) {
        if (entries[0].isIntersecting) {
          headerEl.forEach(function (element) {
            element.classList.add('enabled');
          });
        } else {
          headerEl.forEach(function (element) {
            element.classList.remove('enabled');
          });
        }
      }; // create the observer


      var observer = new window.IntersectionObserver(handler); // give the observer some dom nodes to keep an eye on

      observer.observe(sentinalEl);
      observer.observe(sentinalEl1);
    }
  }]);

  return CtaTapeHidden;
}();



/***/ }),

/***/ "./src/scripts/components/Gallery.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Gallery.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Gallery; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Carousel Gallery Slider component
 * Slider for Carousel Gallery type of section. Uses Swiper as a dependency.
 */
// swiper bundle styles
 // swiper core styles

 // modules styles




var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    _classCallCheck(this, Gallery);

    /**
     * Carousel component DOM selectors
     * @type {{gallery: string, options: object}}
     */
    this.DOM = {
      gallery: '.js-gallery-slider'
    };
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
        prevEl: '.js-arrow-prev-gallery'
      }
    };
    /**
     * Fetch swiper container DOM element
     * @type {Element}
     */

    this.swiperContainer = document.querySelector(this.DOM.gallery);
    this.init();
  }
  /**
   * Init
   */


  _createClass(Gallery, [{
    key: "init",
    value: function init() {
      if (this.DOM.gallery === null) {
        return;
      }

      this.galleryMethod();
    }
    /**
     * Slider method
     * Initialize Swiper slider
     */

  }, {
    key: "galleryMethod",
    value: function galleryMethod() {
      var gallery = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](this.DOM.gallery, this.options);
    }
  }]);

  return Gallery;
}();


var gallery = new Gallery();

/***/ }),

/***/ "./src/scripts/components/IncDecInput.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/IncDecInput.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IncDecInput; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IncDecInput = /*#__PURE__*/function () {
  function IncDecInput() {
    _classCallCheck(this, IncDecInput);
  }

  _createClass(IncDecInput, [{
    key: "init",
    value: function init() {
      document.addEventListener('click', function (event) {
        var clickedElem = event.target;

        if (clickedElem.classList.contains('js-number-increase')) {
          var inputWrapper = clickedElem.closest('.js-input-increment'),
              input = clickedElem.closest('.js-input-increment').querySelector('.js-input-number'),
              value = parseInt(input.value, 10);
          value = isNaN(value) ? 1 : value;
          value++;
          input.value = value;

          if (value > 1) {
            inputWrapper.classList.remove('disable-decrease');
          }
        } else if (clickedElem.classList.contains('js-number-decrease')) {
          var _inputWrapper = clickedElem.closest('.js-input-increment'),
              _input = clickedElem.closest('.js-input-increment').querySelector('.js-input-number'),
              _value = parseInt(_input.value, 10);

          _value = isNaN(_value) ? 2 : _value;
          _value < 2 ? _value = 2 : '';
          _value--;
          _input.value = _value;

          if (_value < 2) {
            _inputWrapper.classList.add('disable-decrease');
          } else {
            _inputWrapper.classList.remove('disable-decrease');
          }
        }
      });
    }
  }]);

  return IncDecInput;
}();



/***/ }),

/***/ "./src/scripts/components/TooltipPricelist.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/TooltipPricelist.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TooltipPricelist; }
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TooltipPricelist = /*#__PURE__*/function () {
  function TooltipPricelist() {
    _classCallCheck(this, TooltipPricelist);
  }

  _createClass(TooltipPricelist, [{
    key: "init",
    value: function init() {
      (0,tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-tooltip-pricelist', {
        arrow: true
      });
    }
  }]);

  return TooltipPricelist;
}();



/***/ }),

/***/ "./src/scripts/components/headerScroll.js":
/*!************************************************!*\
  !*** ./src/scripts/components/headerScroll.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nav = /*#__PURE__*/function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.$nav = document.querySelector('.js-nav');
    this.nav = document.querySelector('.js-header');
    this.$hamburger = document.querySelector('.js-hamburger');
    this.$html = document.querySelector('html');
    this.scrollTop = 0;
    this.scrolledDown = false;
    this.height = 0;
    this.navLinks = document.querySelectorAll('.js-nav-bar li a');
  }

  _createClass(Nav, [{
    key: "init",
    value: function init() {
      this.onScrollStart();
      this.hideOnScroll();
      this.dropdownMenu();
    }
  }, {
    key: "onScrollStart",
    value: function onScrollStart() {
      window.removeEventListener('scroll', onScroll, {
        passive: true
      });
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      var self = this;
      window.navHeight = this.nav.offsetHeight * 0.7;
      setTimeout(function () {
        if (window.pageYOffset > 0) {
          self.nav.classList.add('scroll-start');
        }
      }, 0);

      function onScroll(e) {
        var s = window.pageYOffset;

        if (s > 0) {
          self.nav.classList.add('scroll-start');
        } else {
          self.nav.classList.remove('scroll-start');
        }
      }
    }
  }, {
    key: "hideOnScroll",
    value: function hideOnScroll() {
      var _this = this;

      this.scrollTop = 0;
      this.scrolledDown = false;
      window.removeEventListener('scroll', onScroll, {
        passive: true
      });
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      var self = this;
      window.navHeight = 0;
      this.nav.style.position = 'fixed';
      setTimeout(function () {
        if (window.pageYOffset > 0) {
          _this.nav.classList.add('scrolled');

          _this.nav.style.position = 'fixed';
          setTimeout(function () {
            _this.nav.classList.add('scroll-start');
          }, 250);
        }
      }, 0);

      function onScroll(e) {
        var s = window.pageYOffset;
        self.scrolledDown = self.scrollTop < s && s > 0;

        if (s === 0) {
          self.nav.style.position = 'fixed';
          self.nav.classList.remove('scroll-start');
        } else if (s > 0 && !self.nav.classList.contains('scroll-start')) {
          self.nav.style.position = 'fixed';
          setTimeout(function () {
            self.nav.classList.add('scroll-start');
          }, 0);
        }

        self.scrollTop = s;

        if (!self.nav.classList.contains('scrolled') && self.scrolledDown) {
          self.nav.classList.add('scrolled');
        }

        if (self.nav.classList.contains('scrolled') && !self.scrolledDown) {
          self.nav.classList.remove('scrolled');
        }
      }
    }
  }, {
    key: "dropdownMenu",
    value: function dropdownMenu() {
      this.navLinks.forEach(function (links) {
        function mouseOver() {
          if (links.nextElementSibling) {
            links.classList.add('is-active');
            links.nextElementSibling.classList.add('is-active');

            if (links.nextElementSibling.classList.contains('is-active')) {
              links.classList.add('is-active');
              document.querySelector('html').style.overflow = 'hidden';
            } else {
              links.classList.remove('is-active');
            }
          } else {
            return;
          }
        }

        function mouseLeave() {
          if (links.nextElementSibling) {
            links.classList.remove('is-active');

            if (links.nextElementSibling) {
              links.nextElementSibling.classList.remove('is-active');
              document.querySelector('html').style.overflow = 'unset';
            }
          } else {
            return;
          }
        }

        if (links.nextElementSibling) {
          links.nextElementSibling.onmouseover = mouseOver;
          links.nextElementSibling.onmouseleave = mouseLeave;
        }

        links.onmouseover = mouseOver;
        links.onmouseleave = mouseLeave;
      });
    }
  }]);

  return Nav;
}();



/***/ }),

/***/ "./src/scripts/components/tabs.js":
/*!****************************************!*\
  !*** ./src/scripts/components/tabs.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Tabs; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs = /*#__PURE__*/function () {
  function Tabs() {
    _classCallCheck(this, Tabs);
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      function initTab(elem) {
        document.addEventListener('click', function (e) {
          if (!e.target.matches(elem + ' .js-tab-btn')) return;else {
            if (!e.target.classList.contains('active')) {
              findActiveElementAndRemoveIt(elem + ' .js-tab-btn');
              findActiveElementAndRemoveIt(elem + ' .js-tab-content');
              e.target.classList.add('active');
              setTimeout(function () {
                var panel = document.querySelectorAll(elem + ' .js-tab-content.' + e.target.dataset.name);
                Array.prototype.forEach.call(panel, function (el) {
                  el.classList.add('active');
                });
              }, 200);
            }
          }
        });
      }

      function findActiveElementAndRemoveIt(elem) {
        var elementList = document.querySelectorAll(elem);
        Array.prototype.forEach.call(elementList, function (e) {
          e.classList.remove('active');
        });
      }

      initTab('.tabs.js-tabs-videos');
      initTab('.measures__tab.js-tabs-measures');
      initTab('.header__nav-dropdown-col-left.js-nav-category-tabs');
      initTab('.pl-tabs.js-tabs-pricelist');
      initTab('.top-question__tabs.js-tabs-question');

      function initTabHover(elem) {
        document.addEventListener('mouseover', function (e) {
          if (!e.target.matches(elem + ' .js-tab-btn')) return;else {
            if (!e.target.classList.contains('active')) {
              findActiveElementAndRemoveIt(elem + ' .js-tab-btn');
              findActiveElementAndRemoveIt(elem + ' .js-tab-content');
              e.target.classList.add('active');
              setTimeout(function () {
                var panel = document.querySelectorAll(elem + ' .js-tab-content.' + e.target.dataset.name);
                Array.prototype.forEach.call(panel, function (el) {
                  el.classList.add('active');
                });
              }, 0);
            }
          }
        });
      }

      initTabHover('.header__nav-dropdown-inner.js-tabs-shop');
    }
  }]);

  return Tabs;
}();



/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"base": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkworkflow"] = self["webpackChunkworkflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/base.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/styles/base.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QyxvSEFBb0gsaURBQWlEO1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLDJEQUEyRCxzREFBc0Q7VUFDakgscUZBQXFGLHVEQUF1RDtVQUM1SSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvYmFzZS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2Fyb3VzZWxTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0N0YVRhcGVIaWRkZW4uanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0luY0RlY0lucHV0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Ub29sdGlwUHJpY2VsaXN0LmpzIiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzcz8wOTI3Iiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYnMgZnJvbSAnLi9jb21wb25lbnRzL3RhYnMnXG5sZXQgdGFicyA9IG5ldyBUYWJzKClcbnRhYnMuaW5pdCgpXG5cbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlclNjcm9sbCdcbm5ldyBOYXYoKS5pbml0KClcblxuaW1wb3J0IEN0YVRhcGVIaWRkZW4gZnJvbSAnLi9jb21wb25lbnRzL0N0YVRhcGVIaWRkZW4nXG5uZXcgQ3RhVGFwZUhpZGRlbigpLmluaXQoKVxuXG5pbXBvcnQgQ2Fyb3VzZWxTbGlkZXJJbml0IGZyb20gJy4vY29tcG9uZW50cy9DYXJvdXNlbFNsaWRlcidcbm5ldyBDYXJvdXNlbFNsaWRlckluaXQoKS5pbml0KClcblxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9jb21wb25lbnRzL0dhbGxlcnknXG5uZXcgR2FsbGVyeSgpLmluaXQoKVxuXG5pbXBvcnQgSW5jRGVjSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL0luY0RlY0lucHV0J1xubmV3IEluY0RlY0lucHV0KCkuaW5pdCgpXG5cbmltcG9ydCBUb29sdGlwUHJpY2VsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Ub29sdGlwUHJpY2VsaXN0J1xubmV3IFRvb2x0aXBQcmljZWxpc3QoKS5pbml0KClcbiIsIi8qKlxuICogQ2Fyb3VzZWwgR2FsbGVyeSBTbGlkZXIgY29tcG9uZW50XG4gKiBTbGlkZXIgZm9yIENhcm91c2VsIEdhbGxlcnkgdHlwZSBvZiBzZWN0aW9uLiBVc2VzIFN3aXBlciBhcyBhIGRlcGVuZGVuY3kuXG4gKi9cbi8vIHN3aXBlciBidW5kbGUgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9idW5kbGUnXG5cbi8vIHN3aXBlciBjb3JlIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvY3NzJ1xuXG4vLyBtb2R1bGVzIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvc2Nzcy9zY3JvbGxiYXInXG5cbmltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxTbGlkZXJJbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQ2Fyb3VzZWwgY29tcG9uZW50IERPTSBzZWxlY3RvcnNcbiAgICAgKiBAdHlwZSB7e3NsaWRlckNhcm91c2VsOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdH19XG4gICAgICovXG4gICAgdGhpcy5ET00gPSB7XG4gICAgICBzbGlkZXJDYXJvdXNlbDogJy5qcy1jYXJvdXNlbC1zbGlkZXInLFxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogJy5qcy1jYXJvdXNlbC1zY3JvbGxiYXInLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBzd2lwZXIgY29udGFpbmVyIERPTSBlbGVtZW50XG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5zd2lwZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRE9NLnNsaWRlckNhcm91c2VsKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5ET00uc2xpZGVyQ2Fyb3VzZWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWxNZXRob2QoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNsaWRlciBtZXRob2RcbiAgICogSW5pdGlhbGl6ZSBTd2lwZXIgc2xpZGVyXG4gICAqL1xuICBzbGlkZXJDYXJvdXNlbE1ldGhvZCgpIHtcbiAgICBsZXQgY2Fyb3VzZWxTbGlkZXIgPSBuZXcgU3dpcGVyKHRoaXMuRE9NLnNsaWRlckNhcm91c2VsLCB0aGlzLm9wdGlvbnMpXG4gIH1cbn1cblxuY29uc3QgY2Fyb3VzZWxTbGlkZXJHYWxsZXJ5ID0gbmV3IENhcm91c2VsU2xpZGVySW5pdCgpXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdGFUYXBlSGlkZGVuIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3RhJylcbiAgICBjb25zdCBzZW50aW5hbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlbGVjdC1jbGFzcycpXG4gICAgY29uc3Qgc2VudGluYWxFbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtb2ZmLWN0YScpXG5cbiAgICBpZiAoc2VudGluYWxFbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IChlbnRyaWVzKSA9PiB7XG4gICAgICBpZiAoZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBoZWFkZXJFbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlckVsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjcmVhdGUgdGhlIG9ic2VydmVyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXIpXG4gICAgLy8gZ2l2ZSB0aGUgb2JzZXJ2ZXIgc29tZSBkb20gbm9kZXMgdG8ga2VlcCBhbiBleWUgb25cbiAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmFsRWwpXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZW50aW5hbEVsMSlcbiAgfVxufVxuIiwiLyoqXG4gKiBDYXJvdXNlbCBHYWxsZXJ5IFNsaWRlciBjb21wb25lbnRcbiAqIFNsaWRlciBmb3IgQ2Fyb3VzZWwgR2FsbGVyeSB0eXBlIG9mIHNlY3Rpb24uIFVzZXMgU3dpcGVyIGFzIGEgZGVwZW5kZW5jeS5cbiAqL1xuLy8gc3dpcGVyIGJ1bmRsZSBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2J1bmRsZSdcblxuLy8gc3dpcGVyIGNvcmUgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnXG5cbi8vIG1vZHVsZXMgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbidcblxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQ2Fyb3VzZWwgY29tcG9uZW50IERPTSBzZWxlY3RvcnNcbiAgICAgKiBAdHlwZSB7e2dhbGxlcnk6IHN0cmluZywgb3B0aW9uczogb2JqZWN0fX1cbiAgICAgKi9cbiAgICB0aGlzLkRPTSA9IHtcbiAgICAgIGdhbGxlcnk6ICcuanMtZ2FsbGVyeS1zbGlkZXInLFxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmpzLWFycm93LXJpZ2h0LWdhbGxlcnknLFxuICAgICAgICBwcmV2RWw6ICcuanMtYXJyb3ctcHJldi1nYWxsZXJ5JyxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggc3dpcGVyIGNvbnRhaW5lciBET00gZWxlbWVudFxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuc3dpcGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkRPTS5nYWxsZXJ5KVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5ET00uZ2FsbGVyeSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5nYWxsZXJ5TWV0aG9kKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTbGlkZXIgbWV0aG9kXG4gICAqIEluaXRpYWxpemUgU3dpcGVyIHNsaWRlclxuICAgKi9cbiAgZ2FsbGVyeU1ldGhvZCgpIHtcbiAgICBsZXQgZ2FsbGVyeSA9IG5ldyBTd2lwZXIodGhpcy5ET00uZ2FsbGVyeSwgdGhpcy5vcHRpb25zKVxuICB9XG59XG5cbmNvbnN0IGdhbGxlcnkgPSBuZXcgR2FsbGVyeSgpXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNEZWNJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgY2xpY2tlZEVsZW0gPSBldmVudC50YXJnZXRcblxuICAgICAgaWYgKGNsaWNrZWRFbGVtLmNsYXNzTGlzdC5jb250YWlucygnanMtbnVtYmVyLWluY3JlYXNlJykpIHtcbiAgICAgICAgbGV0IGlucHV0V3JhcHBlciA9IGNsaWNrZWRFbGVtLmNsb3Nlc3QoJy5qcy1pbnB1dC1pbmNyZW1lbnQnKSxcbiAgICAgICAgICBpbnB1dCA9IGNsaWNrZWRFbGVtXG4gICAgICAgICAgICAuY2xvc2VzdCgnLmpzLWlucHV0LWluY3JlbWVudCcpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmpzLWlucHV0LW51bWJlcicpLFxuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKVxuXG4gICAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gMSA6IHZhbHVlXG4gICAgICAgIHZhbHVlKytcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPiAxKSB7XG4gICAgICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtZGVjcmVhc2UnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNsaWNrZWRFbGVtLmNsYXNzTGlzdC5jb250YWlucygnanMtbnVtYmVyLWRlY3JlYXNlJykpIHtcbiAgICAgICAgbGV0IGlucHV0V3JhcHBlciA9IGNsaWNrZWRFbGVtLmNsb3Nlc3QoJy5qcy1pbnB1dC1pbmNyZW1lbnQnKSxcbiAgICAgICAgICBpbnB1dCA9IGNsaWNrZWRFbGVtXG4gICAgICAgICAgICAuY2xvc2VzdCgnLmpzLWlucHV0LWluY3JlbWVudCcpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmpzLWlucHV0LW51bWJlcicpLFxuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKVxuXG4gICAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gMiA6IHZhbHVlXG4gICAgICAgIHZhbHVlIDwgMiA/ICh2YWx1ZSA9IDIpIDogJydcbiAgICAgICAgdmFsdWUtLVxuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlXG5cbiAgICAgICAgaWYgKHZhbHVlIDwgMikge1xuICAgICAgICAgIGlucHV0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWRlY3JlYXNlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1kZWNyZWFzZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnXG5pbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwUHJpY2VsaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgdGlwcHkoJy5qcy10b29sdGlwLXByaWNlbGlzdCcsIHsgYXJyb3c6IHRydWUgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdicpXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJylcbiAgICB0aGlzLiRoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGFtYnVyZ2VyJylcbiAgICB0aGlzLiRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gICAgdGhpcy5zY3JvbGxUb3AgPSAwXG4gICAgdGhpcy5zY3JvbGxlZERvd24gPSBmYWxzZVxuICAgIHRoaXMuaGVpZ2h0ID0gMFxuICAgIHRoaXMubmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbmF2LWJhciBsaSBhJylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vblNjcm9sbFN0YXJ0KClcbiAgICB0aGlzLmhpZGVPblNjcm9sbCgpXG4gICAgdGhpcy5kcm9wZG93bk1lbnUoKVxuICB9XG5cbiAgb25TY3JvbGxTdGFydCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICB3aW5kb3cubmF2SGVpZ2h0ID0gdGhpcy5uYXYub2Zmc2V0SGVpZ2h0ICogMC43XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zdGFydCcpXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGxldCBzID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgICAgIGlmIChzID4gMCkge1xuICAgICAgICBzZWxmLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc3RhcnQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXN0YXJ0JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlT25TY3JvbGwoKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSAwXG4gICAgdGhpcy5zY3JvbGxlZERvd24gPSBmYWxzZVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH0pXG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICB3aW5kb3cubmF2SGVpZ2h0ID0gMFxuICAgIHRoaXMubmF2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xuICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpXG4gICAgICAgIHRoaXMubmF2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc3RhcnQnKVxuICAgICAgICB9LCAyNTApXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGxldCBzID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICBzZWxmLnNjcm9sbGVkRG93biA9IHNlbGYuc2Nyb2xsVG9wIDwgcyAmJiBzID4gMFxuXG4gICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICBzZWxmLm5hdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgICAgICAgc2VsZi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXN0YXJ0JylcbiAgICAgIH0gZWxzZSBpZiAocyA+IDAgJiYgIXNlbGYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsLXN0YXJ0JykpIHtcbiAgICAgICAgc2VsZi5uYXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zdGFydCcpXG4gICAgICAgIH0sIDApXG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2Nyb2xsVG9wID0gc1xuXG4gICAgICBpZiAoIXNlbGYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsZWQnKSAmJiBzZWxmLnNjcm9sbGVkRG93bikge1xuICAgICAgICBzZWxmLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Njcm9sbGVkJykgJiYgIXNlbGYuc2Nyb2xsZWREb3duKSB7XG4gICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5uYXZMaW5rcy5mb3JFYWNoKChsaW5rcykgPT4ge1xuICAgICAgZnVuY3Rpb24gbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAobGlua3MubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICAgICAgICBsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcblxuICAgICAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuXG4gICAgICAgICAgaWYgKGxpbmtzLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgbGlua3MubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgbGlua3MubmV4dEVsZW1lbnRTaWJsaW5nLm9ubW91c2VvdmVyID0gbW91c2VPdmVyXG4gICAgICAgIGxpbmtzLm5leHRFbGVtZW50U2libGluZy5vbm1vdXNlbGVhdmUgPSBtb3VzZUxlYXZlXG4gICAgICB9XG5cbiAgICAgIGxpbmtzLm9ubW91c2VvdmVyID0gbW91c2VPdmVyXG4gICAgICBsaW5rcy5vbm1vdXNlbGVhdmUgPSBtb3VzZUxlYXZlXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0KCkge1xuICAgIGZ1bmN0aW9uIGluaXRUYWIoZWxlbSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoZWxlbSArICcgLmpzLXRhYi1idG4nKSkgcmV0dXJuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgZmluZEFjdGl2ZUVsZW1lbnRBbmRSZW1vdmVJdChlbGVtICsgJyAuanMtdGFiLWJ0bicpXG4gICAgICAgICAgICBmaW5kQWN0aXZlRWxlbWVudEFuZFJlbW92ZUl0KGVsZW0gKyAnIC5qcy10YWItY29udGVudCcpXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgZWxlbSArICcgLmpzLXRhYi1jb250ZW50LicgKyBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHBhbmVsLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQWN0aXZlRWxlbWVudEFuZFJlbW92ZUl0KGVsZW0pIHtcbiAgICAgIHZhciBlbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSlcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudExpc3QsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFRhYignLnRhYnMuanMtdGFicy12aWRlb3MnKVxuICAgIGluaXRUYWIoJy5tZWFzdXJlc19fdGFiLmpzLXRhYnMtbWVhc3VyZXMnKVxuICAgIGluaXRUYWIoJy5oZWFkZXJfX25hdi1kcm9wZG93bi1jb2wtbGVmdC5qcy1uYXYtY2F0ZWdvcnktdGFicycpXG4gICAgaW5pdFRhYignLnBsLXRhYnMuanMtdGFicy1wcmljZWxpc3QnKVxuICAgIGluaXRUYWIoJy50b3AtcXVlc3Rpb25fX3RhYnMuanMtdGFicy1xdWVzdGlvbicpXG5cbiAgICBmdW5jdGlvbiBpbml0VGFiSG92ZXIoZWxlbSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKGVsZW0gKyAnIC5qcy10YWItYnRuJykpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGZpbmRBY3RpdmVFbGVtZW50QW5kUmVtb3ZlSXQoZWxlbSArICcgLmpzLXRhYi1idG4nKVxuICAgICAgICAgICAgZmluZEFjdGl2ZUVsZW1lbnRBbmRSZW1vdmVJdChlbGVtICsgJyAuanMtdGFiLWNvbnRlbnQnKVxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgIGVsZW0gKyAnIC5qcy10YWItY29udGVudC4nICsgZS50YXJnZXQuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChwYW5lbCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXRUYWJIb3ZlcignLmhlYWRlcl9fbmF2LWRyb3Bkb3duLWlubmVyLmpzLXRhYnMtc2hvcCcpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYmFzZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dvcmtmbG93XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dvcmtmbG93XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9iYXNlLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdHlsZXMvYmFzZS5zY3NzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJUYWJzIiwidGFicyIsImluaXQiLCJOYXYiLCJDdGFUYXBlSGlkZGVuIiwiQ2Fyb3VzZWxTbGlkZXJJbml0IiwiR2FsbGVyeSIsIkluY0RlY0lucHV0IiwiVG9vbHRpcFByaWNlbGlzdCIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiRE9NIiwic2xpZGVyQ2Fyb3VzZWwiLCJvcHRpb25zIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImRpcmVjdGlvbiIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJzY3JvbGxiYXIiLCJlbCIsImRyYWdnYWJsZSIsImhpZGUiLCJzd2lwZXJDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJDYXJvdXNlbE1ldGhvZCIsImNhcm91c2VsU2xpZGVyIiwiY2Fyb3VzZWxTbGlkZXJHYWxsZXJ5IiwiaGVhZGVyRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VudGluYWxFbCIsInNlbnRpbmFsRWwxIiwiaGFuZGxlciIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib2JzZXJ2ZXIiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJnYWxsZXJ5IiwibG9vcCIsIm5vU3dpcGluZyIsImFsbG93VG91Y2hNb3ZlIiwiY2VudGVyZWRTbGlkZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiZ2FsbGVyeU1ldGhvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsaWNrZWRFbGVtIiwidGFyZ2V0IiwiY29udGFpbnMiLCJpbnB1dFdyYXBwZXIiLCJjbG9zZXN0IiwiaW5wdXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwiaXNOYU4iLCJ0aXBweSIsImFycm93IiwiJG5hdiIsIm5hdiIsIiRoYW1idXJnZXIiLCIkaHRtbCIsInNjcm9sbFRvcCIsInNjcm9sbGVkRG93biIsImhlaWdodCIsIm5hdkxpbmtzIiwib25TY3JvbGxTdGFydCIsImhpZGVPblNjcm9sbCIsImRyb3Bkb3duTWVudSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblNjcm9sbCIsInBhc3NpdmUiLCJzZWxmIiwibmF2SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2V0VGltZW91dCIsInBhZ2VZT2Zmc2V0IiwiZSIsInMiLCJzdHlsZSIsInBvc2l0aW9uIiwibGlua3MiLCJtb3VzZU92ZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJvdmVyZmxvdyIsIm1vdXNlTGVhdmUiLCJvbm1vdXNlb3ZlciIsIm9ubW91c2VsZWF2ZSIsImluaXRUYWIiLCJlbGVtIiwibWF0Y2hlcyIsImZpbmRBY3RpdmVFbGVtZW50QW5kUmVtb3ZlSXQiLCJwYW5lbCIsImRhdGFzZXQiLCJuYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZWxlbWVudExpc3QiLCJpbml0VGFiSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9