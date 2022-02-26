self["webpackHotUpdate_N_E"]("pages/profil",{

/***/ "./pages/profil.js":
/*!*************************!*\
  !*** ./pages/profil.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profil; }
/* harmony export */ });
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _components_FormButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/FormButton */ "./components/FormButton.js");
/* harmony import */ var _api_updateUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../api/updateUser */ "./api/updateUser.js");
/* harmony import */ var _components_DeleteButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DeleteButton */ "./components/DeleteButton.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\m pokora\\Documents\\FlorianLiabaud_7_10022022\\pages\\profil.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Profil() {
  _s();

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var _useConnectedUserCont = (0,_pages_app__WEBPACK_IMPORTED_MODULE_8__.useConnectedUserContext)(),
      connectedUser = _useConnectedUserCont.connectedUser,
      setConnectedUser = _useConnectedUserCont.setConnectedUser;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errorMessage = _useState[0],
      setErrorMessage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      successMessage = _useState2[0],
      setSuccessMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isUserUpdating = _useState3[0],
      setIsUserUpdating = _useState3[1];

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  } // const uploadedImage = React.useRef(null)
  // const imageUploader = React.useRef(null)
  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files
  //   if (file) {
  //     const reader = new FileReader()
  //     const { current } = uploadedImage
  //     current.file = file
  //     reader.onload = (e) => {
  //       current.src = e.target.result
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }


  function _onSubmit() {
    _onSubmit = (0,C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
      var email, name, profileImage, password, updatedUser;
      return C_Users_m_pokora_Documents_FlorianLiabaud_7_10022022_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _ref.email, name = _ref.name, profileImage = _ref.profileImage, password = _ref.password;
              _context.prev = 1;
              setErrorMessage(null);
              setSuccessMessage(null);
              setIsUserUpdating(true);
              _context.next = 7;
              return (0,_api_updateUser__WEBPACK_IMPORTED_MODULE_10__.default)(email, name, profileImage);

            case 7:
              updatedUser = _context.sent;
              setConnectedUser(updatedUser);
              setIsUserUpdating(false);
              setSuccessMessage('Mise à jour effectuée avec succès');
              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              setIsUserUpdating(false);
              setSuccessMessage(null);
              setErrorMessage(_context.t0.message);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));
    return _onSubmit.apply(this, arguments);
  }

  var src = connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.profileImageUrl;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
    className: "flex flex-col text-sm font-bold rounded-lg w-full max-w-3xl py-10 mx-auto px-6",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      className: "flex border-2 border-gray-900 flex-col w-full px-4 py-6 sm:p-6 rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        className: "mb-8 text-xl font-bold pb-4 border-b-2 border-gray-900",
        children: "Mon Profil"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex justify-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex items-center",
          children: [src && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            // ref={uploadedImage}
            src: connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.profileImageUrl,
            alt: "profile",
            className: "h-24 w-24 rounded-full border-2 border-gray-900"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "text-xl ml-4",
            children: (connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.name) || ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "flex flex-col mt-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            className: "text-sm",
            children: "URL de l'image de profil ( jpg, png, gif )"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({
            className: "block w-full rounded-md mt-1 ".concat(errors.profileImage ? 'invalid-input' : 'valid-input', " input"),
            type: "text",
            placeholder: "https://example.com/image.png"
          }, register('profileImage', {
            required: false
          })), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col mt-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            className: "text-sm",
            children: "NOM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({
            defaultValue: (connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.name) || '',
            className: "block w-full rounded-md mt-1 ".concat(errors.name ? 'invalid-input' : 'valid-input', " input"),
            type: "text",
            placeholder: "John Doe"
          }, register('name', {
            required: true
          })), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-red-500",
            children: "Un nom est requis !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col mt-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            className: "text-sm",
            children: "EMAIL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({
            defaultValue: (connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.email) || '',
            className: "block w-full rounded-md mt-1 ".concat(errors.email ? 'invalid-input' : 'valid-input', " input"),
            type: "email",
            placeholder: "johndoe@mail.com"
          }, register('email', {
            required: true,
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          })), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-red-500",
            children: "Une adresse mail est requise !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col mt-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            className: "text-sm",
            children: "MOT DE PASSE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({
            defaultValue: (connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.password) || '',
            className: "block w-full rounded-md mt-1 ".concat(errors.password ? 'invalid-input' : 'valid-input', " input"),
            type: "password",
            placeholder: "***********"
          }, register('password', {
            required: true
          })), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-red-500",
            children: "Un mot de passe est requis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex items-center mt-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_FormButton__WEBPACK_IMPORTED_MODULE_9__.default, {
            text: "Mettre \xE0 jour",
            loading: isUserUpdating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex items-center mt-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_11__.default, {
          text: "Supprimer le compte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "p-4 mt-4 rounded-md bg-red-50",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.XCircleIcon, {
              className: "w-5 h-5 text-red-400",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "ml-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "text-sm font-medium text-red-800",
              children: errorMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }, this), successMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "p-4 mt-4 rounded-md bg-green-50",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.CheckCircleIcon, {
              className: "w-5 h-5 text-green-400",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "ml-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "text-sm font-medium text-green-800",
              children: successMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(Profil, "mYjmiBsVPglG+y5ZAIdzJ3LfM5Y=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _pages_app__WEBPACK_IMPORTED_MODULE_8__.useConnectedUserContext];
});

