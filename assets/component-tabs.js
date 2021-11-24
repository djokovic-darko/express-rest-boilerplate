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
/*!****************************************!*\
  !*** ./src/scripts/components/tabs.js ***!
  \****************************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNSLElBQUksR0FBRyxrQkFBUixDQUE1QjtBQUNBRyxjQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkcsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQUMsY0FBQUEsVUFBVSxDQUFDLFlBQVk7QUFDckIsb0JBQUlDLEtBQUssR0FBR1YsUUFBUSxDQUFDVyxnQkFBVCxDQUNWWixJQUFJLEdBQUcsbUJBQVAsR0FBNkJHLENBQUMsQ0FBQ0MsTUFBRixDQUFTUyxPQUFULENBQWlCQyxJQURwQyxDQUFaO0FBR0FDLGdCQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QlAsS0FBN0IsRUFBb0MsVUFBVVEsRUFBVixFQUFjO0FBQ2hEQSxrQkFBQUEsRUFBRSxDQUFDYixTQUFILENBQWFHLEdBQWIsQ0FBaUIsUUFBakI7QUFDRCxpQkFGRDtBQUdELGVBUFMsRUFPUCxDQVBPLENBQVY7QUFRRDtBQUNGO0FBQ0YsU0FqQkQ7QUFrQkQ7O0FBRURhLE1BQUFBLFlBQVksQ0FBQywwQ0FBRCxDQUFaO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy90YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaW5pdCgpIHtcbiAgICBmdW5jdGlvbiBpbml0VGFiKGVsZW0pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKGVsZW0gKyAnIC5qcy10YWItYnRuJykpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGZpbmRBY3RpdmVFbGVtZW50QW5kUmVtb3ZlSXQoZWxlbSArICcgLmpzLXRhYi1idG4nKVxuICAgICAgICAgICAgZmluZEFjdGl2ZUVsZW1lbnRBbmRSZW1vdmVJdChlbGVtICsgJyAuanMtdGFiLWNvbnRlbnQnKVxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgIGVsZW0gKyAnIC5qcy10YWItY29udGVudC4nICsgZS50YXJnZXQuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChwYW5lbCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEFjdGl2ZUVsZW1lbnRBbmRSZW1vdmVJdChlbGVtKSB7XG4gICAgICB2YXIgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW0pXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnRMaXN0LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXRUYWIoJy50YWJzLmpzLXRhYnMtdmlkZW9zJylcbiAgICBpbml0VGFiKCcubWVhc3VyZXNfX3RhYi5qcy10YWJzLW1lYXN1cmVzJylcbiAgICBpbml0VGFiKCcuaGVhZGVyX19uYXYtZHJvcGRvd24tY29sLWxlZnQuanMtbmF2LWNhdGVnb3J5LXRhYnMnKVxuICAgIGluaXRUYWIoJy5wbC10YWJzLmpzLXRhYnMtcHJpY2VsaXN0JylcbiAgICBpbml0VGFiKCcudG9wLXF1ZXN0aW9uX190YWJzLmpzLXRhYnMtcXVlc3Rpb24nKVxuXG4gICAgZnVuY3Rpb24gaW5pdFRhYkhvdmVyKGVsZW0pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhlbGVtICsgJyAuanMtdGFiLWJ0bicpKSByZXR1cm5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBmaW5kQWN0aXZlRWxlbWVudEFuZFJlbW92ZUl0KGVsZW0gKyAnIC5qcy10YWItYnRuJylcbiAgICAgICAgICAgIGZpbmRBY3RpdmVFbGVtZW50QW5kUmVtb3ZlSXQoZWxlbSArICcgLmpzLXRhYi1jb250ZW50JylcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICBlbGVtICsgJyAuanMtdGFiLWNvbnRlbnQuJyArIGUudGFyZ2V0LmRhdGFzZXQubmFtZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocGFuZWwsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0VGFiSG92ZXIoJy5oZWFkZXJfX25hdi1kcm9wZG93bi1pbm5lci5qcy10YWJzLXNob3AnKVxuICB9XG59XG4iXSwibmFtZXMiOlsiVGFicyIsImluaXRUYWIiLCJlbGVtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZpbmRBY3RpdmVFbGVtZW50QW5kUmVtb3ZlSXQiLCJhZGQiLCJzZXRUaW1lb3V0IiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0YXNldCIsIm5hbWUiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwiZWwiLCJlbGVtZW50TGlzdCIsInJlbW92ZSIsImluaXRUYWJIb3ZlciJdLCJzb3VyY2VSb290IjoiIn0=