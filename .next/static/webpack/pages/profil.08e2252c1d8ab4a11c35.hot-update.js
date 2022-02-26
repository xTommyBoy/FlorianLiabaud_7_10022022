self["webpackHotUpdate_N_E"]("pages/profil",{

/***/ "./api/updateUser.js":
/*!***************************!*\
  !*** ./api/updateUser.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function updateUser(_x, _x2, _x3, _x4) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = (0,C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, displayName, profileImageUrl, password) {
    var response, errorDetails;
    return C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat("http://localhost:3001", "/users"), {
              method: 'PATCH',
              credentials: 'include',
              body: JSON.stringify({
                email: email,
                displayName: displayName,
                profileImageUrl: profileImageUrl === '' ? null : profileImageUrl,
                password: password
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context.sent;

            if (response.ok) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return response.json();

          case 6:
            errorDetails = _context.sent;
            throw new Error("".concat(response.status, " ").concat(response.statusText, " (").concat(response.type, ") : ").concat(errorDetails.message));

          case 8:
            return _context.abrupt("return", response.json());

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateUser.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL3VwZGF0ZVVzZXIuanMiXSwibmFtZXMiOlsidXBkYXRlVXNlciIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJwcm9maWxlSW1hZ2VVcmwiLCJwYXNzd29yZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJlcnJvckRldGFpbHMiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJ0eXBlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQWVBLFVBQTlCO0FBQUE7QUFBQTs7O2dXQUFlLGlCQUEwQkMsS0FBMUIsRUFBaUNDLFdBQWpDLEVBQThDQyxlQUE5QyxFQUErREMsUUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVUMsS0FBSyxXQUN2QkMsdUJBRHVCLGFBRTFCO0FBQ0VDLG9CQUFNLEVBQUUsT0FEVjtBQUVFQyx5QkFBVyxFQUFFLFNBRmY7QUFHRUMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJWLHFCQUFLLEVBQUVBLEtBRFk7QUFFbkJDLDJCQUFXLEVBQUVBLFdBRk07QUFHbkJDLCtCQUFlLEVBQUVBLGVBQWUsS0FBSyxFQUFwQixHQUF5QixJQUF6QixHQUFnQ0EsZUFIOUI7QUFJbkJDLHdCQUFRLEVBQVJBO0FBSm1CLGVBQWYsQ0FIUjtBQVNFUSxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFUWCxhQUYwQixDQURmOztBQUFBO0FBQ1BDLG9CQURPOztBQUFBLGdCQWtCUkEsUUFBUSxDQUFDQyxFQWxCRDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQW1CZ0JELFFBQVEsQ0FBQ0UsSUFBVCxFQW5CaEI7O0FBQUE7QUFtQkxDLHdCQW5CSztBQUFBLGtCQW9CTCxJQUFJQyxLQUFKLFdBQ0RKLFFBQVEsQ0FBQ0ssTUFEUixjQUNrQkwsUUFBUSxDQUFDTSxVQUQzQixlQUMwQ04sUUFBUSxDQUFDTyxJQURuRCxpQkFDOERKLFlBQVksQ0FBQ0ssT0FEM0UsRUFwQks7O0FBQUE7QUFBQSw2Q0F5Qk5SLFFBQVEsQ0FBQ0UsSUFBVCxFQXpCTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbC4wOGUyMjUyYzFkOGFiNGExMWMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcihlbWFpbCwgZGlzcGxheU5hbWUsIHByb2ZpbGVJbWFnZVVybCwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9CQVNFX1VSTH0vdXNlcnNgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxyXG4gICAgICAgIHByb2ZpbGVJbWFnZVVybDogcHJvZmlsZUltYWdlVXJsID09PSAnJyA/IG51bGwgOiBwcm9maWxlSW1hZ2VVcmwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgY29uc3QgZXJyb3JEZXRhaWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fSAoJHtyZXNwb25zZS50eXBlfSkgOiAke2Vycm9yRGV0YWlscy5tZXNzYWdlfWBcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9