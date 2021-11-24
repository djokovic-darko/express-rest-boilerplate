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
/*!*********************************************!*\
  !*** ./src/scripts/components/accordion.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Accordion; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion = /*#__PURE__*/function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    /**
     * Products component DOM selectors
     * @type {{accordionContainer: string}}
     */
    this.DOM = {
      accordionContainer: '.js-accordion'
    };
    this.$accordionBtn = document.querySelectorAll('.js-accordion-trigger'); // this.$accordionContent = document.querySelectorAll('.js-accordion-content')
  }

  _createClass(Accordion, [{
    key: "init",
    value: function init() {
      if (this.accordionContainer === null) {
        return;
      }

      this.accordion();
    }
  }, {
    key: "accordion",
    value: function accordion() {
      var _this = this;

      var _self = this;

      _self.$accordionBtn.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation(); // let parent = e.target.parentNode
          // let child = parent.querySelector('.js-accordion-content')
          // let h = child.getBoundingClientRect().height + 'px'
          // child.style.height = h

          if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            e.target.nextElementSibling.classList.remove('active');
            e.target.nextElementSibling.style.maxHeight = null;
          } else {
            _this.$accordionBtn.forEach(function (elem) {
              elem.classList.remove('active');
              elem.nextElementSibling.classList.remove('active');
              elem.nextElementSibling.style.maxHeight = null;
              e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + 'px';
            });

            e.target.classList.add('active');
            e.target.nextElementSibling.classList.add('active');
            e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + 'px';
          }
        });
      });
    }
  }]);

  return Accordion;
}();


new Accordion().init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBQcm9kdWN0cyBjb21wb25lbnQgRE9NIHNlbGVjdG9yc1xuICAgICAqIEB0eXBlIHt7YWNjb3JkaW9uQ29udGFpbmVyOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIHRoaXMuRE9NID0ge1xuICAgICAgYWNjb3JkaW9uQ29udGFpbmVyOiAnLmpzLWFjY29yZGlvbicsXG4gICAgfVxuXG4gICAgdGhpcy4kYWNjb3JkaW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbi10cmlnZ2VyJylcbiAgICAvLyB0aGlzLiRhY2NvcmRpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbi1jb250ZW50JylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uQ29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5hY2NvcmRpb24oKVxuICB9XG5cbiAgYWNjb3JkaW9uKCkge1xuICAgIGxldCBfc2VsZiA9IHRoaXNcblxuICAgIF9zZWxmLiRhY2NvcmRpb25CdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIC8vIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlXG4gICAgICAgIC8vIGxldCBjaGlsZCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWNjb3JkaW9uLWNvbnRlbnQnKVxuICAgICAgICAvLyBsZXQgaCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCdcbiAgICAgICAgLy8gY2hpbGQuc3R5bGUuaGVpZ2h0ID0gaFxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRhY2NvcmRpb25CdG4uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgZWxlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPVxuICAgICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID1cbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5uZXcgQWNjb3JkaW9uKCkuaW5pdCgpXG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiRE9NIiwiYWNjb3JkaW9uQ29udGFpbmVyIiwiJGFjY29yZGlvbkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFjY29yZGlvbiIsIl9zZWxmIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzdHlsZSIsIm1heEhlaWdodCIsImVsZW0iLCJzY3JvbGxIZWlnaHQiLCJhZGQiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==