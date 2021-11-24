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
/*!*************************************************!*\
  !*** ./src/scripts/components/CtaTapeHidden.js ***!
  \*************************************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LUN0YVRhcGVIaWRkZW4uanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ05xQkE7QUFDbkIsMkJBQWM7QUFBQTtBQUFFOzs7O1dBRWhCLGdCQUFPO0FBQ0wsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLE1BQTFCLENBQWpCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBcEI7O0FBRUEsVUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsVUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFhO0FBQzNCLFlBQUlBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsY0FBZixFQUErQjtBQUM3QlIsVUFBQUEsUUFBUSxDQUFDUyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkEsWUFBQUEsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QjtBQUNELFdBRkQ7QUFHRCxTQUpELE1BSU87QUFDTFosVUFBQUEsUUFBUSxDQUFDUyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkEsWUFBQUEsT0FBTyxDQUFDQyxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixTQUF6QjtBQUNELFdBRkQ7QUFHRDtBQUNGLE9BVkQsQ0FUSyxDQW9CTDs7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0Msb0JBQVgsQ0FBZ0NWLE9BQWhDLENBQWpCLENBckJLLENBc0JMOztBQUNBUSxNQUFBQSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJkLFVBQWpCO0FBQ0FXLE1BQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQlosV0FBakI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0N0YVRhcGVIaWRkZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3RhVGFwZUhpZGRlbiB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN0YScpXG4gICAgY29uc3Qgc2VudGluYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3QtY2xhc3MnKVxuICAgIGNvbnN0IHNlbnRpbmFsRWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW9mZi1jdGEnKVxuXG4gICAgaWYgKHNlbnRpbmFsRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZW50cmllcykgPT4ge1xuICAgICAgaWYgKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgaGVhZGVyRWwuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJFbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY3JlYXRlIHRoZSBvYnNlcnZlclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVyKVxuICAgIC8vIGdpdmUgdGhlIG9ic2VydmVyIHNvbWUgZG9tIG5vZGVzIHRvIGtlZXAgYW4gZXllIG9uXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZW50aW5hbEVsKVxuICAgIG9ic2VydmVyLm9ic2VydmUoc2VudGluYWxFbDEpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdGFUYXBlSGlkZGVuIiwiaGVhZGVyRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZW50aW5hbEVsIiwicXVlcnlTZWxlY3RvciIsInNlbnRpbmFsRWwxIiwiaGFuZGxlciIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib2JzZXJ2ZXIiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9