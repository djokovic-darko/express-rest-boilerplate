/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/ExploreSlider.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/ExploreSlider.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ExploreSlider; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/thumbs */ "./node_modules/swiper/modules/thumbs/thumbs.min.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Product Gallery Slider component
 * Slider for Product Gallery type of section. Uses Swiper as a dependency.
 */
// swiper bundle styles
 // swiper core styles

 // modules styles






var ExploreSlider = /*#__PURE__*/function () {
  function ExploreSlider() {
    _classCallCheck(this, ExploreSlider);

    /**
     * Product component DOM selectors
     * @type {{sliderExplore: string, options: object}}
     */
    this.DOM = {
      sliderExplore: '.js-explore-slider',
      sliderThumb: '.js-explore-thumb',
      explorePopupContainer: '.js-explore-popup',
      clickToOpenPopup: '.js-open-popup',
      closeExplorePopup: '.js-close-explore',
      popupModalEl: '.js-popup-box',
      bodyEl: 'body'
    };
    /**
     * Fetch swiper container DOM element
     * @type {Element}
     */

    this.swiperContainer = document.querySelector(this.DOM.sliderExplore);
    this.swiperContainerThumb = document.querySelector(this.DOM.sliderThumb);
    this.clickToExploreContainer = document.querySelector(this.DOM.explorePopupContainer);
    this.explorePopupBtnOpen = document.querySelectorAll(this.DOM.clickToOpenPopup);
    this.explorePopupBtnClose = document.querySelectorAll(this.DOM.closeExplorePopup);
    this.popupModal = document.querySelectorAll(this.DOM.popupModalEl);
    this.body = document.querySelector(this.DOM.bodyEl);
    this.options = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.js-explore-arrow-next',
        prevEl: '.js-explore-arrow-prev'
      },
      controller: {
        by: 'slide'
      }
    };
    this.optionsThumb = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      slideToClickedSlide: false,
      controller: {
        by: 'slide'
      }
    };
  }
  /**
   * Init
   */


  _createClass(ExploreSlider, [{
    key: "init",
    value: function init() {
      if (this.DOM.sliderExplore === null || this.DOM.sliderThumb === null) {
        return;
      }

      this.clickToExploreMethod();
    }
  }, {
    key: "clickToExploreMethod",
    value: function clickToExploreMethod() {
      var _this = this;

      this.explorePopupBtnOpen.forEach(function (item, index) {
        item.dataset.targetCarousel = index + 1;
        item.addEventListener('click', function (e) {
          var targetCarousel = item.dataset.targetCarousel;
          _this.DOM.indexEl = item.dataset.targetCarousel;

          _this.clickToExploreContainer.classList.add('active');

          _this.body.classList.add('active-explore');

          var el = _this.clickToExploreContainer.querySelector('[data-target="' + targetCarousel + '"');

          el.classList.add('active');
        });
      });
      var carousels = document.querySelectorAll('.js-popup-box[data-target]');
      var carouselObject = [];
      var carouselThumbObject = [];
      carousels.forEach(function (carousel, index) {
        var previewSlider = carousel.querySelector('.js-explore-slider'),
            thumbnailSlider = carousel.querySelector('.js-explore-thumb');
        var prev = thumbnailSlider.querySelector('.js-explore-arrow-prev'),
            next = thumbnailSlider.querySelector('.js-explore-arrow-next');
        next.addEventListener('click', function (e) {
          if (next.getAttribute('aria-disabled') === 'true') {
            carousel.classList.remove('active');

            if (carousels[index + 1]) {
              carousels[index + 1].classList.add('active');
            }

            if (carousels.length == carousel.dataset.target) {
              _this.explorePopupBtnClose.forEach(function (item) {
                item.click();

                _this.clickToExploreContainer.classList.remove('active');

                _this.body.classList.remove('active-explore');

                carousel.classList.remove('active');
              });
            }
          }
        });
        _this.options.navigation.nextEl = next;
        _this.options.navigation.prevEl = prev;
        /**
         * Slider method
         * Initialize Swiper slider
         */

        carouselObject[index] = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"](previewSlider, _this.options);
        carouselThumbObject[index] = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"](thumbnailSlider, _this.optionsThumb);
        carouselObject[index].controller.control = carouselThumbObject[index];
        carouselThumbObject[index].controller.control = carouselObject[index];
      });
      this.explorePopupBtnClose.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();

          _this.clickToExploreContainer.classList.remove('active');

          _this.body.classList.remove('active-explore');

          _this.popupModal.forEach(function (element) {
            element.classList.remove('active');
          });
        });
      });
    }
  }]);

  return ExploreSlider;
}();


