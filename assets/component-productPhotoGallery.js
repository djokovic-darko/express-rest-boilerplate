/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/productPhotoGallery.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/productPhotoGallery.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ productSliderGallery; }
/* harmony export */ });
/* harmony import */ var _styles_plugins_photoswipe_photoswipe_min_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/plugins/photoswipe/_photoswipe.min.scss */ "./src/styles/plugins/photoswipe/_photoswipe.min.scss");
/* harmony import */ var _styles_plugins_photoswipe_photoswipe_default_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/plugins/photoswipe/_photoswipe-default.scss */ "./src/styles/plugins/photoswipe/_photoswipe-default.scss");
/* harmony import */ var _styles_plugins_photoswipe_photoswipe_custom_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/plugins/photoswipe/_photoswipe-custom.scss */ "./src/styles/plugins/photoswipe/_photoswipe-custom.scss");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/// PhotoSwipe ///






var productSliderGallery = /*#__PURE__*/function () {
  function productSliderGallery() {
    _classCallCheck(this, productSliderGallery);

    /**
     * Product component DOM selectors
     * @type {{sliderProduct: string, options: object, }}
     */
    this.DOM = {
      sliderProduct: '.js-product-slider',
      productColorVariation: '.js-color-variation'
    };
    this.init();
  }

  _createClass(productSliderGallery, [{
    key: "init",
    value: function init() {
      /// PhotoSwipe Init
      var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {
        var parseThumbnailElements = function parseThumbnailElements(el) {
          var thumbElements = el.childNodes,
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;

          for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            // include only element nodes

            if (figureEl.nodeType !== 1) {
              continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x'); // create slide object

            item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn

            items.push(item);
          }

          return items;
        }; // find nearest parent element


        var closest = function closest(el, fn) {
          return el && (fn(el) ? el : closest(el.parentNode, fn));
        }; // triggers when user clicks on thumbnail


        var onThumbnailsClick = function onThumbnailsClick(e) {
          e = e || window.event;
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
          var eTarget = e.target || e.srcElement; // find root element of slide

          var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
          });

          if (!clickedListItem) {
            return;
          } // find index of clicked item by looping through all child nodes
          // alternatively, you may define index via data- attribute


          var clickedGallery = clickedListItem.parentNode,
              childNodes = clickedListItem.parentNode.childNodes,
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;

          for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
              continue;
            }

            if (childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
            }

            nodeIndex++;
          }

          if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
          }

          return false;
        }; // parse picture index and gallery index from URL (#&pid=1&gid=2)


        var photoswipeParseHash = function photoswipeParseHash() {
          var hash = window.location.hash.substring(1),
              params = {};

          if (hash.length < 5) {
            return params;
          }

          var vars = hash.split('&');

          for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue;
            }

            var pair = vars[i];

            if (pair.length < 2) {
              continue;
            }

            params[pair[0]] = pair[1];
          }

          if (params.gid) {
            params.gid = parseInt(params.gid, 10);
          }

          return params;
        };

        var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
              gallery,
              options,
              items;
          items = parseThumbnailElements(galleryElement); // define options (if needed)

          options = {
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            arrowEl: true,
            preloaderEl: true,
            clickToCloseNonZoomable: true,
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function getThumbBoundsFn(index) {
              // See Options -> getThumbBoundsFn section of documentation for more info
              var thumbnail = items[index].el.getElementsByTagName('img')[0],
                  // find thumbnail
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect();
              return {
                x: rect.left,
                y: rect.top + pageYScroll,
                w: rect.width
              };
            }
          }; // PhotoSwipe opened from URL

          if (fromURL) {
            if (options.galleryPIDs) {
              // parse real index when custom PIDs are used
              // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
              for (var j = 0; j < items.length; j++) {
                if (items[j].pid == index) {
                  options.index = j;
                  break;
                }
              }
            } else {
              // in URL indexes start from 1
              options.index = parseInt(index, 10) - 1;
            }
          } else {
            options.index = parseInt(index, 10);
          } // exit if index not found


          if (isNaN(options.index)) {
            return;
          }

          if (disableAnimation) {
            options.showAnimationDuration = 0;
          } // Pass data to PhotoSwipe and initialize it


          gallery = new (photoswipe__WEBPACK_IMPORTED_MODULE_3___default())(pswpElement, (photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_4___default()), items, options);
          gallery.init();
          document.querySelector('.js-zoom-out').addEventListener('click', function (e) {
            e.preventDefault();
            gallery.zoomTo(1, {
              x: gallery.viewportSize.x / 2,
              y: gallery.viewportSize.y / 2
            }, 200, false, function (now) {});
          });
          document.querySelector('.js-zoom-in').addEventListener('click', function (e) {
            e.preventDefault();
            gallery.zoomTo(2, {
              x: gallery.viewportSize.x / 2,
              y: gallery.viewportSize.y / 2
            }, 200, false, function (now) {});
          });
          gallery.listen('afterChange', function () {
            $galleryCounterBottom.textContent = "Image " + $galleryCounter.textContent;
          });
          gallery.listen('imageLoadComplete', function (index, item) {
            // index - index of a slide that was loaded
            // item - slide object
            $galleryCounterBottom.textContent = "Image " + $galleryCounter.textContent;
          });
        }; // loop through all gallery elements and bind events


        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute('data-pswp-uid', i + 1);
          galleryElements[i].onclick = onThumbnailsClick;
        } // Parse URL and open gallery if it contains #&pid=3&gid=1


        var hashData = photoswipeParseHash();

        if (hashData.pid && hashData.gid) {
          openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
      }; // execute above function


      initPhotoSwipeFromDOM('.js-gallery');
      document.querySelector('.js-product-resize').addEventListener('click', function () {
        document.querySelector('.swiper-slide-active figure').click();
        $galleryCounterBottom.textContent = "Image " + $galleryCounter.textContent;
      });
      var $galleryCounter = document.querySelector('.pswp__top-bar .pswp__counter'),
          $galleryCounterBottom = document.querySelector('.pswp__bottom-bar .pswp__counter');
    }
  }]);

  return productSliderGallery;
}();


