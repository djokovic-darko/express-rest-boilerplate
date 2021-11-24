/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/noUiSlider.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/noUiSlider.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ noUiSliderInit; }
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * noUiSlider Slider component
 * Slider for Measurs type of section. Uses Swiper as a dependency.
 */
// import noUiSlider from 'nouislider'
// Or the namespace:
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css'


var noUiSliderInit = /*#__PURE__*/function () {
  function noUiSliderInit() {
    _classCallCheck(this, noUiSliderInit);

    /**
     * Product component DOM selectors
     * @type {{noUiSliderEl: string, options: object}}
     */
    this.DOM = {
      noUiSliderEl: '.js-select-measures',
      noUiSliderValueElement: '.js-select-value',
      noUIHandle: '.noUi-handle'
    };
    this.options = {
      start: [70],
      connect: [true, false],
      step: 1,
      range: {
        min: [62],
        max: [80]
      },
      format: {
        to: function to(v) {
          return v | 0;
        },
        from: function from(v) {
          return v | 0;
        }
      }
    };
    /**
     * Fetch noUiSlider DOM element
     * @type {Element}
     */

    this.nouiSliderWrapper = document.querySelector(this.DOM.noUiSliderEl);
    this.nouiSliderValue = document.querySelector(this.DOM.noUiSliderValueElement);
    this.init();
  }
  /**
   * Init
   */


  _createClass(noUiSliderInit, [{
    key: "init",
    value: function init() {
      if (this.nouiSliderWrapper === null) {
        return;
      }

      this.noUiSliderMethod();
      this.noUiSliderHeighValue();
    }
    /**
     * Slider method
     * Initialize noUiSlider slider
     */

  }, {
    key: "noUiSliderMethod",
    value: function noUiSliderMethod() {
      var noUiSliderProgress = new (nouislider__WEBPACK_IMPORTED_MODULE_0___default().create)(this.nouiSliderWrapper, this.options);
    }
  }, {
    key: "noUiSliderHeighValue",
    value: function noUiSliderHeighValue() {
      this.nouiSliderWrapper.noUiSlider.on('update', function (values, handle) {
        document.querySelector('.js-select-value').innerHTML = values[handle];
      });
      var handle = this.nouiSliderWrapper.querySelector(this.DOM.noUIHandle);
    }
  }]);

  return noUiSliderInit;
}();


var selectMeasures = new noUiSliderInit();

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"component-noUiSlider": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/components/noUiSlider.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQzdCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0EscUZBQXFGLHVFQUF1RTtVQUM1SiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9ub1VpU2xpZGVyLmpzIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBub1VpU2xpZGVyIFNsaWRlciBjb21wb25lbnRcbiAqIFNsaWRlciBmb3IgTWVhc3VycyB0eXBlIG9mIHNlY3Rpb24uIFVzZXMgU3dpcGVyIGFzIGEgZGVwZW5kZW5jeS5cbiAqL1xuLy8gaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcidcbi8vIE9yIHRoZSBuYW1lc3BhY2U6XG4vLyBpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuLy8gaW1wb3J0ICdub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MnXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBub1VpU2xpZGVySW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgY29tcG9uZW50IERPTSBzZWxlY3RvcnNcbiAgICAgKiBAdHlwZSB7e25vVWlTbGlkZXJFbDogc3RyaW5nLCBvcHRpb25zOiBvYmplY3R9fVxuICAgICAqL1xuICAgIHRoaXMuRE9NID0ge1xuICAgICAgbm9VaVNsaWRlckVsOiAnLmpzLXNlbGVjdC1tZWFzdXJlcycsXG4gICAgICBub1VpU2xpZGVyVmFsdWVFbGVtZW50OiAnLmpzLXNlbGVjdC12YWx1ZScsXG4gICAgICBub1VJSGFuZGxlOiAnLm5vVWktaGFuZGxlJyxcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBzdGFydDogWzcwXSxcbiAgICAgIGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXG4gICAgICBzdGVwOiAxLFxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgbWluOiBbNjJdLFxuICAgICAgICBtYXg6IFs4MF0sXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiAodikgPT4gdiB8IDAsXG4gICAgICAgIGZyb206ICh2KSA9PiB2IHwgMCxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggbm9VaVNsaWRlciBET00gZWxlbWVudFxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMubm91aVNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRE9NLm5vVWlTbGlkZXJFbClcbiAgICB0aGlzLm5vdWlTbGlkZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLkRPTS5ub1VpU2xpZGVyVmFsdWVFbGVtZW50XG4gICAgKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5ub3VpU2xpZGVyV3JhcHBlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5ub1VpU2xpZGVyTWV0aG9kKClcbiAgICB0aGlzLm5vVWlTbGlkZXJIZWlnaFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTbGlkZXIgbWV0aG9kXG4gICAqIEluaXRpYWxpemUgbm9VaVNsaWRlciBzbGlkZXJcbiAgICovXG4gIG5vVWlTbGlkZXJNZXRob2QoKSB7XG4gICAgbGV0IG5vVWlTbGlkZXJQcm9ncmVzcyA9IG5ldyBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMubm91aVNsaWRlcldyYXBwZXIsXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICApXG4gIH1cblxuICBub1VpU2xpZGVySGVpZ2hWYWx1ZSgpIHtcbiAgICB0aGlzLm5vdWlTbGlkZXJXcmFwcGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlbGVjdC12YWx1ZScpLmlubmVySFRNTCA9IHZhbHVlc1toYW5kbGVdXG4gICAgfSlcbiAgICB2YXIgaGFuZGxlID0gdGhpcy5ub3VpU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKHRoaXMuRE9NLm5vVUlIYW5kbGUpXG4gIH1cbn1cblxuY29uc3Qgc2VsZWN0TWVhc3VyZXMgPSBuZXcgbm9VaVNsaWRlckluaXQoKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29tcG9uZW50LW5vVWlTbGlkZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL25vVWlTbGlkZXIuanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIm5vVWlTbGlkZXIiLCJub1VpU2xpZGVySW5pdCIsIkRPTSIsIm5vVWlTbGlkZXJFbCIsIm5vVWlTbGlkZXJWYWx1ZUVsZW1lbnQiLCJub1VJSGFuZGxlIiwib3B0aW9ucyIsInN0YXJ0IiwiY29ubmVjdCIsInN0ZXAiLCJyYW5nZSIsIm1pbiIsIm1heCIsImZvcm1hdCIsInRvIiwidiIsImZyb20iLCJub3VpU2xpZGVyV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5vdWlTbGlkZXJWYWx1ZSIsImluaXQiLCJub1VpU2xpZGVyTWV0aG9kIiwibm9VaVNsaWRlckhlaWdoVmFsdWUiLCJub1VpU2xpZGVyUHJvZ3Jlc3MiLCJjcmVhdGUiLCJvbiIsInZhbHVlcyIsImhhbmRsZSIsImlubmVySFRNTCIsInNlbGVjdE1lYXN1cmVzIl0sInNvdXJjZVJvb3QiOiIifQ==