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
/*!*****************************************************!*\
  !*** ./src/scripts/components/SingleItemGallery.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SingleItemGallery; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SingleItemGallery = /*#__PURE__*/function () {
  function SingleItemGallery() {
    _classCallCheck(this, SingleItemGallery);

    /**
     * Product component DOM selectors
     * @type {{singleProductGallery: string }}
     */
    this.DOM = {
      singleGalleryBtnEl: '.js-single-gallery-open',
      singleProductGalleryPopupEl: '.js-single-gallery-popup',
      closeSingleGalleryEl: '.js-close-single-gallery',
      bodyEl: 'body'
    };
    /**
     * Fetch product gallery DOM element
     * @type {Element}
     */

    this.singleGalleryBtn = document.querySelectorAll(this.DOM.singleGalleryBtnEl);
    this.closeSingleGallery = document.querySelectorAll(this.DOM.closeSingleGalleryEl);
    this.singleProductGalleryPopup = document.querySelector(this.DOM.singleProductGalleryPopupEl);
    this.body = document.querySelector(this.DOM.bodyEl);
    this.init();
  }

  _createClass(SingleItemGallery, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.singleGalleryBtn.forEach(function (item) {
        item.addEventListener('click', function (e) {
          var $popupSingleProduct = e.target.parentElement.querySelector(_this.DOM.singleProductGalleryPopupEl);

          if ($popupSingleProduct) {
            $popupSingleProduct.classList.add('active');

            _this.body.classList.add('active-gallery');
          }
        });
      });
      this.closeSingleGallery.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var $targetPopup = e.target.closest(_this.DOM.singleProductGalleryPopupEl);
          $targetPopup.classList.remove('active');

          _this.body.classList.remove('active-gallery');
        });
      });
    }
  }]);

  return SingleItemGallery;
}();


