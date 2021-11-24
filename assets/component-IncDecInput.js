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
  !*** ./src/scripts/components/IncDecInput.js ***!
  \***********************************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LUluY0RlY0lucHV0LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOcUJBO0FBQ25CLHlCQUFjO0FBQUE7QUFBRTs7OztXQUVoQixnQkFBTztBQUNMQyxNQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBaUI7QUFDbEQsWUFBSUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQXhCOztBQUVBLFlBQUlELFdBQVcsQ0FBQ0UsU0FBWixDQUFzQkMsUUFBdEIsQ0FBK0Isb0JBQS9CLENBQUosRUFBMEQ7QUFDeEQsY0FBSUMsWUFBWSxHQUFHSixXQUFXLENBQUNLLE9BQVosQ0FBb0IscUJBQXBCLENBQW5CO0FBQUEsY0FDRUMsS0FBSyxHQUFHTixXQUFXLENBQ2hCSyxPQURLLENBQ0cscUJBREgsRUFFTEUsYUFGSyxDQUVTLGtCQUZULENBRFY7QUFBQSxjQUlFQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDRSxLQUFQLEVBQWMsRUFBZCxDQUpsQjtBQU1BQSxVQUFBQSxLQUFLLEdBQUdFLEtBQUssQ0FBQ0YsS0FBRCxDQUFMLEdBQWUsQ0FBZixHQUFtQkEsS0FBM0I7QUFDQUEsVUFBQUEsS0FBSztBQUNMRixVQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBY0EsS0FBZDs7QUFDQSxjQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2JKLFlBQUFBLFlBQVksQ0FBQ0YsU0FBYixDQUF1QlMsTUFBdkIsQ0FBOEIsa0JBQTlCO0FBQ0Q7QUFDRixTQWJELE1BYU8sSUFBSVgsV0FBVyxDQUFDRSxTQUFaLENBQXNCQyxRQUF0QixDQUErQixvQkFBL0IsQ0FBSixFQUEwRDtBQUMvRCxjQUFJQyxhQUFZLEdBQUdKLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQixxQkFBcEIsQ0FBbkI7QUFBQSxjQUNFQyxNQUFLLEdBQUdOLFdBQVcsQ0FDaEJLLE9BREssQ0FDRyxxQkFESCxFQUVMRSxhQUZLLENBRVMsa0JBRlQsQ0FEVjtBQUFBLGNBSUVDLE1BQUssR0FBR0MsUUFBUSxDQUFDSCxNQUFLLENBQUNFLEtBQVAsRUFBYyxFQUFkLENBSmxCOztBQU1BQSxVQUFBQSxNQUFLLEdBQUdFLEtBQUssQ0FBQ0YsTUFBRCxDQUFMLEdBQWUsQ0FBZixHQUFtQkEsTUFBM0I7QUFDQUEsVUFBQUEsTUFBSyxHQUFHLENBQVIsR0FBYUEsTUFBSyxHQUFHLENBQXJCLEdBQTBCLEVBQTFCO0FBQ0FBLFVBQUFBLE1BQUs7QUFDTEYsVUFBQUEsTUFBSyxDQUFDRSxLQUFOLEdBQWNBLE1BQWQ7O0FBRUEsY0FBSUEsTUFBSyxHQUFHLENBQVosRUFBZTtBQUNiSixZQUFBQSxhQUFZLENBQUNGLFNBQWIsQ0FBdUJVLEdBQXZCLENBQTJCLGtCQUEzQjtBQUNELFdBRkQsTUFFTztBQUNMUixZQUFBQSxhQUFZLENBQUNGLFNBQWIsQ0FBdUJTLE1BQXZCLENBQThCLGtCQUE5QjtBQUNEO0FBQ0Y7QUFDRixPQWxDRDtBQW1DRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0luY0RlY0lucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY0RlY0lucHV0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCBjbGlja2VkRWxlbSA9IGV2ZW50LnRhcmdldFxuXG4gICAgICBpZiAoY2xpY2tlZEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1udW1iZXItaW5jcmVhc2UnKSkge1xuICAgICAgICBsZXQgaW5wdXRXcmFwcGVyID0gY2xpY2tlZEVsZW0uY2xvc2VzdCgnLmpzLWlucHV0LWluY3JlbWVudCcpLFxuICAgICAgICAgIGlucHV0ID0gY2xpY2tlZEVsZW1cbiAgICAgICAgICAgIC5jbG9zZXN0KCcuanMtaW5wdXQtaW5jcmVtZW50JylcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuanMtaW5wdXQtbnVtYmVyJyksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApXG5cbiAgICAgICAgdmFsdWUgPSBpc05hTih2YWx1ZSkgPyAxIDogdmFsdWVcbiAgICAgICAgdmFsdWUrK1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSA+IDEpIHtcbiAgICAgICAgICBpbnB1dFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1kZWNyZWFzZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1udW1iZXItZGVjcmVhc2UnKSkge1xuICAgICAgICBsZXQgaW5wdXRXcmFwcGVyID0gY2xpY2tlZEVsZW0uY2xvc2VzdCgnLmpzLWlucHV0LWluY3JlbWVudCcpLFxuICAgICAgICAgIGlucHV0ID0gY2xpY2tlZEVsZW1cbiAgICAgICAgICAgIC5jbG9zZXN0KCcuanMtaW5wdXQtaW5jcmVtZW50JylcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuanMtaW5wdXQtbnVtYmVyJyksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApXG5cbiAgICAgICAgdmFsdWUgPSBpc05hTih2YWx1ZSkgPyAyIDogdmFsdWVcbiAgICAgICAgdmFsdWUgPCAyID8gKHZhbHVlID0gMikgOiAnJ1xuICAgICAgICB2YWx1ZS0tXG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVcblxuICAgICAgICBpZiAodmFsdWUgPCAyKSB7XG4gICAgICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtZGVjcmVhc2UnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLWRlY3JlYXNlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNEZWNJbnB1dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xpY2tlZEVsZW0iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlucHV0V3JhcHBlciIsImNsb3Nlc3QiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInBhcnNlSW50IiwiaXNOYU4iLCJyZW1vdmUiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9