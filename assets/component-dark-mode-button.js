/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./src/scripts/components/dark-mode-button.js ***!
  \****************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DarkModeButton = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DarkModeButton, _HTMLElement);

  var _super = _createSuper(DarkModeButton);

  function DarkModeButton() {
    var _this;

    _classCallCheck(this, DarkModeButton);

    _this = _super.call(this);
    _this.button = _this.querySelector('button');
    _this.moonIcon = _this.querySelector('.--moon');
    _this.sunIcon = _this.querySelector('.--sun');

    _this.sunIcon.classList.add('u-hide');

    if (!_this.button) return _possibleConstructorReturn(_this);
    _this.toggleMode = _this.toggleMode.bind(_assertThisInitialized(_this));

    _this.button.addEventListener('click', _this.toggleMode);

    return _this;
  }

  _createClass(DarkModeButton, [{
    key: "toggleMode",
    value: function toggleMode() {
      document.documentElement.classList.toggle('is-dark');
      this.moonIcon.classList.toggle('u-hide');
      this.sunIcon.classList.toggle('u-hide');
    }
  }]);

  return DarkModeButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('dark-mode-button', DarkModeButton);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWRhcmstbW9kZS1idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BOzs7OztBQUNKLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0MsYUFBTCxDQUFtQixRQUFuQixDQUFkO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLRCxhQUFMLENBQW1CLFNBQW5CLENBQWhCO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLE1BQUtGLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBZjs7QUFDQSxVQUFLRSxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCOztBQUVBLFFBQUksQ0FBQyxNQUFLTCxNQUFWLEVBQWtCO0FBQ2xCLFVBQUtNLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsK0JBQWxCOztBQUNBLFVBQUtQLE1BQUwsQ0FBWVEsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsTUFBS0YsVUFBM0M7O0FBVFk7QUFVYjs7OztXQUVELHNCQUFhO0FBQ1hHLE1BQUFBLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qk4sU0FBekIsQ0FBbUNPLE1BQW5DLENBQTBDLFNBQTFDO0FBQ0EsV0FBS1QsUUFBTCxDQUFjRSxTQUFkLENBQXdCTyxNQUF4QixDQUErQixRQUEvQjtBQUNBLFdBQUtSLE9BQUwsQ0FBYUMsU0FBYixDQUF1Qk8sTUFBdkIsQ0FBOEIsUUFBOUI7QUFDRDs7OztpQ0FqQjBCQzs7QUFvQjdCQyxjQUFjLENBQUNDLE1BQWYsQ0FBc0Isa0JBQXRCLEVBQTBDZixjQUExQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2RhcmstbW9kZS1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGFya01vZGVCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICB0aGlzLm1vb25JY29uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuLS1tb29uJylcbiAgICB0aGlzLnN1bkljb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy4tLXN1bicpXG4gICAgdGhpcy5zdW5JY29uLmNsYXNzTGlzdC5hZGQoJ3UtaGlkZScpXG5cbiAgICBpZiAoIXRoaXMuYnV0dG9uKSByZXR1cm5cbiAgICB0aGlzLnRvZ2dsZU1vZGUgPSB0aGlzLnRvZ2dsZU1vZGUuYmluZCh0aGlzKVxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVNb2RlKVxuICB9XG5cbiAgdG9nZ2xlTW9kZSgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZGFyaycpXG4gICAgdGhpcy5tb29uSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd1LWhpZGUnKVxuICAgIHRoaXMuc3VuSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd1LWhpZGUnKVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFyay1tb2RlLWJ1dHRvbicsIERhcmtNb2RlQnV0dG9uKVxuIl0sIm5hbWVzIjpbIkRhcmtNb2RlQnV0dG9uIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1vb25JY29uIiwic3VuSWNvbiIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZU1vZGUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwidG9nZ2xlIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=