new ExploreSlider().init();

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
/******/ 			"component-ExploreSlider": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/components/ExploreSlider.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLHFGQUFxRiwwRUFBMEU7VUFDL0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvRXhwbG9yZVNsaWRlci5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvZHVjdCBHYWxsZXJ5IFNsaWRlciBjb21wb25lbnRcbiAqIFNsaWRlciBmb3IgUHJvZHVjdCBHYWxsZXJ5IHR5cGUgb2Ygc2VjdGlvbi4gVXNlcyBTd2lwZXIgYXMgYSBkZXBlbmRlbmN5LlxuICovXG4vLyBzd2lwZXIgYnVuZGxlIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvYnVuZGxlJ1xuXG4vLyBzd2lwZXIgY29yZSBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2NzcydcblxuLy8gbW9kdWxlcyBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJ1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nXG5pbXBvcnQgJ3N3aXBlci9jc3MvdGh1bWJzJ1xuXG5pbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFRodW1icywgQ29udHJvbGxlciB9IGZyb20gJ3N3aXBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZVNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgY29tcG9uZW50IERPTSBzZWxlY3RvcnNcbiAgICAgKiBAdHlwZSB7e3NsaWRlckV4cGxvcmU6IHN0cmluZywgb3B0aW9uczogb2JqZWN0fX1cbiAgICAgKi9cbiAgICB0aGlzLkRPTSA9IHtcbiAgICAgIHNsaWRlckV4cGxvcmU6ICcuanMtZXhwbG9yZS1zbGlkZXInLFxuICAgICAgc2xpZGVyVGh1bWI6ICcuanMtZXhwbG9yZS10aHVtYicsXG4gICAgICBleHBsb3JlUG9wdXBDb250YWluZXI6ICcuanMtZXhwbG9yZS1wb3B1cCcsXG4gICAgICBjbGlja1RvT3BlblBvcHVwOiAnLmpzLW9wZW4tcG9wdXAnLFxuICAgICAgY2xvc2VFeHBsb3JlUG9wdXA6ICcuanMtY2xvc2UtZXhwbG9yZScsXG4gICAgICBwb3B1cE1vZGFsRWw6ICcuanMtcG9wdXAtYm94JyxcbiAgICAgIGJvZHlFbDogJ2JvZHknLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHN3aXBlciBjb250YWluZXIgRE9NIGVsZW1lbnRcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLnN3aXBlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5ET00uc2xpZGVyRXhwbG9yZSlcbiAgICB0aGlzLnN3aXBlckNvbnRhaW5lclRodW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkRPTS5zbGlkZXJUaHVtYilcblxuICAgIHRoaXMuY2xpY2tUb0V4cGxvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5ET00uZXhwbG9yZVBvcHVwQ29udGFpbmVyXG4gICAgKVxuXG4gICAgdGhpcy5leHBsb3JlUG9wdXBCdG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIHRoaXMuRE9NLmNsaWNrVG9PcGVuUG9wdXBcbiAgICApXG4gICAgdGhpcy5leHBsb3JlUG9wdXBCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICB0aGlzLkRPTS5jbG9zZUV4cGxvcmVQb3B1cFxuICAgIClcblxuICAgIHRoaXMucG9wdXBNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5ET00ucG9wdXBNb2RhbEVsKVxuICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5ET00uYm9keUVsKVxuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmpzLWV4cGxvcmUtYXJyb3ctbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5qcy1leHBsb3JlLWFycm93LXByZXYnLFxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgICAgYnk6ICdzbGlkZScsXG4gICAgICB9LFxuICAgIH1cblxuICAgIHRoaXMub3B0aW9uc1RodW1iID0ge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgY29udHJvbGxlcjoge1xuICAgICAgICBieTogJ3NsaWRlJyxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuRE9NLnNsaWRlckV4cGxvcmUgPT09IG51bGwgfHwgdGhpcy5ET00uc2xpZGVyVGh1bWIgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xpY2tUb0V4cGxvcmVNZXRob2QoKVxuICB9XG5cbiAgY2xpY2tUb0V4cGxvcmVNZXRob2QoKSB7XG4gICAgdGhpcy5leHBsb3JlUG9wdXBCdG5PcGVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpdGVtLmRhdGFzZXQudGFyZ2V0Q2Fyb3VzZWwgPSBpbmRleCArIDFcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRDYXJvdXNlbCA9IGl0ZW0uZGF0YXNldC50YXJnZXRDYXJvdXNlbFxuXG4gICAgICAgIHRoaXMuRE9NLmluZGV4RWwgPSBpdGVtLmRhdGFzZXQudGFyZ2V0Q2Fyb3VzZWxcblxuICAgICAgICB0aGlzLmNsaWNrVG9FeHBsb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZXhwbG9yZScpXG5cbiAgICAgICAgbGV0IGVsID0gdGhpcy5jbGlja1RvRXhwbG9yZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICdbZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0Q2Fyb3VzZWwgKyAnXCInXG4gICAgICAgIClcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcG9wdXAtYm94W2RhdGEtdGFyZ2V0XScpXG5cbiAgICBsZXQgY2Fyb3VzZWxPYmplY3QgPSBbXVxuICAgIGxldCBjYXJvdXNlbFRodW1iT2JqZWN0ID0gW11cblxuICAgIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBwcmV2aWV3U2xpZGVyID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmpzLWV4cGxvcmUtc2xpZGVyJyksXG4gICAgICAgIHRodW1ibmFpbFNsaWRlciA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1leHBsb3JlLXRodW1iJylcblxuICAgICAgbGV0IHByZXYgPSB0aHVtYm5haWxTbGlkZXIucXVlcnlTZWxlY3RvcignLmpzLWV4cGxvcmUtYXJyb3ctcHJldicpLFxuICAgICAgICBuZXh0ID0gdGh1bWJuYWlsU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1leHBsb3JlLWFycm93LW5leHQnKVxuXG4gICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKG5leHQuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIGNhcm91c2VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgaWYgKGNhcm91c2Vsc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICBjYXJvdXNlbHNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjYXJvdXNlbHMubGVuZ3RoID09IGNhcm91c2VsLmRhdGFzZXQudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVQb3B1cEJ0bkNsb3NlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaXRlbS5jbGljaygpXG4gICAgICAgICAgICAgIHRoaXMuY2xpY2tUb0V4cGxvcmVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1leHBsb3JlJylcbiAgICAgICAgICAgICAgY2Fyb3VzZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMubmF2aWdhdGlvbi5uZXh0RWwgPSBuZXh0XG4gICAgICB0aGlzLm9wdGlvbnMubmF2aWdhdGlvbi5wcmV2RWwgPSBwcmV2XG5cbiAgICAgIC8qKlxuICAgICAgICogU2xpZGVyIG1ldGhvZFxuICAgICAgICogSW5pdGlhbGl6ZSBTd2lwZXIgc2xpZGVyXG4gICAgICAgKi9cbiAgICAgIGNhcm91c2VsT2JqZWN0W2luZGV4XSA9IG5ldyBTd2lwZXIocHJldmlld1NsaWRlciwgdGhpcy5vcHRpb25zKVxuICAgICAgY2Fyb3VzZWxUaHVtYk9iamVjdFtpbmRleF0gPSBuZXcgU3dpcGVyKFxuICAgICAgICB0aHVtYm5haWxTbGlkZXIsXG4gICAgICAgIHRoaXMub3B0aW9uc1RodW1iXG4gICAgICApXG5cbiAgICAgIGNhcm91c2VsT2JqZWN0W2luZGV4XS5jb250cm9sbGVyLmNvbnRyb2wgPSBjYXJvdXNlbFRodW1iT2JqZWN0W2luZGV4XVxuICAgICAgY2Fyb3VzZWxUaHVtYk9iamVjdFtpbmRleF0uY29udHJvbGxlci5jb250cm9sID0gY2Fyb3VzZWxPYmplY3RbaW5kZXhdXG4gICAgfSlcblxuICAgIHRoaXMuZXhwbG9yZVBvcHVwQnRuQ2xvc2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLmNsaWNrVG9FeHBsb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZXhwbG9yZScpXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbm5ldyBFeHBsb3JlU2xpZGVyKCkuaW5pdCgpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNvbXBvbmVudC1FeHBsb3JlU2xpZGVyXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd29ya2Zsb3dcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd29ya2Zsb3dcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9FeHBsb3JlU2xpZGVyLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlRodW1icyIsIkNvbnRyb2xsZXIiLCJFeHBsb3JlU2xpZGVyIiwiRE9NIiwic2xpZGVyRXhwbG9yZSIsInNsaWRlclRodW1iIiwiZXhwbG9yZVBvcHVwQ29udGFpbmVyIiwiY2xpY2tUb09wZW5Qb3B1cCIsImNsb3NlRXhwbG9yZVBvcHVwIiwicG9wdXBNb2RhbEVsIiwiYm9keUVsIiwic3dpcGVyQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3dpcGVyQ29udGFpbmVyVGh1bWIiLCJjbGlja1RvRXhwbG9yZUNvbnRhaW5lciIsImV4cGxvcmVQb3B1cEJ0bk9wZW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXhwbG9yZVBvcHVwQnRuQ2xvc2UiLCJwb3B1cE1vZGFsIiwiYm9keSIsIm9wdGlvbnMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNvbnRyb2xsZXIiLCJieSIsIm9wdGlvbnNUaHVtYiIsImNlbnRlcmVkU2xpZGVzIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsImNsaWNrVG9FeHBsb3JlTWV0aG9kIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImRhdGFzZXQiLCJ0YXJnZXRDYXJvdXNlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5kZXhFbCIsImNsYXNzTGlzdCIsImFkZCIsImVsIiwiY2Fyb3VzZWxzIiwiY2Fyb3VzZWxPYmplY3QiLCJjYXJvdXNlbFRodW1iT2JqZWN0IiwiY2Fyb3VzZWwiLCJwcmV2aWV3U2xpZGVyIiwidGh1bWJuYWlsU2xpZGVyIiwicHJldiIsIm5leHQiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJsZW5ndGgiLCJ0YXJnZXQiLCJjbGljayIsImNvbnRyb2wiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==