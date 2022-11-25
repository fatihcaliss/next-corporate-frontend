(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\fcal\u0131s\\Desktop\\final online infinity case\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyApp = ({
  Component,
  pageProps
}) => {
  // Extract the data we need
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, undefined);
  }

  const {
    metadata,
    favicon,
    metaTitleSuffix
  } = global.attributes;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(favicon.data.attributes.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_5__.DefaultSeo, {
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(image => {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async appContext => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(appContext);
  const globalLocale = await (0,utils_api__WEBPACK_IMPORTED_MODULE_7__.getGlobalData)(appContext.router.locale);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalLocale
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

async function getPageData({
  slug,
  locale,
  preview
}) {
  var _pagesData$data;

  // Find the pages that match this slug
  const gqlEndpoint = getStrapiURL("/graphql");
  const pagesRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetPages(
          $slug: String!
          $publicationState: PublicationState!
          $locale: I18NLocaleCode!
        ) {        
          pages(
            filters: { slug: { eq: $slug } }
            publicationState: $publicationState
            locale: $locale
          ) {
            data {
              id
              attributes {
                locale
                localizations {
                  data {
                    id
                    attributes {
                      locale
                    }
                  }
                }
                slug
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                contentSections {
                  __typename
                  ... on ComponentSectionsBottomActions {
                    id
                    title
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                  }
                  ... on ComponentSectionsHero {
                    id
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                    title
                    description
                    label
                    picture {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsFeatureColumnsGroup {
                    id
                    features {
                      id
                      description
                      icon {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsFeatureRowsGroup {
                    id
                    features {
                      id
                      description
                      link {
                        id
                        newTab
                        text
                        url
                      }
                      media {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsTestimonialsGroup {
                    id
                    description
                    link {
                      id
                      newTab
                      text
                      url
                    }
                    logos {
                      id
                      title
                      logo {
                        ...FileParts
                      }
                    }
                    testimonials {
                      id
                      logo {
                        ...FileParts
                      }
                      picture {
                        ...FileParts
                      }
                      text
                      authorName
                      authorTitle
                      link
                    }
                    title
                  }
                  ... on ComponentSectionsLargeVideo {
                    id
                    description
                    title
                    poster {
                      ...FileParts
                    }
                    video {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsRichText {
                    id
                    content
                  }
                  ... on ComponentSectionsPricing {
                    id
                    title
                    plans {
                      description
                      features {
                        id
                        name
                      }
                      id
                      isRecommended
                      name
                      price
                      pricePeriod
                    }
                  }
                  ... on ComponentSectionsLeadForm {
                    id
                    emailPlaceholder
                    location
                    submitButton {
                      id
                      text
                      type
                    }
                    title
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale
      }
    })
  });
  const pagesData = await pagesRes.json(); // Make sure we found something, otherwise return null

  if (((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pagesData.data.pages.data[0];
} // Get site data from Strapi (metadata, navbar, footer...)

async function getGlobalData(locale) {
  const gqlEndpoint = getStrapiURL("/graphql");
  const globalRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetGlobal($locale: I18NLocaleCode!) {
          global(locale: $locale) {
            data {
              id
              attributes {
                favicon {
                  ...FileParts
                }
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                metaTitleSuffix
                notificationBanner {
                  type
                  text
                }
                navbar {
                  logo {
                    ...FileParts
                  }
                  links {
                    id
                    url
                    newTab
                    text
                  }
                  button {
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
                footer {
                  logo {
                    ...FileParts
                  }
                  smallText
                  columns {
                    id
                    title
                    links {
                      id
                      url
                      newTab
                      text
                    }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        locale
      }
    })
  });
  const global = await globalRes.json();
  return global.data.global;
}

/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${url}`;
}

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9tZWRpYS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtY29ycG9yYXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJNeUFwcCIsImdsb2JhbCIsIm1ldGFkYXRhIiwiZmF2aWNvbiIsIm1ldGFUaXRsZVN1ZmZpeCIsImF0dHJpYnV0ZXMiLCJnZXRTdHJhcGlNZWRpYSIsImRhdGEiLCJ1cmwiLCJtZXRhRGVzY3JpcHRpb24iLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaGFyZUltYWdlIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkVHlwZSIsInR3aXR0ZXJDYXJkVHlwZSIsImhhbmRsZSIsInR3aXR0ZXJVc2VybmFtZSIsImFwcENvbnRleHQiLCJhcHBQcm9wcyIsImdsb2JhbExvY2FsZSIsImdldEdsb2JhbERhdGEiLCJyb3V0ZXIiLCJsb2NhbGUiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImpzb24iLCJnZXRQYWdlRGF0YSIsInNsdWciLCJwcmV2aWV3IiwiZ3FsRW5kcG9pbnQiLCJwYWdlc1JlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJwdWJsaWNhdGlvblN0YXRlIiwicGFnZXNEYXRhIiwicGFnZXMiLCJsZW5ndGgiLCJnbG9iYWxSZXMiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7OztBQ0FoQzs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxH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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BdEx5QjtBQXVMbkJDLGVBQVMsRUFBRTtBQUNUVCxZQURTO0FBRVRVLHdCQUFnQixFQUFFVCxPQUFPLEdBQUcsU0FBSCxHQUFlLE1BRi9CO0FBR1R4QjtBQUhTO0FBdkxRLEtBQWY7QUFMa0MsR0FBZCxDQUE1QjtBQW9NQSxRQUFNa0MsU0FBUyxHQUFHLE1BQU1SLFFBQVEsQ0FBQ0wsSUFBVCxFQUF4QixDQXZNMkQsQ0F3TTNEOztBQUNBLE1BQUksb0JBQUFhLFNBQVMsQ0FBQ3ZELElBQVYsb0VBQWdCd0QsS0FBaEIsS0FBeUIsSUFBekIsSUFBaUNELFNBQVMsQ0FBQ3ZELElBQVYsQ0FBZXdELEtBQWYsQ0FBcUJDLE1BQXJCLEtBQWdDLENBQXJFLEVBQXdFO0FBQ3RFLFdBQU8sSUFBUDtBQUNELEdBM00wRCxDQTZNM0Q7OztBQUNBLFNBQU9GLFNBQVMsQ0FBQ3ZELElBQVYsQ0FBZXdELEtBQWYsQ0FBcUJ4RCxJQUFyQixDQUEwQixDQUExQixDQUFQO0FBQ0QsQyxDQUVEOztBQUNPLGVBQWVtQixhQUFmLENBQTZCRSxNQUE3QixFQUFxQztBQUMxQyxRQUFNeUIsV0FBVyxHQUFHeEIsWUFBWSxDQUFDLFVBQUQsQ0FBaEM7QUFDQSxRQUFNb0MsU0FBUyxHQUFHLE1BQU10QixLQUFLLENBQUNVLFdBQUQsRUFBYztBQUN6Q0UsVUFBTSxFQUFFLE1BRGlDO0FBRXpDakIsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGZ0M7QUFLekNrQixRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxXQUFLLEVBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BM0V5QjtBQTRFbkJDLGVBQVMsRUFBRTtBQUNUaEM7QUFEUztBQTVFUSxLQUFmO0FBTG1DLEdBQWQsQ0FBN0I7QUF1RkEsUUFBTTNCLE1BQU0sR0FBRyxNQUFNZ0UsU0FBUyxDQUFDaEIsSUFBVixFQUFyQjtBQUNBLFNBQU9oRCxNQUFNLENBQUNNLElBQVAsQ0FBWU4sTUFBbkI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUM5Vk0sU0FBU0ssY0FBVCxDQUF3QkUsR0FBeEIsRUFBNkI7QUFDbEMsTUFBSUEsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDZixXQUFPLElBQVA7QUFDRCxHQUhpQyxDQUtsQzs7O0FBQ0EsTUFBSUEsR0FBRyxDQUFDMEQsVUFBSixDQUFlLE1BQWYsS0FBMEIxRCxHQUFHLENBQUMwRCxVQUFKLENBQWUsSUFBZixDQUE5QixFQUFvRDtBQUNsRCxXQUFPMUQsR0FBUDtBQUNELEdBUmlDLENBVWxDOzs7QUFDQSxTQUFRLEdBQ051QixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMEJBQVosSUFBMEMsdUJBQzNDLEdBQUV6QixHQUFJLEVBRlA7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwidXRpbHMvbWVkaWFcIlxyXG5pbXBvcnQgeyBnZXRHbG9iYWxEYXRhIH0gZnJvbSBcInV0aWxzL2FwaVwiXHJcbmltcG9ydCBcIkAvc3R5bGVzL2luZGV4LmNzc1wiXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAvLyBFeHRyYWN0IHRoZSBkYXRhIHdlIG5lZWRcclxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXHJcbiAgaWYgKGdsb2JhbCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG1ldGFkYXRhLCBmYXZpY29uLCBtZXRhVGl0bGVTdWZmaXggfSA9IGdsb2JhbC5hdHRyaWJ1dGVzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogRmF2aWNvbiAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZmF2aWNvbi5kYXRhLmF0dHJpYnV0ZXMudXJsKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiBHbG9iYWwgc2l0ZSBtZXRhZGF0YSAqL31cclxuICAgICAgPERlZmF1bHRTZW9cclxuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke21ldGFUaXRsZVN1ZmZpeH1gfVxyXG4gICAgICAgIHRpdGxlPVwiUGFnZVwiXHJcbiAgICAgICAgZGVzY3JpcHRpb249e21ldGFkYXRhLm1ldGFEZXNjcmlwdGlvbn1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIGltYWdlczogT2JqZWN0LnZhbHVlcyhcclxuICAgICAgICAgICAgbWV0YWRhdGEuc2hhcmVJbWFnZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0c1xyXG4gICAgICAgICAgKS5tYXAoKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdXJsOiBnZXRTdHJhcGlNZWRpYShpbWFnZS51cmwpLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBjYXJkVHlwZTogbWV0YWRhdGEudHdpdHRlckNhcmRUeXBlLFxyXG4gICAgICAgICAgaGFuZGxlOiBtZXRhZGF0YS50d2l0dGVyVXNlcm5hbWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgey8qIERpc3BsYXkgdGhlIGNvbnRlbnQgKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XHJcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIFtbLi4uc2x1Z11dIHBhZ2VzIHN0aWxsIGdldCBTU0cuXHJcbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXHJcbiAgY29uc3QgZ2xvYmFsTG9jYWxlID0gYXdhaXQgZ2V0R2xvYmFsRGF0YShhcHBDb250ZXh0LnJvdXRlci5sb2NhbGUpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBQcm9wcyxcclxuICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICBnbG9iYWw6IGdsb2JhbExvY2FsZSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCkge1xyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcclxuICB9JHtwYXRofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcclxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG5cclxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxyXG5cclxuICAvLyBIYW5kbGUgcmVzcG9uc2VcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2x1ZyBUaGUgcGFnZSdzIHNsdWdcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIFRoZSBjdXJyZW50IGxvY2FsZSBzcGVjaWZpZWQgaW4gcm91dGVyLmxvY2FsZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmlldyByb3V0ZXIgaXNQcmV2aWV3IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEoeyBzbHVnLCBsb2NhbGUsIHByZXZpZXcgfSkge1xyXG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXHJcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxyXG4gIGNvbnN0IHBhZ2VzUmVzID0gYXdhaXQgZmV0Y2goZ3FsRW5kcG9pbnQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcclxuICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgIG1pbWVcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICBmb3JtYXRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcXVlcnkgR2V0UGFnZXMoXHJcbiAgICAgICAgICAkc2x1ZzogU3RyaW5nIVxyXG4gICAgICAgICAgJHB1YmxpY2F0aW9uU3RhdGU6IFB1YmxpY2F0aW9uU3RhdGUhXHJcbiAgICAgICAgICAkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSFcclxuICAgICAgICApIHsgICAgICAgIFxyXG4gICAgICAgICAgcGFnZXMoXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHsgc2x1ZzogeyBlcTogJHNsdWcgfSB9XHJcbiAgICAgICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6ICRwdWJsaWNhdGlvblN0YXRlXHJcbiAgICAgICAgICAgIGxvY2FsZTogJGxvY2FsZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVcclxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxyXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXHJcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGVudFNlY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNCb3R0b21BY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zSGVybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlQ29sdW1uc0dyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc1ByaWNpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBwbGFucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNSZWNvbW1lbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlUGVyaW9kXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xlYWRGb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICBgLFxyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6IHByZXZpZXcgPyBcIlBSRVZJRVdcIiA6IFwiTElWRVwiLFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IHBhZ2VzUmVzLmpzb24oKVxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxyXG4gIGlmIChwYWdlc0RhdGEuZGF0YT8ucGFnZXMgPT0gbnVsbCB8fCBwYWdlc0RhdGEuZGF0YS5wYWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xyXG4gIHJldHVybiBwYWdlc0RhdGEuZGF0YS5wYWdlcy5kYXRhWzBdXHJcbn1cclxuXHJcbi8vIEdldCBzaXRlIGRhdGEgZnJvbSBTdHJhcGkgKG1ldGFkYXRhLCBuYXZiYXIsIGZvb3Rlci4uLilcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdsb2JhbERhdGEobG9jYWxlKSB7XHJcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxyXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoKGdxbEVuZHBvaW50LCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgZnJhZ21lbnQgRmlsZVBhcnRzIG9uIFVwbG9hZEZpbGVFbnRpdHlSZXNwb25zZSB7XHJcbiAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICBtaW1lXHJcbiAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgZm9ybWF0c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHF1ZXJ5IEdldEdsb2JhbCgkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEpIHtcclxuICAgICAgICAgIGdsb2JhbChsb2NhbGU6ICRsb2NhbGUpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICAgIGZhdmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhIHtcclxuICAgICAgICAgICAgICAgICAgbWV0YVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBzaGFyZUltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB0d2l0dGVyQ2FyZFR5cGVcclxuICAgICAgICAgICAgICAgICAgdHdpdHRlclVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXRhVGl0bGVTdWZmaXhcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzbWFsbFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sdW1ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgYCxcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZ2xvYmFsUmVzLmpzb24oKVxyXG4gIHJldHVybiBnbG9iYWwuZGF0YS5nbG9iYWxcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEodXJsKSB7XHJcbiAgaWYgKHVybCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIHRoZSBmdWxsIFVSTCBpZiB0aGUgbWVkaWEgaXMgaG9zdGVkIG9uIGFuIGV4dGVybmFsIHByb3ZpZGVyXHJcbiAgaWYgKHVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSB8fCB1cmwuc3RhcnRzV2l0aChcIi8vXCIpKSB7XHJcbiAgICByZXR1cm4gdXJsXHJcbiAgfVxyXG5cclxuICAvLyBPdGhlcndpc2UgcHJlcGVuZCB0aGUgVVJMIHBhdGggd2l0aCB0aGUgU3RyYXBpIFVSTFxyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcclxuICB9JHt1cmx9YFxyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9