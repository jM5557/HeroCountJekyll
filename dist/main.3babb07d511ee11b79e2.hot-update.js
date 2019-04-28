webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ComparisonItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ComparisonItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _data_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/movies.js */ \"./src/data/movies.js\");\n/* harmony import */ var _RelatedCharacterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelatedCharacterList */ \"./src/components/RelatedCharacterList.vue\");\n/* harmony import */ var _TrailerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrailerModal */ \"./src/components/TrailerModal.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'comparison-item',\n  props: ['item', 'handleCharacterClick'],\n  data: function data() {\n    return {\n      movieList: [],\n      selectedImgToDisplay: this.item.comparison.film.imageUrl,\n      viewMode: 'MCU',\n      selectedMovie: null\n    };\n  },\n  watch: {\n    item: function item(newValue, oldValue) {\n      this.selectedImgToDisplay = newValue.comparison.film.imageUrl;\n      if (this.viewMode !== 'MCU') this.viewMode = 'MCU';\n    }\n  },\n  computed: {\n    moviesWithCharacter: function moviesWithCharacter() {\n      var temp = [];\n\n      for (var i = 0; i < _data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList.length; i++) {\n        for (var j = 0; j < _data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i].characterID.length; j++) {\n          if (_data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i].characterID[j] == this.item.id) {\n            temp.push(_data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i]);\n          }\n        }\n      }\n\n      return temp;\n    }\n  },\n  methods: {\n    setSelectedMovie: function setSelectedMovie(movie) {\n      this.selectedMovie = movie;\n    },\n    toggleViewMode: function toggleViewMode() {\n      if (this.viewMode === 'MCU') {\n        this.viewMode = 'COMIC';\n        this.selectedImgToDisplay = this.item.comparison.comic.imageUrl;\n      } else {\n        this.viewMode = 'MCU';\n        this.selectedImgToDisplay = this.item.comparison.film.imageUrl;\n      }\n    },\n    getFileName: _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getImageWithLocalPath\"]\n  },\n  components: {\n    RelatedCharacterList: _RelatedCharacterList__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    TrailerModal: _TrailerModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ComparisonItem.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ComparisonItem.vue?vue&type=template&id=f5230228&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ComparisonItem.vue?vue&type=template&id=f5230228& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"comparison-item-wrapper\" } }, [\n    _c(\n      \"div\",\n      {\n        style:\n          \"background-image: url('\" +\n          _vm.getFileName(_vm.selectedImgToDisplay) +\n          \"');\",\n        attrs: { id: \"comparison-item-inner-wrapper\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"toggle-view-wrapper\" }, [\n          _vm._v(\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\\tMCU\\n\\n\\t\\t\\t\\t\"),\n          _c(\"button\", {\n            class: _vm.viewMode == \"MCU\" ? \"toggle-view\" : \"toggle-view on\",\n            on: {\n              click: function($event) {\n                return _vm.toggleViewMode()\n              }\n            }\n          }),\n          _vm._v(\"\\n\\n\\t\\t\\t\\tComic\\n\\n\\t\\t\\t\")\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { id: \"comparison-item-stats\" } },\n      [\n        _c(\"p\", { staticClass: \"main-stats name\" }, [\n          _vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(_vm.item.name) + \"\\n\\t\\t\\t\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"main-stats alias\" }, [\n          _vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(_vm.item.alias) + \"\\n\\t\\t\\t\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"char-content-wrapper right\" }, [\n          _c(\"h2\", [_vm._v(\"Appearances\")]),\n          _vm._v(\" \"),\n          _c(\n            \"ul\",\n            { staticClass: \"related-movies\" },\n            _vm._l(_vm.moviesWithCharacter, function(movie) {\n              return _c(\n                \"li\",\n                {\n                  directives: [\n                    {\n                      name: \"scroll-to\",\n                      rawName: \"v-scroll-to\",\n                      value: \"#all-chars\",\n                      expression: \"'#all-chars'\"\n                    }\n                  ],\n                  staticClass: \"movies main-stats\",\n                  on: {\n                    click: function($event) {\n                      return _vm.setSelectedMovie(movie)\n                    }\n                  }\n                },\n                [\n                  _c(\"div\", {\n                    staticClass: \"related-movie-thumb\",\n                    style:\n                      \"background-image: url('\" +\n                      _vm.getFileName(movie.poster) +\n                      \"');\"\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"h3\", [\n                    _vm._v(\n                      \"\\n\\t\\t\\t\\t\\t\\t\\t\" + _vm._s(movie.name) + \"\\n\\t\\t\\t\\t\\t\\t\"\n                    )\n                  ])\n                ]\n              )\n            }),\n            0\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"RelatedCharacterList\", {\n          attrs: {\n            item: _vm.item,\n            handleCharacterClick: _vm.handleCharacterClick\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"TrailerModal\", { attrs: { selectedMovie: _vm.selectedMovie } })\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ComparisonItem.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})