_c = Profil;

var _c;

$RefreshReg$(_c, "Profil");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsLmpzIl0sIm5hbWVzIjpbIlByb2ZpbCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbGVQaWNrZXJSZWYiLCJ1c2VSZWYiLCJ1c2VDb25uZWN0ZWRVc2VyQ29udGV4dCIsImNvbm5lY3RlZFVzZXIiLCJzZXRDb25uZWN0ZWRVc2VyIiwidXNlU3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNVc2VyVXBkYXRpbmciLCJzZXRJc1VzZXJVcGRhdGluZyIsIm9uU3VibWl0IiwiZW1haWwiLCJuYW1lIiwicHJvZmlsZUltYWdlIiwicGFzc3dvcmQiLCJ1cGRhdGVVc2VyIiwidXBkYXRlZFVzZXIiLCJtZXNzYWdlIiwic3JjIiwicHJvZmlsZUltYWdlVXJsIiwicmVxdWlyZWQiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUszQkMsd0RBQU8sRUFMb0I7QUFBQSxNQUU3QkMsUUFGNkIsWUFFN0JBLFFBRjZCO0FBQUEsTUFHN0JDLFlBSDZCLFlBRzdCQSxZQUg2QjtBQUFBLE1BSWhCQyxNQUpnQixZQUk3QkMsU0FKNkIsQ0FJaEJELE1BSmdCOztBQU0vQixNQUFNRSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBNUI7O0FBUCtCLDhCQVNhQyxtRUFBdUIsRUFUcEM7QUFBQSxNQVN2QkMsYUFUdUIseUJBU3ZCQSxhQVR1QjtBQUFBLE1BU1JDLGdCQVRRLHlCQVNSQSxnQkFUUTs7QUFBQSxrQkFVU0MsK0NBQVEsQ0FBQyxJQUFELENBVmpCO0FBQUEsTUFVeEJDLFlBVndCO0FBQUEsTUFVVkMsZUFWVTs7QUFBQSxtQkFXYUYsK0NBQVEsQ0FBQyxJQUFELENBWHJCO0FBQUEsTUFXeEJHLGNBWHdCO0FBQUEsTUFXUkMsaUJBWFE7O0FBQUEsbUJBWWFKLCtDQUFRLENBQUMsS0FBRCxDQVpyQjtBQUFBLE1BWXhCSyxjQVp3QjtBQUFBLE1BWVJDLGlCQVpROztBQUFBLFdBY2hCQyxRQWRnQjtBQUFBO0FBQUEsSUE4Qi9CO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTVDK0I7QUFBQSxnV0FjL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCQyxtQkFBMUIsUUFBMEJBLEtBQTFCLEVBQWlDQyxJQUFqQyxRQUFpQ0EsSUFBakMsRUFBdUNDLFlBQXZDLFFBQXVDQSxZQUF2QyxFQUFxREMsUUFBckQsUUFBcURBLFFBQXJEO0FBQUE7QUFFSVQsNkJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQUUsK0JBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBRSwrQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBSko7QUFBQSxxQkFLOEJNLHlEQUFVLENBQUNKLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxZQUFkLENBTHhDOztBQUFBO0FBS1VHLHlCQUxWO0FBTUlkLDhCQUFnQixDQUFDYyxXQUFELENBQWhCO0FBQ0FQLCtCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQUYsK0JBQWlCLENBQUMsbUNBQUQsQ0FBakI7QUFSSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVJRSwrQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FGLCtCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUYsNkJBQWUsQ0FBQyxZQUFNWSxPQUFQLENBQWY7O0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FkK0I7QUFBQTtBQUFBOztBQThDL0IsTUFBTUMsR0FBRyxHQUFHakIsYUFBSCxhQUFHQSxhQUFILHVCQUFHQSxhQUFhLENBQUVrQixlQUEzQjtBQUVBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGdGQUFoQjtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLDJFQUFuQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyx3REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEscUJBQ0dELEdBQUcsaUJBQ0Y7QUFDRTtBQUNBLGVBQUcsRUFBRWpCLGFBQUYsYUFBRUEsYUFBRix1QkFBRUEsYUFBYSxDQUFFa0IsZUFGdEI7QUFHRSxlQUFHLEVBQUMsU0FITjtBQUlFLHFCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBU0U7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUEsc0JBQWdDLENBQUFsQixhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLFlBQUFBLGFBQWEsQ0FBRVcsSUFBZixLQUF1QjtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQW9DRTtBQUFNLGdCQUFRLEVBQUVuQixZQUFZLENBQUNpQixRQUFELENBQTVCO0FBQXdDLGlCQUFTLEVBQUMsb0JBQWxEO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDRTtBQUFPLHFCQUFTLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUNFLHFCQUFTLHlDQUNQaEIsTUFBTSxDQUFDbUIsWUFBUCxHQUFzQixlQUF0QixHQUF3QyxhQURqQyxXQURYO0FBSUUsZ0JBQUksRUFBQyxNQUpQO0FBS0UsdUJBQVcsRUFBQztBQUxkLGFBTU1yQixRQUFRLENBQUMsY0FBRCxFQUFpQjtBQUFFNEIsb0JBQVEsRUFBRTtBQUFaLFdBQWpCLENBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFjRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxrQ0FDRTtBQUFPLHFCQUFTLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHdCQUFZLEVBQUUsQ0FBQW5CLGFBQWEsU0FBYixJQUFBQSxhQUFhLFdBQWIsWUFBQUEsYUFBYSxDQUFFVyxJQUFmLEtBQXVCLEVBRHZDO0FBRUUscUJBQVMseUNBQ1BsQixNQUFNLENBQUNrQixJQUFQLEdBQWMsZUFBZCxHQUFnQyxhQUR6QixXQUZYO0FBS0UsZ0JBQUksRUFBQyxNQUxQO0FBTUUsdUJBQVcsRUFBQztBQU5kLGFBT01wQixRQUFRLENBQUMsTUFBRCxFQUFTO0FBQUU0QixvQkFBUSxFQUFFO0FBQVosV0FBVCxDQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFXRzFCLE1BQU0sQ0FBQ2tCLElBQVAsaUJBQWU7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQTRCRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxrQ0FDRTtBQUFPLHFCQUFTLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHdCQUFZLEVBQUUsQ0FBQVgsYUFBYSxTQUFiLElBQUFBLGFBQWEsV0FBYixZQUFBQSxhQUFhLENBQUVVLEtBQWYsS0FBd0IsRUFEeEM7QUFFRSxxQkFBUyx5Q0FDUGpCLE1BQU0sQ0FBQ2lCLEtBQVAsR0FBZSxlQUFmLEdBQWlDLGFBRDFCLFdBRlg7QUFLRSxnQkFBSSxFQUFDLE9BTFA7QUFNRSx1QkFBVyxFQUFDO0FBTmQsYUFPTW5CLFFBQVEsQ0FBQyxPQUFELEVBQVU7QUFDcEI0QixvQkFBUSxFQUFFLElBRFU7QUFFcEJDLG1CQUFPLEVBQUU7QUFGVyxXQUFWLENBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQWNHM0IsTUFBTSxDQUFDaUIsS0FBUCxpQkFDQztBQUFHLHFCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGLGVBK0NFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGtDQUNFO0FBQU8scUJBQVMsRUFBQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0Usd0JBQVksRUFBRSxDQUFBVixhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLFlBQUFBLGFBQWEsQ0FBRWEsUUFBZixLQUEyQixFQUQzQztBQUVFLHFCQUFTLHlDQUNQcEIsTUFBTSxDQUFDb0IsUUFBUCxHQUFrQixlQUFsQixHQUFvQyxhQUQ3QixXQUZYO0FBS0UsZ0JBQUksRUFBQyxVQUxQO0FBTUUsdUJBQVcsRUFBQztBQU5kLGFBT010QixRQUFRLENBQUMsVUFBRCxFQUFhO0FBQUU0QixvQkFBUSxFQUFFO0FBQVosV0FBYixDQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFXRzFCLE1BQU0sQ0FBQ29CLFFBQVAsaUJBQ0M7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DRixlQStERTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFZLGdCQUFJLEVBQUMsa0JBQWpCO0FBQWlDLG1CQUFPLEVBQUVOO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0YsZUF1R0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsK0JBQ0UsOERBQUMsOERBQUQ7QUFBYyxjQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2R0YsRUEyR0dKLFlBQVksaUJBQ1g7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFLDhEQUFDLCtEQUFEO0FBQ0UsdUJBQVMsRUFBQyxzQkFEWjtBQUVFLDZCQUFZO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBQyxrQ0FBZDtBQUFBLHdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1R0osRUE2SEdFLGNBQWMsaUJBQ2I7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFLDhEQUFDLG1FQUFEO0FBQ0UsdUJBQVMsRUFBQyx3QkFEWjtBQUVFLDZCQUFZO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBQyxvQ0FBZDtBQUFBLHdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUpEOztHQW5NdUJoQixNO1VBS2xCQyxvRCxFQUNXTSxrRCxFQUc2QkcsK0Q7OztLQVR0QlYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWwuMGE5YzhiNjU0NjkzNDdlZDBiY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyBYQ2lyY2xlSWNvbiwgQ2hlY2tDaXJjbGVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHsgdXNlQ29ubmVjdGVkVXNlckNvbnRleHQgfSBmcm9tICcvcGFnZXMvX2FwcCdcclxuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSAnL2NvbXBvbmVudHMvRm9ybUJ1dHRvbidcclxuaW1wb3J0IHVwZGF0ZVVzZXIgZnJvbSAnL2FwaS91cGRhdGVVc2VyJ1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvRGVsZXRlQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGZpbGVQaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWRVc2VyLCBzZXRDb25uZWN0ZWRVc2VyIH0gPSB1c2VDb25uZWN0ZWRVc2VyQ29udGV4dCgpXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpc1VzZXJVcGRhdGluZywgc2V0SXNVc2VyVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHsgZW1haWwsIG5hbWUsIHByb2ZpbGVJbWFnZSwgcGFzc3dvcmQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpXHJcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKG51bGwpXHJcbiAgICAgIHNldElzVXNlclVwZGF0aW5nKHRydWUpXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgdXBkYXRlVXNlcihlbWFpbCwgbmFtZSwgcHJvZmlsZUltYWdlKVxyXG4gICAgICBzZXRDb25uZWN0ZWRVc2VyKHVwZGF0ZWRVc2VyKVxyXG4gICAgICBzZXRJc1VzZXJVcGRhdGluZyhmYWxzZSlcclxuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJ01pc2Ugw6Agam91ciBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRJc1VzZXJVcGRhdGluZyhmYWxzZSlcclxuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UobnVsbClcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCB1cGxvYWRlZEltYWdlID0gUmVhY3QudXNlUmVmKG51bGwpXHJcbiAgLy8gY29uc3QgaW1hZ2VVcGxvYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG5cclxuICAvLyBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IChlKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbZmlsZV0gPSBlLnRhcmdldC5maWxlc1xyXG4gIC8vICAgaWYgKGZpbGUpIHtcclxuICAvLyAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gIC8vICAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHVwbG9hZGVkSW1hZ2VcclxuICAvLyAgICAgY3VycmVudC5maWxlID0gZmlsZVxyXG4gIC8vICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcclxuICAvLyAgICAgICBjdXJyZW50LnNyYyA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBzcmMgPSBjb25uZWN0ZWRVc2VyPy5wcm9maWxlSW1hZ2VVcmxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1zbSBmb250LWJvbGQgcm91bmRlZC1sZyB3LWZ1bGwgbWF4LXctM3hsIHB5LTEwIG14LWF1dG8gcHgtNlwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1ncmF5LTkwMCBmbGV4LWNvbCB3LWZ1bGwgcHgtNCBweS02IHNtOnAtNiByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTggdGV4dC14bCBmb250LWJvbGQgcGItNCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgTW9uIFByb2ZpbFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7c3JjICYmIChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3VwbG9hZGVkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Nvbm5lY3RlZFVzZXI/LnByb2ZpbGVJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgbWwtNFwiPntjb25uZWN0ZWRVc2VyPy5uYW1lIHx8ICcnfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktYXV0b1wiXHJcbiAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGltYWdlVXBsb2FkZXIuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSBjdXJzb3ItcG9pbnRlciBiZy1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZmlsZVBpY2tlclJlZn1cclxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Byb2ZpbGVJbWFnZScsIHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9kaWZpZXIgc2EgcGhvdG8gZGUgcHJvZmlsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgLy8gcmVmPXtpbWFnZVVwbG9hZGVyfVxyXG4gICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICBVUkwgZGUgbCZhcG9zO2ltYWdlIGRlIHByb2ZpbCAmIzQwOyBqcGcsIHBuZywgZ2lmICYjNDE7XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIG10LTEgJHtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5wcm9maWxlSW1hZ2UgPyAnaW52YWxpZC1pbnB1dCcgOiAndmFsaWQtaW5wdXQnXHJcbiAgICAgICAgICAgICAgfSBpbnB1dGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmdcIlxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncHJvZmlsZUltYWdlJywgeyByZXF1aXJlZDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+Tk9NPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb25uZWN0ZWRVc2VyPy5uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIG10LTEgJHtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5uYW1lID8gJ2ludmFsaWQtaW5wdXQnIDogJ3ZhbGlkLWlucHV0J1xyXG4gICAgICAgICAgICAgIH0gaW5wdXRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcclxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+VW4gbm9tIGVzdCByZXF1aXMgITwvcD59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkVNQUlMPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb25uZWN0ZWRVc2VyPy5lbWFpbCB8fCAnJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBtdC0xICR7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPyAnaW52YWxpZC1pbnB1dCcgOiAndmFsaWQtaW5wdXQnXHJcbiAgICAgICAgICAgICAgfSBpbnB1dGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG5kb2VAbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46ICdbYS16MC05Ll8lKy1dK0BbYS16MC05Li1dKy5bYS16XXsyLDR9JCcsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlVuZSBhZHJlc3NlIG1haWwgZXN0IHJlcXVpc2UgITwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+TU9UIERFIFBBU1NFPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb25uZWN0ZWRVc2VyPy5wYXNzd29yZCB8fCAnJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBtdC0xICR7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPyAnaW52YWxpZC1pbnB1dCcgOiAndmFsaWQtaW5wdXQnXHJcbiAgICAgICAgICAgICAgfSBpbnB1dGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqXCJcclxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+VW4gbW90IGRlIHBhc3NlIGVzdCByZXF1aXM8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPEZvcm1CdXR0b24gdGV4dD1cIk1ldHRyZSDDoCBqb3VyXCIgbG9hZGluZz17aXNVc2VyVXBkYXRpbmd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICA8RGVsZXRlQnV0dG9uIHRleHQ9XCJTdXBwcmltZXIgbGUgY29tcHRlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtdC00IHJvdW5kZWQtbWQgYmctcmVkLTUwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgPFhDaXJjbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNDAwXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC04MDBcIj5cclxuICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTQgcm91bmRlZC1tZCBiZy1ncmVlbi01MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyZWVuLTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgICAge3N1Y2Nlc3NNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=