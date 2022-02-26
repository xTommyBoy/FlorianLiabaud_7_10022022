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
              return (0,_api_updateUser__WEBPACK_IMPORTED_MODULE_10__.default)(email, name, profileImage, password);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsLmpzIl0sIm5hbWVzIjpbIlByb2ZpbCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbGVQaWNrZXJSZWYiLCJ1c2VSZWYiLCJ1c2VDb25uZWN0ZWRVc2VyQ29udGV4dCIsImNvbm5lY3RlZFVzZXIiLCJzZXRDb25uZWN0ZWRVc2VyIiwidXNlU3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNVc2VyVXBkYXRpbmciLCJzZXRJc1VzZXJVcGRhdGluZyIsIm9uU3VibWl0IiwiZW1haWwiLCJuYW1lIiwicHJvZmlsZUltYWdlIiwicGFzc3dvcmQiLCJ1cGRhdGVVc2VyIiwidXBkYXRlZFVzZXIiLCJtZXNzYWdlIiwic3JjIiwicHJvZmlsZUltYWdlVXJsIiwicmVxdWlyZWQiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUszQkMsd0RBQU8sRUFMb0I7QUFBQSxNQUU3QkMsUUFGNkIsWUFFN0JBLFFBRjZCO0FBQUEsTUFHN0JDLFlBSDZCLFlBRzdCQSxZQUg2QjtBQUFBLE1BSWhCQyxNQUpnQixZQUk3QkMsU0FKNkIsQ0FJaEJELE1BSmdCOztBQU0vQixNQUFNRSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBNUI7O0FBUCtCLDhCQVNhQyxtRUFBdUIsRUFUcEM7QUFBQSxNQVN2QkMsYUFUdUIseUJBU3ZCQSxhQVR1QjtBQUFBLE1BU1JDLGdC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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1KRDs7R0FuTXVCaEIsTTtVQUtsQkMsb0QsRUFDV00sa0QsRUFHNkJHLCtEOzs7S0FUdEJWLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsLjQ4MDhiMTI2NTc3ZDE5MzJiMTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgWENpcmNsZUljb24sIENoZWNrQ2lyY2xlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcbmltcG9ydCB7IHVzZUNvbm5lY3RlZFVzZXJDb250ZXh0IH0gZnJvbSAnL3BhZ2VzL19hcHAnXHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy9jb21wb25lbnRzL0Zvcm1CdXR0b24nXHJcbmltcG9ydCB1cGRhdGVVc2VyIGZyb20gJy9hcGkvdXBkYXRlVXNlcidcclxuaW1wb3J0IERlbGV0ZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0RlbGV0ZUJ1dHRvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbCgpIHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBmaWxlUGlja2VyUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdGVkVXNlciwgc2V0Q29ubmVjdGVkVXNlciB9ID0gdXNlQ29ubmVjdGVkVXNlckNvbnRleHQoKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSwgc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaXNVc2VyVXBkYXRpbmcsIHNldElzVXNlclVwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh7IGVtYWlsLCBuYW1lLCBwcm9maWxlSW1hZ2UsIHBhc3N3b3JkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShudWxsKVxyXG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZShudWxsKVxyXG4gICAgICBzZXRJc1VzZXJVcGRhdGluZyh0cnVlKVxyXG4gICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHVwZGF0ZVVzZXIoZW1haWwsIG5hbWUsIHByb2ZpbGVJbWFnZSwgcGFzc3dvcmQpXHJcbiAgICAgIHNldENvbm5lY3RlZFVzZXIodXBkYXRlZFVzZXIpXHJcbiAgICAgIHNldElzVXNlclVwZGF0aW5nKGZhbHNlKVxyXG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnTWlzZSDDoCBqb3VyIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldElzVXNlclVwZGF0aW5nKGZhbHNlKVxyXG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZShudWxsKVxyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IHVwbG9hZGVkSW1hZ2UgPSBSZWFjdC51c2VSZWYobnVsbClcclxuICAvLyBjb25zdCBpbWFnZVVwbG9hZGVyID0gUmVhY3QudXNlUmVmKG51bGwpXHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnN0IFtmaWxlXSA9IGUudGFyZ2V0LmZpbGVzXHJcbiAgLy8gICBpZiAoZmlsZSkge1xyXG4gIC8vICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgLy8gICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdXBsb2FkZWRJbWFnZVxyXG4gIC8vICAgICBjdXJyZW50LmZpbGUgPSBmaWxlXHJcbiAgLy8gICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gIC8vICAgICAgIGN1cnJlbnQuc3JjID0gZS50YXJnZXQucmVzdWx0XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IHNyYyA9IGNvbm5lY3RlZFVzZXI/LnByb2ZpbGVJbWFnZVVybFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNtIGZvbnQtYm9sZCByb3VuZGVkLWxnIHctZnVsbCBtYXgtdy0zeGwgcHktMTAgbXgtYXV0byBweC02XCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIGZsZXgtY29sIHctZnVsbCBweC00IHB5LTYgc206cC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXhsIGZvbnQtYm9sZCBwYi00IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktOTAwXCI+XHJcbiAgICAgICAgICBNb24gUHJvZmlsXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17dXBsb2FkZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y29ubmVjdGVkVXNlcj8ucHJvZmlsZUltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTI0IHctMjQgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBtbC00XCI+e2Nvbm5lY3RlZFVzZXI/Lm5hbWUgfHwgJyd9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS1hdXRvXCJcclxuICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gaW1hZ2VVcGxvYWRlci5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC00IHB5LTIgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIGN1cnNvci1wb2ludGVyIGJnLWJsdWUtODAwIGhvdmVyOmJnLWJsdWUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlUGlja2VyUmVmfVxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncHJvZmlsZUltYWdlJywgeyByZXF1aXJlZDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb2RpZmllciBzYSBwaG90byBkZSBwcm9maWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAvLyByZWY9e2ltYWdlVXBsb2FkZXJ9XHJcbiAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUltYWdlVXBsb2FkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFVSTCBkZSBsJmFwb3M7aW1hZ2UgZGUgcHJvZmlsICYjNDA7IGpwZywgcG5nLCBnaWYgJiM0MTtcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgbXQtMSAke1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLnByb2ZpbGVJbWFnZSA/ICdpbnZhbGlkLWlucHV0JyA6ICd2YWxpZC1pbnB1dCdcclxuICAgICAgICAgICAgICB9IGlucHV0YH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL2V4YW1wbGUuY29tL2ltYWdlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwcm9maWxlSW1hZ2UnLCB7IHJlcXVpcmVkOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc21cIj5OT008L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Nvbm5lY3RlZFVzZXI/Lm5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgbXQtMSAke1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLm5hbWUgPyAnaW52YWxpZC1pbnB1dCcgOiAndmFsaWQtaW5wdXQnXHJcbiAgICAgICAgICAgICAgfSBpbnB1dGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5VbiBub20gZXN0IHJlcXVpcyAhPC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+RU1BSUw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Nvbm5lY3RlZFVzZXI/LmVtYWlsIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIG10LTEgJHtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA/ICdpbnZhbGlkLWlucHV0JyA6ICd2YWxpZC1pbnB1dCdcclxuICAgICAgICAgICAgICB9IGlucHV0YH1cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obmRvZUBtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogJ1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rLlthLXpdezIsNH0kJyxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+VW5lIGFkcmVzc2UgbWFpbCBlc3QgcmVxdWlzZSAhPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc21cIj5NT1QgREUgUEFTU0U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Nvbm5lY3RlZFVzZXI/LnBhc3N3b3JkIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIG10LTEgJHtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA/ICdpbnZhbGlkLWlucHV0JyA6ICd2YWxpZC1pbnB1dCdcclxuICAgICAgICAgICAgICB9IGlucHV0YH1cclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKipcIlxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5VbiBtb3QgZGUgcGFzc2UgZXN0IHJlcXVpczwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8Rm9ybUJ1dHRvbiB0ZXh0PVwiTWV0dHJlIMOgIGpvdXJcIiBsb2FkaW5nPXtpc1VzZXJVcGRhdGluZ30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgIDxEZWxldGVCdXR0b24gdGV4dD1cIlN1cHByaW1lciBsZSBjb21wdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTQgcm91bmRlZC1tZCBiZy1yZWQtNTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICA8WENpcmNsZUljb25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXJlZC00MDBcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c3VjY2Vzc01lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXQtNCByb3VuZGVkLW1kIGJnLWdyZWVuLTUwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JlZW4tNDAwXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyZWVuLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7c3VjY2Vzc01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==