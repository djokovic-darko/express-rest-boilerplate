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
/*!***********************************************!*\
  !*** ./src/scripts/components/MouseFollow.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MouseFollow; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseFollow = /*#__PURE__*/function () {
  function MouseFollow() {
    _classCallCheck(this, MouseFollow);
  }

  _createClass(MouseFollow, [{
    key: "init",
    value: function init() {
      function initMouseFollow(mouseTarget, cursor) {
        var $cursor = document.querySelectorAll(cursor);
        var $mouseTarget = document.querySelectorAll(mouseTarget);
        document.addEventListener('mousemove', function (e) {
          var x = e.clientX;
          var y = e.clientY;
          $cursor.forEach(function (item) {
            item.style.transform = "translate3d(calc(".concat(e.clientX, "px - 50%), calc(").concat(e.clientY, "px - 50%), 0)");
          });
        });
        document.addEventListener('mousemove', function (e) {
          var x = e.clientX;
          var y = e.clientY;
        });
        $mouseTarget.forEach(function (item) {
          item.addEventListener('mouseenter', function (e) {
            var c = item.querySelector('.js-cursor');

            if (c) {
              c.classList.add('active');
            }
          });
          item.addEventListener('mouseleave', function (e) {
            item.classList.remove('active');
            var c = item.querySelector('.js-cursor');

            if (c) {
              c.classList.remove('active');
            }
          });
        });
      }

      initMouseFollow('.js-header-mouse-follow', ' .js-cursor');
      initMouseFollow('.js-carousel-slider-mouse-follow', ' .js-cursor');
    }
  }]);

  return MouseFollow;
}();


new MouseFollow().init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LU1vdXNlRm9sbG93LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOcUJBO0FBQ25CLHlCQUFjO0FBQUE7QUFBRTs7OztXQUVoQixnQkFBTztBQUNMLGVBQVNDLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXNDQyxNQUF0QyxFQUE4QztBQUM1QyxZQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJILE1BQTFCLENBQWQ7QUFDQSxZQUFJSSxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJKLFdBQTFCLENBQW5CO0FBRUFHLFFBQUFBLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2xELGNBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxPQUFWO0FBQ0EsY0FBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQVQsVUFBQUEsT0FBTyxDQUFDVSxPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN4QkEsWUFBQUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFNBQVgsOEJBQTJDUixDQUFDLENBQUNFLE9BQTdDLDZCQUF1RUYsQ0FBQyxDQUFDSSxPQUF6RTtBQUNELFdBRkQ7QUFHRCxTQU5EO0FBUUFSLFFBQUFBLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2xELGNBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxPQUFWO0FBQ0EsY0FBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDRCxTQUhEO0FBS0FOLFFBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDN0JBLFVBQUFBLElBQUksQ0FBQ1AsZ0JBQUwsQ0FBc0IsWUFBdEIsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDLGdCQUFJUyxDQUFDLEdBQUdILElBQUksQ0FBQ0ksYUFBTCxDQUFtQixZQUFuQixDQUFSOztBQUNBLGdCQUFJRCxDQUFKLEVBQU87QUFDTEEsY0FBQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVlDLEdBQVosQ0FBZ0IsUUFBaEI7QUFDRDtBQUNGLFdBTEQ7QUFPQU4sVUFBQUEsSUFBSSxDQUFDUCxnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxVQUFDQyxDQUFELEVBQU87QUFDekNNLFlBQUFBLElBQUksQ0FBQ0ssU0FBTCxDQUFlRSxNQUFmLENBQXNCLFFBQXRCO0FBQ0EsZ0JBQUlKLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxhQUFMLENBQW1CLFlBQW5CLENBQVI7O0FBQ0EsZ0JBQUlELENBQUosRUFBTztBQUNMQSxjQUFBQSxDQUFDLENBQUNFLFNBQUYsQ0FBWUUsTUFBWixDQUFtQixRQUFuQjtBQUNEO0FBQ0YsV0FORDtBQU9ELFNBZkQ7QUFnQkQ7O0FBQ0RyQixNQUFBQSxlQUFlLENBQUMseUJBQUQsRUFBNEIsYUFBNUIsQ0FBZjtBQUNBQSxNQUFBQSxlQUFlLENBQUMsa0NBQUQsRUFBcUMsYUFBckMsQ0FBZjtBQUNEOzs7Ozs7O0FBRUgsSUFBSUQsV0FBSixHQUFrQnVCLElBQWxCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Nb3VzZUZvbGxvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUZvbGxvdyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0KCkge1xuICAgIGZ1bmN0aW9uIGluaXRNb3VzZUZvbGxvdyhtb3VzZVRhcmdldCwgY3Vyc29yKSB7XG4gICAgICBsZXQgJGN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3Vyc29yKVxuICAgICAgbGV0ICRtb3VzZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobW91c2VUYXJnZXQpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB4ID0gZS5jbGllbnRYXG4gICAgICAgIHZhciB5ID0gZS5jbGllbnRZXG4gICAgICAgICRjdXJzb3IuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKGNhbGMoJHtlLmNsaWVudFh9cHggLSA1MCUpLCBjYWxjKCR7ZS5jbGllbnRZfXB4IC0gNTAlKSwgMClgXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgeCA9IGUuY2xpZW50WFxuICAgICAgICB2YXIgeSA9IGUuY2xpZW50WVxuICAgICAgfSlcblxuICAgICAgJG1vdXNlVGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgICAgICAgICBsZXQgYyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWN1cnNvcicpXG4gICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgIGMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgbGV0IGMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jdXJzb3InKVxuICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICBjLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgaW5pdE1vdXNlRm9sbG93KCcuanMtaGVhZGVyLW1vdXNlLWZvbGxvdycsICcgLmpzLWN1cnNvcicpXG4gICAgaW5pdE1vdXNlRm9sbG93KCcuanMtY2Fyb3VzZWwtc2xpZGVyLW1vdXNlLWZvbGxvdycsICcgLmpzLWN1cnNvcicpXG4gIH1cbn1cbm5ldyBNb3VzZUZvbGxvdygpLmluaXQoKVxuIl0sIm5hbWVzIjpbIk1vdXNlRm9sbG93IiwiaW5pdE1vdXNlRm9sbG93IiwibW91c2VUYXJnZXQiLCJjdXJzb3IiLCIkY3Vyc29yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJG1vdXNlVGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsInRyYW5zZm9ybSIsImMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=