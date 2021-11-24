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
/*!************************************************!*\
  !*** ./src/scripts/components/headerScroll.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nav = /*#__PURE__*/function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.$nav = document.querySelector('.js-nav');
    this.nav = document.querySelector('.js-header');
    this.$hamburger = document.querySelector('.js-hamburger');
    this.$html = document.querySelector('html');
    this.scrollTop = 0;
    this.scrolledDown = false;
    this.height = 0;
    this.navLinks = document.querySelectorAll('.js-nav-bar li a');
  }

  _createClass(Nav, [{
    key: "init",
    value: function init() {
      this.onScrollStart();
      this.hideOnScroll();
      this.dropdownMenu();
    }
  }, {
    key: "onScrollStart",
    value: function onScrollStart() {
      window.removeEventListener('scroll', onScroll, {
        passive: true
      });
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      var self = this;
      window.navHeight = this.nav.offsetHeight * 0.7;
      setTimeout(function () {
        if (window.pageYOffset > 0) {
          self.nav.classList.add('scroll-start');
        }
      }, 0);

      function onScroll(e) {
        var s = window.pageYOffset;

        if (s > 0) {
          self.nav.classList.add('scroll-start');
        } else {
          self.nav.classList.remove('scroll-start');
        }
      }
    }
  }, {
    key: "hideOnScroll",
    value: function hideOnScroll() {
      var _this = this;

      this.scrollTop = 0;
      this.scrolledDown = false;
      window.removeEventListener('scroll', onScroll, {
        passive: true
      });
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      var self = this;
      window.navHeight = 0;
      this.nav.style.position = 'fixed';
      setTimeout(function () {
        if (window.pageYOffset > 0) {
          _this.nav.classList.add('scrolled');

          _this.nav.style.position = 'fixed';
          setTimeout(function () {
            _this.nav.classList.add('scroll-start');
          }, 250);
        }
      }, 0);

      function onScroll(e) {
        var s = window.pageYOffset;
        self.scrolledDown = self.scrollTop < s && s > 0;

        if (s === 0) {
          self.nav.style.position = 'fixed';
          self.nav.classList.remove('scroll-start');
        } else if (s > 0 && !self.nav.classList.contains('scroll-start')) {
          self.nav.style.position = 'fixed';
          setTimeout(function () {
            self.nav.classList.add('scroll-start');
          }, 0);
        }

        self.scrollTop = s;

        if (!self.nav.classList.contains('scrolled') && self.scrolledDown) {
          self.nav.classList.add('scrolled');
        }

        if (self.nav.classList.contains('scrolled') && !self.scrolledDown) {
          self.nav.classList.remove('scrolled');
        }
      }
    }
  }, {
    key: "dropdownMenu",
    value: function dropdownMenu() {
      this.navLinks.forEach(function (links) {
        function mouseOver() {
          if (links.nextElementSibling) {
            links.classList.add('is-active');
            links.nextElementSibling.classList.add('is-active');

            if (links.nextElementSibling.classList.contains('is-active')) {
              links.classList.add('is-active');
              document.querySelector('html').style.overflow = 'hidden';
            } else {
              links.classList.remove('is-active');
            }
          } else {
            return;
          }
        }

        function mouseLeave() {
          if (links.nextElementSibling) {
            links.classList.remove('is-active');

            if (links.nextElementSibling) {
              links.nextElementSibling.classList.remove('is-active');
              document.querySelector('html').style.overflow = 'unset';
            }
          } else {
            return;
          }
        }

        if (links.nextElementSibling) {
          links.nextElementSibling.onmouseover = mouseOver;
          links.nextElementSibling.onmouseleave = mouseLeave;
        }

        links.onmouseover = mouseOver;
        links.onmouseleave = mouseLeave;
      });
    }
  }]);

  return Nav;
}();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IsQ0FBcUNPLFFBQXJDLEdBQWdELFFBQWhEO0FBQ0QsYUFIRCxNQUdPO0FBQ0xILGNBQUFBLEtBQUssQ0FBQ1QsU0FBTixDQUFnQkksTUFBaEIsQ0FBdUIsV0FBdkI7QUFDRDtBQUNGLFdBVkQsTUFVTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxpQkFBU1MsVUFBVCxHQUFzQjtBQUNwQixjQUFJSixLQUFLLENBQUNFLGtCQUFWLEVBQThCO0FBQzVCRixZQUFBQSxLQUFLLENBQUNULFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCLFdBQXZCOztBQUVBLGdCQUFJSyxLQUFLLENBQUNFLGtCQUFWLEVBQThCO0FBQzVCRixjQUFBQSxLQUFLLENBQUNFLGtCQUFOLENBQXlCWCxTQUF6QixDQUFtQ0ksTUFBbkMsQ0FBMEMsV0FBMUM7QUFDQTNCLGNBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQjJCLEtBQS9CLENBQXFDTyxRQUFyQyxHQUFnRCxPQUFoRDtBQUNEO0FBQ0YsV0FQRCxNQU9PO0FBQ0w7QUFDRDtBQUNGOztBQUVELFlBQUlILEtBQUssQ0FBQ0Usa0JBQVYsRUFBOEI7QUFDNUJGLFVBQUFBLEtBQUssQ0FBQ0Usa0JBQU4sQ0FBeUJHLFdBQXpCLEdBQXVDSixTQUF2QztBQUNBRCxVQUFBQSxLQUFLLENBQUNFLGtCQUFOLENBQXlCSSxZQUF6QixHQUF3Q0YsVUFBeEM7QUFDRDs7QUFFREosUUFBQUEsS0FBSyxDQUFDSyxXQUFOLEdBQW9CSixTQUFwQjtBQUNBRCxRQUFBQSxLQUFLLENBQUNNLFlBQU4sR0FBcUJGLFVBQXJCO0FBQ0QsT0FyQ0Q7QUFzQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtmbG93Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXJTY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdicpXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJylcbiAgICB0aGlzLiRoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGFtYnVyZ2VyJylcbiAgICB0aGlzLiRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gICAgdGhpcy5zY3JvbGxUb3AgPSAwXG4gICAgdGhpcy5zY3JvbGxlZERvd24gPSBmYWxzZVxuICAgIHRoaXMuaGVpZ2h0ID0gMFxuICAgIHRoaXMubmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbmF2LWJhciBsaSBhJylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vblNjcm9sbFN0YXJ0KClcbiAgICB0aGlzLmhpZGVPblNjcm9sbCgpXG4gICAgdGhpcy5kcm9wZG93bk1lbnUoKVxuICB9XG5cbiAgb25TY3JvbGxTdGFydCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICB3aW5kb3cubmF2SGVpZ2h0ID0gdGhpcy5uYXYub2Zmc2V0SGVpZ2h0ICogMC43XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zdGFydCcpXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGxldCBzID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgICAgIGlmIChzID4gMCkge1xuICAgICAgICBzZWxmLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc3RhcnQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXN0YXJ0JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlT25TY3JvbGwoKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSAwXG4gICAgdGhpcy5zY3JvbGxlZERvd24gPSBmYWxzZVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH0pXG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICB3aW5kb3cubmF2SGVpZ2h0ID0gMFxuICAgIHRoaXMubmF2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xuICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpXG4gICAgICAgIHRoaXMubmF2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc3RhcnQnKVxuICAgICAgICB9LCAyNTApXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGxldCBzID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICBzZWxmLnNjcm9sbGVkRG93biA9IHNlbGYuc2Nyb2xsVG9wIDwgcyAmJiBzID4gMFxuXG4gICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICBzZWxmLm5hdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgICAgICAgc2VsZi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXN0YXJ0JylcbiAgICAgIH0gZWxzZSBpZiAocyA+IDAgJiYgIXNlbGYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsLXN0YXJ0JykpIHtcbiAgICAgICAgc2VsZi5uYXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zdGFydCcpXG4gICAgICAgIH0sIDApXG4gICAgICB9XG5cbiAgICAgIHNlbGYuc2Nyb2xsVG9wID0gc1xuXG4gICAgICBpZiAoIXNlbGYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsZWQnKSAmJiBzZWxmLnNjcm9sbGVkRG93bikge1xuICAgICAgICBzZWxmLm5hdi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Njcm9sbGVkJykgJiYgIXNlbGYuc2Nyb2xsZWREb3duKSB7XG4gICAgICAgIHNlbGYubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5uYXZMaW5rcy5mb3JFYWNoKChsaW5rcykgPT4ge1xuICAgICAgZnVuY3Rpb24gbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAobGlua3MubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICAgICAgICBsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcblxuICAgICAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICBsaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuXG4gICAgICAgICAgaWYgKGxpbmtzLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgbGlua3MubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5rcy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgbGlua3MubmV4dEVsZW1lbnRTaWJsaW5nLm9ubW91c2VvdmVyID0gbW91c2VPdmVyXG4gICAgICAgIGxpbmtzLm5leHRFbGVtZW50U2libGluZy5vbm1vdXNlbGVhdmUgPSBtb3VzZUxlYXZlXG4gICAgICB9XG5cbiAgICAgIGxpbmtzLm9ubW91c2VvdmVyID0gbW91c2VPdmVyXG4gICAgICBsaW5rcy5vbm1vdXNlbGVhdmUgPSBtb3VzZUxlYXZlXG4gICAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5hdiIsIiRuYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCIkaGFtYnVyZ2VyIiwiJGh0bWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxlZERvd24iLCJoZWlnaHQiLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvblNjcm9sbFN0YXJ0IiwiaGlkZU9uU2Nyb2xsIiwiZHJvcGRvd25NZW51Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwicGFzc2l2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxmIiwibmF2SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2V0VGltZW91dCIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZSIsInMiLCJyZW1vdmUiLCJzdHlsZSIsInBvc2l0aW9uIiwiY29udGFpbnMiLCJmb3JFYWNoIiwibGlua3MiLCJtb3VzZU92ZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJvdmVyZmxvdyIsIm1vdXNlTGVhdmUiLCJvbm1vdXNlb3ZlciIsIm9ubW91c2VsZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=