new SingleItemGallery();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LVNpbmdsZUl0ZW1HYWxsZXJ5LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOcUJBO0FBQ25CLCtCQUFjO0FBQUE7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxHQUFMLEdBQVc7QUFDVEMsTUFBQUEsa0JBQWtCLEVBQUUseUJBRFg7QUFFVEMsTUFBQUEsMkJBQTJCLEVBQUUsMEJBRnBCO0FBR1RDLE1BQUFBLG9CQUFvQixFQUFFLDBCQUhiO0FBSVRDLE1BQUFBLE1BQU0sRUFBRTtBQUpDLEtBQVg7QUFNQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxnQkFBTCxHQUF3QkMsUUFBUSxDQUFDQyxnQkFBVCxDQUN0QixLQUFLUCxHQUFMLENBQVNDLGtCQURhLENBQXhCO0FBR0EsU0FBS08sa0JBQUwsR0FBMEJGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDeEIsS0FBS1AsR0FBTCxDQUFTRyxvQkFEZSxDQUExQjtBQUdBLFNBQUtNLHlCQUFMLEdBQWlDSCxRQUFRLENBQUNJLGFBQVQsQ0FDL0IsS0FBS1YsR0FBTCxDQUFTRSwyQkFEc0IsQ0FBakM7QUFHQSxTQUFLUyxJQUFMLEdBQVlMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUFLVixHQUFMLENBQVNJLE1BQWhDLENBQVo7QUFFQSxTQUFLUSxJQUFMO0FBQ0Q7Ozs7V0FFRCxnQkFBTztBQUFBOztBQUNMLFdBQUtQLGdCQUFMLENBQXNCUSxPQUF0QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdENBLFFBQUFBLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLGNBQUlDLG1CQUFtQixHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QlQsYUFBdkIsQ0FDeEIsS0FBSSxDQUFDVixHQUFMLENBQVNFLDJCQURlLENBQTFCOztBQUlBLGNBQUllLG1CQUFKLEVBQXlCO0FBQ3ZCQSxZQUFBQSxtQkFBbUIsQ0FBQ0csU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLFFBQWxDOztBQUNBLGlCQUFJLENBQUNWLElBQUwsQ0FBVVMsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZ0JBQXhCO0FBQ0Q7QUFDRixTQVREO0FBVUQsT0FYRDtBQWFBLFdBQUtiLGtCQUFMLENBQXdCSyxPQUF4QixDQUFnQyxVQUFDQyxJQUFELEVBQVU7QUFDeENBLFFBQUFBLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDQSxVQUFBQSxDQUFDLENBQUNNLGNBQUY7QUFDQSxjQUFJQyxZQUFZLEdBQUdQLENBQUMsQ0FBQ0UsTUFBRixDQUFTTSxPQUFULENBQ2pCLEtBQUksQ0FBQ3hCLEdBQUwsQ0FBU0UsMkJBRFEsQ0FBbkI7QUFHQXFCLFVBQUFBLFlBQVksQ0FBQ0gsU0FBYixDQUF1QkssTUFBdkIsQ0FBOEIsUUFBOUI7O0FBQ0EsZUFBSSxDQUFDZCxJQUFMLENBQVVTLFNBQVYsQ0FBb0JLLE1BQXBCLENBQTJCLGdCQUEzQjtBQUNELFNBUEQ7QUFRRCxPQVREO0FBVUQ7Ozs7Ozs7QUFHSCxJQUFJMUIsaUJBQUosRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1NpbmdsZUl0ZW1HYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUl0ZW1HYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBjb21wb25lbnQgRE9NIHNlbGVjdG9yc1xuICAgICAqIEB0eXBlIHt7c2luZ2xlUHJvZHVjdEdhbGxlcnk6IHN0cmluZyB9fVxuICAgICAqL1xuICAgIHRoaXMuRE9NID0ge1xuICAgICAgc2luZ2xlR2FsbGVyeUJ0bkVsOiAnLmpzLXNpbmdsZS1nYWxsZXJ5LW9wZW4nLFxuICAgICAgc2luZ2xlUHJvZHVjdEdhbGxlcnlQb3B1cEVsOiAnLmpzLXNpbmdsZS1nYWxsZXJ5LXBvcHVwJyxcbiAgICAgIGNsb3NlU2luZ2xlR2FsbGVyeUVsOiAnLmpzLWNsb3NlLXNpbmdsZS1nYWxsZXJ5JyxcbiAgICAgIGJvZHlFbDogJ2JvZHknLFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaCBwcm9kdWN0IGdhbGxlcnkgRE9NIGVsZW1lbnRcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLnNpbmdsZUdhbGxlcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgdGhpcy5ET00uc2luZ2xlR2FsbGVyeUJ0bkVsXG4gICAgKVxuICAgIHRoaXMuY2xvc2VTaW5nbGVHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIHRoaXMuRE9NLmNsb3NlU2luZ2xlR2FsbGVyeUVsXG4gICAgKVxuICAgIHRoaXMuc2luZ2xlUHJvZHVjdEdhbGxlcnlQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLkRPTS5zaW5nbGVQcm9kdWN0R2FsbGVyeVBvcHVwRWxcbiAgICApXG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkRPTS5ib2R5RWwpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNpbmdsZUdhbGxlcnlCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCAkcG9wdXBTaW5nbGVQcm9kdWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIHRoaXMuRE9NLnNpbmdsZVByb2R1Y3RHYWxsZXJ5UG9wdXBFbFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKCRwb3B1cFNpbmdsZVByb2R1Y3QpIHtcbiAgICAgICAgICAkcG9wdXBTaW5nbGVQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1nYWxsZXJ5JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jbG9zZVNpbmdsZUdhbGxlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgJHRhcmdldFBvcHVwID0gZS50YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICB0aGlzLkRPTS5zaW5nbGVQcm9kdWN0R2FsbGVyeVBvcHVwRWxcbiAgICAgICAgKVxuICAgICAgICAkdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1nYWxsZXJ5JylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2luZ2xlSXRlbUdhbGxlcnkoKVxuIl0sIm5hbWVzIjpbIlNpbmdsZUl0ZW1HYWxsZXJ5IiwiRE9NIiwic2luZ2xlR2FsbGVyeUJ0bkVsIiwic2luZ2xlUHJvZHVjdEdhbGxlcnlQb3B1cEVsIiwiY2xvc2VTaW5nbGVHYWxsZXJ5RWwiLCJib2R5RWwiLCJzaW5nbGVHYWxsZXJ5QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VTaW5nbGVHYWxsZXJ5Iiwic2luZ2xlUHJvZHVjdEdhbGxlcnlQb3B1cCIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiaW5pdCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCIkcG9wdXBTaW5nbGVQcm9kdWN0IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldFBvcHVwIiwiY2xvc2VzdCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=