new productSliderGallery();

/***/ }),

/***/ "./src/styles/plugins/photoswipe/_photoswipe-custom.scss":
/*!***************************************************************!*\
  !*** ./src/styles/plugins/photoswipe/_photoswipe-custom.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/plugins/photoswipe/_photoswipe-default.scss":
/*!****************************************************************!*\
  !*** ./src/styles/plugins/photoswipe/_photoswipe-default.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/plugins/photoswipe/_photoswipe.min.scss":
/*!************************************************************!*\
  !*** ./src/styles/plugins/photoswipe/_photoswipe.min.scss ***!
  \************************************************************/
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
/******/ 			"component-productPhotoGallery": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/components/productPhotoGallery.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLHFGQUFxRixnRkFBZ0Y7VUFDcksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFBob3RvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9zdHlsZXMvcGx1Z2lucy9waG90b3N3aXBlL19waG90b3N3aXBlLWN1c3RvbS5zY3NzP2M0NGUiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc3R5bGVzL3BsdWdpbnMvcGhvdG9zd2lwZS9fcGhvdG9zd2lwZS1kZWZhdWx0LnNjc3M/YWE5YyIsIndlYnBhY2s6Ly93b3JrZmxvdy8uL3NyYy9zdHlsZXMvcGx1Z2lucy9waG90b3N3aXBlL19waG90b3N3aXBlLm1pbi5zY3NzPzhjOTIiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gUGhvdG9Td2lwZSAvLy9cbmltcG9ydCAnLi4vLi4vc3R5bGVzL3BsdWdpbnMvcGhvdG9zd2lwZS9fcGhvdG9zd2lwZS5taW4uc2NzcydcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3BsdWdpbnMvcGhvdG9zd2lwZS9fcGhvdG9zd2lwZS1kZWZhdWx0LnNjc3MnXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9wbHVnaW5zL3Bob3Rvc3dpcGUvX3Bob3Rvc3dpcGUtY3VzdG9tLnNjc3MnXG5cbmltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnXG5pbXBvcnQgUGhvdG9Td2lwZVVJX0RlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvZHVjdFNsaWRlckdhbGxlcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IGNvbXBvbmVudCBET00gc2VsZWN0b3JzXG4gICAgICogQHR5cGUge3tzbGlkZXJQcm9kdWN0OiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdCwgfX1cbiAgICAgKi9cbiAgICB0aGlzLkRPTSA9IHtcbiAgICAgIHNsaWRlclByb2R1Y3Q6ICcuanMtcHJvZHVjdC1zbGlkZXInLFxuICAgICAgcHJvZHVjdENvbG9yVmFyaWF0aW9uOiAnLmpzLWNvbG9yLXZhcmlhdGlvbicsXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8vIFBob3RvU3dpcGUgSW5pdFxuICAgIHZhciBpbml0UGhvdG9Td2lwZUZyb21ET00gPSBmdW5jdGlvbiAoZ2FsbGVyeVNlbGVjdG9yKSB7XG4gICAgICB2YXIgcGFyc2VUaHVtYm5haWxFbGVtZW50cyA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgdGh1bWJFbGVtZW50cyA9IGVsLmNoaWxkTm9kZXMsXG4gICAgICAgICAgbnVtTm9kZXMgPSB0aHVtYkVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICBpdGVtcyA9IFtdLFxuICAgICAgICAgIGZpZ3VyZUVsLFxuICAgICAgICAgIGxpbmtFbCxcbiAgICAgICAgICBzaXplLFxuICAgICAgICAgIGl0ZW1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgICAgICBmaWd1cmVFbCA9IHRodW1iRWxlbWVudHNbaV0gLy8gPGZpZ3VyZT4gZWxlbWVudFxuXG4gICAgICAgICAgLy8gaW5jbHVkZSBvbmx5IGVsZW1lbnQgbm9kZXNcbiAgICAgICAgICBpZiAoZmlndXJlRWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlua0VsID0gZmlndXJlRWwuY2hpbGRyZW5bMF0gLy8gPGE+IGVsZW1lbnRcblxuICAgICAgICAgIHNpemUgPSBsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKS5zcGxpdCgneCcpXG5cbiAgICAgICAgICAvLyBjcmVhdGUgc2xpZGUgb2JqZWN0XG4gICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgIHNyYzogbGlua0VsLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgdzogcGFyc2VJbnQoc2l6ZVswXSwgMTApLFxuICAgICAgICAgICAgaDogcGFyc2VJbnQoc2l6ZVsxXSwgMTApLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaWd1cmVFbC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyA8ZmlnY2FwdGlvbj4gY29udGVudFxuICAgICAgICAgICAgaXRlbS50aXRsZSA9IGZpZ3VyZUVsLmNoaWxkcmVuWzFdLmlubmVySFRNTFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsaW5rRWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gPGltZz4gdGh1bWJuYWlsIGVsZW1lbnQsIHJldHJpZXZpbmcgdGh1bWJuYWlsIHVybFxuICAgICAgICAgICAgaXRlbS5tc3JjID0gbGlua0VsLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpdGVtLmVsID0gZmlndXJlRWwgLy8gc2F2ZSBsaW5rIHRvIGVsZW1lbnQgZm9yIGdldFRodW1iQm91bmRzRm5cbiAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXNcbiAgICAgIH1cblxuICAgICAgLy8gZmluZCBuZWFyZXN0IHBhcmVudCBlbGVtZW50XG4gICAgICB2YXIgY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIGZuKSB7XG4gICAgICAgIHJldHVybiBlbCAmJiAoZm4oZWwpID8gZWwgOiBjbG9zZXN0KGVsLnBhcmVudE5vZGUsIGZuKSlcbiAgICAgIH1cblxuICAgICAgLy8gdHJpZ2dlcnMgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aHVtYm5haWxcbiAgICAgIHZhciBvblRodW1ibmFpbHNDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogKGUucmV0dXJuVmFsdWUgPSBmYWxzZSlcblxuICAgICAgICB2YXIgZVRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudFxuXG4gICAgICAgIC8vIGZpbmQgcm9vdCBlbGVtZW50IG9mIHNsaWRlXG4gICAgICAgIHZhciBjbGlja2VkTGlzdEl0ZW0gPSBjbG9zZXN0KGVUYXJnZXQsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0ZJR1VSRSdcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWNsaWNrZWRMaXN0SXRlbSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBjbGlja2VkIGl0ZW0gYnkgbG9vcGluZyB0aHJvdWdoIGFsbCBjaGlsZCBub2Rlc1xuICAgICAgICAvLyBhbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IGRlZmluZSBpbmRleCB2aWEgZGF0YS0gYXR0cmlidXRlXG4gICAgICAgIHZhciBjbGlja2VkR2FsbGVyeSA9IGNsaWNrZWRMaXN0SXRlbS5wYXJlbnROb2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjbGlja2VkTGlzdEl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLFxuICAgICAgICAgIG51bUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBub2RlSW5kZXggPSAwLFxuICAgICAgICAgIGluZGV4XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGlsZE5vZGVzOyBpKyspIHtcbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tpXSA9PT0gY2xpY2tlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5vZGVJbmRleFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZUluZGV4KytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gb3BlbiBQaG90b1N3aXBlIGlmIHZhbGlkIGluZGV4IGZvdW5kXG4gICAgICAgICAgb3BlblBob3RvU3dpcGUoaW5kZXgsIGNsaWNrZWRHYWxsZXJ5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBwYXJzZSBwaWN0dXJlIGluZGV4IGFuZCBnYWxsZXJ5IGluZGV4IGZyb20gVVJMICgjJnBpZD0xJmdpZD0yKVxuICAgICAgdmFyIHBob3Rvc3dpcGVQYXJzZUhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxuICAgICAgICAgIHBhcmFtcyA9IHt9XG5cbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoIDwgNSkge1xuICAgICAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YXJzID0gaGFzaC5zcGxpdCgnJicpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghdmFyc1tpXSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldXG4gICAgICAgICAgaWYgKHBhaXIubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5naWQpIHtcbiAgICAgICAgICBwYXJhbXMuZ2lkID0gcGFyc2VJbnQocGFyYW1zLmdpZCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zXG4gICAgICB9XG5cbiAgICAgIHZhciBvcGVuUGhvdG9Td2lwZSA9IGZ1bmN0aW9uIChcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdhbGxlcnlFbGVtZW50LFxuICAgICAgICBkaXNhYmxlQW5pbWF0aW9uLFxuICAgICAgICBmcm9tVVJMXG4gICAgICApIHtcbiAgICAgICAgdmFyIHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzd3AnKVswXSxcbiAgICAgICAgICBnYWxsZXJ5LFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgaXRlbXNcblxuICAgICAgICBpdGVtcyA9IHBhcnNlVGh1bWJuYWlsRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpXG5cbiAgICAgICAgLy8gZGVmaW5lIG9wdGlvbnMgKGlmIG5lZWRlZClcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjbG9zZUVsOiB0cnVlLFxuICAgICAgICAgIGNhcHRpb25FbDogdHJ1ZSxcbiAgICAgICAgICBmdWxsc2NyZWVuRWw6IHRydWUsXG4gICAgICAgICAgem9vbUVsOiB0cnVlLFxuICAgICAgICAgIGFycm93RWw6IHRydWUsXG4gICAgICAgICAgcHJlbG9hZGVyRWw6IHRydWUsXG4gICAgICAgICAgY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGU6IHRydWUsXG4gICAgICAgICAgZ2FsbGVyeVVJRDogZ2FsbGVyeUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBzd3AtdWlkJyksXG5cbiAgICAgICAgICBnZXRUaHVtYkJvdW5kc0ZuOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNlZSBPcHRpb25zIC0+IGdldFRodW1iQm91bmRzRm4gc2VjdGlvbiBvZiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgICAgICAgIHZhciB0aHVtYm5haWwgPSBpdGVtc1tpbmRleF0uZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLCAvLyBmaW5kIHRodW1ibmFpbFxuICAgICAgICAgICAgICBwYWdlWVNjcm9sbCA9XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgIHJlY3QgPSB0aHVtYm5haWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICAgICAgcmV0dXJuIHsgeDogcmVjdC5sZWZ0LCB5OiByZWN0LnRvcCArIHBhZ2VZU2Nyb2xsLCB3OiByZWN0LndpZHRoIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGhvdG9Td2lwZSBvcGVuZWQgZnJvbSBVUkxcbiAgICAgICAgaWYgKGZyb21VUkwpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5nYWxsZXJ5UElEcykge1xuICAgICAgICAgICAgLy8gcGFyc2UgcmVhbCBpbmRleCB3aGVuIGN1c3RvbSBQSURzIGFyZSB1c2VkXG4gICAgICAgICAgICAvLyBodHRwOi8vcGhvdG9zd2lwZS5jb20vZG9jdW1lbnRhdGlvbi9mYXEuaHRtbCNjdXN0b20tcGlkLWluLXVybFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaXRlbXNbal0ucGlkID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluIFVSTCBpbmRleGVzIHN0YXJ0IGZyb20gMVxuICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IHBhcnNlSW50KGluZGV4LCAxMCkgLSAxXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBleGl0IGlmIGluZGV4IG5vdCBmb3VuZFxuICAgICAgICBpZiAoaXNOYU4ob3B0aW9ucy5pbmRleCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24gPSAwXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXNzIGRhdGEgdG8gUGhvdG9Td2lwZSBhbmQgaW5pdGlhbGl6ZSBpdFxuICAgICAgICBnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUoXG4gICAgICAgICAgcHN3cEVsZW1lbnQsXG4gICAgICAgICAgUGhvdG9Td2lwZVVJX0RlZmF1bHQsXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApXG5cbiAgICAgICAgZ2FsbGVyeS5pbml0KClcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuanMtem9vbS1vdXQnKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgZ2FsbGVyeS56b29tVG8oXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIHsgeDogZ2FsbGVyeS52aWV3cG9ydFNpemUueCAvIDIsIHk6IGdhbGxlcnkudmlld3BvcnRTaXplLnkgLyAyIH0sXG4gICAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChub3cpIHt9XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtem9vbS1pbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGdhbGxlcnkuem9vbVRvKFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIHsgeDogZ2FsbGVyeS52aWV3cG9ydFNpemUueCAvIDIsIHk6IGdhbGxlcnkudmlld3BvcnRTaXplLnkgLyAyIH0sXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChub3cpIHt9XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIGdhbGxlcnkubGlzdGVuKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkZ2FsbGVyeUNvdW50ZXJCb3R0b20udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgYEltYWdlIGAgKyAkZ2FsbGVyeUNvdW50ZXIudGV4dENvbnRlbnRcbiAgICAgICAgfSlcblxuICAgICAgICBnYWxsZXJ5Lmxpc3RlbignaW1hZ2VMb2FkQ29tcGxldGUnLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAvLyBpbmRleCAtIGluZGV4IG9mIGEgc2xpZGUgdGhhdCB3YXMgbG9hZGVkXG4gICAgICAgICAgLy8gaXRlbSAtIHNsaWRlIG9iamVjdFxuICAgICAgICAgICRnYWxsZXJ5Q291bnRlckJvdHRvbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBgSW1hZ2UgYCArICRnYWxsZXJ5Q291bnRlci50ZXh0Q29udGVudFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGdhbGxlcnkgZWxlbWVudHMgYW5kIGJpbmQgZXZlbnRzXG4gICAgICB2YXIgZ2FsbGVyeUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChnYWxsZXJ5U2VsZWN0b3IpXG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBnYWxsZXJ5RWxlbWVudHNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXBzd3AtdWlkJywgaSArIDEpXG4gICAgICAgIGdhbGxlcnlFbGVtZW50c1tpXS5vbmNsaWNrID0gb25UaHVtYm5haWxzQ2xpY2tcbiAgICAgIH1cblxuICAgICAgLy8gUGFyc2UgVVJMIGFuZCBvcGVuIGdhbGxlcnkgaWYgaXQgY29udGFpbnMgIyZwaWQ9MyZnaWQ9MVxuICAgICAgdmFyIGhhc2hEYXRhID0gcGhvdG9zd2lwZVBhcnNlSGFzaCgpXG4gICAgICBpZiAoaGFzaERhdGEucGlkICYmIGhhc2hEYXRhLmdpZCkge1xuICAgICAgICBvcGVuUGhvdG9Td2lwZShcbiAgICAgICAgICBoYXNoRGF0YS5waWQsXG4gICAgICAgICAgZ2FsbGVyeUVsZW1lbnRzW2hhc2hEYXRhLmdpZCAtIDFdLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXhlY3V0ZSBhYm92ZSBmdW5jdGlvblxuICAgIGluaXRQaG90b1N3aXBlRnJvbURPTSgnLmpzLWdhbGxlcnknKVxuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvZHVjdC1yZXNpemUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLWFjdGl2ZSBmaWd1cmUnKS5jbGljaygpXG4gICAgICAgICRnYWxsZXJ5Q291bnRlckJvdHRvbS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgYEltYWdlIGAgKyAkZ2FsbGVyeUNvdW50ZXIudGV4dENvbnRlbnRcbiAgICAgIH0pXG5cbiAgICBsZXQgJGdhbGxlcnlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5wc3dwX190b3AtYmFyIC5wc3dwX19jb3VudGVyJ1xuICAgICAgKSxcbiAgICAgICRnYWxsZXJ5Q291bnRlckJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcucHN3cF9fYm90dG9tLWJhciAucHN3cF9fY291bnRlcidcbiAgICAgIClcbiAgfVxufVxuXG5uZXcgcHJvZHVjdFNsaWRlckdhbGxlcnkoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29tcG9uZW50LXByb2R1Y3RQaG90b0dhbGxlcnlcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3b3JrZmxvd1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3RQaG90b0dhbGxlcnkuanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlBob3RvU3dpcGUiLCJQaG90b1N3aXBlVUlfRGVmYXVsdCIsInByb2R1Y3RTbGlkZXJHYWxsZXJ5IiwiRE9NIiwic2xpZGVyUHJvZHVjdCIsInByb2R1Y3RDb2xvclZhcmlhdGlvbiIsImluaXQiLCJpbml0UGhvdG9Td2lwZUZyb21ET00iLCJnYWxsZXJ5U2VsZWN0b3IiLCJwYXJzZVRodW1ibmFpbEVsZW1lbnRzIiwiZWwiLCJ0aHVtYkVsZW1lbnRzIiwiY2hpbGROb2RlcyIsIm51bU5vZGVzIiwibGVuZ3RoIiwiaXRlbXMiLCJmaWd1cmVFbCIsImxpbmtFbCIsInNpemUiLCJpdGVtIiwiaSIsIm5vZGVUeXBlIiwiY2hpbGRyZW4iLCJnZXRBdHRyaWJ1dGUiLCJzcGxpdCIsInNyYyIsInciLCJwYXJzZUludCIsImgiLCJ0aXRsZSIsImlubmVySFRNTCIsIm1zcmMiLCJwdXNoIiwiY2xvc2VzdCIsImZuIiwicGFyZW50Tm9kZSIsIm9uVGh1bWJuYWlsc0NsaWNrIiwiZSIsIndpbmRvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImVUYXJnZXQiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiY2xpY2tlZExpc3RJdGVtIiwidGFnTmFtZSIsInRvVXBwZXJDYXNlIiwiY2xpY2tlZEdhbGxlcnkiLCJudW1DaGlsZE5vZGVzIiwibm9kZUluZGV4IiwiaW5kZXgiLCJvcGVuUGhvdG9Td2lwZSIsInBob3Rvc3dpcGVQYXJzZUhhc2giLCJoYXNoIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJwYXJhbXMiLCJ2YXJzIiwicGFpciIsImdpZCIsImdhbGxlcnlFbGVtZW50IiwiZGlzYWJsZUFuaW1hdGlvbiIsImZyb21VUkwiLCJwc3dwRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcnkiLCJvcHRpb25zIiwiY2xvc2VFbCIsImNhcHRpb25FbCIsImZ1bGxzY3JlZW5FbCIsInpvb21FbCIsImFycm93RWwiLCJwcmVsb2FkZXJFbCIsImNsaWNrVG9DbG9zZU5vblpvb21hYmxlIiwiZ2FsbGVyeVVJRCIsImdldFRodW1iQm91bmRzRm4iLCJ0aHVtYm5haWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhZ2VZU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImxlZnQiLCJ5IiwidG9wIiwid2lkdGgiLCJnYWxsZXJ5UElEcyIsImoiLCJwaWQiLCJpc05hTiIsInNob3dBbmltYXRpb25EdXJhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiem9vbVRvIiwidmlld3BvcnRTaXplIiwibm93IiwibGlzdGVuIiwiJGdhbGxlcnlDb3VudGVyQm90dG9tIiwidGV4dENvbnRlbnQiLCIkZ2FsbGVyeUNvdW50ZXIiLCJnYWxsZXJ5RWxlbWVudHMiLCJsIiwic2V0QXR0cmlidXRlIiwib25jbGljayIsImhhc2hEYXRhIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9