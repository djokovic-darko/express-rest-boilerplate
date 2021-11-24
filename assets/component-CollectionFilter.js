/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./src/scripts/components/CollectionFilter.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CollectionFilter; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CollectionFilter = /*#__PURE__*/function () {
  function CollectionFilter() {
    _classCallCheck(this, CollectionFilter);

    this.DOM = {};
    this.DOM.collectionGrid = '.js-grid-trigger';
    this.collectionGrid = document.querySelector(this.DOM.collectionGrid);
    this.init();
  }

  _createClass(CollectionFilter, [{
    key: "init",
    value: function init() {
      if (this.collectionGrid == null) return;
      this.collectionDeploy();
    }
  }, {
    key: "collectionDeploy",
    value: function collectionDeploy() {
      var collectionList = document.querySelector('.js-list-trigger');
      var collectionWrapper = document.querySelector('.js-grid-list-wrapper');
      this.collectionGrid.addEventListener('click', function (e) {
        e.preventDefault();

        if (!collectionWrapper.classList.contains('collection-grid')) {
          collectionWrapper.classList.add('collection-grid');
        }

        return;
      });
      collectionList.addEventListener('click', function (e) {
        e.preventDefault();

        if (collectionWrapper.classList.contains('collection-grid')) {
          collectionWrapper.classList.remove('collection-grid');
        }

        return;
      });
    }
  }]);

  return CollectionFilter;
}();


new CollectionFilter();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LUNvbGxlY3Rpb25GaWx0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ05xQkE7QUFDbkIsOEJBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUVBLFNBQUtBLEdBQUwsQ0FBU0MsY0FBVCxHQUEwQixrQkFBMUI7QUFFQSxTQUFLQSxjQUFMLEdBQXNCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS0gsR0FBTCxDQUFTQyxjQUFoQyxDQUF0QjtBQUVBLFNBQUtHLElBQUw7QUFDRDs7OztXQUVELGdCQUFPO0FBQ0wsVUFBSSxLQUFLSCxjQUFMLElBQXVCLElBQTNCLEVBQWlDO0FBQ2pDLFdBQUtJLGdCQUFMO0FBQ0Q7OztXQUVELDRCQUFtQjtBQUNqQixVQUFJQyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBckI7QUFDQSxVQUFJSSxpQkFBaUIsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUF4QjtBQUVBLFdBQUtGLGNBQUwsQ0FBb0JPLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxVQUFDQyxDQUFELEVBQU87QUFDbkRBLFFBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFJLENBQUNILGlCQUFpQixDQUFDSSxTQUFsQixDQUE0QkMsUUFBNUIsQ0FBcUMsaUJBQXJDLENBQUwsRUFBOEQ7QUFDNURMLFVBQUFBLGlCQUFpQixDQUFDSSxTQUFsQixDQUE0QkUsR0FBNUIsQ0FBZ0MsaUJBQWhDO0FBQ0Q7O0FBQ0Q7QUFDRCxPQU5EO0FBUUFQLE1BQUFBLGNBQWMsQ0FBQ0UsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzlDQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBQ0EsWUFBSUgsaUJBQWlCLENBQUNJLFNBQWxCLENBQTRCQyxRQUE1QixDQUFxQyxpQkFBckMsQ0FBSixFQUE2RDtBQUMzREwsVUFBQUEsaUJBQWlCLENBQUNJLFNBQWxCLENBQTRCRyxNQUE1QixDQUFtQyxpQkFBbkM7QUFDRDs7QUFDRDtBQUNELE9BTkQ7QUFPRDs7Ozs7OztBQUdILElBQUlmLGdCQUFKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Db2xsZWN0aW9uRmlsdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb25GaWx0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHt9XG5cbiAgICB0aGlzLkRPTS5jb2xsZWN0aW9uR3JpZCA9ICcuanMtZ3JpZC10cmlnZ2VyJ1xuXG4gICAgdGhpcy5jb2xsZWN0aW9uR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5ET00uY29sbGVjdGlvbkdyaWQpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2xsZWN0aW9uR3JpZCA9PSBudWxsKSByZXR1cm5cbiAgICB0aGlzLmNvbGxlY3Rpb25EZXBsb3koKVxuICB9XG5cbiAgY29sbGVjdGlvbkRlcGxveSgpIHtcbiAgICBsZXQgY29sbGVjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdC10cmlnZ2VyJylcbiAgICBsZXQgY29sbGVjdGlvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZ3JpZC1saXN0LXdyYXBwZXInKVxuXG4gICAgdGhpcy5jb2xsZWN0aW9uR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmICghY29sbGVjdGlvbldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsZWN0aW9uLWdyaWQnKSkge1xuICAgICAgICBjb2xsZWN0aW9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb2xsZWN0aW9uLWdyaWQnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSlcblxuICAgIGNvbGxlY3Rpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGNvbGxlY3Rpb25XcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnY29sbGVjdGlvbi1ncmlkJykpIHtcbiAgICAgICAgY29sbGVjdGlvbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGVjdGlvbi1ncmlkJylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0pXG4gIH1cbn1cblxubmV3IENvbGxlY3Rpb25GaWx0ZXIoKVxuIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb25GaWx0ZXIiLCJET00iLCJjb2xsZWN0aW9uR3JpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluaXQiLCJjb2xsZWN0aW9uRGVwbG95IiwiY29sbGVjdGlvbkxpc3QiLCJjb2xsZWN0aW9uV3JhcHBlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=