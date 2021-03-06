webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/AllCharactersList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AllCharactersList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _ComparisonItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComparisonItem */ \"./src/components/ComparisonItem.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar CharacterList = __webpack_require__(/*! ./../../_data/characters.json */ \"./_data/characters.json\");\n\n\n\n\nvar MyComponent = vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].extend({\n  template: '<div v-on:click=\"world\">Hello!</div>',\n  methods: {\n    world: function world() {\n      console.log('world');\n    }\n  }\n});\nvar component = new MyComponent().$mount();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'all-characters-list',\n  data: function data() {\n    return {\n      CharacterList: CharacterList.characterList,\n      selectedCharacter: CharacterList.characterList[0]\n    };\n  },\n  methods: {\n    setSelectedCharacter: function setSelectedCharacter(character) {\n      if (this.selectedCharacter !== null && this.selectedCharacter.id === character.id) {\n        this.selectedCharacter = null;\n        return;\n      }\n\n      this.selectedCharacter = character;\n      createNewBox();\n    },\n    getCharacterImagePath: _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getImageWithLocalPath\"]\n  },\n  components: {\n    ComparisonItem: _ComparisonItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/AllCharactersList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})