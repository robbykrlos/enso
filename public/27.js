webpackJsonp([27],{

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1353)
/* template */
var __vue_template__ = __webpack_require__(1354)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/administration/owners/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc0260d2", Component.options)
  } else {
    hotAPI.reload("data-v-fc0260d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1097)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1099)
/* template */
var __vue_template__ = __webpack_require__(1129)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b52e927", Component.options)
  } else {
    hotAPI.reload("data-v-1b52e927", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ae969662", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.vue-form {\n    margin-bottom: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/VueForm.vue"],"names":[],"mappings":";AAuPA;IACA,iBAAA;CACA","file":"VueForm.vue","sourcesContent":["<template>\n\n    <div>\n        <h5 class=\"title is-5\"\n            v-if=\"data.icon || data.title\">\n            <span class=\"icon\"\n                v-if=\"data.icon\">\n                <i :class=\"data.icon\"></i>\n            </span>\n            <span\n                v-if=\"data.title\">\n                {{ data.title }}\n            </span>\n            <hr>\n        </h5>\n        <form @submit.prevent=\"submit()\"\n            class=\"vue-form\">\n            <div class=\"columns is-multiline\">\n                <div v-for=\"field in data.fields\"\n                    class=\"column\"\n                    :key=\"field.name\"\n                    :class=\"columnSize\"\n                    v-if=\"!field.meta.hidden\">\n                    <div class=\"field\">\n                        <label class=\"label\">\n                            {{ __(field.label) }}\n                            <p v-if=\"errors.has(field.name)\"\n                                class=\"help is-danger is-pulled-right\">\n                                {{ errors.get(field.name) }}\n                            </p>\n                        </label>\n                        <span v-if=\"field.meta.custom\">\n                            <slot :name=\"field.name\"\n                                :field=\"field\"\n                                :errors=\"errors\">\n                            </slot>\n                        </span>\n                        <span v-else>\n                            <vue-form-input v-if=\"field.meta.type === 'input'\"\n                                :field=\"field\"\n                                @update=\"errors.clear(field.name)\"\n                                :has-error=\"errors.has(field.name)\">\n                            </vue-form-input>\n                            <vue-select v-if=\"field.meta.type === 'select'\"\n                                :has-error=\"errors.has(field.name)\"\n                                @input=\"errors.clear(field.name);\"\n                                v-model=\"field.value\"\n                                :options=\"field.meta.options\"\n                                :key-map=\"field.meta.keyMap\"\n                                :source=\"field.meta.source\"\n                                :multiple=\"field.meta.multiple\"\n                                :disabled=\"field.meta.disabled\">\n                            </vue-select>\n                            <datepicker v-if=\"field.meta.type === 'datepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                :time=\"field.meta.time\"\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <datepicker v-if=\"field.meta.type === 'timepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                time-only\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <div class=\"control has-icons-right\"\n                                v-if=\"field.meta.type === 'textarea'\">\n                                <textarea @input=\"errors.clear(field.name)\"\n                                    class=\"textarea\"\n                                    :class=\"{ 'is-danger': errors.has(field.name) }\"\n                                    v-model=\"field.value\"\n                                    :rows=\"field.meta.rows\"\n                                    :disabled=\"field.meta.disabled\">\n                                </textarea>\n                                <span class=\"icon is-small is-right has-text-danger\"\n                                    v-if=\"errors.has(field.name)\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <button class=\"button\"\n                v-if=\"data.actions.destroy\"\n                :disabled=\"data.actions.destroy.forbidden\"\n                :class=\"data.actions.destroy.button.class\"\n                @click.prevent=\"showModal = true\">\n                <span>{{ __(data.actions.destroy.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.destroy.button.icon\"></i>\n                </span>\n            </button>\n            <button class=\"button\"\n                :class=\"data.actions.create.button.class\"\n                @click.prevent=\"create()\"\n                v-if=\"data.actions.create\"\n                :disabled=\"data.actions.create.forbidden\">\n                <span>{{ __(data.actions.create.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.create.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.store.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.store\"\n                :disabled=\"data.actions.store.forbidden\">\n                <span>{{ __(data.actions.store.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.store.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.update.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.update\"\n                :disabled=\"data.actions.update.forbidden\">\n                <span>{{ __(data.actions.update.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.update.button.icon\"></i>\n                </span>\n            </button>\n            <div class=\"is-clearfix\"></div>\n        </form>\n        <modal v-if=\"data.actions.destroy\"\n            :show=\"showModal\"\n            :__=\"__\"\n            :message=\"data.actions.destroy.button.message\"\n            @cancel-action=\"showModal = false\"\n            @commit-action=\"destroy()\">\n        </modal>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters } from 'vuex';\nimport Errors from './classes/Errors';\nimport Modal from './Modal.vue';\nimport VueSelect from './VueSelect.vue';\nimport Datepicker from './Datepicker.vue';\nimport VueFormInput from './VueFormInput.vue';\n\nexport default {\n    name: 'VueForm',\n\n    components: {\n        Modal, VueSelect, Datepicker, VueFormInput,\n    },\n\n    props: {\n        data: {\n            type: Object,\n            required: true,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            showModal: false,\n            errors: new Errors(),\n        };\n    },\n\n    computed: {\n        ...mapGetters('locale', ['__']),\n        columnSize() {\n            return `is-${parseInt(12 / this.data.columns, 10)}`;\n        },\n        path() {\n            return this.data.method === 'post'\n                ? this.data.actions.store.path\n                : this.data.actions.update.path;\n        },\n    },\n\n    methods: {\n        create() {\n            this.$emit('create');\n            this.$router.push({ name: this.data.actions.create.route });\n        },\n        submit() {\n            this.loading = true;\n\n            axios[this.data.method](this.path, this.formData()).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('submit');\n\n                if (data.redirect) {\n                    this.$router.push({\n                        name: data.redirect,\n                        params: { id: data.id },\n                    });\n                }\n            }).catch((error) => {\n                const { status, data } = error.response;\n                this.loading = false;\n\n                if (status === 422) {\n                    this.errors.set(data.errors);\n\n                    return;\n                }\n\n                this.handleError(error);\n            });\n        },\n        formData() {\n            return this.data.fields.reduce((object, field) => {\n                object[field.name] = field.value;\n                return object;\n            }, { _params: this.params });\n        },\n        destroy() {\n            this.showModal = false;\n            this.loading = true;\n\n            axios.delete(this.data.actions.destroy.path).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('destroy');\n\n                if (data.redirect) {\n                    this.$router.push({ name: data.redirect });\n                }\n            }).catch((error) => {\n                this.loading = false;\n                this.handleError(error);\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.vue-form {\n        margin-bottom: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Errors__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__VueSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Datepicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueForm',

    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a, VueSelect: __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue___default.a, Datepicker: __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue___default.a, VueFormInput: __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default.a
    },

    props: {
        data: {
            type: Object,
            required: true
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            loading: false,
            showModal: false,
            errors: new __WEBPACK_IMPORTED_MODULE_1__classes_Errors__["a" /* default */]()
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        columnSize: function columnSize() {
            return 'is-' + parseInt(12 / this.data.columns, 10);
        },
        path: function path() {
            return this.data.method === 'post' ? this.data.actions.store.path : this.data.actions.update.path;
        }
    }),

    methods: {
        create: function create() {
            this.$emit('create');
            this.$router.push({ name: this.data.actions.create.route });
        },
        submit: function submit() {
            var _this = this;

            this.loading = true;

            axios[this.data.method](this.path, this.formData()).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                toastr.success(data.message);
                _this.$emit('submit');

                if (data.redirect) {
                    _this.$router.push({
                        name: data.redirect,
                        params: { id: data.id }
                    });
                }
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;

                _this.loading = false;

                if (status === 422) {
                    _this.errors.set(data.errors);

                    return;
                }

                _this.handleError(error);
            });
        },
        formData: function formData() {
            return this.data.fields.reduce(function (object, field) {
                object[field.name] = field.value;
                return object;
            }, { _params: this.params });
        },
        destroy: function destroy() {
            var _this2 = this;

            this.showModal = false;
            this.loading = true;

            axios.delete(this.data.actions.destroy.path).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loading = false;
                toastr.success(data.message);
                _this2.$emit('destroy');

                if (data.redirect) {
                    _this2.$router.push({ name: data.redirect });
                }
            }).catch(function (error) {
                _this2.loading = false;
                _this2.handleError(error);
            });
        }
    }
});

/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'has',
        value: function has(field) {
            return Object.keys(this.errors).includes(field);
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.has(field) ? this.errors[field][0] : null;
        }
    }, {
        key: 'set',
        value: function set(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (this.has(field)) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.errors, field);
            }
        }
    }, {
        key: 'empty',
        value: function empty() {
            var _this = this;

            Object.keys(this.errors).forEach(function (field) {
                return _this.clear(field);
            });
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1102)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1104)
/* template */
var __vue_template__ = __webpack_require__(1105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ddb382a", Component.options)
  } else {
    hotAPI.reload("data-v-7ddb382a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("580eee24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ __(message || \"Are you sure ?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ __(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ __(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        __: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            default: null
        },
        __: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn",
        "leave-active-class": "animated fadeOut"
      }
    },
    [
      _vm.show
        ? _c(
            "div",
            { staticClass: "modal", class: { "is-active": _vm.show } },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "table-modal modal-content" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._t("content", [
                      _c("h5", { staticClass: "subtitle is-5" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.__(_vm.message || "Are you sure ?")) +
                            "\n                    "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "level" }, [
                      _c("div", { staticClass: "level-left" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "level-right" }, [
                        _c(
                          "div",
                          { staticClass: "level-item" },
                          [
                            _vm._t("controls", [
                              _c(
                                "button",
                                {
                                  staticClass: "button is-success",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("cancel-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                      " +
                                      _vm._s(_vm.__("Cancel")) +
                                      "\n                                  "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "button is-danger has-margin-left-small",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("commit-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.__("Yes")) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ])
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ddb382a", module.exports)
  }
}

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1107)
  __webpack_require__(1109)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1111)
/* template */
var __vue_template__ = __webpack_require__(1112)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73076e9f", Component.options)
  } else {
    hotAPI.reload("data-v-73076e9f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5079f294", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],"names":[],"mappings":"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","file":"vue-multiselect.min.css","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes a{0%{transform:rotate(0)}to{transform:rotate(2turn)}}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56cc0532", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px;\n}\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px;\n}\ndiv.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5;\n}\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800;\n}\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px;\n}\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px;\n}\ndiv.vue-select input[type=text].multiselect__input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none;\n}\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px;\n}\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px;\n}\ndiv.vue-select .multiselect__select:before {\n  top: 70%;\n}\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px;\n}\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px;\n}\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px;\n}\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.multiselect__clear:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.multiselect__clear:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSelect.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAAE;AAErB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;CAAE;AACrB;IACE,sBAAsB;CAAE;AAE5B;EACE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CAAE;AAExB;EACE,+BAA+B;EAC/B,gCAAgC;CAAE;AAEpC;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,SAAS;CAAE;AAEb;EACE,aAAa;EACb,YAAY;CAAE;AAEhB;EACE,2BAA2B;CAAE;AAE/B;EACE,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AAEf;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"VueSelect.vue","sourcesContent":[".vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px; }\n\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px; }\n  div.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5; }\n\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800; }\n\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px; }\n\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px; }\n\ndiv.vue-select input[type=text].multiselect__input {\n  box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none; }\n\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px; }\n\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px; }\n\ndiv.vue-select .multiselect__select:before {\n  top: 70%; }\n\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px; }\n\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px; }\n\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n\n.multiselect__clear:before {\n  transform: rotate(45deg); }\n\n.multiselect__clear:after {\n  transform: rotate(-45deg); }\n\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a },

    props: {
        value: {
            default: null
        },
        source: {
            type: String,
            default: null
        },
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        keyMap: {
            type: String,
            default: 'number'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        taggable: {
            type: Boolean,
            default: false
        },
        hasError: {
            type: Boolean,
            default: false
        },
        params: {
            type: Object,
            default: null
        },
        pivotParams: {
            type: Object,
            default: null
        },
        customParams: {
            type: Object,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Please choose'
        },
        labels: {
            type: Object,
            default: function _default() {
                return {
                    selected: 'Selected',
                    select: 'Press enter to select',
                    deselect: 'Press enter to deselect',
                    noResult: 'No Elements Found'
                };
            }
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('locale', ['__']), {
        isServerSide: function isServerSide() {
            return this.source !== null;
        },
        hasSelection: function hasSelection() {
            return this.multiple && this.value.length || !this.multiple && this.value !== null;
        },
        optionKeys: function optionKeys() {
            return this.keyMap === 'number' ? Object.keys(this.optionList).map(Number) : Object.keys(this.optionList);
        }
    }),

    filters: {
        highlight: function highlight(option, query) {
            if (!option) {
                return option;
            }

            query.split(' ').filter(function (word) {
                return word.length;
            }).forEach(function (word) {
                option = option.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>');
            });

            return option;
        }
    },

    watch: {
        options: {
            handler: function handler() {
                this.optionList = this.options;
            },

            deep: true
        },
        params: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        pivotParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        customParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        }
    },

    created: function created() {
        this.getOptions = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(this.getOptions, 500);
    },
    data: function data() {
        return {
            optionList: this.options,
            loading: false,
            query: ''
        };
    },


    methods: {
        getOptions: function getOptions() {
            var _this = this;

            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(route(this.source, [], null), {
                params: this.getParams()
            }).then(function (response) {
                _this.processOptions(response);
                _this.loading = false;
            }).catch(function (error) {
                _this.loading = true;
                _this.handleError(error);
            });
        },
        getParams: function getParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value
            };
        },
        processOptions: function processOptions(response) {
            this.optionList = response.data;

            if (!this.query && !this.valueIsMatched()) {
                this.clear();
            }
        },
        valueIsMatched: function valueIsMatched() {
            var self = this;

            if (!this.multiple) {
                return this.optionKeys.filter(function (option) {
                    return option === self.value;
                }).length > 0;
            }

            return this.optionKeys.filter(function (option) {
                return self.value.filter(function (val) {
                    return val === option;
                }).length > 0;
            }).length > 0;
        },
        customLabel: function customLabel(option) {
            return this.optionList[option];
        },
        update: function update() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.$emit('input', _this2.value);
            });
        },
        clear: function clear() {
            this.$emit('input', this.multiple ? [] : null);
        }
    },

    mounted: function mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
    }
});

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-select" },
    [
      _c(
        "multiselect",
        {
          class: { "has-error": _vm.hasError },
          attrs: {
            value: _vm.value,
            searchable: "",
            "allow-empty": "",
            disabled: _vm.disabled,
            "internal-search": !_vm.isServerSide,
            multiple: _vm.multiple,
            taggable: _vm.taggable,
            "clear-on-select": !_vm.multiple,
            "close-on-select": !_vm.multiple,
            "select-label": _vm.__(_vm.labels.select),
            "deselect-label": _vm.__(_vm.labels.deselect),
            "selected-label": _vm.__(_vm.labels.selected),
            placeholder: _vm.__(_vm.labels.placeholder),
            loading: _vm.loading,
            "options-limit": 100,
            options: _vm.optionKeys,
            "custom-label": _vm.customLabel
          },
          on: {
            "search-change": function($event) {
              _vm.query = $event
              _vm.getOptions()
            },
            tag: function($event) {
              _vm.$emit("tag", $event)
            },
            input: function($event) {
              _vm.$emit("input", $event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(props) {
                return [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.highlight(
                          _vm.optionList[props.option],
                          _vm.query
                        )
                      )
                    }
                  })
                ]
              }
            },
            {
              key: "clear",
              fn: function(props) {
                return !_vm.disabled
                  ? [
                      _vm.hasSelection
                        ? _c("div", {
                            staticClass: "multiselect__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                _vm.clear()
                              }
                            }
                          })
                        : _vm._e()
                    ]
                  : undefined
              }
            }
          ])
        },
        [
          _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.__(_vm.labels.noResult)) +
                "\n        "
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73076e9f", module.exports)
  }
}

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1114)
  __webpack_require__(1116)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1118)
/* template */
var __vue_template__ = __webpack_require__(1120)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/Datepicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d443fe2", Component.options)
  } else {
    hotAPI.reload("data-v-4d443fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1dbb9c30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css", function() {
     var newContent = require("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@-webkit-keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/flatpickr/dist/themes/material_green.css"],"names":[],"mappings":"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D;;EAEE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;;EAEE,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;EAC1B,2BAA2B;MACvB,4BAA4B;UACxB,mBAAmB;CAC5B;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF","file":"material_green.css","sourcesContent":[".flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@-webkit-keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("798d5652", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\na.input-button {\n    cursor: pointer;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Datepicker.vue"],"names":[],"mappings":";AAkHA;IACA,gBAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\n\n    <div class=\"flatpickr\">\n        <div class=\"control has-icons-right\">\n            <input type=\"text\"\n                :placeholder=\"placeholder\"\n                :id=\"'date-input-' + _uid\"\n                :name=\"name\"\n                :value=\"value\"\n                class=\"input control\"\n                :disabled=\"disabled\">\n            <span class=\"icon is-small is-right\">\n                <i class=\"fas fa-clock\"\n                    v-if=\"timeOnly\">\n                </i>\n                <i class=\"fas fa-calendar-alt\" v-else></i>\n            </span>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport Flatpickr from 'flatpickr';\n\n// const FlatpickrL10ns = {\n//     ro: require('flatpickr/dist/l10n/ro.js').ro,\n// };\n// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme\n\nexport default {\n    props: {\n        value: {\n            required: true,\n            default: null,\n            validate(value) {\n                return value === null || typeof value === 'string'\n                        || value instanceof Date || value instanceof Array;\n            },\n        },\n        name: {\n            type: String,\n            default: null,\n        },\n        time: {\n            type: Boolean,\n            default: false,\n        },\n        timeOnly: {\n            type: Boolean,\n            default: false,\n        },\n        placeholder: {\n            type: String,\n            default: 'Select Date', // fixme\n        },\n        disabled: {\n            type: Boolean,\n            default: false,\n        },\n        format: {\n            type: String,\n            default: 'd-m-Y',\n        },\n        inputClass: {\n            type: String,\n            default: 'form-control',\n        },\n    },\n\n    data() {\n        return {\n            picker: null,\n        };\n    },\n\n    computed: {\n        config(self = this) {\n            return {\n                weekNumbers: false,\n                defaultDate: this.value,\n                dateFormat: this.format,\n                allowInput: false,\n                clickOpens: true,\n                noCalendar: this.timeOnly,\n                enableTime: this.time || this.timeOnly,\n                onChange(selectedDates, dateStr) {\n                    self.$emit('input', dateStr);\n                },\n            };\n        },\n    },\n\n    watch: {\n        value(newValue) {\n            this.picker.setDate(newValue);\n        },\n    },\n\n    mounted() {\n        this.picker = new Flatpickr(this.$el.querySelector('input'), this.config);\n    },\n\n    beforeDestroy() {\n        this.picker.destroy();\n    },\n};\n\n</script>\n\n<style src=\"flatpickr/dist/themes/material_green.css\"></style>\n\n<style>\n\n    a.input-button {\n        cursor: pointer;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// const FlatpickrL10ns = {
//     ro: require('flatpickr/dist/l10n/ro.js').ro,
// };
// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            required: true,
            default: null,
            validate: function validate(value) {
                return value === null || typeof value === 'string' || value instanceof Date || value instanceof Array;
            }
        },
        name: {
            type: String,
            default: null
        },
        time: {
            type: Boolean,
            default: false
        },
        timeOnly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Select Date' // fixme
        },
        disabled: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'd-m-Y'
        },
        inputClass: {
            type: String,
            default: 'form-control'
        }
    },

    data: function data() {
        return {
            picker: null
        };
    },


    computed: {
        config: function config() {
            var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

            return {
                weekNumbers: false,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
                noCalendar: this.timeOnly,
                enableTime: this.time || this.timeOnly,
                onChange: function onChange(selectedDates, dateStr) {
                    self.$emit('input', dateStr);
                }
            };
        }
    },

    watch: {
        value: function value(newValue) {
            this.picker.setDate(newValue);
        }
    },

    mounted: function mounted() {
        this.picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(this.$el.querySelector('input'), this.config);
    },
    beforeDestroy: function beforeDestroy() {
        this.picker.destroy();
    }
});

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v3.1.4, @license MIT */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.flatpickr = factory());
}(this, (function () { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function compareDates(date1, date2, timeless) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var getWeek = function (givenDate) {
    var onejan = new Date(givenDate.getFullYear(), 0, 1);
    return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) /
        7);
};
var duration = {
    DAY: 86400000,
};

var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: window && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    getWeek: getWeek,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
};

var pad = function (number) { return ("0" + number).slice(-2); };
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};
function mouseDelta(e) {
    var delta = e.wheelDelta || -e.deltaY;
    return delta >= 0 ? 1 : -1;
}

function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    numInput.type = "text";
    numInput.pattern = "\\d*";
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}

var do_nothing = function () { return undefined; };
var revFormat = {
    D: do_nothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(/pm/i.test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    w: do_nothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date) { return (date.getHours() > 11 ? "PM" : "AM"); },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return date.getFullYear(); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

function FlatpickrInstance(element, instanceConfig) {
    var self = {};
    self.parseDate = parseDate;
    self.formatDate = formatDate;
    self._animationLoop = [];
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar
                    ? self.latestSelectedDateObj || self.config.minDate
                    : undefined);
            }
            updateValue(false);
        }
        self.showTimeInput =
            self.selectedDates.length > 0 || self.config.noCalendar;
        if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
            self.calendarContainer.style.width =
                self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
        }
        if (!self.isMobile)
            positionCalendar();
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function updateTime(e) {
        if (self.config.noCalendar && !self.selectedDates.length) {
            self.setDate(new Date().setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds), false);
            setHoursFromInputs();
            updateValue();
        }
        timeWrapper(e);
        if (self.selectedDates.length === 0)
            return;
        if (!self.minDateHasTime ||
            e.type !== "input" ||
            e.target.value.length >= 2) {
            setHoursFromInputs();
            updateValue();
        }
        else {
            setTimeout(function () {
                setHoursFromInputs();
                updateValue();
            }, 1000);
        }
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === "PM");
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined)
            hours = ampm2military(hours, self.amPM.textContent);
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
            hours = Math.max(hours, self.config.minDate.getHours());
            if (hours === self.config.minDate.getHours())
                minutes = Math.max(minutes, self.config.minDate.getMinutes());
        }
        if (self.config.maxDate &&
            self.maxDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
            hours = Math.min(hours, self.config.maxDate.getHours());
            if (hours === self.config.maxDate.getHours())
                minutes = Math.min(minutes, self.config.maxDate.getMinutes());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date)
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? (12 + hours) % 12 + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = hours >= 12 ? "PM" : "AM";
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);
        if (year.toString().length === 4 || event.key === "Enter") {
            self.currentYearElement.blur();
            if (!/[^\d]/.test(year.toString()))
                changeYear(year);
        }
    }
    function bind(element, event, handler) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler); });
        element.addEventListener(event, handler);
        self._handlers.push({ element: element, event: event, handler: handler });
    }
    function onClick(handler) {
        return function (evt) { return evt.which === 1 && handler(evt); };
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, 300);
        if (self.config.mode === "range" && self.daysContainer)
            bind(self.daysContainer, "mouseover", function (e) {
                return onMouseOver(e.target);
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static)
            bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document.body, "touchstart", documentClick);
        bind(window.document.body, "mousedown", onClick(documentClick));
        bind(self._input, "blur", documentClick);
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "mousedown", onClick(self.open));
        }
        if (self.daysContainer !== undefined) {
            self.monthNav.addEventListener("wheel", function (e) { return e.preventDefault(); });
            bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
            bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "mousedown", onClick(selectDate));
            if (self.config.animate) {
                bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
                bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
            }
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return e.target.select();
            };
            bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
            bind(self.timeContainer, "mousedown", onClick(timeIncrement));
            bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
            bind(self.timeContainer, "input", triggerChange);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "mousedown", onClick(function (e) {
                    updateTime(e);
                    triggerChange();
                }));
            }
        }
    }
    function processPostDayAnimation() {
        self._animationLoop.forEach(function (f) { return f(); });
        self._animationLoop = [];
    }
    function animateDays(e) {
        if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
            switch (e.animationName) {
                case "fpSlideLeft":
                    self.daysContainer.lastChild &&
                        self.daysContainer.lastChild.classList.remove("slideLeftNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .firstChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                case "fpSlideRight":
                    self.daysContainer.firstChild &&
                        self.daysContainer.firstChild.classList.remove("slideRightNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .lastChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                default:
                    break;
            }
        }
    }
    function animateMonths(e) {
        switch (e.animationName) {
            case "fpSlideLeftNew":
            case "fpSlideRightNew":
                self.navigationCurrentMonth.classList.remove("slideLeftNew");
                self.navigationCurrentMonth.classList.remove("slideRightNew");
                var nav = self.navigationCurrentMonth;
                while (nav.nextSibling &&
                    /curr/.test(nav.nextSibling.className))
                    self.monthNav.removeChild(nav.nextSibling);
                while (nav.previousSibling &&
                    /curr/.test(nav.previousSibling.className))
                    self.monthNav.removeChild(nav.previousSibling);
                self.oldCurMonth = undefined;
                break;
        }
    }
    function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined
            ? parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            console.error(e.stack);
            console.warn("Invalid date supplied: " + jumpTo);
        }
        self.redraw();
    }
    function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow"))
            incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline && !customAppend && self.element.parentNode) {
                self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0]) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1]) === 0);
                }
            }
        }
        else {
            dayElement.classList.add("disabled");
            if (self.selectedDates[0] &&
                self.minRangeDate &&
                date > self.minRangeDate &&
                date < self.selectedDates[0])
                self.minRangeDate = date;
            else if (self.selectedDates[0] &&
                self.maxRangeDate &&
                date < self.maxRangeDate &&
                date > self.selectedDates[0])
                self.maxRangeDate = date;
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
            if (self.selectedDates.length === 1 &&
                self.minRangeDate !== undefined &&
                self.maxRangeDate !== undefined &&
                (date < self.minRangeDate || date > self.maxRangeDate))
                dayElement.classList.add("notAllowed");
        }
        if (self.weekNumbers &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" +
                self.config.getWeek(date) +
                "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDay(currentIndex, offset) {
        var newIndex = currentIndex + offset || 0, targetNode = (currentIndex !== undefined
            ? self.days.childNodes[newIndex]
            : self.selectedDateElem ||
                self.todayDateElem ||
                self.days.childNodes[0]);
        var focus = function () {
            targetNode = targetNode || self.days.childNodes[newIndex];
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        };
        if (targetNode === undefined && offset !== 0) {
            if (offset > 0) {
                self.changeMonth(1, true, undefined, true);
                newIndex = newIndex % 42;
            }
            else if (offset < 0) {
                self.changeMonth(-1, true, undefined, true);
                newIndex += 42;
            }
            return afterDayAnim(focus);
        }
        focus();
    }
    function afterDayAnim(fn) {
        self.config.animate === true ? self._animationLoop.push(fn) : fn();
    }
    function buildDays(delta) {
        if (self.daysContainer === undefined) {
            return;
        }
        var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() -
            self.l10n.firstDayOfWeek +
            7) %
            7, isRangeMode = self.config.mode === "range";
        var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(), days = window.document.createDocumentFragment();
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        if (self.weekNumbers && self.weekNumbers.firstChild)
            self.weekNumbers.textContent = "";
        if (isRangeMode) {
            self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
            self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
        }
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
            days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
            self._hidePrevMonthArrow =
                self._hidePrevMonthArrow ||
                    (!!self.minRangeDate &&
                        self.minRangeDate > days.childNodes[0].dateObj);
            self._hideNextMonthArrow =
                self._hideNextMonthArrow ||
                    (!!self.maxRangeDate &&
                        self.maxRangeDate <
                            new Date(self.currentYear, self.currentMonth + 1, 1));
        }
        else
            updateNavigationCurrentMonth();
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        if (!self.config.animate || delta === undefined)
            clearNode(self.daysContainer);
        else {
            while (self.daysContainer.childNodes.length > 1)
                self.daysContainer.removeChild(self.daysContainer.firstChild);
        }
        if (delta && delta >= 0)
            self.daysContainer.appendChild(dayContainer);
        else
            self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
        self.days = self.daysContainer.childNodes[0];
    }
    function buildMonthNav() {
        var monthNavFragment = window.document.createDocumentFragment();
        self.monthNav = createElement("div", "flatpickr-month");
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.currentMonthElement = createElement("span", "cur-month");
        self.currentMonthElement.title = self.l10n.scrollTitle;
        var yearInput = createNumberInput("cur-year");
        self.currentYearElement = yearInput.childNodes[0];
        self.currentYearElement.title = self.l10n.scrollTitle;
        if (self.config.minDate)
            self.currentYearElement.min = self.config.minDate
                .getFullYear()
                .toString();
        if (self.config.maxDate) {
            self.currentYearElement.max = self.config.maxDate
                .getFullYear()
                .toString();
            self.currentYearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
        self.navigationCurrentMonth.appendChild(self.currentMonthElement);
        self.navigationCurrentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(self.prevMonthNav);
        monthNavFragment.appendChild(self.navigationCurrentMonth);
        monthNavFragment.appendChild(self.nextMonthNav);
        self.monthNav.appendChild(monthNavFragment);
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool)
                    self.prevMonthNav.style.display = bool ? "none" : "block";
                self.__hidePrevMonthArrow = bool;
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool)
                    self.nextMonthNav.style.display = bool ? "none" : "block";
                self.__hideNextMonthArrow = bool;
            },
        });
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.childNodes[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.childNodes[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? self.config.defaultHour
                : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : self.config.defaultMinute);
        self.hourElement.step = self.config.hourIncrement.toString();
        self.minuteElement.step = self.config.minuteIncrement.toString();
        self.hourElement.min = self.config.time_24hr ? "0" : "1";
        self.hourElement.max = self.config.time_24hr ? "23" : "12";
        self.minuteElement.min = "0";
        self.minuteElement.max = "59";
        self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : self.config.defaultSeconds);
            self.secondElement.step = self.minuteElement.step;
            self.secondElement.min = self.minuteElement.min;
            self.secondElement.max = self.minuteElement.max;
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }
        self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
        return self.weekdayContainer;
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, is_offset, animate, from_keyboard) {
        if (is_offset === void 0) { is_offset = true; }
        if (animate === void 0) { animate = self.config.animate; }
        if (from_keyboard === void 0) { from_keyboard = false; }
        var delta = is_offset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow) ||
            (delta > 0 && self._hideNextMonthArrow))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
        }
        buildDays(animate ? delta : undefined);
        if (!animate) {
            triggerEvent("onMonthChange");
            return updateNavigationCurrentMonth();
        }
        var nav = self.navigationCurrentMonth;
        if (delta < 0) {
            while (nav.nextSibling &&
                /curr/.test(nav.nextSibling.className))
                self.monthNav.removeChild(nav.nextSibling);
        }
        else if (delta > 0) {
            while (nav.previousSibling &&
                /curr/.test(nav.previousSibling.className))
                self.monthNav.removeChild(nav.previousSibling);
        }
        self.oldCurMonth = self.navigationCurrentMonth;
        self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
        var daysContainer = self.daysContainer;
        if (daysContainer.firstChild && daysContainer.lastChild) {
            if (delta > 0) {
                daysContainer.firstChild.classList.add("slideLeft");
                daysContainer.lastChild.classList.add("slideLeftNew");
                self.oldCurMonth.classList.add("slideLeft");
                self.navigationCurrentMonth.classList.add("slideLeftNew");
            }
            else if (delta < 0) {
                daysContainer.firstChild.classList.add("slideRightNew");
                daysContainer.lastChild.classList.add("slideRight");
                self.oldCurMonth.classList.add("slideRight");
                self.navigationCurrentMonth.classList.add("slideRightNew");
            }
        }
        self.currentMonthElement = self.navigationCurrentMonth
            .firstChild;
        self.currentYearElement = self.navigationCurrentMonth.lastChild
            .childNodes[0];
        updateNavigationCurrentMonth();
        if (self.oldCurMonth.firstChild)
            self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
        triggerEvent("onMonthChange");
        if (from_keyboard &&
            document.activeElement &&
            document.activeElement.$i) {
            var index_1 = document.activeElement.$i;
            afterDayAnim(function () {
                focusOnDay(index_1, 0);
            });
        }
    }
    function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        self.input.value = "";
        if (self.altInput)
            self.altInput.value = "";
        if (self.mobileInput)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;
        self.redraw();
        if (triggerChangeEvent === true)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");
            self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            var h = self._handlers[i];
            h.element.removeEventListener(h.event, h.handler);
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode)
            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
            self.input.value = "";
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var isCalendarElement = isCalendarElem(e.target);
            var isInput = e.target === self.input ||
                e.target === self.altInput ||
                self.element.contains(e.target) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput && !isCalendarElement;
            if (lostFocus &&
                self.config.ignoredFocusElements.indexOf(e.target) === -1) {
                self.close();
                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.currentYearElement.min &&
                newYear < parseInt(self.currentYearElement.min)) ||
            (self.currentYearElement.max &&
                newYear > parseInt(self.currentYearElement.max)))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
        }
    }
    function isEnabled(date, timeless) {
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable.length && !self.config.disable.length)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string" && dateToCheck !== undefined) {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function onKeyDown(e) {
        var isInput = e.target === self._input;
        var calendarElem = isCalendarElem(e.target);
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.key === "Enter" && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return e.target.blur();
            }
            else
                self.open();
        }
        else if (calendarElem || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(e.target);
            switch (e.key) {
                case "Enter":
                    if (isTimeObj)
                        updateValue();
                    else
                        selectDate(e);
                    break;
                case "Escape":
                    e.preventDefault();
                    self.close();
                    break;
                case "Backspace":
                case "Delete":
                    if (isInput && !self.config.allowInput)
                        self.clear();
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    if (!isTimeObj) {
                        e.preventDefault();
                        if (self.daysContainer) {
                            var delta_1 = e.key === "ArrowRight" ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(e.target.$i, delta_1);
                            else
                                changeMonth(delta_1, true, undefined, true);
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e.preventDefault();
                    var delta = e.key === "ArrowDown" ? 1 : -1;
                    if (self.daysContainer && e.target.$i !== undefined) {
                        if (e.ctrlKey) {
                            changeYear(self.currentYear - delta);
                            focusOnDay(e.target.$i, 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(e.target.$i, delta * 7);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case "Tab":
                    if (e.target === self.hourElement) {
                        e.preventDefault();
                        self.minuteElement.select();
                    }
                    else if (e.target === self.minuteElement &&
                        (self.secondElement || self.amPM)) {
                        e.preventDefault();
                        if (self.secondElement !== undefined)
                            self.secondElement.focus();
                        else if (self.amPM !== undefined)
                            self.amPM.focus();
                    }
                    else if (e.target === self.secondElement && self.amPM) {
                        e.preventDefault();
                        self.amPM.focus();
                    }
                    break;
                case "a":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "AM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                case "p":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "PM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                default:
                    break;
            }
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            !elem.classList.contains("flatpickr-day") ||
            self.minRangeDate === undefined ||
            self.maxRangeDate === undefined)
            return;
        var hoverDate = elem.dateObj, initialDate = self.parseDate(self.selectedDates[0], undefined, true), rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()), containsDisabled = false;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t))) {
                containsDisabled = true;
                break;
            }
        }
        var _loop_1 = function (timestamp, i) {
            var outOfRange = timestamp < self.minRangeDate.getTime() ||
                timestamp > self.maxRangeDate.getTime(), dayElem = self.days.childNodes[i];
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return "continue";
            }
            else if (containsDisabled && !outOfRange)
                return "continue";
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate), maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
            elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("startRange");
            else if (initialDate > hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("endRange");
            if (timestamp >= minRangeDate && timestamp <= maxRangeDate)
                dayElem.classList.add("inRange");
        };
        for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += duration.DAY) {
            _loop_1(timestamp, i);
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._input; }
        if (self.isMobile) {
            if (e) {
                e.preventDefault();
                e.target && e.target.blur();
            }
            setTimeout(function () {
                self.mobileInput !== undefined && self.mobileInput.click();
            }, 0);
            triggerEvent("onOpen");
            return;
        }
        if (self.isOpen || self._input.disabled || self.config.inline)
            return;
        self.isOpen = true;
        self.calendarContainer.classList.add("open");
        positionCalendar(positionElement);
        self._input.classList.add("active");
        triggerEvent("onOpen");
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var hooks = [
            "onChange",
            "onClose",
            "onDayCreate",
            "onDestroy",
            "onKeyDown",
            "onMonthChange",
            "onOpen",
            "onParseConfig",
            "onReady",
            "onValueUpdate",
            "onYearChange",
        ];
        self.config = __assign({}, flatpickr.defaultConfig);
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable || []; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable || []; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        if (!userConfig.dateFormat && userConfig.enableTime) {
            formats$$1.dateFormat = userConfig.noCalendar
                ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                : flatpickr.defaultConfig.dateFormat +
                    " H:i" +
                    (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            formats$$1.altFormat = userConfig.noCalendar
                ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                : flatpickr.defaultConfig.altFormat +
                    (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        Object.assign(self.config, formats$$1, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        for (var i = hooks.length; i--;) {
            if (self.config[hooks[i]] !== undefined) {
                self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
            }
        }
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (~hooks.indexOf(key)) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable.length &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        triggerEvent("onParseConfig");
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            console.warn("flatpickr: invalid locale " + self.config.locale);
        self.l10n = __assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined);
    }
    function positionCalendar(positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.calendarContainer === undefined)
            return;
        var calendarHeight = self.calendarContainer.offsetHeight, calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPos === "above" ||
            (configPos !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildWeekdays();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(e.target, isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2)
                self.clear();
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear)
                triggerEvent("onYearChange");
            triggerEvent("onMonthChange");
        }
        buildDays();
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.config.enableTime &&
            compareDates(selectedDate, self.config.minDate) === 0)
            setHoursFromDate(self.config.minDate);
        updateValue();
        if (self.config.enableTime)
            setTimeout(function () { return (self.showTimeInput = true); }, 50);
        if (self.config.mode === "range") {
            if (self.selectedDates.length === 1) {
                onMouseOver(target);
                self._hidePrevMonthArrow =
                    self._hidePrevMonthArrow ||
                        (self.minRangeDate !== undefined &&
                            self.minRangeDate >
                                self.days.childNodes[0].dateObj);
                self._hideNextMonthArrow =
                    self._hideNextMonthArrow ||
                        (self.maxRangeDate !== undefined &&
                            self.maxRangeDate <
                                new Date(self.currentYear, self.currentMonth + 1, 1));
            }
            else
                updateNavigationCurrentMonth();
        }
        triggerEvent("onChange");
        if (!shouldChangeMonth)
            focusOnDay(target.$i, 0);
        else
            afterDayAnim(function () { return self.selectedDateElem && self.selectedDateElem.focus(); });
        if (self.hourElement !== undefined)
            setTimeout(function () { return self.hourElement !== undefined && self.hourElement.select(); }, 451);
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range)
                self.close();
        }
    }
    function set(option, value) {
        if (option !== null && typeof option === "object")
            Object.assign(self.config, option);
        else
            self.config[option] = value;
        self.redraw();
        jumpToDate();
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split("; ")
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = undefined; }
        if (date !== 0 && !date)
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = new Date();
        var preloadedDate = self.config.defaultDate || self.input.value;
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length
            ? self.selectedDates[0]
            : self.config.minDate &&
                self.config.minDate.getTime() > self.now.getTime()
                ? self.config.minDate
                : self.config.maxDate &&
                    self.config.maxDate.getTime() < self.now.getTime()
                    ? self.config.maxDate
                    : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length)
            self.latestSelectedDateObj = self.selectedDates[0];
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
            get: function () { return self._showTimeInput; },
            set: function (bool) {
                self._showTimeInput = bool;
                if (self.calendarContainer)
                    toggleClass(self.calendarContainer, "showTimeInput", bool);
                positionCalendar();
            },
        });
    }
    function formatDate(dateObj, frmt) {
        if (self.config !== undefined && self.config.formatDate !== undefined)
            return self.config.formatDate(dateObj, frmt);
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, self.l10n, self.config)
                : c !== "\\" ? c : "";
        })
            .join("");
    }
    function parseDate(date, givenFormat, timeless) {
        if (date !== 0 && !date)
            return undefined;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (self.config && self.config.parseDate)
                parsedDate = self.config.parseDate(date, format);
            else {
                parsedDate =
                    !self.config || !self.config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(function (_a) {
                        var fn = _a.fn, val = _a.val;
                        return (parsedDate =
                            fn(parsedDate, val, self.l10n) || parsedDate);
                    });
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date)) {
            console.warn("flatpickr: invalid date " + date_orig);
            console.info(self.element);
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    }
    function setupInputs() {
        self.input = self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
        if (!self.input) {
            console.warn("Error: invalid input element specified", self.input);
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.type = "text";
            self.input.type = "hidden";
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar ? "time" : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        self.mobileInput.addEventListener("change", function (e) {
            self.setDate(e.target.value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle() {
        if (self.isOpen)
            return self.close();
        self.open();
    }
    function triggerEvent(event, data) {
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.currentMonthElement.textContent =
            monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
        self.currentYearElement.value = self.currentYear.toString();
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (!self.selectedDates.length)
            return self.clear(triggerChange);
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        var joinChar = self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator;
        self.input.value = self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, self.config.dateFormat); })
            .join(joinChar);
        if (self.altInput !== undefined) {
            self.altInput.value = self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, self.config.altFormat); })
                .join(joinChar);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavScroll(e) {
        e.preventDefault();
        var isYear = self.currentYearElement.parentNode &&
            self.currentYearElement.parentNode.contains(e.target);
        if (e.target === self.currentMonthElement || isYear) {
            var delta = mouseDelta(e);
            if (isYear) {
                changeYear(self.currentYear + delta);
                e.target.value = self.currentYear.toString();
            }
            else
                self.changeMonth(delta, true, false);
        }
    }
    function onMonthNavClick(e) {
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);
        if (isPrevMonth || isNextMonth)
            changeMonth(isPrevMonth ? -1 : 1);
        else if (e.target === self.currentYearElement) {
            e.preventDefault();
            self.currentYearElement.select();
        }
        else if (e.target.className === "arrowUp")
            self.changeYear(self.currentYear + 1);
        else if (e.target.className === "arrowDown")
            self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", input = e.target;
        if (self.amPM !== undefined && e.target === self.amPM)
            self.amPM.textContent =
                self.l10n.amPM[self.amPM.textContent === "AM" ? 1 : 0];
        var min = Number(input.min), max = Number(input.max), step = Number(input.step), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown
                ? e.which === 38 ? 1 : -1
                : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step))
                self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList);
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.warn(e, e.stack);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr;
flatpickr = function (selector, config) {
    if (selector instanceof NodeList)
        return _flatpickr(selector, config);
    else if (typeof selector === "string")
        return _flatpickr(window.document.querySelectorAll(selector), config);
    return _flatpickr([selector], config);
};
window.flatpickr = flatpickr;
flatpickr.defaultConfig = defaults;
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
};
if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
var flatpickr$1 = flatpickr;

return flatpickr$1;

})));


/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flatpickr" }, [
    _c("div", { staticClass: "control has-icons-right" }, [
      _c("input", {
        staticClass: "input control",
        attrs: {
          type: "text",
          placeholder: _vm.placeholder,
          id: "date-input-" + _vm._uid,
          name: _vm.name,
          disabled: _vm.disabled
        },
        domProps: { value: _vm.value }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "icon is-small is-right" }, [
        _vm.timeOnly
          ? _c("i", { staticClass: "fas fa-clock" })
          : _c("i", { staticClass: "fas fa-calendar-alt" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d443fe2", module.exports)
  }
}

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1122)
/* template */
var __vue_template__ = __webpack_require__(1128)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueFormInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdcc7fda", Component.options)
  } else {
    hotAPI.reload("data-v-fdcc7fda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueSwitch: __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default.a },

    props: {
        field: {
            type: Object,
            required: true
        },
        hasError: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1124)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1126)
/* template */
var __vue_template__ = __webpack_require__(1127)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSwitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7defd652", Component.options)
  } else {
    hotAPI.reload("data-v-7defd652", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("43e441d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vue-switch input {\n    opacity: 0;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%;\n}\n.vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n}\n.vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb;\n}\n.vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    -webkit-box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n            box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n}\n.vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a;\n}\n.vue-switch.checked:before {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n.vue-switch.checked:after {\n      -webkit-transform: translateX(calc(0.625 * var(--height)));\n              transform: translateX(calc(0.625 * var(--height)));\n}\n.vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white;\n}\n.vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a;\n}\n.vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed;\n}\n.vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke;\n}\n.vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636;\n}\n.vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed;\n}\n.vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2;\n}\n.vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed;\n}\n.vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc;\n}\n.vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed;\n}\n.vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee;\n}\n.vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed;\n}\n.vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160;\n}\n.vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed;\n}\n.vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57;\n}\n.vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed;\n}\n.vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860;\n}\n.vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed;\n}\n.vue-switch.is-small {\n    --height: 0.75rem;\n}\n.vue-switch.is-medium {\n    --height: 1.25rem;\n}\n.vue-switch.is-large {\n    --height: 1.5rem;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSwitch.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,mCAAmC;EACnC,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;EAChB,4BAAqB;EAArB,4BAAqB;EAArB,qBAAqB;EACrB,uBAAuB;EACvB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAC1B;IACE,WAAW;IACX,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;IACrB,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,kCAAkC;IAClC,6BAA6B;IAC7B,0BAAkB;IAAlB,kBAAkB;CAAE;AACtB;IACE,yCAAyC;IACzC,0BAA0B;CAAE;AAC9B;IACE,iCAAiC;IACjC,uBAAuB;IACvB,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,4BAAoB;cAApB,oBAAoB;CAAE;AACxB;MACE,2DAAmD;cAAnD,mDAAmD;CAAE;AACzD;IACE,oBAAoB;IACpB,wBAAwB;CAAE;AAC1B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,yBAAyB;IACzB,6BAA6B;CAAE;AAC/B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,kBAAkB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,iBAAiB;CAAE","file":"VueSwitch.vue","sourcesContent":[".field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center; }\n  .vue-switch input {\n    opacity: 0;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n  .vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    transition: 0.25s; }\n  .vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb; }\n  .vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1); }\n  .vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a; }\n    .vue-switch.checked:before {\n      transform: scale(0); }\n    .vue-switch.checked:after {\n      transform: translateX(calc(0.625 * var(--height))); }\n  .vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white; }\n    .vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a; }\n    .vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed; }\n  .vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke; }\n    .vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636; }\n    .vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed; }\n  .vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2; }\n    .vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed; }\n  .vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc; }\n    .vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed; }\n  .vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee; }\n    .vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed; }\n  .vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160; }\n    .vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed; }\n  .vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57; }\n    .vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed; }\n  .vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860; }\n    .vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed; }\n  .vue-switch.is-small {\n    --height: 0.75rem; }\n  .vue-switch.is-medium {\n    --height: 1.25rem; }\n  .vue-switch.is-large {\n    --height: 1.5rem; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var sizes = ['is-small', 'is-medium', 'is-large'];
var types = ['is-primary', 'is-warning', 'is-danger', 'is-success', 'is-info'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueSwitch',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: null,
            validator: function validator(value) {
                return types.includes(value);
            }
        },
        size: {
            type: String,
            default: null,
            validator: function validator(value) {
                return sizes.includes(value);
            }
        },
        value: {
            type: Boolean,
            required: true
        }
    },

    watch: {
        value: function value(_value) {
            this.checked = _value;
        }
    },

    data: function data() {
        return {
            checked: this.value
        };
    }
});

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vue-switch",
      class: [
        _vm.size,
        _vm.type,
        { checked: _vm.value, disabled: _vm.disabled }
      ]
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.checked,
            expression: "checked"
          }
        ],
        staticClass: "checkbox",
        attrs: {
          type: "checkbox",
          disabled: _vm.disabled,
          required: _vm.required
        },
        domProps: {
          checked: _vm.value,
          checked: Array.isArray(_vm.checked)
            ? _vm._i(_vm.checked, null) > -1
            : _vm.checked
        },
        on: {
          change: [
            function($event) {
              var $$a = _vm.checked,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.checked = $$c
              }
            },
            function($event) {
              _vm.$emit("input", _vm.checked)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7defd652", module.exports)
  }
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.field.meta.content === "text"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "text",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "email"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "email",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "number"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "number",
                step: _vm.field.meta.step,
                min: _vm.field.meta.min,
                max: _vm.field.meta.max,
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "checkbox"
      ? _c(
          "span",
          [
            _c("vue-switch", {
              attrs: {
                size: "is-large",
                type: "is-success",
                disabled: _vm.field.meta.disabled || _vm.field.meta.readonly
              },
              on: {
                click: function($event) {
                  _vm.$emit("update")
                }
              },
              model: {
                value: _vm.field.value,
                callback: function($$v) {
                  _vm.$set(_vm.field, "value", $$v)
                },
                expression: "field.value"
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fdcc7fda", module.exports)
  }
}

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.data.icon || _vm.data.title
        ? _c("h5", { staticClass: "title is-5" }, [
            _vm.data.icon
              ? _c("span", { staticClass: "icon" }, [
                  _c("i", { class: _vm.data.icon })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.data.title
              ? _c("span", [
                  _vm._v(
                    "\n            " + _vm._s(_vm.data.title) + "\n        "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "vue-form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "columns is-multiline" },
            _vm._l(_vm.data.fields, function(field) {
              return !field.meta.hidden
                ? _c(
                    "div",
                    {
                      key: field.name,
                      staticClass: "column",
                      class: _vm.columnSize
                    },
                    [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.__(field.label)) +
                              "\n                        "
                          ),
                          _vm.errors.has(field.name)
                            ? _c(
                                "p",
                                {
                                  staticClass: "help is-danger is-pulled-right"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.get(field.name)) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        field.meta.custom
                          ? _c(
                              "span",
                              [
                                _vm._t(field.name, null, {
                                  field: field,
                                  errors: _vm.errors
                                })
                              ],
                              2
                            )
                          : _c(
                              "span",
                              [
                                field.meta.type === "input"
                                  ? _c("vue-form-input", {
                                      attrs: {
                                        field: field,
                                        "has-error": _vm.errors.has(field.name)
                                      },
                                      on: {
                                        update: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "select"
                                  ? _c("vue-select", {
                                      attrs: {
                                        "has-error": _vm.errors.has(field.name),
                                        options: field.meta.options,
                                        "key-map": field.meta.keyMap,
                                        source: field.meta.source,
                                        multiple: field.meta.multiple,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "datepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        time: field.meta.time,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "timepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        "time-only": "",
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "textarea"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "control has-icons-right"
                                      },
                                      [
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: field.value,
                                              expression: "field.value"
                                            }
                                          ],
                                          staticClass: "textarea",
                                          class: {
                                            "is-danger": _vm.errors.has(
                                              field.name
                                            )
                                          },
                                          attrs: {
                                            rows: field.meta.rows,
                                            disabled: field.meta.disabled
                                          },
                                          domProps: { value: field.value },
                                          on: {
                                            input: [
                                              function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  field,
                                                  "value",
                                                  $event.target.value
                                                )
                                              },
                                              function($event) {
                                                _vm.errors.clear(field.name)
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has(field.name)
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "icon is-small is-right has-text-danger"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-exclamation-triangle"
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                      ])
                    ]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.data.actions.destroy
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.destroy.button.class,
                  attrs: { disabled: _vm.data.actions.destroy.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showModal = true
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.__(_vm.data.actions.destroy.button.label))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.destroy.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.create
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.create.button.class,
                  attrs: { disabled: _vm.data.actions.create.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.create()
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.create.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.create.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.store
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.store.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.store.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.store.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.store.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.update
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.update.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.update.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.update.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.update.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "is-clearfix" })
        ]
      ),
      _vm._v(" "),
      _vm.data.actions.destroy
        ? _c("modal", {
            attrs: {
              show: _vm.showModal,
              __: _vm.__,
              message: _vm.data.actions.destroy.button.message
            },
            on: {
              "cancel-action": function($event) {
                _vm.showModal = false
              },
              "commit-action": function($event) {
                _vm.destroy()
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b52e927", module.exports)
  }
}

/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueForm: __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default.a },

    data: function data() {
        return {
            initialised: false,
            form: {}
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route(this.$route.name, null, false)).then(function (_ref) {
            var data = _ref.data;

            _this.form = data.form;
            _this.initialised = true;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-centered" }, [
    _c(
      "div",
      { staticClass: "column is-three-quarters" },
      [
        _vm.initialised
          ? _c("vue-form", {
              staticClass: "box animated fadeIn",
              attrs: { data: _vm.form }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fc0260d2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL293bmVycy9DcmVhdGUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzc3NTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWU/NzRlNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvY2xhc3Nlcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT8yMTlmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT9jYTZlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlP2QwODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/MWI5NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/ODgxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2VjMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZT83MzY2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2YxOGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3M/ZGYzNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZT80YWIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlPzA4YWEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWU/ODkxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZT9jNDEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWU/Y2Y0YyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlPzkxNzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZT8xNGMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzVkMGYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vb3duZXJzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi9vd25lcnMvQ3JlYXRlLnZ1ZT9iNDAzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmaWVsZCIsImluY2x1ZGVzIiwiaGFzIiwiVnVlIiwiZGVsZXRlIiwiZm9yRWFjaCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBLGVBQWUscUpBQWlNLGlCQUFpQixtQkFBbUIsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELFNBQVMsbUNBQW1DLFNBQVMscUJBQXFCLHFDQUFxQyxvQ0FBb0MsRUFBRSxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsa0JBQWtCLGtCQUFrQixhQUFhLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsY0FBYyx1REFBdUQsZ0JBQWdCLDhIQUE4SCxvQkFBb0IsNEJBQTRCLG1CQUFtQixFQUFFLGNBQWMsNEJBQTRCLGtCQUFrQixFQUFFLGdCQUFnQixtQkFBbUIsOEJBQThCLGtDQUFrQyw2QkFBNkIsb0JBQW9CLE1BQU0sc0JBQXNCLG1CQUFtQix5QkFBeUIsTUFBTSxn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LFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxVQUFVLFVBQVUsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sZ0JBQWdCLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssc0JBQXNCLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLDBFQUEwRSw0QkFBNEIscUJBQXFCLGtCQUFrQixlQUFlLHVCQUF1Qix1QkFBdUIsZUFBZSw0QkFBNEIsNEJBQTRCLG1CQUFtQixjQUFjLG9C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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixpQ0FBaUM7QUFDOUQsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsMENBQTBDLDZCQUE2QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsa0NBQWtDLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsaUNBQWlDLCtCQUErQjtBQUNoRSx1Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxtQkFBbUI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzREFBc0QsRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQXFELEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUNsakVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyxlQUFlLHlDQUF5QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQSxrQkFBa0Isd0NBQXdDO0FBQzFEO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRCxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTs7QUFFQTtrQkFHQTs7OztrQkFHQTtzQkFFQTtBQUhBOztrQkFLQTtxQkFHQTtBQUpBO0FBTEE7QUFIQSxHOzs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHNDQUErTztBQUMvTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGtGQUFrRjtBQUM5TyxxS0FBcUssa0ZBQWtGO0FBQ3ZQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxvQkFBb0IsdUJBQXVCLEdBQUcsZUFBZSxtQkFBbUIsdUJBQXVCLGlDQUFpQyx1Q0FBdUMsMEJBQTBCLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLDJCQUEyQiw4QkFBOEIsK0JBQStCLGdDQUFnQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxHQUFHLHFCQUFxQixpQkFBaUIsa0NBQWtDLGtDQUFrQywyQkFBMkIsa0JBQWtCLG1CQUFtQixHQUFHLHlDQUF5QyxtQkFBbUIseUJBQXlCLGFBQWEsY0FBYyx3Q0FBd0MsbUNBQW1DLGdDQUFnQyx3QkFBd0IsR0FBRyxzQkFBc0IsK0NBQStDLGdDQUFnQyxHQUFHLHFCQUFxQix1Q0FBdUMsNkJBQTZCLDBEQUEwRCwwREFBMEQsR0FBRyx1QkFBdUIsNEJBQTRCLGdDQUFnQyxHQUFHLDhCQUE4QixvQ0FBb0Msb0NBQW9DLEdBQUcsNkJBQTZCLG1FQUFtRSxtRUFBbUUsR0FBRyxnQ0FBZ0MsMEJBQTBCLDhCQUE4QixHQUFHLHlDQUF5Qyw0QkFBNEIsZ0NBQWdDLDRCQUE0QixHQUFHLGdDQUFnQyw0QkFBNEIsZ0NBQWdDLEdBQUcseUNBQXlDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEdBQUcsZ0NBQWdDLCtCQUErQixtQ0FBbUMsR0FBRyx5Q0FBeUMsNEJBQTRCLGdDQUFnQyw0QkFBNEIsR0FBRywrQkFBK0IsNEJBQTRCLGdDQUFnQyxHQUFHLHdDQUF3Qyw4QkFBOEIsa0NBQWtDLDRCQUE0QixHQUFHLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLEdBQUcsMkNBQTJDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEdBQUcsK0JBQStCLDRCQUE0QixnQ0FBZ0MsR0FBRyx3Q0FBd0MsOEJBQThCLGtDQUFrQyw0QkFBNEIsR0FBRywrQkFBK0IsNEJBQTRCLGdDQUFnQyxHQUFHLHdDQUF3Qyw4QkFBOEIsa0NBQWtDLDRCQUE0QixHQUFHLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLEdBQUcsMkNBQTJDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEdBQUcsa0NBQWtDLDRCQUE0QixnQ0FBZ0MsR0FBRywyQ0FBMkMsOEJBQThCLGtDQUFrQyw0QkFBNEIsR0FBRyxpQ0FBaUMsNEJBQTRCLGdDQUFnQyxHQUFHLDBDQUEwQyw4QkFBOEIsa0NBQWtDLDRCQUE0QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLFVBQVUsb0lBQW9JLEtBQUssWUFBWSxhQUFhLEtBQUssTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLG9FQUFvRSxvQkFBb0IsdUJBQXVCLEVBQUUsaUJBQWlCLG1CQUFtQix1QkFBdUIsaUNBQWlDLHVDQUF1QywwQkFBMEIsOEJBQThCLDhCQUE4QixvQkFBb0IseUJBQXlCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEVBQUUsdUJBQXVCLGlCQUFpQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixFQUFFLDJDQUEyQyxtQkFBbUIseUJBQXlCLGFBQWEsY0FBYyx3Q0FBd0MsbUNBQW1DLHdCQUF3QixFQUFFLHdCQUF3QiwrQ0FBK0MsZ0NBQWdDLEVBQUUsdUJBQXVCLHVDQUF1Qyw2QkFBNkIsa0RBQWtELEVBQUUseUJBQXlCLDRCQUE0QixnQ0FBZ0MsRUFBRSxrQ0FBa0MsNEJBQTRCLEVBQUUsaUNBQWlDLDJEQUEyRCxFQUFFLGtDQUFrQywwQkFBMEIsOEJBQThCLEVBQUUsNkNBQTZDLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLEVBQUUsa0NBQWtDLDRCQUE0QixnQ0FBZ0MsRUFBRSw2Q0FBNkMsOEJBQThCLGtDQUFrQyw0QkFBNEIsRUFBRSxrQ0FBa0MsK0JBQStCLG1DQUFtQyxFQUFFLDZDQUE2Qyw0QkFBNEIsZ0NBQWdDLDRCQUE0QixFQUFFLGlDQUFpQyw0QkFBNEIsZ0NBQWdDLEVBQUUsNENBQTRDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEVBQUUsb0NBQW9DLDRCQUE0QixnQ0FBZ0MsRUFBRSwrQ0FBK0MsOEJBQThCLGtDQUFrQyw0QkFBNEIsRUFBRSxpQ0FBaUMsNEJBQTRCLGdDQUFnQyxFQUFFLDRDQUE0Qyw4QkFBOEIsa0NBQWtDLDRCQUE0QixFQUFFLGlDQUFpQyw0QkFBNEIsZ0NBQWdDLEVBQUUsNENBQTRDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEVBQUUsb0NBQW9DLDRCQUE0QixnQ0FBZ0MsRUFBRSwrQ0FBK0MsOEJBQThCLGtDQUFrQyw0QkFBNEIsRUFBRSxvQ0FBb0MsNEJBQTRCLGdDQUFnQyxFQUFFLCtDQUErQyw4QkFBOEIsa0NBQWtDLDRCQUE0QixFQUFFLG1DQUFtQyw0QkFBNEIsZ0NBQWdDLEVBQUUsOENBQThDLDhCQUE4QixrQ0FBa0MsNEJBQTRCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLDJCQUEyQix3QkFBd0IsRUFBRSwwQkFBMEIsdUJBQXVCLEVBQUUscUJBQXFCOztBQUUvK1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUE7QUFDQTs7QUFFQTtVQUdBOzs7O2tCQUdBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUNBOztzQ0FFQTs7QUFKQTs7a0JBTUE7cUJBQ0E7O3NDQUVBOztBQUpBOztrQkFNQTtzQkFJQTtBQUxBO0FBbkJBOzs7c0NBMEJBOzJCQUNBO0FBR0E7QUFMQTs7MEJBTUE7OzBCQUdBO0FBRkE7QUFHQTtBQXRDQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUF3RDtBQUMzRSw0QkFBNEIsNkNBQTZDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUF3RDtBQUMzRSw0QkFBNEIsNkNBQTZDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUF3RDtBQUMzRSw0QkFBNEIsNkNBQTZDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xELDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQ0FBc0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQscUNBQXFDLHVCQUF1QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MscURBQXFELHFCQUFxQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQStDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQkFBc0I7QUFDcEQsNkJBQTZCLDhDQUE4QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUE4QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQkFBc0I7QUFDcEQsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRCw2QkFBNkIsNENBQTRDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BELDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0WEE7O0FBRUE7a0JBR0E7OzBCQUNBOzt5QkFFQTtrQkFFQTtBQUhBO0FBS0E7O0FBQ0E7OztBQUNBOzs4QkFDQTtnQ0FDQTs7cUNBQ0E7O0FBQ0E7QUFmQSxHOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ3JlYXRlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmMwMjYwZDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DcmVhdGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vb3duZXJzL0NyZWF0ZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZmMwMjYwZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mYzAyNjBkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi9vd25lcnMvQ3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI3IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5WdWVNdWx0aXNlbGVjdD10KCk6ZS5WdWVNdWx0aXNlbGVjdD10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChuKXtpZihpW25dKXJldHVybiBpW25dLmV4cG9ydHM7dmFyIHM9aVtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChzLmV4cG9ydHMscyxzLmV4cG9ydHMsdCkscy5sPSEwLHMuZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx0LmQ9ZnVuY3Rpb24oZSxpLG4pe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6bn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTQpfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIDAhPT1lJiYoISghQXJyYXkuaXNBcnJheShlKXx8MCE9PWUubGVuZ3RoKXx8IWUpfWZ1bmN0aW9uIG8oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJ1bmRlZmluZWRcIiksbnVsbD09PWUmJihlPVwibnVsbFwiKSwhMT09PWUmJihlPVwiZmFsc2VcIiksLTEhPT1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHQudHJpbSgpKX1mdW5jdGlvbiBsKGUsdCxpLG4pe3JldHVybiBlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gbyhuKGUsaSksdCl9KX1mdW5jdGlvbiByKGUpe3JldHVybiBlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hZS4kaXNMYWJlbH0pfWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIGkucmVkdWNlKGZ1bmN0aW9uKGksbil7cmV0dXJuIG5bZV0mJm5bZV0ubGVuZ3RoPyhpLnB1c2goeyRncm91cExhYmVsOm5bdF0sJGlzTGFiZWw6ITB9KSxpLmNvbmNhdChuW2VdKSk6aX0sW10pfX1mdW5jdGlvbiB1KGUsdCxpLHMsbyl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiByLm1hcChmdW5jdGlvbihyKXt2YXIgYTtpZighcltpXSlyZXR1cm4gY29uc29sZS53YXJuKFwiT3B0aW9ucyBwYXNzZWQgdG8gdnVlLW11bHRpc2VsZWN0IGRvIG5vdCBjb250YWluIGdyb3VwcywgZGVzcGl0ZSB0aGUgY29uZmlnLlwiKSxbXTt2YXIgdT1sKHJbaV0sZSx0LG8pO3JldHVybiB1Lmxlbmd0aD8oYT17fSxuKGEscyxyW3NdKSxuKGEsaSx1KSxhKTpbXX0pfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxoPWkoMikscD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19KGgpLGQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KGUpLGk9MDtpPGU7aSsrKXRbaV09YXJndW1lbnRzW2ldO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdChlKX0sZSl9fTt0LmRlZmF1bHQ9e2RhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c2VhcmNoOlwiXCIsaXNPcGVuOiExLHByZWZmZXJlZE9wZW5EaXJlY3Rpb246XCJiZWxvd1wiLG9wdGltaXplZEhlaWdodDp0aGlzLm1heEhlaWdodCxpbnRlcm5hbFZhbHVlOnRoaXMudmFsdWV8fDA9PT10aGlzLnZhbHVlPygwLHAuZGVmYXVsdCkoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKT90aGlzLnZhbHVlOlt0aGlzLnZhbHVlXSk6W119fSxwcm9wczp7aW50ZXJuYWxTZWFyY2g6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcHRpb25zOnt0eXBlOkFycmF5LHJlcXVpcmVkOiEwfSxtdWx0aXBsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHZhbHVlOnt0eXBlOm51bGwsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybltdfX0sdHJhY2tCeTp7dHlwZTpTdHJpbmd9LGxhYmVsOnt0eXBlOlN0cmluZ30sc2VhcmNoYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGNsZWFyT25TZWxlY3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxoaWRlU2VsZWN0ZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxwbGFjZWhvbGRlcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlNlbGVjdCBvcHRpb25cIn0sYWxsb3dFbXB0eTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHJlc2V0QWZ0ZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxjbG9zZU9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sY3VzdG9tTGFiZWw6e3R5cGU6RnVuY3Rpb24sZGVmYXVsdDpmdW5jdGlvbihlLHQpe3JldHVybiBzKGUpP1wiXCI6dD9lW3RdOmV9fSx0YWdnYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHRhZ1BsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gY3JlYXRlIGEgdGFnXCJ9LHRhZ1Bvc2l0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwidG9wXCJ9LG1heDp7dHlwZTpbTnVtYmVyLEJvb2xlYW5dLGRlZmF1bHQ6ITF9LGlkOntkZWZhdWx0Om51bGx9LG9wdGlvbnNMaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoxZTN9LGdyb3VwVmFsdWVzOnt0eXBlOlN0cmluZ30sZ3JvdXBMYWJlbDp7dHlwZTpTdHJpbmd9LGJsb2NrS2V5czp7dHlwZTpBcnJheSxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuW119fSxwcmVzZXJ2ZVNlYXJjaDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9fSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy5tdWx0aXBsZXx8dGhpcy5jbGVhck9uU2VsZWN0fHxjb25zb2xlLndhcm4oXCJbVnVlLU11bHRpc2VsZWN0IHdhcm5dOiBDbGVhck9uU2VsZWN0IGFuZCBNdWx0aXBsZSBwcm9wcyBjYW7igJl0IGJlIGJvdGggc2V0IHRvIGZhbHNlLlwiKSwhdGhpcy5tdWx0aXBsZSYmdGhpcy5tYXgmJmNvbnNvbGUud2FybihcIltWdWUtTXVsdGlzZWxlY3Qgd2Fybl06IE1heCBwcm9wIHNob3VsZCBub3QgYmUgdXNlZCB3aGVuIHByb3AgTXVsdGlwbGUgZXF1YWxzIGZhbHNlLlwiKX0sY29tcHV0ZWQ6e2ZpbHRlcmVkT3B0aW9uczpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VhcmNofHxcIlwiLHQ9ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSxpPXRoaXMub3B0aW9ucy5jb25jYXQoKTtyZXR1cm4gaT10aGlzLmludGVybmFsU2VhcmNoP3RoaXMuZ3JvdXBWYWx1ZXM/dGhpcy5maWx0ZXJBbmRGbGF0KGksdCx0aGlzLmxhYmVsKTpsKGksdCx0aGlzLmxhYmVsLHRoaXMuY3VzdG9tTGFiZWwpOnRoaXMuZ3JvdXBWYWx1ZXM/YSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkoaSk6aSxpPXRoaXMuaGlkZVNlbGVjdGVkP2kuZmlsdGVyKHRoaXMuaXNOb3RTZWxlY3RlZCk6aSx0aGlzLnRhZ2dhYmxlJiZ0Lmxlbmd0aCYmIXRoaXMuaXNFeGlzdGluZ09wdGlvbih0KSYmKFwiYm90dG9tXCI9PT10aGlzLnRhZ1Bvc2l0aW9uP2kucHVzaCh7aXNUYWc6ITAsbGFiZWw6ZX0pOmkudW5zaGlmdCh7aXNUYWc6ITAsbGFiZWw6ZX0pKSxpLnNsaWNlKDAsdGhpcy5vcHRpb25zTGltaXQpfSx2YWx1ZUtleXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLnRyYWNrQnk/dGhpcy5pbnRlcm5hbFZhbHVlLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdFtlLnRyYWNrQnldfSk6dGhpcy5pbnRlcm5hbFZhbHVlfSxvcHRpb25LZXlzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4odGhpcy5ncm91cFZhbHVlcz90aGlzLmZsYXRBbmRTdHJpcCh0aGlzLm9wdGlvbnMpOnRoaXMub3B0aW9ucykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlLmN1c3RvbUxhYmVsKHQsZS5sYWJlbCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpfSl9LGN1cnJlbnRPcHRpb25MYWJlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuc2VhcmNoYWJsZT9cIlwiOnRoaXMucGxhY2Vob2xkZXI6dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aD90aGlzLmdldE9wdGlvbkxhYmVsKHRoaXMuaW50ZXJuYWxWYWx1ZVswXSk6dGhpcy5zZWFyY2hhYmxlP1wiXCI6dGhpcy5wbGFjZWhvbGRlcn19LHdhdGNoOntpbnRlcm5hbFZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5yZXNldEFmdGVyJiZ0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoJiYodGhpcy5zZWFyY2g9XCJcIix0aGlzLmludGVybmFsVmFsdWU9W10pfSxzZWFyY2g6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwic2VhcmNoLWNoYW5nZVwiLHRoaXMuc2VhcmNoLHRoaXMuaWQpfSx2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmludGVybmFsVmFsdWU9dGhpcy5nZXRJbnRlcm5hbFZhbHVlKGUpfX0sbWV0aG9kczp7Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT8oMCxwLmRlZmF1bHQpKHRoaXMuaW50ZXJuYWxWYWx1ZSk6MD09PXRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGg/bnVsbDooMCxwLmRlZmF1bHQpKHRoaXMuaW50ZXJuYWxWYWx1ZVswXSl9LGdldEludGVybmFsVmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfHx2b2lkIDA9PT1lP1tdOnRoaXMubXVsdGlwbGU/KDAscC5kZWZhdWx0KShlKTooMCxwLmRlZmF1bHQpKFtlXSl9LGZpbHRlckFuZEZsYXQ6ZnVuY3Rpb24oZSx0LGkpe3JldHVybiBkKHUodCxpLHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsLHRoaXMuY3VzdG9tTGFiZWwpLGEodGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwpKShlKX0sZmxhdEFuZFN0cmlwOmZ1bmN0aW9uKGUpe3JldHVybiBkKGEodGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwpLHIpKGUpfSx1cGRhdGVTZWFyY2g6ZnVuY3Rpb24oZSl7dGhpcy5zZWFyY2g9ZX0saXNFeGlzdGluZ09wdGlvbjpmdW5jdGlvbihlKXtyZXR1cm4hIXRoaXMub3B0aW9ucyYmdGhpcy5vcHRpb25LZXlzLmluZGV4T2YoZSk+LTF9LGlzU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy50cmFja0J5P2VbdGhpcy50cmFja0J5XTplO3JldHVybiB0aGlzLnZhbHVlS2V5cy5pbmRleE9mKHQpPi0xfSxpc05vdFNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiF0aGlzLmlzU2VsZWN0ZWQoZSl9LGdldE9wdGlvbkxhYmVsOmZ1bmN0aW9uKGUpe2lmKHMoZSkpcmV0dXJuXCJcIjtpZihlLmlzVGFnKXJldHVybiBlLmxhYmVsO2lmKGUuJGlzTGFiZWwpcmV0dXJuIGUuJGdyb3VwTGFiZWw7dmFyIHQ9dGhpcy5jdXN0b21MYWJlbChlLHRoaXMubGFiZWwpO3JldHVybiBzKHQpP1wiXCI6dH0sc2VsZWN0OmZ1bmN0aW9uKGUsdCl7aWYoISgtMSE9PXRoaXMuYmxvY2tLZXlzLmluZGV4T2YodCl8fHRoaXMuZGlzYWJsZWR8fGUuJGlzTGFiZWx8fGUuJGlzRGlzYWJsZWQpJiYoIXRoaXMubWF4fHwhdGhpcy5tdWx0aXBsZXx8dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aCE9PXRoaXMubWF4KSYmKFwiVGFiXCIhPT10fHx0aGlzLnBvaW50ZXJEaXJ0eSkpe2lmKGUuaXNUYWcpdGhpcy4kZW1pdChcInRhZ1wiLGUubGFiZWwsdGhpcy5pZCksdGhpcy5zZWFyY2g9XCJcIix0aGlzLmNsb3NlT25TZWxlY3QmJiF0aGlzLm11bHRpcGxlJiZ0aGlzLmRlYWN0aXZhdGUoKTtlbHNle2lmKHRoaXMuaXNTZWxlY3RlZChlKSlyZXR1cm4gdm9pZChcIlRhYlwiIT09dCYmdGhpcy5yZW1vdmVFbGVtZW50KGUpKTt0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5wdXNoKGUpOnRoaXMuaW50ZXJuYWxWYWx1ZT1bZV0sdGhpcy4kZW1pdChcInNlbGVjdFwiLCgwLHAuZGVmYXVsdCkoZSksdGhpcy5pZCksdGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpLHRoaXMuY2xlYXJPblNlbGVjdCYmKHRoaXMuc2VhcmNoPVwiXCIpfXRoaXMuY2xvc2VPblNlbGVjdCYmdGhpcy5kZWFjdGl2YXRlKCl9fSxyZW1vdmVFbGVtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07aWYoIXRoaXMuZGlzYWJsZWQpe2lmKCF0aGlzLmFsbG93RW1wdHkmJnRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGg8PTEpcmV0dXJuIHZvaWQgdGhpcy5kZWFjdGl2YXRlKCk7dmFyIGk9XCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6YyhlKSk/dGhpcy52YWx1ZUtleXMuaW5kZXhPZihlW3RoaXMudHJhY2tCeV0pOnRoaXMudmFsdWVLZXlzLmluZGV4T2YoZSk7dGhpcy5pbnRlcm5hbFZhbHVlLnNwbGljZShpLDEpLHRoaXMuJGVtaXQoXCJpbnB1dFwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSx0aGlzLiRlbWl0KFwicmVtb3ZlXCIsKDAscC5kZWZhdWx0KShlKSx0aGlzLmlkKSx0aGlzLmNsb3NlT25TZWxlY3QmJnQmJnRoaXMuZGVhY3RpdmF0ZSgpfX0scmVtb3ZlTGFzdEVsZW1lbnQ6ZnVuY3Rpb24oKXstMT09PXRoaXMuYmxvY2tLZXlzLmluZGV4T2YoXCJEZWxldGVcIikmJjA9PT10aGlzLnNlYXJjaC5sZW5ndGgmJkFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKSYmdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMuaW50ZXJuYWxWYWx1ZVt0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoLTFdLCExKX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuaXNPcGVufHx0aGlzLmRpc2FibGVkfHwodGhpcy5hZGp1c3RQb3NpdGlvbigpLHRoaXMuZ3JvdXBWYWx1ZXMmJjA9PT10aGlzLnBvaW50ZXImJnRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCYmKHRoaXMucG9pbnRlcj0xKSx0aGlzLmlzT3Blbj0hMCx0aGlzLnNlYXJjaGFibGU/KHRoaXMucHJlc2VydmVTZWFyY2h8fCh0aGlzLnNlYXJjaD1cIlwiKSx0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpe3JldHVybiBlLiRyZWZzLnNlYXJjaC5mb2N1cygpfSkpOnRoaXMuJGVsLmZvY3VzKCksdGhpcy4kZW1pdChcIm9wZW5cIix0aGlzLmlkKSl9LGRlYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLmlzT3BlbiYmKHRoaXMuaXNPcGVuPSExLHRoaXMuc2VhcmNoYWJsZT90aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCk6dGhpcy4kZWwuYmx1cigpLHRoaXMucHJlc2VydmVTZWFyY2h8fCh0aGlzLnNlYXJjaD1cIlwiKSx0aGlzLiRlbWl0KFwiY2xvc2VcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCkpfSx0b2dnbGU6ZnVuY3Rpb24oKXt0aGlzLmlzT3Blbj90aGlzLmRlYWN0aXZhdGUoKTp0aGlzLmFjdGl2YXRlKCl9LGFkanVzdFBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIGU9dGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLHQ9d2luZG93LmlubmVySGVpZ2h0LXRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTt0PnRoaXMubWF4SGVpZ2h0fHx0PmV8fFwiYmVsb3dcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3BlbkRpcmVjdGlvbj8odGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYmVsb3dcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbih0LTQwLHRoaXMubWF4SGVpZ2h0KSk6KHRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbj1cImFib3ZlXCIsdGhpcy5vcHRpbWl6ZWRIZWlnaHQ9TWF0aC5taW4oZS00MCx0aGlzLm1heEhlaWdodCkpfX19fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD17ZGF0YTpmdW5jdGlvbigpe3JldHVybntwb2ludGVyOjAscG9pbnRlckRpcnR5OiExfX0scHJvcHM6e3Nob3dQb2ludGVyOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sb3B0aW9uSGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjQwfX0sY29tcHV0ZWQ6e3BvaW50ZXJQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50ZXIqdGhpcy5vcHRpb25IZWlnaHR9LHZpc2libGVFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGltaXplZEhlaWdodC90aGlzLm9wdGlvbkhlaWdodH19LHdhdGNoOntmaWx0ZXJlZE9wdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXJBZGp1c3QoKX0saXNPcGVuOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyRGlydHk9ITF9fSxtZXRob2RzOntvcHRpb25IaWdobGlnaHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm57XCJtdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHRcIjplPT09dGhpcy5wb2ludGVyJiZ0aGlzLnNob3dQb2ludGVyLFwibXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWRcIjp0aGlzLmlzU2VsZWN0ZWQodCl9fSxhZGRQb2ludGVyRWxlbWVudDpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIkVudGVyXCIsdD1lLmtleTt0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg+MCYmdGhpcy5zZWxlY3QodGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5wb2ludGVyXSx0KSx0aGlzLnBvaW50ZXJSZXNldCgpfSxwb2ludGVyRm9yd2FyZDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcjx0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgtMSYmKHRoaXMucG9pbnRlcisrLHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A8PXRoaXMucG9pbnRlclBvc2l0aW9uLSh0aGlzLnZpc2libGVFbGVtZW50cy0xKSp0aGlzLm9wdGlvbkhlaWdodCYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9dGhpcy5wb2ludGVyUG9zaXRpb24tKHRoaXMudmlzaWJsZUVsZW1lbnRzLTEpKnRoaXMub3B0aW9uSGVpZ2h0KSx0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJGb3J3YXJkKCkpLHRoaXMucG9pbnRlckRpcnR5PSEwfSxwb2ludGVyQmFja3dhcmQ6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXI+MD8odGhpcy5wb2ludGVyLS0sdGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD49dGhpcy5wb2ludGVyUG9zaXRpb24mJih0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPXRoaXMucG9pbnRlclBvc2l0aW9uKSx0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJCYWNrd2FyZCgpKTp0aGlzLmZpbHRlcmVkT3B0aW9uc1swXS4kaXNMYWJlbCYmdGhpcy5wb2ludGVyRm9yd2FyZCgpLHRoaXMucG9pbnRlckRpcnR5PSEwfSxwb2ludGVyUmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlT25TZWxlY3QmJih0aGlzLnBvaW50ZXI9MCx0aGlzLiRyZWZzLmxpc3QmJih0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPTApKX0scG9pbnRlckFkanVzdDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcj49dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoLTEmJih0aGlzLnBvaW50ZXI9dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoP3RoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aC0xOjApfSxwb2ludGVyU2V0OmZ1bmN0aW9uKGUpe3RoaXMucG9pbnRlcj1lLHRoaXMucG9pbnRlckRpcnR5PSEwfX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLm1hcChuKTtpZihlJiZcIm9iamVjdFwiPT09KHZvaWQgMD09PWU/XCJ1bmRlZmluZWRcIjpzKGUpKSl7Zm9yKHZhciB0PXt9LGk9T2JqZWN0LmtleXMoZSksbz0wLGw9aS5sZW5ndGg7bzxsO28rKyl7dmFyIHI9aVtvXTt0W3JdPW4oZVtyXSl9cmV0dXJuIHR9cmV0dXJuIGV9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2koNil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9aSg1KSxvPWkubihzKSxsPWkoOCkscj1pKDcpLGE9bix1PXIoby5hLGwuYSwhMSxhLG51bGwsbnVsbCk7dC5kZWZhdWx0PXUuZXhwb3J0c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVlcENsb25lPXQucG9pbnRlck1peGluPXQubXVsdGlzZWxlY3RNaXhpbj10Lk11bHRpc2VsZWN0PXZvaWQgMDt2YXIgcz1pKDMpLG89bihzKSxsPWkoMCkscj1uKGwpLGE9aSgxKSx1PW4oYSksYz1pKDIpLGg9bihjKTt0LmRlZmF1bHQ9by5kZWZhdWx0LHQuTXVsdGlzZWxlY3Q9by5kZWZhdWx0LHQubXVsdGlzZWxlY3RNaXhpbj1yLmRlZmF1bHQsdC5wb2ludGVyTWl4aW49dS5kZWZhdWx0LHQuZGVlcENsb25lPWguZGVmYXVsdH0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWkoMCksbz1uKHMpLGw9aSgxKSxyPW4obCk7dC5kZWZhdWx0PXtuYW1lOlwidnVlLW11bHRpc2VsZWN0XCIsbWl4aW5zOltvLmRlZmF1bHQsci5kZWZhdWx0XSxwcm9wczp7bmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzZWxlY3RMYWJlbDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlByZXNzIGVudGVyIHRvIHNlbGVjdFwifSxzZWxlY3RlZExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0ZWRcIn0sZGVzZWxlY3RMYWJlbDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlByZXNzIGVudGVyIHRvIHJlbW92ZVwifSxzaG93TGFiZWxzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sbGltaXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6OTk5OTl9LG1heEhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDozMDB9LGxpbWl0VGV4dDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OmZ1bmN0aW9uKGUpe3JldHVyblwiYW5kIFwiK2UrXCIgbW9yZVwifX0sbG9hZGluZzp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGRpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sb3BlbkRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzaG93Tm9SZXN1bHRzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sdGFiaW5kZXg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MH19LGNvbXB1dGVkOnt2aXNpYmxlVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT90aGlzLmludGVybmFsVmFsdWUuc2xpY2UoMCx0aGlzLmxpbWl0KTpbXX0sZGVzZWxlY3RMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuZGVzZWxlY3RMYWJlbDpcIlwifSxzZWxlY3RMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuc2VsZWN0TGFiZWw6XCJcIn0sc2VsZWN0ZWRMYWJlbFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93TGFiZWxzP3RoaXMuc2VsZWN0ZWRMYWJlbDpcIlwifSxpbnB1dFN0eWxlOmZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aXBsZSYmdGhpcy52YWx1ZSYmdGhpcy52YWx1ZS5sZW5ndGgpcmV0dXJuIHRoaXMuaXNPcGVuP3t3aWR0aDpcImF1dG9cIn06e3dpZHRoOlwiMFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19LGNvbnRlbnRTdHlsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubGVuZ3RoP3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9OntkaXNwbGF5OlwiYmxvY2tcIn19LGlzQWJvdmU6ZnVuY3Rpb24oKXtyZXR1cm5cImFib3ZlXCI9PT10aGlzLm9wZW5EaXJlY3Rpb258fFwidG9wXCI9PT10aGlzLm9wZW5EaXJlY3Rpb258fFwiYmVsb3dcIiE9PXRoaXMub3BlbkRpcmVjdGlvbiYmXCJib3R0b21cIiE9PXRoaXMub3BlbkRpcmVjdGlvbiYmXCJhYm92ZVwiPT09dGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9ufX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LGksbixzLG8pe3ZhciBsLHI9ZT1lfHx7fSxhPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWEmJlwiZnVuY3Rpb25cIiE9PWF8fChsPWUscj1lLmRlZmF1bHQpO3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/ci5vcHRpb25zOnI7dCYmKHUucmVuZGVyPXQucmVuZGVyLHUuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLHUuX2NvbXBpbGVkPSEwKSxpJiYodS5mdW5jdGlvbmFsPSEwKSxzJiYodS5fc2NvcGVJZD1zKTt2YXIgYztpZihvPyhjPWZ1bmN0aW9uKGUpe2U9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0LGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwoZT1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxuJiZuLmNhbGwodGhpcyxlKSxlJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cyYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG8pfSx1Ll9zc3JSZWdpc3Rlcj1jKTpuJiYoYz1uKSxjKXt2YXIgaD11LmZ1bmN0aW9uYWwscD1oP3UucmVuZGVyOnUuYmVmb3JlQ3JlYXRlO2g/KHUuX2luamVjdFN0eWxlcz1jLHUucmVuZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGMuY2FsbCh0KSxwKGUsdCl9KTp1LmJlZm9yZUNyZWF0ZT1wP1tdLmNvbmNhdChwLGMpOltjXX1yZXR1cm57ZXNNb2R1bGU6bCxleHBvcnRzOnIsb3B0aW9uczp1fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LGk9ZS5fc2VsZi5fY3x8dDtyZXR1cm4gaShcImRpdlwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0XCIsY2xhc3M6e1wibXVsdGlzZWxlY3QtLWFjdGl2ZVwiOmUuaXNPcGVuLFwibXVsdGlzZWxlY3QtLWRpc2FibGVkXCI6ZS5kaXNhYmxlZCxcIm11bHRpc2VsZWN0LS1hYm92ZVwiOmUuaXNBYm92ZX0sYXR0cnM6e3RhYmluZGV4OmUuc2VhcmNoYWJsZT8tMTplLnRhYmluZGV4fSxvbjp7Zm9jdXM6ZnVuY3Rpb24odCl7ZS5hY3RpdmF0ZSgpfSxibHVyOmZ1bmN0aW9uKHQpeyFlLnNlYXJjaGFibGUmJmUuZGVhY3RpdmF0ZSgpfSxrZXlkb3duOltmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZG93blwiLDQwLHQua2V5KT90LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOih0LnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnBvaW50ZXJGb3J3YXJkKCkpOm51bGx9LGZ1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJ1cFwiLDM4LHQua2V5KT90LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOih0LnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnBvaW50ZXJCYWNrd2FyZCgpKTpudWxsfSxmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZW50ZXJcIiwxMyx0LmtleSl8fCFlLl9rKHQua2V5Q29kZSxcInRhYlwiLDksdC5rZXkpPyh0LnN0b3BQcm9wYWdhdGlvbigpLHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6dm9pZCBlLmFkZFBvaW50ZXJFbGVtZW50KHQpKTpudWxsfV0sa2V5dXA6ZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZXNjXCIsMjcsdC5rZXkpKXJldHVybiBudWxsO2UuZGVhY3RpdmF0ZSgpfX19LFtlLl90KFwiY2FyZXRcIixbaShcImRpdlwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zZWxlY3RcIixvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLGUudG9nZ2xlKCl9fX0pXSx7dG9nZ2xlOmUudG9nZ2xlfSksZS5fdihcIiBcIiksZS5fdChcImNsZWFyXCIsbnVsbCx7c2VhcmNoOmUuc2VhcmNofSksZS5fdihcIiBcIiksaShcImRpdlwiLHtyZWY6XCJ0YWdzXCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFnc1wifSxbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS52aXNpYmxlVmFsdWUubGVuZ3RoPjAsZXhwcmVzc2lvbjpcInZpc2libGVWYWx1ZS5sZW5ndGggPiAwXCJ9XSxzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdzLXdyYXBcIn0sW2UuX2woZS52aXNpYmxlVmFsdWUsZnVuY3Rpb24odCl7cmV0dXJuW2UuX3QoXCJ0YWdcIixbaShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFnXCJ9LFtpKFwic3BhblwiLHtkb21Qcm9wczp7dGV4dENvbnRlbnQ6ZS5fcyhlLmdldE9wdGlvbkxhYmVsKHQpKX19KSxlLl92KFwiIFwiKSxpKFwiaVwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWctaWNvblwiLGF0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCIxXCJ9LG9uOntrZXlkb3duOmZ1bmN0aW9uKGkpe2lmKCEoXCJidXR0b25cImluIGkpJiZlLl9rKGkua2V5Q29kZSxcImVudGVyXCIsMTMsaS5rZXkpKXJldHVybiBudWxsO2kucHJldmVudERlZmF1bHQoKSxlLnJlbW92ZUVsZW1lbnQodCl9LG1vdXNlZG93bjpmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksZS5yZW1vdmVFbGVtZW50KHQpfX19KV0pXSx7b3B0aW9uOnQsc2VhcmNoOmUuc2VhcmNoLHJlbW92ZTplLnJlbW92ZUVsZW1lbnR9KV19KV0sMiksZS5fdihcIiBcIiksZS5pbnRlcm5hbFZhbHVlJiZlLmludGVybmFsVmFsdWUubGVuZ3RoPmUubGltaXQ/W2koXCJzdHJvbmdcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc3Ryb25nXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OmUuX3MoZS5saW1pdFRleHQoZS5pbnRlcm5hbFZhbHVlLmxlbmd0aC1lLmxpbWl0KSl9fSldOmUuX2UoKSxlLl92KFwiIFwiKSxpKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcIm11bHRpc2VsZWN0X19sb2FkaW5nXCJ9fSxbZS5fdChcImxvYWRpbmdcIixbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5sb2FkaW5nLGV4cHJlc3Npb246XCJsb2FkaW5nXCJ9XSxzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zcGlubmVyXCJ9KV0pXSwyKSxlLl92KFwiIFwiKSxlLnNlYXJjaGFibGU/aShcImlucHV0XCIse3JlZjpcInNlYXJjaFwiLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2lucHV0XCIsc3R5bGU6ZS5pbnB1dFN0eWxlLGF0dHJzOntuYW1lOmUubmFtZSxpZDplLmlkLHR5cGU6XCJ0ZXh0XCIsYXV0b2NvbXBsZXRlOlwib2ZmXCIscGxhY2Vob2xkZXI6ZS5wbGFjZWhvbGRlcixkaXNhYmxlZDplLmRpc2FibGVkLHRhYmluZGV4OmUudGFiaW5kZXh9LGRvbVByb3BzOnt2YWx1ZTplLmlzT3Blbj9lLnNlYXJjaDplLmN1cnJlbnRPcHRpb25MYWJlbH0sb246e2lucHV0OmZ1bmN0aW9uKHQpe2UudXBkYXRlU2VhcmNoKHQudGFyZ2V0LnZhbHVlKX0sZm9jdXM6ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGUuYWN0aXZhdGUoKX0sYmx1cjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5kZWFjdGl2YXRlKCl9LGtleXVwOmZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcImVzY1wiLDI3LHQua2V5KSlyZXR1cm4gbnVsbDtlLmRlYWN0aXZhdGUoKX0sa2V5ZG93bjpbZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZG93blwiLDQwLHQua2V5KSlyZXR1cm4gbnVsbDt0LnByZXZlbnREZWZhdWx0KCksZS5wb2ludGVyRm9yd2FyZCgpfSxmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJ1cFwiLDM4LHQua2V5KSlyZXR1cm4gbnVsbDt0LnByZXZlbnREZWZhdWx0KCksZS5wb2ludGVyQmFja3dhcmQoKX0sZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcImVudGVyXCIsMTMsdC5rZXkpPyh0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSx0LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOnZvaWQgZS5hZGRQb2ludGVyRWxlbWVudCh0KSk6bnVsbH0sZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZGVsZXRlXCIsWzgsNDZdLHQua2V5KSlyZXR1cm4gbnVsbDt0LnN0b3BQcm9wYWdhdGlvbigpLGUucmVtb3ZlTGFzdEVsZW1lbnQoKX1dfX0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLnNlYXJjaGFibGU/ZS5fZSgpOmkoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NpbmdsZVwiLGRvbVByb3BzOnt0ZXh0Q29udGVudDplLl9zKGUuY3VycmVudE9wdGlvbkxhYmVsKX0sb246e21vdXNlZG93bjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS50b2dnbGUodCl9fX0pXSwyKSxlLl92KFwiIFwiKSxpKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcIm11bHRpc2VsZWN0XCJ9fSxbaShcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5pc09wZW4sZXhwcmVzc2lvbjpcImlzT3BlblwifV0scmVmOlwibGlzdFwiLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlclwiLHN0eWxlOnttYXhIZWlnaHQ6ZS5vcHRpbWl6ZWRIZWlnaHQrXCJweFwifSxvbjp7Zm9jdXM6ZS5hY3RpdmF0ZSxtb3VzZWRvd246ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfX19LFtpKFwidWxcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fY29udGVudFwiLHN0eWxlOmUuY29udGVudFN0eWxlfSxbZS5fdChcImJlZm9yZUxpc3RcIiksZS5fdihcIiBcIiksZS5tdWx0aXBsZSYmZS5tYXg9PT1lLmludGVybmFsVmFsdWUubGVuZ3RoP2koXCJsaVwiLFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb25cIn0sW2UuX3QoXCJtYXhFbGVtZW50c1wiLFtlLl92KFwiTWF4aW11bSBvZiBcIitlLl9zKGUubWF4KStcIiBvcHRpb25zIHNlbGVjdGVkLiBGaXJzdCByZW1vdmUgYSBzZWxlY3RlZCBvcHRpb24gdG8gc2VsZWN0IGFub3RoZXIuXCIpXSldLDIpXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLCFlLm1heHx8ZS5pbnRlcm5hbFZhbHVlLmxlbmd0aDxlLm1heD9lLl9sKGUuZmlsdGVyZWRPcHRpb25zLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGkoXCJsaVwiLHtrZXk6bixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19lbGVtZW50XCJ9LFt0JiYodC4kaXNMYWJlbHx8dC4kaXNEaXNhYmxlZCk/ZS5fZSgpOmkoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvblwiLGNsYXNzOmUub3B0aW9uSGlnaGxpZ2h0KG4sdCksYXR0cnM6e1wiZGF0YS1zZWxlY3RcIjp0JiZ0LmlzVGFnP2UudGFnUGxhY2Vob2xkZXI6ZS5zZWxlY3RMYWJlbFRleHQsXCJkYXRhLXNlbGVjdGVkXCI6ZS5zZWxlY3RlZExhYmVsVGV4dCxcImRhdGEtZGVzZWxlY3RcIjplLmRlc2VsZWN0TGFiZWxUZXh0fSxvbjp7Y2xpY2s6ZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSxlLnNlbGVjdCh0KX0sbW91c2VlbnRlcjpmdW5jdGlvbih0KXtpZih0LnRhcmdldCE9PXQuY3VycmVudFRhcmdldClyZXR1cm4gbnVsbDtlLnBvaW50ZXJTZXQobil9fX0sW2UuX3QoXCJvcHRpb25cIixbaShcInNwYW5cIixbZS5fdihlLl9zKGUuZ2V0T3B0aW9uTGFiZWwodCkpKV0pXSx7b3B0aW9uOnQsc2VhcmNoOmUuc2VhcmNofSldLDIpLGUuX3YoXCIgXCIpLHQmJih0LiRpc0xhYmVsfHx0LiRpc0Rpc2FibGVkKT9pKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb24gbXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWRcIixjbGFzczplLm9wdGlvbkhpZ2hsaWdodChuLHQpfSxbZS5fdChcIm9wdGlvblwiLFtpKFwic3BhblwiLFtlLl92KGUuX3MoZS5nZXRPcHRpb25MYWJlbCh0KSkpXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2h9KV0sMik6ZS5fZSgpXSl9KTplLl9lKCksZS5fdihcIiBcIiksaShcImxpXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnNob3dOb1Jlc3VsdHMmJjA9PT1lLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgmJmUuc2VhcmNoJiYhZS5sb2FkaW5nLGV4cHJlc3Npb246XCJzaG93Tm9SZXN1bHRzICYmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwICYmIHNlYXJjaCAmJiAhbG9hZGluZylcIn1dfSxbaShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uXCJ9LFtlLl90KFwibm9SZXN1bHRcIixbZS5fdihcIk5vIGVsZW1lbnRzIGZvdW5kLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgc2VhcmNoIHF1ZXJ5LlwiKV0pXSwyKV0pLGUuX3YoXCIgXCIpLGUuX3QoXCJhZnRlckxpc3RcIildLDIpXSldKV0sMil9LHM9W10sbz17cmVuZGVyOm4sc3RhdGljUmVuZGVyRm5zOnN9O3QuYT1vfV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFiNTJlOTI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWI1MmU5MjdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZTk2OTY2MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS52dWUtZm9ybSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1UEE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWVGb3JtLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXY+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcInRpdGxlIGlzLTVcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhblxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICA8L2g1PlxcbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidnVlLWZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiZmllbGQgaW4gZGF0YS5maWVsZHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sdW1uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGQubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiY29sdW1uU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaWVsZC5tZXRhLmhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKGZpZWxkLmxhYmVsKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvcnMuZ2V0KGZpZWxkLm5hbWUpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkLm1ldGEuY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XFxcImZpZWxkLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cXFwiZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZm9ybS1pbnB1dCB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICdpbnB1dCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZT1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cXFwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2VsZWN0IHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ3NlbGVjdCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSk7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZmllbGQudmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmllbGQubWV0YS5vcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleS1tYXA9XFxcImZpZWxkLm1ldGEua2V5TWFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cXFwiZmllbGQubWV0YS5zb3VyY2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XFxcImZpZWxkLm1ldGEubXVsdGlwbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ2RhdGVwaWNrZXInXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XFxcImZpZWxkLm1ldGEuZm9ybWF0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XFxcImZpZWxkLm1ldGEudGltZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cXFwiZmllbGQubWV0YS50eXBlID09PSAndGltZXBpY2tlcidcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZpZWxkLnZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cXFwiZmllbGQubWV0YS5mb3JtYXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLW9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0ZXh0YXJlYSdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIEBpbnB1dD1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0YXJlYVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoZmllbGQubmFtZSkgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm93cz1cXFwiZmllbGQubWV0YS5yb3dzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImVycm9ycy5oYXMoZmllbGQubmFtZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95XFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95LmZvcmJpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uY2xhc3NcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVxcXCJzaG93TW9kYWwgPSB0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cXFwiY3JlYXRlKClcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGVcXFwiXFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIltkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmNsYXNzLCB7ICdpcy1sb2FkaW5nJzogbG9hZGluZyB9XVxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLnN0b3JlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy51cGRhdGUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlzLWNsZWFyZml4XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxtb2RhbCB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveVxcXCJcXG4gICAgICAgICAgICA6c2hvdz1cXFwic2hvd01vZGFsXFxcIlxcbiAgICAgICAgICAgIDpfXz1cXFwiX19cXFwiXFxuICAgICAgICAgICAgOm1lc3NhZ2U9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5tZXNzYWdlXFxcIlxcbiAgICAgICAgICAgIEBjYW5jZWwtYWN0aW9uPVxcXCJzaG93TW9kYWwgPSBmYWxzZVxcXCJcXG4gICAgICAgICAgICBAY29tbWl0LWFjdGlvbj1cXFwiZGVzdHJveSgpXFxcIj5cXG4gICAgICAgIDwvbW9kYWw+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XFxuaW1wb3J0IEVycm9ycyBmcm9tICcuL2NsYXNzZXMvRXJyb3JzJztcXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xcbmltcG9ydCBWdWVTZWxlY3QgZnJvbSAnLi9WdWVTZWxlY3QudnVlJztcXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXIudnVlJztcXG5pbXBvcnQgVnVlRm9ybUlucHV0IGZyb20gJy4vVnVlRm9ybUlucHV0LnZ1ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnVnVlRm9ybScsXFxuXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIE1vZGFsLCBWdWVTZWxlY3QsIERhdGVwaWNrZXIsIFZ1ZUZvcm1JbnB1dCxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIGRhdGE6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxcbiAgICAgICAgICAgIGVycm9yczogbmV3IEVycm9ycygpLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXFxuICAgICAgICBjb2x1bW5TaXplKCkge1xcbiAgICAgICAgICAgIHJldHVybiBgaXMtJHtwYXJzZUludCgxMiAvIHRoaXMuZGF0YS5jb2x1bW5zLCAxMCl9YDtcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXRoKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubWV0aG9kID09PSAncG9zdCdcXG4gICAgICAgICAgICAgICAgPyB0aGlzLmRhdGEuYWN0aW9ucy5zdG9yZS5wYXRoXFxuICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmFjdGlvbnMudXBkYXRlLnBhdGg7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBjcmVhdGUoKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY3JlYXRlJyk7XFxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiB0aGlzLmRhdGEuYWN0aW9ucy5jcmVhdGUucm91dGUgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3VibWl0KCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuXFxuICAgICAgICAgICAgYXhpb3NbdGhpcy5kYXRhLm1ldGhvZF0odGhpcy5wYXRoLCB0aGlzLmZvcm1EYXRhKCkpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnKTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnJlZGlyZWN0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogZGF0YS5pZCB9LFxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDIyKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5zZXQoZGF0YS5lcnJvcnMpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvcm1EYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmllbGRzLnJlZHVjZSgob2JqZWN0LCBmaWVsZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBvYmplY3RbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcXG4gICAgICAgICAgICB9LCB7IF9wYXJhbXM6IHRoaXMucGFyYW1zIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3koKSB7XFxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xcblxcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh0aGlzLmRhdGEuYWN0aW9ucy5kZXN0cm95LnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkZXN0cm95Jyk7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGRhdGEucmVkaXJlY3QgfSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgZm9ybS52dWUtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWI1MmU5MjdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGl0bGUgaXMtNVwiXG4gICAgICAgICAgICB2LWlmPVwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEuaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEudGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRhLnRpdGxlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCJcbiAgICAgICAgICAgIGNsYXNzPVwidnVlLWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBkYXRhLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJjb2x1bW5TaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFmaWVsZC5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oZmllbGQubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvcnMuZ2V0KGZpZWxkLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJmaWVsZC5tZXRhLmN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cImVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLWZvcm0taW5wdXQgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZT1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLXNlbGVjdCB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAnc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmllbGQubWV0YS5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleS1tYXA9XCJmaWVsZC5tZXRhLmtleU1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzb3VyY2U9XCJmaWVsZC5tZXRhLnNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptdWx0aXBsZT1cImZpZWxkLm1ldGEubXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICdkYXRlcGlja2VyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XCJmaWVsZC5tZXRhLmZvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aW1lPVwiZmllbGQubWV0YS50aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAndGltZXBpY2tlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9ybWF0PVwiZmllbGQubWV0YS5mb3JtYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLW9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBAaW5wdXQ9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKGZpZWxkLm5hbWUpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyb3dzPVwiZmllbGQubWV0YS5yb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuZGVzdHJveVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuZm9yYmlkZGVuXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic2hvd01vZGFsID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKClcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuY3JlYXRlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuY3JlYXRlLmZvcmJpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMuc3RvcmVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmFjdGlvbnMudXBkYXRlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1jbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxtb2RhbCB2LWlmPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcIlxuICAgICAgICAgICAgOnNob3c9XCJzaG93TW9kYWxcIlxuICAgICAgICAgICAgOl9fPVwiX19cIlxuICAgICAgICAgICAgOm1lc3NhZ2U9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVwiXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cInNob3dNb2RhbCA9IGZhbHNlXCJcbiAgICAgICAgICAgIEBjb21taXQtYWN0aW9uPVwiZGVzdHJveSgpXCI+XG4gICAgICAgIDwvbW9kYWw+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi9jbGFzc2VzL0Vycm9ycyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xuaW1wb3J0IFZ1ZVNlbGVjdCBmcm9tICcuL1Z1ZVNlbGVjdC52dWUnO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyLnZ1ZSc7XG5pbXBvcnQgVnVlRm9ybUlucHV0IGZyb20gJy4vVnVlRm9ybUlucHV0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVnVlRm9ybScsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZGFsLCBWdWVTZWxlY3QsIERhdGVwaWNrZXIsIFZ1ZUZvcm1JbnB1dCxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yczogbmV3IEVycm9ycygpLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxuICAgICAgICBjb2x1bW5TaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIGBpcy0ke3BhcnNlSW50KDEyIC8gdGhpcy5kYXRhLmNvbHVtbnMsIDEwKX1gO1xuICAgICAgICB9LFxuICAgICAgICBwYXRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tZXRob2QgPT09ICdwb3N0J1xuICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhLmFjdGlvbnMuc3RvcmUucGF0aFxuICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmFjdGlvbnMudXBkYXRlLnBhdGg7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY3JlYXRlJyk7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IHRoaXMuZGF0YS5hY3Rpb25zLmNyZWF0ZS5yb3V0ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3NbdGhpcy5kYXRhLm1ldGhvZF0odGhpcy5wYXRoLCB0aGlzLmZvcm1EYXRhKCkpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEucmVkaXJlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGRhdGEuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnNldChkYXRhLmVycm9ycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1EYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWVsZHMucmVkdWNlKChvYmplY3QsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH0sIHsgX3BhcmFtczogdGhpcy5wYXJhbXMgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHRoaXMuZGF0YS5hY3Rpb25zLmRlc3Ryb3kucGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogZGF0YS5yZWRpcmVjdCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgZm9ybS52dWUtZm9ybSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5jbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmluY2x1ZGVzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKGZpZWxkKSA/IHRoaXMuZXJyb3JzW2ZpZWxkXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0KGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5oYXMoZmllbGQpKSB7XG4gICAgICAgICAgICBWdWUuZGVsZXRlKHRoaXMuZXJyb3JzLCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goZmllbGQgPT4gdGhpcy5jbGVhcihmaWVsZCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvY2xhc3Nlcy9FcnJvcnMuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZGIzODJhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdkZGIzODJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2RkYjM4MmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjU4MGVlZTI0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZGIzODJhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubW9kYWwuaXMtYWN0aXZlIHtcXG4gICAgei1pbmRleDogMTEwMDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4REE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1vZGFsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZUluXFxcIlxcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJhbmltYXRlZCBmYWRlT3V0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJzdWJ0aXRsZSBpcy01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18obWVzc2FnZSB8fCBcXFwiQXJlIHlvdSBzdXJlID9cXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJDYW5jZWxcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY29tbWl0LWFjdGlvbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oXFxcIlllc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvdHJhbnNpdGlvbj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgICAgc2hvdzoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWVzc2FnZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIF9fOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcXG4gICAgICAgIHotaW5kZXg6IDExMDA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZGRiMzgyYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJzdWJ0aXRsZSBpcy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18obWVzc2FnZSB8fCBcIkFyZSB5b3Ugc3VyZSA/XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NhbmNlbC1hY3Rpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oXCJDYW5jZWxcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiWWVzXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgX186IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcbiAgICAgICAgei1pbmRleDogMTEwMDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVJblwiLFxuICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtbW9kYWwgbW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRlbnRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKF92bS5tZXNzYWdlIHx8IFwiQXJlIHlvdSBzdXJlID9cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRyb2xzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjYW5jZWwtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkNhbmNlbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNvbW1pdC1hY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIlllc1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZGRiMzgyYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSF2dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiKVxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vVnVlU2VsZWN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlU2VsZWN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVTZWxlY3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTczMDc2ZTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzMwNzZlOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjUwNzlmMjk0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5maWVsZHNldFtkaXNhYmxlZF0gLm11bHRpc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjFweDt0b3A6MXB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjM1cHg7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2tcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyLC5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbjotOHB4IDAgMCAtOHB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojNDFiODgzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MnB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnRcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNDEsLjI2LC4yLC42Mik7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyey13ZWJraXQtYW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjUxLC4wOSwuMjEsLjgpO2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC41MSwuMDksLjIxLC44KTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZVxcbn1cXG4ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eToxXFxufVxcbi5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlciwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZle29wYWNpdHk6MFxcbn1cXG4ubXVsdGlzZWxlY3QsLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4Oy1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb25cXG59XFxuLm11bHRpc2VsZWN0ey13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMzNTQ5NWVcXG59XFxuLm11bHRpc2VsZWN0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94XFxufVxcbi5tdWx0aXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtvcGFjaXR5Oi42XFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZle3otaW5kZXg6MVxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19zZWxlY3R7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpXFxufVxcbi5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MFxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi1oZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjAgMCAwIDVweDt3aWR0aDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7dHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206OHB4O3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9fc2luZ2xle3dpZHRoOmF1dG9cXG59XFxuLm11bHRpc2VsZWN0X19pbnB1dDpob3ZlciwubXVsdGlzZWxlY3RfX3NpbmdsZTpob3Zlcntib3JkZXItY29sb3I6I2NmY2ZjZlxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0OmZvY3VzLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmZvY3Vze2JvcmRlci1jb2xvcjojYThhOGE4O291dGxpbmU6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NpbmdsZXtwYWRkaW5nLWxlZnQ6NnB4O21hcmdpbi1ib3R0b206OHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fdGFncy13cmFwe2Rpc3BsYXk6aW5saW5lXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnc3ttaW4taGVpZ2h0OjQwcHg7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCA0MHB4IDAgOHB4O2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtiYWNrZ3JvdW5kOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X190YWd7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo0cHggMjZweCA0cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tcmlnaHQ6MTBweDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjE7YmFja2dyb3VuZDojNDFiODgzO21hcmdpbi1ib3R0b206NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpc1xcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29ue2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OjdweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2JvdHRvbTowO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOm5vcm1hbDt3aWR0aDoyMnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjIycHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlclxcbn1cXG4ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2VcXG59XFxuLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3Jle3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjY1JTtjb2xvcjojOTk5O21hcmdpbi10b3A6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2NvbnRlbnQ6XFxcIlxcXCJcXG59XFxuLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntjb2xvcjojYWRhZGFkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MTBweDtwYWRkaW5nLXRvcDoycHhcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjI0MHB4O292ZXJmbG93OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JvcmRlci10b3A6bm9uZTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7ei1pbmRleDoxOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoXFxufVxcbi5tdWx0aXNlbGVjdF9fY29udGVudHtsaXN0LXN0eWxlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowO21hcmdpbjowO21pbi13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3QtLWFib3ZlIC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye2JvdHRvbToxMDAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2NvbnRlbnQ6OndlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fZWxlbWVudHtkaXNwbGF5OmJsb2NrXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9ue2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMnB4O21pbi1oZWlnaHQ6NDBweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcFxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcnt0b3A6MDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xpbmUtaGVpZ2h0OjQwcHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoyMHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojNDFiODgzO291dGxpbmU6bm9uZTtjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0KTtiYWNrZ3JvdW5kOiM0MWI4ODM7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWR7YmFja2dyb3VuZDojZjNmM2YzO2NvbG9yOiMzNTQ5NWU7Zm9udC13ZWlnaHQ6NzAwXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3RlZCk7Y29sb3I6c2lsdmVyXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZmY2YTZhO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntiYWNrZ3JvdW5kOiNmZjZhNmE7Y29udGVudDphdHRyKGRhdGEtZGVzZWxlY3QpO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fc2VsZWN0LC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7Y29sb3I6I2E2YTZhNlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7Y3Vyc29yOnRleHQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2RlZGVkZSFpbXBvcnRhbnRcXG59XFxuLm11bHRpc2VsZWN0LWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZley13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlO3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZVxcbn1cXG4ubXVsdGlzZWxlY3QtZW50ZXIsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjBcXG59XFxuLm11bHRpc2VsZWN0X19zdHJvbmd7bWFyZ2luLWJvdHRvbTo4cHg7bGluZS1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3BcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NlbGVjdHtyaWdodDphdXRvO2xlZnQ6MXB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3RhZ3N7cGFkZGluZzo4cHggOHB4IDAgNDBweFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jb250ZW50e3RleHQtYWxpZ246cmlnaHRcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3JpZ2h0OmF1dG87bGVmdDowXFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NsZWFye3JpZ2h0OmF1dG87bGVmdDoxMnB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cmlnaHQ6YXV0bztsZWZ0OjFweFxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXtcXG4wJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKVxcbn1cXG50b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pXFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGF7XFxuMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMClcXG59XFxudG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKVxcbn1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQSxnQ0FBZ0MsbUJBQW1CO0NBQUM7QUFBQSxzQkFBc0Isa0JBQWtCLFVBQVUsUUFBUSxXQUFXLFlBQVksZ0JBQWdCLGFBQWE7Q0FBQztB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MkIsTUFBTSxRQUFRLGtCQUFrQixpQkFBaUIsbUJBQW1CLGlCQUFpQjtDQUFDO0FBQUEsZ0NBQWdDLG1CQUFtQixhQUFhLFVBQVU7Q0FBQztBQUFBLHNDQUFzQywwQkFBMEIsbUJBQW1CLFVBQVU7Q0FBQztBQUFBLCtCQUErQixtQkFBbUIsY0FBYyxlQUFlO0NBQUM7QUFBQSxxQ0FBcUMsNEJBQTRCLFlBQVk7Q0FBQztBQUFBLDhEQUE4RCxtQkFBbUIsVUFBVTtDQUFDO0FBQUEsb0VBQW9FLG1CQUFtQiw0QkFBNEIsVUFBVTtDQUFDO0FBQUEsdUJBQXVCLG1CQUFtQixtQkFBbUI7Q0FBQztBQUFBLHdIQUF3SCxtQkFBbUIsYUFBYTtDQUFDO0FBQUEsK0JBQStCLFlBQVksbUJBQW1CO0NBQUM7QUFBQSw4REFBOEQsNEJBQTRCO0NBQUM7QUFBQSxvREFBb0QsaUNBQUEsd0JBQXdCO0NBQUM7QUFBQSw2Q0FBNkMsU0FBUztDQUFDO0FBQUEscUJBQXFCLGtCQUFrQixpQkFBaUIscUJBQXFCLGtCQUFrQjtDQUFDO0FBQUEsdUJBQXVCLGdCQUFnQjtDQUFDO0FBQUEsK0JBQStCLFdBQVcsUUFBUTtDQUFDO0FBQUEsNkJBQTZCLHNCQUFzQjtDQUFDO0FBQUEsZ0NBQWdDLGdCQUFnQjtDQUFDO0FBQUEscUNBQXFDLFdBQVcsTUFBTTtDQUFDO0FBQUEsOEJBQThCLFdBQVcsU0FBUztDQUFDO0FBQUEsZ0NBQWdDLFdBQVcsUUFBUTtDQUFDO0FBQUE7QUFBYSxHQUFHLDRCQUFBLG1CQUFtQjtDQUFDO0FBQUEsR0FBRyxnQ0FBQSx1QkFBdUI7Q0FBQztDQUFDO0FBQWhFO0FBQWEsR0FBRyw0QkFBQSxtQkFBbUI7Q0FBQztBQUFBLEdBQUcsZ0NBQUEsdUJBQXVCO0NBQUM7Q0FBQ1wiLFwiZmlsZVwiOlwidnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZmllbGRzZXRbZGlzYWJsZWRdIC5tdWx0aXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxcHg7dG9wOjFweDt3aWR0aDo0OHB4O2hlaWdodDozNXB4O2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlciwubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW46LThweCAwIDAgLThweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6IzQxYjg4MyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjJweDtib3gtc2hhZG93OjAgMCAwIDFweCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlcnthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNTEsLjA5LC4yMSwuOCk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjF9Lm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowfS5tdWx0aXNlbGVjdCwubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7LW1zLXRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn0ubXVsdGlzZWxlY3R7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0MHB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMzU0OTVlfS5tdWx0aXNlbGVjdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubXVsdGlzZWxlY3Q6Zm9jdXN7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7b3BhY2l0eTouNn0ubXVsdGlzZWxlY3QtLWFjdGl2ZXt6LWluZGV4OjF9Lm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4taGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzowIDAgMCA1cHg7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOmJvcmRlciAuMXMgZWFzZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbTo4cHg7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19zaW5nbGV7d2lkdGg6YXV0b30ubXVsdGlzZWxlY3RfX2lucHV0OmhvdmVyLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmhvdmVye2JvcmRlci1jb2xvcjojY2ZjZmNmfS5tdWx0aXNlbGVjdF9faW5wdXQ6Zm9jdXMsLm11bHRpc2VsZWN0X19zaW5nbGU6Zm9jdXN7Ym9yZGVyLWNvbG9yOiNhOGE4YTg7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdF9fc2luZ2xle3BhZGRpbmctbGVmdDo2cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm11bHRpc2VsZWN0X190YWdzLXdyYXB7ZGlzcGxheTppbmxpbmV9Lm11bHRpc2VsZWN0X190YWdze21pbi1oZWlnaHQ6NDBweDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDQwcHggMCA4cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JhY2tncm91bmQ6I2ZmZn0ubXVsdGlzZWxlY3RfX3RhZ3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjRweCAyNnB4IDRweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1yaWdodDoxMHB4O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtiYWNrZ3JvdW5kOiM0MWI4ODM7bWFyZ2luLWJvdHRvbTo1cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjttYXgtd2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5tdWx0aXNlbGVjdF9fdGFnLWljb257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6N3B4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3R5bGU6bm9ybWFsO3dpZHRoOjIycHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjJweDt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlfS5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOH0ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcn0ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZX0ubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmV7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6NjUlO2NvbG9yOiM5OTk7bWFyZ2luLXRvcDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIn0ubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2NvbG9yOiNhZGFkYWQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctdG9wOjJweH0ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MjQwcHg7b3ZlcmZsb3c6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDt6LWluZGV4OjE7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9Lm11bHRpc2VsZWN0X19jb250ZW50e2xpc3Qtc3R5bGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdC0tYWJvdmUgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7Ym90dG9tOjEwMCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZThlOGU4fS5tdWx0aXNlbGVjdF9fY29udGVudDo6d2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9Lm11bHRpc2VsZWN0X19lbGVtZW50e2Rpc3BsYXk6YmxvY2t9Lm11bHRpc2VsZWN0X19vcHRpb257ZGlzcGxheTpibG9jaztwYWRkaW5nOjEycHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3RvcDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGluZS1oZWlnaHQ6NDBweDtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjIwcHh9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiM0MWI4ODM7b3V0bGluZTpub25lO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3QpO2JhY2tncm91bmQ6IzQxYjg4Mztjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOiNmM2YzZjM7Y29sb3I6IzM1NDk1ZTtmb250LXdlaWdodDo3MDB9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkOmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdGVkKTtjb2xvcjpzaWx2ZXJ9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNmZjZhNmE7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2JhY2tncm91bmQ6I2ZmNmE2YTtjb250ZW50OmF0dHIoZGF0YS1kZXNlbGVjdCk7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3QtLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19zZWxlY3QsLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtjb2xvcjojYTZhNmE2fS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtjdXJzb3I6dGV4dDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZGVkZWRlIWltcG9ydGFudH0ubXVsdGlzZWxlY3QtZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlfS5tdWx0aXNlbGVjdC1lbnRlciwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZle29wYWNpdHk6MH0ubXVsdGlzZWxlY3RfX3N0cm9uZ3ttYXJnaW4tYm90dG9tOjhweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0e3RleHQtYWxpZ246cmlnaHR9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3JpZ2h0OmF1dG87bGVmdDoxcHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fdGFnc3twYWRkaW5nOjhweCA4cHggMCA0MHB4fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NvbnRlbnR7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7cmlnaHQ6YXV0bztsZWZ0OjB9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY2xlYXJ7cmlnaHQ6YXV0bztsZWZ0OjEycHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc3Bpbm5lcntyaWdodDphdXRvO2xlZnQ6MXB4fUBrZXlmcmFtZXMgYXswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vVnVlU2VsZWN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTZjYzA1MzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vVnVlU2VsZWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0IHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiA0cHggNDBweCAwIDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xcbn1cXG4ubXVsdGlzZWxlY3QuaGFzLWVycm9yIC5tdWx0aXNlbGVjdF9fdGFncyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTUwODAwO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IGlucHV0W3R5cGU9dGV4dF0ubXVsdGlzZWxlY3RfX2lucHV0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uLFxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0IHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xcbiAgdG9wOiA3MCU7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc3Bpbm5lciB7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICB3aWR0aDogMzRweDtcXG59XFxuc3Bhbi5tdWx0aXNlbGVjdF9fdGFnIHtcXG4gIHBhZGRpbmc6IDVweCAyNnB4IDVweCAxMHB4O1xcbn1cXG4ubXVsdGlzZWxlY3QsIC5tdWx0aXNlbGVjdF9faW5wdXQsIC5tdWx0aXNlbGVjdF9fc2luZ2xlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm11bHRpc2VsZWN0X19jbGVhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyLCAubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxuICB0b3A6IDNweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FBRTtBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtDQUFFO0FBQ3JCO0lBQ0Usc0JBQXNCO0NBQUU7QUFFNUI7RUFDRSwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FBRTtBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FBRTtBQUV0QjtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FBRTtBQUV4QjtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7Q0FBRTtBQUVwQzs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtDQUFFO0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FBRTtBQUVqQjtFQUNFLFNBQVM7Q0FBRTtBQUViO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FBRTtBQUVoQjtFQUNFLDJCQUEyQjtDQUFFO0FBRS9CO0VBQ0UsZ0JBQWdCO0NBQUU7QUFFcEI7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztDQUFFO0FBRWY7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0NBQUU7QUFFN0I7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtDQUFFXCIsXCJmaWxlXCI6XCJWdWVTZWxlY3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFncyB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4IDAgNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3M6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNiNWI1YjU7IH1cXG5cXG4ubXVsdGlzZWxlY3QuaGFzLWVycm9yIC5tdWx0aXNlbGVjdF9fdGFncyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTUwODAwOyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWctaWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IGlucHV0W3R5cGU9dGV4dF0ubXVsdGlzZWxlY3RfX2lucHV0IHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uLFxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0OmJlZm9yZSB7XFxuICB0b3A6IDcwJTsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc3Bpbm5lciB7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICB3aWR0aDogMzRweDsgfVxcblxcbnNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDsgfVxcblxcbi5tdWx0aXNlbGVjdCwgLm11bHRpc2VsZWN0X19pbnB1dCwgLm11bHRpc2VsZWN0X19zaW5nbGUge1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyLCAubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxuICB0b3A6IDNweDtcXG4gIHJpZ2h0OiAxMHB4OyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidnVlLXNlbGVjdFwiPlxuICAgICAgICA8bXVsdGlzZWxlY3QgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICBhbGxvdy1lbXB0eVxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgOmludGVybmFsLXNlYXJjaD1cIiFpc1NlcnZlclNpZGVcIlxuICAgICAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgOnRhZ2dhYmxlPVwidGFnZ2FibGVcIlxuICAgICAgICAgICAgOmNsZWFyLW9uLXNlbGVjdD1cIiFtdWx0aXBsZVwiXG4gICAgICAgICAgICA6Y2xvc2Utb24tc2VsZWN0PVwiIW11bHRpcGxlXCJcbiAgICAgICAgICAgIDpzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuc2VsZWN0KVwiXG4gICAgICAgICAgICA6ZGVzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuZGVzZWxlY3QpXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1sYWJlbD1cIl9fKGxhYmVscy5zZWxlY3RlZClcIlxuICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiX18obGFiZWxzLnBsYWNlaG9sZGVyKVwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgOm9wdGlvbnMtbGltaXQ9XCIxMDBcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25LZXlzXCJcbiAgICAgICAgICAgIDpjdXN0b20tbGFiZWw9XCJjdXN0b21MYWJlbFwiXG4gICAgICAgICAgICBAc2VhcmNoLWNoYW5nZT1cInF1ZXJ5PSRldmVudDtnZXRPcHRpb25zKClcIlxuICAgICAgICAgICAgQHRhZz1cIiRlbWl0KCd0YWcnLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudClcIj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJub1Jlc3VsdFwiPlxuICAgICAgICAgICAgICAgIHt7IF9fKGxhYmVscy5ub1Jlc3VsdCkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwib3B0aW9uXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVwiJG9wdGlvbnMuZmlsdGVycy5oaWdobGlnaHQob3B0aW9uTGlzdFtwcm9wcy5vcHRpb25dLCBxdWVyeSlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjbGVhclwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiXG4gICAgICAgICAgICAgICAgdi1pZj1cIiFkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdWx0aXNlbGVjdF9fY2xlYXJcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaGFzU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlZG93bi5wcmV2ZW50LnN0b3A9XCJjbGVhcigpXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L211bHRpc2VsZWN0PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgTXVsdGlzZWxlY3QgZnJvbSAndnVlLW11bHRpc2VsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgTXVsdGlzZWxlY3QgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5TWFwOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGFnZ2FibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGFzRXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBwaXZvdFBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tUGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ1BsZWFzZSBjaG9vc2UnLFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY3RlZCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAnUHJlc3MgZW50ZXIgdG8gc2VsZWN0JyxcbiAgICAgICAgICAgICAgICBkZXNlbGVjdDogJ1ByZXNzIGVudGVyIHRvIGRlc2VsZWN0JyxcbiAgICAgICAgICAgICAgICBub1Jlc3VsdDogJ05vIEVsZW1lbnRzIEZvdW5kJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxuICAgICAgICBpc1NlcnZlclNpZGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UgIT09IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCkgfHwgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMudmFsdWUgIT09IG51bGwpO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25LZXlzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5TWFwID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXModGhpcy5vcHRpb25MaXN0KS5tYXAoTnVtYmVyKVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXModGhpcy5vcHRpb25MaXN0KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZmlsdGVyczoge1xuICAgICAgICBoaWdobGlnaHQob3B0aW9uLCBxdWVyeSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVyeS5zcGxpdCgnICcpLmZpbHRlcih3b3JkID0+IHdvcmQubGVuZ3RoKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uLnJlcGxhY2UobmV3IFJlZ0V4cChgKCR7d29yZH0pYCwgJ2dpJyksICc8Yj4kMTwvYj4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGl2b3RQYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tUGFyYW1zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0T3B0aW9ucyA9IGRlYm91bmNlKHRoaXMuZ2V0T3B0aW9ucywgNTAwKTtcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wdGlvbkxpc3Q6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldE9wdGlvbnMoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy5zb3VyY2UsIFtdLCBudWxsKSwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5nZXRQYXJhbXMoKSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzT3B0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBwaXZvdFBhcmFtczogdGhpcy5waXZvdFBhcmFtcyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYXJhbXM6IHRoaXMuY3VzdG9tUGFyYW1zLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2Vzc09wdGlvbnMocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5xdWVyeSAmJiAhdGhpcy52YWx1ZUlzTWF0Y2hlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZUlzTWF0Y2hlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25LZXlzLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uID09PSBzZWxmLnZhbHVlKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25LZXlzLmZpbHRlcihvcHRpb24gPT5cbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlLmZpbHRlcih2YWwgPT4gdmFsID09PSBvcHRpb24pLmxlbmd0aCA+IDApLmxlbmd0aCA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbUxhYmVsKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGlzdFtvcHRpb25dO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyU2lkZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzcmM9XCJ2dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiPjwvc3R5bGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG4gICAgLnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0IHtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzZweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3Mge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggNDBweCAwIDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdC5oYXMtZXJyb3IgLm11bHRpc2VsZWN0X190YWdzIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnLWljb24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IGlucHV0W3R5cGU9dGV4dF0ubXVsdGlzZWxlY3RfX2lucHV0IHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19vcHRpb24sXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXIge1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcbiAgICAgICAgdG9wOiA3MCU7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zcGlubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICB9XG5cbiAgICBzcGFuLm11bHRpc2VsZWN0X190YWcge1xuICAgICAgICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDtcbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3QsIC5tdWx0aXNlbGVjdF9faW5wdXQsIC5tdWx0aXNlbGVjdF9fc2luZ2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogN3B4O1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyLCAubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInZ1ZS1zZWxlY3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIm11bHRpc2VsZWN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogeyBcImhhcy1lcnJvclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IFwiXCIsXG4gICAgICAgICAgICBcImFsbG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLFxuICAgICAgICAgICAgXCJpbnRlcm5hbC1zZWFyY2hcIjogIV92bS5pc1NlcnZlclNpZGUsXG4gICAgICAgICAgICBtdWx0aXBsZTogX3ZtLm11bHRpcGxlLFxuICAgICAgICAgICAgdGFnZ2FibGU6IF92bS50YWdnYWJsZSxcbiAgICAgICAgICAgIFwiY2xlYXItb24tc2VsZWN0XCI6ICFfdm0ubXVsdGlwbGUsXG4gICAgICAgICAgICBcImNsb3NlLW9uLXNlbGVjdFwiOiAhX3ZtLm11bHRpcGxlLFxuICAgICAgICAgICAgXCJzZWxlY3QtbGFiZWxcIjogX3ZtLl9fKF92bS5sYWJlbHMuc2VsZWN0KSxcbiAgICAgICAgICAgIFwiZGVzZWxlY3QtbGFiZWxcIjogX3ZtLl9fKF92bS5sYWJlbHMuZGVzZWxlY3QpLFxuICAgICAgICAgICAgXCJzZWxlY3RlZC1sYWJlbFwiOiBfdm0uX18oX3ZtLmxhYmVscy5zZWxlY3RlZCksXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLl9fKF92bS5sYWJlbHMucGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICBcIm9wdGlvbnMtbGltaXRcIjogMTAwLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbktleXMsXG4gICAgICAgICAgICBcImN1c3RvbS1sYWJlbFwiOiBfdm0uY3VzdG9tTGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNlYXJjaC1jaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudFxuICAgICAgICAgICAgICBfdm0uZ2V0T3B0aW9ucygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidGFnXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRvcHRpb25zLmZpbHRlcnMuaGlnaGxpZ2h0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9uTGlzdFtwcm9wcy5vcHRpb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm11bHRpc2VsZWN0X19jbGVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJub1Jlc3VsdFwiIH0sIHNsb3Q6IFwibm9SZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oX3ZtLmxhYmVscy5ub1Jlc3VsdCkpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzMwNzZlOWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IWZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcIilcbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGQ0NDNmZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ZDQ0M2ZlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL21hdGVyaWFsX2dyZWVuLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxZGJiOWMzMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vbWF0ZXJpYWxfZ3JlZW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9tYXRlcmlhbF9ncmVlbi5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1xuLy8gbW9kdWxlIGlkID0gMTExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mbGF0cGlja3ItY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBtYXgtaGVpZ2h0OiA2NDBweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDk5OTk5O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3BlbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW4ge1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzVGltZSAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIubm9DYWxlbmRhci5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgbGVmdDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBtYXJnaW46IDAgLTVweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbjogMCAtNHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDEwcHggY2FsYygzLjU3JSAtIDEuNXB4KTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBpLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICBsZWZ0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgcmlnaHQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6ICNmNjQ3NDc7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIGZpbGw6IGluaGVyaXQ7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0LFxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgcGFkZGluZzogMCA0cHggMCAycHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGxpbmUtaGVpZ2h0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjA1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd24ge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyBwYXRoIHtcXG4gIGZpbGw6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHtcXG4gIGZvbnQtc2l6ZTogMTM1JTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGxlZnQ6IDEyLjUlO1xcbiAgcGFkZGluZzogNi4xNnB4IDAgMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41Y2g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDZjaDtcXG4gIHdpZHRoOiA3Y2hcXFxcMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMCAwIDAgMC41Y2g7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXTpob3ZlciB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci13ZWVrZGF5cyB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcbnNwYW4uZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxufVxcbi5mbGF0cGlja3ItZGF5cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItZGF5czpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBtaW4td2lkdGg6IDMwNy44NzVweDtcXG4gIG1heC13aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0LFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1kYXkge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTQuMjg1NzE0MyU7XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICBtYXgtd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS50b2RheTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2Uge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZCxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLm5leHRNb250aERheSB7XFxuICBjb2xvcjogcmdiYSg3Miw3Miw3MiwwLjMpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbn1cXG4ucmFuZ2VNb2RlIC5mbGF0cGlja3ItZGF5IHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1yQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcbi5mbGF0cGlja3ItdGltZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUuaGFzU2Vjb25kcyAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiAyNiU7XFxufVxcbi5mbGF0cGlja3ItdGltZS50aW1lMjRociAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA0OSU7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLXNlY29uZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItdGltZS1zZXBhcmF0b3IsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMiU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMTglO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcXG59XFxuLmZsYXRwaWNrci1pbnB1dFtyZWFkb25seV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVSaWdodCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVSaWdodE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbiB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx3QkFBd0I7VUFDaEIsZ0JBQWdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrQkFBK0I7VUFDdkIsdUJB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IjpcIm1hdGVyaWFsX2dyZWVuLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmxhdHBpY2tyLWNhbGVuZGFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgbWF4LWhlaWdodDogNjQwcHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB6LWluZGV4OiA5OTk5OTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlLm9wZW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYy5vcGVuIHtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1dlZWtzIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1RpbWUgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm5vQ2FsZW5kYXIuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGxlZnQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDphZnRlciB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgbWFyZ2luOiAwIC01cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBtYXJnaW46IDAgLTRweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3R0b206IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcXG4gIHRvcDogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1tb250aCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZpbGw6ICNmZmY7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBwYWRkaW5nOiAxMHB4IGNhbGMoMy41NyUgLSAxLjVweCk7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggaSxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgbGVmdDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIHJpZ2h0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlcixcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIge1xcbiAgY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlciBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiAjZjY0NzQ3O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcge1xcbiAgd2lkdGg6IDE0cHg7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcgcGF0aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHBhdGgge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICBmaWxsOiBpbmhlcml0O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCxcXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTRweDtcXG4gIHBhZGRpbmc6IDAgNHB4IDAgMnB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBsaW5lLWhlaWdodDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4wNSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzMlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcCB7XFxuICB0b3A6IDA7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duIHtcXG4gIHRvcDogNTAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcgcGF0aCB7XFxuICBmaWxsOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciBzcGFuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCB7XFxuICBmb250LXNpemU6IDEzNSU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBsZWZ0OiAxMi41JTtcXG4gIHBhZGRpbmc6IDYuMTZweCAwIDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWNoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA2Y2g7XFxuICB3aWR0aDogN2NoXFxcXDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaXRpYWw7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdLFxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF06aG92ZXIge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3Itd2Vla2RheXMge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uZGF5Q29udGFpbmVyLFxcbi5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMXB4IDAgMCAwO1xcbn1cXG4uZmxhdHBpY2tyLWRheXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWRheXM6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmRheUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWluLXdpZHRoOiAzMDcuODc1cHg7XFxuICBtYXgtd2lkdGg6IDMwNy44NzVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItZGF5IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgd2lkdGg6IDE0LjI4NTcxNDMlO1xcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTQuMjg1NzE0MyU7XFxuICAgICAgICAgIGZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgbWF4LXdpZHRoOiAzOXB4O1xcbiAgaGVpZ2h0OiAzOXB4O1xcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XFxuICBib3JkZXItY29sb3I6ICNlMmUyZTI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5IHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkudG9kYXk6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbiAgYmFja2dyb3VuZDogI2JiYjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZCxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLm5leHRNb250aERheSB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LmluUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5uZXh0TW9udGhEYXkge1xcbiAgY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4zKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmZsYXRwaWNrci1kYXkud2Vlay5zZWxlY3RlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG59XFxuLnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheSB7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHNwYW4uZmxhdHBpY2tyLWRheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ4NDg0ODtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ4NDg0ODtcXG59XFxuLmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogMjYlO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUudGltZTI0aHIgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNDklO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItaG91ciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1taW51dGUsXFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1zZWNvbmQge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBvdXRsaW5lOiAwO1xcbiAgd2lkdGg6IDE4JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmhvdmVyLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVSaWdodE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRkNDQzZmUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc5OGQ1NjUyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRkNDQzZmUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5hLmlucHV0LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtIQTtJQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkRhdGVwaWNrZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmxhdHBpY2tyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJwbGFjZWhvbGRlclxcXCJcXG4gICAgICAgICAgICAgICAgOmlkPVxcXCInZGF0ZS1pbnB1dC0nICsgX3VpZFxcXCJcXG4gICAgICAgICAgICAgICAgOm5hbWU9XFxcIm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwidmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBjb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtY2xvY2tcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0aW1lT25seVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jYWxlbmRhci1hbHRcXFwiIHYtZWxzZT48L2k+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgRmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XFxuXFxuLy8gY29uc3QgRmxhdHBpY2tyTDEwbnMgPSB7XFxuLy8gICAgIHJvOiByZXF1aXJlKCdmbGF0cGlja3IvZGlzdC9sMTBuL3JvLmpzJykucm8sXFxuLy8gfTtcXG4vLyBGbGF0cGlja3IubG9jYWxpemUoRmxhdHBpY2tyTDEwbnNbU3RvcmUudXNlci5wcmVmZXJlbmNlcy5nbG9iYWwubGFuZ10pOyAvL2ZpeG1lXFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgICAgdmFsdWU6IHtcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBuYW1lOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgdGltZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgdGltZU9ubHk6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdTZWxlY3QgRGF0ZScsIC8vIGZpeG1lXFxuICAgICAgICB9LFxcbiAgICAgICAgZGlzYWJsZWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZvcm1hdDoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiAnZC1tLVknLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGlucHV0Q2xhc3M6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCcsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBwaWNrZXI6IG51bGwsXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgY29uZmlnKHNlbGYgPSB0aGlzKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgd2Vla051bWJlcnM6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy52YWx1ZSxcXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogdGhpcy5mb3JtYXQsXFxuICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjbGlja09wZW5zOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBub0NhbGVuZGFyOiB0aGlzLnRpbWVPbmx5LFxcbiAgICAgICAgICAgICAgICBlbmFibGVUaW1lOiB0aGlzLnRpbWUgfHwgdGhpcy50aW1lT25seSxcXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXRlcywgZGF0ZVN0cikge1xcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnaW5wdXQnLCBkYXRlU3RyKTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHZhbHVlKG5ld1ZhbHVlKSB7XFxuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2V0RGF0ZShuZXdWYWx1ZSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgdGhpcy5waWNrZXIgPSBuZXcgRmxhdHBpY2tyKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksIHRoaXMuY29uZmlnKTtcXG4gICAgfSxcXG5cXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcXG4gICAgICAgIHRoaXMucGlja2VyLmRlc3Ryb3koKTtcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzcmM9XFxcImZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcXFwiPjwvc3R5bGU+XFxuXFxuPHN0eWxlPlxcblxcbiAgICBhLmlucHV0LWJ1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxhdHBpY2tyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgOmlkPVwiJ2RhdGUtaW5wdXQtJyArIF91aWRcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQgY29udHJvbFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRpbWVPbmx5XCI+XG4gICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWFsdFwiIHYtZWxzZT48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgRmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XG5cbi8vIGNvbnN0IEZsYXRwaWNrckwxMG5zID0ge1xuLy8gICAgIHJvOiByZXF1aXJlKCdmbGF0cGlja3IvZGlzdC9sMTBuL3JvLmpzJykucm8sXG4vLyB9O1xuLy8gRmxhdHBpY2tyLmxvY2FsaXplKEZsYXRwaWNrckwxMG5zW1N0b3JlLnVzZXIucHJlZmVyZW5jZXMuZ2xvYmFsLmxhbmddKTsgLy9maXhtZVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0aW1lT25seToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBEYXRlJywgLy8gZml4bWVcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZC1tLVknLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZm9ybS1jb250cm9sJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBpY2tlcjogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY29uZmlnKHNlbGYgPSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbGlja09wZW5zOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5vQ2FsZW5kYXI6IHRoaXMudGltZU9ubHksXG4gICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdGhpcy50aW1lIHx8IHRoaXMudGltZU9ubHksXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXRlcywgZGF0ZVN0cikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdpbnB1dCcsIGRhdGVTdHIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2V0RGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMucGlja2VyID0gbmV3IEZsYXRwaWNrcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLCB0aGlzLmNvbmZpZyk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGlja2VyLmRlc3Ryb3koKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzcmM9XCJmbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXCI+PC9zdHlsZT5cblxuPHN0eWxlPlxuXG4gICAgYS5pbnB1dC1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwiLyogZmxhdHBpY2tyIHYzLjEuNCwgQGxpY2Vuc2UgTUlUICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuZmxhdHBpY2tyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxuXHJcblxyXG52YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xuXG5mdW5jdGlvbiBjb21wYXJlRGF0ZXMoZGF0ZTEsIGRhdGUyLCB0aW1lbGVzcykge1xyXG4gICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoZGF0ZTEuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGRhdGUyLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcclxufVxyXG52YXIgbW9udGhUb1N0ciA9IGZ1bmN0aW9uIChtb250aE51bWJlciwgc2hvcnRoYW5kLCBsb2NhbGUpIHsgcmV0dXJuIGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdOyB9O1xyXG52YXIgZ2V0V2VlayA9IGZ1bmN0aW9uIChnaXZlbkRhdGUpIHtcclxuICAgIHZhciBvbmVqYW4gPSBuZXcgRGF0ZShnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKCgoZ2l2ZW5EYXRlLmdldFRpbWUoKSAtIG9uZWphbi5nZXRUaW1lKCkpIC8gODY0MDAwMDAgK1xyXG4gICAgICAgIG9uZWphbi5nZXREYXkoKSArXHJcbiAgICAgICAgMSkgL1xyXG4gICAgICAgIDcpO1xyXG59O1xyXG52YXIgZHVyYXRpb24gPSB7XHJcbiAgICBEQVk6IDg2NDAwMDAwLFxyXG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBfZGlzYWJsZTogW10sXHJcbiAgICBfZW5hYmxlOiBbXSxcclxuICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxyXG4gICAgYWx0Rm9ybWF0OiBcIkYgaiwgWVwiLFxyXG4gICAgYWx0SW5wdXQ6IGZhbHNlLFxyXG4gICAgYWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcclxuICAgIGFuaW1hdGU6IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSA9PT0gLTEsXHJcbiAgICBhcmlhRGF0ZUZvcm1hdDogXCJGIGosIFlcIixcclxuICAgIGNsaWNrT3BlbnM6IHRydWUsXHJcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxyXG4gICAgY29uanVuY3Rpb246IFwiLCBcIixcclxuICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcclxuICAgIGRlZmF1bHRIb3VyOiAxMixcclxuICAgIGRlZmF1bHRNaW51dGU6IDAsXHJcbiAgICBkZWZhdWx0U2Vjb25kczogMCxcclxuICAgIGRpc2FibGU6IFtdLFxyXG4gICAgZGlzYWJsZU1vYmlsZTogZmFsc2UsXHJcbiAgICBlbmFibGU6IFtdLFxyXG4gICAgZW5hYmxlU2Vjb25kczogZmFsc2UsXHJcbiAgICBlbmFibGVUaW1lOiBmYWxzZSxcclxuICAgIGdldFdlZWs6IGdldFdlZWssXHJcbiAgICBob3VySW5jcmVtZW50OiAxLFxyXG4gICAgaWdub3JlZEZvY3VzRWxlbWVudHM6IFtdLFxyXG4gICAgaW5saW5lOiBmYWxzZSxcclxuICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXHJcbiAgICBtaW51dGVJbmNyZW1lbnQ6IDUsXHJcbiAgICBtb2RlOiBcInNpbmdsZVwiLFxyXG4gICAgbmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXHJcbiAgICBub0NhbGVuZGFyOiBmYWxzZSxcclxuICAgIG9uQ2hhbmdlOiBbXSxcclxuICAgIG9uQ2xvc2U6IFtdLFxyXG4gICAgb25EYXlDcmVhdGU6IFtdLFxyXG4gICAgb25EZXN0cm95OiBbXSxcclxuICAgIG9uS2V5RG93bjogW10sXHJcbiAgICBvbk1vbnRoQ2hhbmdlOiBbXSxcclxuICAgIG9uT3BlbjogW10sXHJcbiAgICBvblBhcnNlQ29uZmlnOiBbXSxcclxuICAgIG9uUmVhZHk6IFtdLFxyXG4gICAgb25WYWx1ZVVwZGF0ZTogW10sXHJcbiAgICBvblllYXJDaGFuZ2U6IFtdLFxyXG4gICAgcGx1Z2luczogW10sXHJcbiAgICBwb3NpdGlvbjogXCJhdXRvXCIsXHJcbiAgICBwb3NpdGlvbkVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcclxuICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXHJcbiAgICBzdGF0aWM6IGZhbHNlLFxyXG4gICAgdGltZV8yNGhyOiBmYWxzZSxcclxuICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcclxuICAgIHdyYXA6IGZhbHNlLFxyXG59O1xuXG52YXIgZW5nbGlzaCA9IHtcclxuICAgIHdlZWtkYXlzOiB7XHJcbiAgICAgICAgc2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXHJcbiAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgXCJTdW5kYXlcIixcclxuICAgICAgICAgICAgXCJNb25kYXlcIixcclxuICAgICAgICAgICAgXCJUdWVzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgXCJGcmlkYXlcIixcclxuICAgICAgICAgICAgXCJTYXR1cmRheVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgbW9udGhzOiB7XHJcbiAgICAgICAgc2hvcnRoYW5kOiBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICAgIFwiRmViXCIsXHJcbiAgICAgICAgICAgIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuXCIsXHJcbiAgICAgICAgICAgIFwiSnVsXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgICAgIFwiU2VwXCIsXHJcbiAgICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsXHJcbiAgICAgICAgICAgIFwiRGVjXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsb25naGFuZDogW1xyXG4gICAgICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICAgICAgXCJNYXlcIixcclxuICAgICAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBkYXlzSW5Nb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxyXG4gICAgZmlyc3REYXlPZldlZWs6IDAsXHJcbiAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnRoKSB7XHJcbiAgICAgICAgdmFyIHMgPSBudGggJSAxMDA7XHJcbiAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSlcclxuICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcclxuICAgICAgICBzd2l0Y2ggKHMgJSAxMCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdFwiO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZFwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmFuZ2VTZXBhcmF0b3I6IFwiIHRvIFwiLFxyXG4gICAgd2Vla0FiYnJldmlhdGlvbjogXCJXa1wiLFxyXG4gICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxyXG4gICAgdG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCIsXHJcbiAgICBhbVBNOiBbXCJBTVwiLCBcIlBNXCJdLFxyXG59O1xuXG52YXIgcGFkID0gZnVuY3Rpb24gKG51bWJlcikgeyByZXR1cm4gKFwiMFwiICsgbnVtYmVyKS5zbGljZSgtMik7IH07XHJcbnZhciBpbnQgPSBmdW5jdGlvbiAoYm9vbCkgeyByZXR1cm4gKGJvb2wgPT09IHRydWUgPyAxIDogMCk7IH07XHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gICAgaWYgKGltbWVkaWF0ZSA9PT0gdm9pZCAwKSB7IGltbWVkaWF0ZSA9IGZhbHNlOyB9XHJcbiAgICB2YXIgdGltZW91dDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHRpbWVvdXQgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKVxyXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9LCB3YWl0KTtcclxuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lb3V0KVxyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG52YXIgYXJyYXlpZnkgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBvYmogOiBbb2JqXTtcclxufTtcclxuZnVuY3Rpb24gbW91c2VEZWx0YShlKSB7XHJcbiAgICB2YXIgZGVsdGEgPSBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZO1xyXG4gICAgcmV0dXJuIGRlbHRhID49IDAgPyAxIDogLTE7XHJcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lLCBib29sKSB7XHJcbiAgICBpZiAoYm9vbCA9PT0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICB2YXIgZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XHJcbiAgICBlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICByZXR1cm4gZTtcclxufVxyXG5mdW5jdGlvbiBjbGVhck5vZGUobm9kZSkge1xyXG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZClcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XHJcbn1cclxuZnVuY3Rpb24gZmluZFBhcmVudChub2RlLCBjb25kaXRpb24pIHtcclxuICAgIGlmIChjb25kaXRpb24obm9kZSkpXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpXHJcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnQobm9kZS5wYXJlbnROb2RlLCBjb25kaXRpb24pO1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSkge1xyXG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibnVtSW5wdXRXcmFwcGVyXCIpLCBudW1JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm51bUlucHV0IFwiICsgaW5wdXRDbGFzc05hbWUpLCBhcnJvd1VwID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd1VwXCIpLCBhcnJvd0Rvd24gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93RG93blwiKTtcclxuICAgIG51bUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIG51bUlucHV0LnBhdHRlcm4gPSBcIlxcXFxkKlwiO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChudW1JbnB1dCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93VXApO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cblxudmFyIGRvX25vdGhpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH07XHJcbnZhciByZXZGb3JtYXQgPSB7XHJcbiAgICBEOiBkb19ub3RoaW5nLFxyXG4gICAgRjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoTmFtZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLmxvbmdoYW5kLmluZGV4T2YobW9udGhOYW1lKSk7XHJcbiAgICB9LFxyXG4gICAgRzogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG4gICAgfSxcclxuICAgIEg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgSzogZnVuY3Rpb24gKGRhdGVPYmosIGFtUE0pIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyICsgMTIgKiBpbnQoL3BtL2kudGVzdChhbVBNKSkpO1xyXG4gICAgfSxcclxuICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMuc2hvcnRoYW5kLmluZGV4T2Yoc2hvcnRNb250aCkpO1xyXG4gICAgfSxcclxuICAgIFM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xyXG4gICAgfSxcclxuICAgIFU6IGZ1bmN0aW9uIChfLCB1bml4U2Vjb25kcykgeyByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKTsgfSxcclxuICAgIFc6IGZ1bmN0aW9uIChkYXRlT2JqLCB3ZWVrTnVtKSB7XHJcbiAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xyXG4gICAgfSxcclxuICAgIFk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRGdWxsWWVhcihwYXJzZUZsb2F0KHllYXIpKTtcclxuICAgIH0sXHJcbiAgICBaOiBmdW5jdGlvbiAoXywgSVNPRGF0ZSkgeyByZXR1cm4gbmV3IERhdGUoSVNPRGF0ZSk7IH0sXHJcbiAgICBkOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgaDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG4gICAgfSxcclxuICAgIGk6IGZ1bmN0aW9uIChkYXRlT2JqLCBtaW51dGVzKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNaW51dGVzKHBhcnNlRmxvYXQobWludXRlcykpO1xyXG4gICAgfSxcclxuICAgIGo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcclxuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcclxuICAgIH0sXHJcbiAgICBsOiBkb19ub3RoaW5nLFxyXG4gICAgbTogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChwYXJzZUZsb2F0KG1vbnRoKSAtIDEpO1xyXG4gICAgfSxcclxuICAgIG46IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcclxuICAgIH0sXHJcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcclxuICAgIH0sXHJcbiAgICB3OiBkb19ub3RoaW5nLFxyXG4gICAgeTogZnVuY3Rpb24gKGRhdGVPYmosIHllYXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcclxuICAgIH0sXHJcbn07XHJcbnZhciB0b2tlblJlZ2V4ID0ge1xyXG4gICAgRDogXCIoXFxcXHcrKVwiLFxyXG4gICAgRjogXCIoXFxcXHcrKVwiLFxyXG4gICAgRzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIEg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBKOiBcIihcXFxcZFxcXFxkfFxcXFxkKVxcXFx3K1wiLFxyXG4gICAgSzogXCIoYW18QU18QW18YU18cG18UE18UG18cE0pXCIsXHJcbiAgICBNOiBcIihcXFxcdyspXCIsXHJcbiAgICBTOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgVTogXCIoLispXCIsXHJcbiAgICBXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgWTogXCIoXFxcXGR7NH0pXCIsXHJcbiAgICBaOiBcIiguKylcIixcclxuICAgIGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBoOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgaTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBsOiBcIihcXFxcdyspXCIsXHJcbiAgICBtOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgbjogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICB3OiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgeTogXCIoXFxcXGR7Mn0pXCIsXHJcbn07XHJcbnZhciBmb3JtYXRzID0ge1xyXG4gICAgWjogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTsgfSxcclxuICAgIEQ6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLnNob3J0aGFuZFtmb3JtYXRzLncoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKV07XHJcbiAgICB9LFxyXG4gICAgRjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBtb250aFRvU3RyKGZvcm1hdHMubihkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIC0gMSwgZmFsc2UsIGxvY2FsZSk7XHJcbiAgICB9LFxyXG4gICAgRzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBwYWQoZm9ybWF0cy5oKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykpO1xyXG4gICAgfSxcclxuICAgIEg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTsgfSxcclxuICAgIEo6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLm9yZGluYWwgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGRhdGUuZ2V0RGF0ZSgpICsgbG9jYWxlLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIDogZGF0ZS5nZXREYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgSzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgPiAxMSA/IFwiUE1cIiA6IFwiQU1cIik7IH0sXHJcbiAgICBNOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZGF0ZS5nZXRNb250aCgpLCB0cnVlLCBsb2NhbGUpO1xyXG4gICAgfSxcclxuICAgIFM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpOyB9LFxyXG4gICAgVTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMDsgfSxcclxuICAgIFc6IGZ1bmN0aW9uIChkYXRlLCBfLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZ2V0V2VlayhkYXRlKTtcclxuICAgIH0sXHJcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpOyB9LFxyXG4gICAgZDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7IH0sXHJcbiAgICBoOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSAlIDEyID8gZGF0ZS5nZXRIb3VycygpICUgMTIgOiAxMik7IH0sXHJcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTsgfSxcclxuICAgIGo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERhdGUoKTsgfSxcclxuICAgIGw6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLmxvbmdoYW5kW2RhdGUuZ2V0RGF5KCldO1xyXG4gICAgfSxcclxuICAgIG06IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7IH0sXHJcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTsgfSxcclxuICAgIHM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFNlY29uZHMoKTsgfSxcclxuICAgIHc6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERheSgpOyB9LFxyXG4gICAgeTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKTsgfSxcclxufTtcblxuZnVuY3Rpb24gRmxhdHBpY2tySW5zdGFuY2UoZWxlbWVudCwgaW5zdGFuY2VDb25maWcpIHtcclxuICAgIHZhciBzZWxmID0ge307XHJcbiAgICBzZWxmLnBhcnNlRGF0ZSA9IHBhcnNlRGF0ZTtcclxuICAgIHNlbGYuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XHJcbiAgICBzZWxmLl9hbmltYXRpb25Mb29wID0gW107XHJcbiAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xyXG4gICAgc2VsZi5fYmluZCA9IGJpbmQ7XHJcbiAgICBzZWxmLl9zZXRIb3Vyc0Zyb21EYXRlID0gc2V0SG91cnNGcm9tRGF0ZTtcclxuICAgIHNlbGYuY2hhbmdlTW9udGggPSBjaGFuZ2VNb250aDtcclxuICAgIHNlbGYuY2hhbmdlWWVhciA9IGNoYW5nZVllYXI7XHJcbiAgICBzZWxmLmNsZWFyID0gY2xlYXI7XHJcbiAgICBzZWxmLmNsb3NlID0gY2xvc2U7XHJcbiAgICBzZWxmLl9jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcclxuICAgIHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XHJcbiAgICBzZWxmLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgIHNlbGYuanVtcFRvRGF0ZSA9IGp1bXBUb0RhdGU7XHJcbiAgICBzZWxmLm9wZW4gPSBvcGVuO1xyXG4gICAgc2VsZi5yZWRyYXcgPSByZWRyYXc7XHJcbiAgICBzZWxmLnNldCA9IHNldDtcclxuICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XHJcbiAgICBzZWxmLnRvZ2dsZSA9IHRvZ2dsZTtcclxuICAgIGZ1bmN0aW9uIHNldHVwSGVscGVyRnVuY3Rpb25zKCkge1xyXG4gICAgICAgIHNlbGYudXRpbHMgPSB7XHJcbiAgICAgICAgICAgIGdldERheXNJbk1vbnRoOiBmdW5jdGlvbiAobW9udGgsIHlyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IHZvaWQgMCkgeyBtb250aCA9IHNlbGYuY3VycmVudE1vbnRoOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoeXIgPT09IHZvaWQgMCkgeyB5ciA9IHNlbGYuY3VycmVudFllYXI7IH1cclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMSAmJiAoKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCkgfHwgeXIgJSA0MDAgPT09IDApKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHNlbGYuZWxlbWVudCA9IHNlbGYuaW5wdXQgPSBlbGVtZW50O1xyXG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgcGFyc2VDb25maWcoKTtcclxuICAgICAgICBzZXR1cExvY2FsZSgpO1xyXG4gICAgICAgIHNldHVwSW5wdXRzKCk7XHJcbiAgICAgICAgc2V0dXBEYXRlcygpO1xyXG4gICAgICAgIHNldHVwSGVscGVyRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICBidWlsZCgpO1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPVxyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyO1xyXG4gICAgICAgIGlmIChzZWxmLndlZWtXcmFwcGVyICE9PSB1bmRlZmluZWQgJiYgc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIub2Zmc2V0V2lkdGggKyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXHJcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblJlYWR5XCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcclxuICAgICAgICByZXR1cm4gZm4uYmluZChzZWxmKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyICYmICFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyLCBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlLCBzZWxmLmNvbmZpZy5kZWZhdWx0U2Vjb25kcyksIGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVXcmFwcGVyKGUpO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFzZWxmLm1pbkRhdGVIYXNUaW1lIHx8XHJcbiAgICAgICAgICAgIGUudHlwZSAhPT0gXCJpbnB1dFwiIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xyXG4gICAgICAgIHJldHVybiBob3VyICUgMTIgKyAxMiAqIGludChhbVBNID09PSBcIlBNXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWlsaXRhcnkyYW1wbShob3VyKSB7XHJcbiAgICAgICAgc3dpdGNoIChob3VyICUgMjQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgJSAxMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21JbnB1dHMoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBzZWxmLm1pbnV0ZUVsZW1lbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBob3VycyA9IChwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLnNsaWNlKC0yKSwgMTApIHx8IDApICUgMjQsIG1pbnV0ZXMgPSAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MCwgc2Vjb25kcyA9IHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gKHBhcnNlSW50KHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjBcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VycyA9IE1hdGgubWF4KGhvdXJzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1heChtaW51dGVzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5tYXhEYXRlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1pbihtaW51dGVzLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaikge1xyXG4gICAgICAgIHZhciBkYXRlID0gZGF0ZU9iaiB8fCBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iajtcclxuICAgICAgICBpZiAoZGF0ZSlcclxuICAgICAgICAgICAgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgICAgICBpZiAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuaG91ckVsZW1lbnQgfHwgIXNlbGYubWludXRlRWxlbWVudCB8fCBzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZCghc2VsZi5jb25maWcudGltZV8yNGhyXHJcbiAgICAgICAgICAgID8gKDEyICsgaG91cnMpICUgMTIgKyAxMiAqIGludChob3VycyAlIDEyID09PSAwKVxyXG4gICAgICAgICAgICA6IGhvdXJzKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XHJcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBob3VycyA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcclxuICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWNvbmRzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpICsgKGV2ZW50LmRlbHRhIHx8IDApO1xyXG4gICAgICAgIGlmICh5ZWFyLnRvU3RyaW5nKCkubGVuZ3RoID09PSA0IHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICAgICAgaWYgKCEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHllYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmQoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGV2KSB7IHJldHVybiBiaW5kKGVsZW1lbnQsIGV2LCBoYW5kbGVyKTsgfSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyKTsgfSk7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuICAgICAgICBzZWxmLl9oYW5kbGVycy5wdXNoKHsgZWxlbWVudDogZWxlbWVudCwgZXZlbnQ6IGV2ZW50LCBoYW5kbGVyOiBoYW5kbGVyIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25DbGljayhoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIGV2dC53aGljaCA9PT0gMSAmJiBoYW5kbGVyKGV2dCk7IH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcud3JhcCkge1xyXG4gICAgICAgICAgICBbXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJ0b2dnbGVcIiwgXCJjbGVhclwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIiArIGV2dCArIFwiXVwiKSwgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQoZWwsIFwiY2xpY2tcIiwgc2VsZltldnRdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgc2V0dXBNb2JpbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcclxuICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZSh0cmlnZ2VyQ2hhbmdlLCAzMDApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5kYXlzQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbk1vdXNlT3ZlcihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmlubGluZSAmJiAhc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2VkUmVzaXplKTtcclxuICAgICAgICBpZiAod2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcInRvdWNoc3RhcnRcIiwgZG9jdW1lbnRDbGljayk7XHJcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgb25DbGljayhkb2N1bWVudENsaWNrKSk7XHJcbiAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJibHVyXCIsIGRvY3VtZW50Q2xpY2spO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbGlja09wZW5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxmLm9wZW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7IH0pO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFwid2hlZWxcIiwgZGVib3VuY2Uob25Nb250aE5hdlNjcm9sbCwgMTApKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKG9uTW9udGhOYXZDbGljaykpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcImtleXVwXCIsIFwiaW5jcmVtZW50XCJdLCBvblllYXJJbnB1dCk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGVjdERhdGUpKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBbXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgXCJhbmltYXRpb25lbmRcIl0sIGFuaW1hdGVEYXlzKTtcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wid2Via2l0QW5pbWF0aW9uRW5kXCIsIFwiYW5pbWF0aW9uZW5kXCJdLCBhbmltYXRlTW9udGhzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxUZXh0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcIndoZWVsXCIsIFwiaW5wdXRcIiwgXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayh0aW1lSW5jcmVtZW50KSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJ3aGVlbFwiLCBcImluY3JlbWVudFwiXSwgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiaW5wdXRcIiwgdHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuc2Vjb25kRWxlbWVudCwgXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnNlY29uZEVsZW1lbnQgJiYgc2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCgpOyB9KTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuYW1QTSwgXCJtb3VzZWRvd25cIiwgb25DbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKSB7XHJcbiAgICAgICAgc2VsZi5fYW5pbWF0aW9uTG9vcC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKCk7IH0pO1xyXG4gICAgICAgIHNlbGYuX2FuaW1hdGlvbkxvb3AgPSBbXTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGVEYXlzKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICYmIHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnBTbGlkZVJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUG9zdERheUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNb250aHMoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5hbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlTGVmdE5ld1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZnBTbGlkZVJpZ2h0TmV3XCI6XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVSaWdodE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBuYXYgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmF2Lm5leHRTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2Lm5leHRTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5hdi5wcmV2aW91c1NpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAvY3Vyci8udGVzdChuYXYucHJldmlvdXNTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYucHJldmlvdXNTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlKSB7XHJcbiAgICAgICAgdmFyIGp1bXBUbyA9IGp1bXBEYXRlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBwYXJzZURhdGUoanVtcERhdGUpXHJcbiAgICAgICAgICAgIDogc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHxcclxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vd1xyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJiBzZWxmLmNvbmZpZy5tYXhEYXRlIDwgc2VsZi5ub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3cpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChqdW1wVG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IGp1bXBUby5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBqdW1wVG8uZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xyXG4gICAgICAgIGlmICh+ZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSlcclxuICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQoZSwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSA/IDEgOiAtMSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUgJiYgZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gaW5wdXRFbGVtIHx8XHJcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQoXCJpbmNyZW1lbnRcIik7XHJcbiAgICAgICAgZXZlbnQuZGVsdGEgPSBkZWx0YTtcclxuICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkKCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItY2FsZW5kYXJcIik7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZE1vbnRoTmF2KCkpO1xyXG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1pbm5lckNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBidWlsZFdlZWtzKCksIHdlZWtXcmFwcGVyID0gX2Eud2Vla1dyYXBwZXIsIHdlZWtOdW1iZXJzID0gX2Eud2Vla051bWJlcnM7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtXcmFwcGVyKTtcclxuICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMgPSB3ZWVrTnVtYmVycztcclxuICAgICAgICAgICAgICAgIHNlbGYud2Vla1dyYXBwZXIgPSB3ZWVrV3JhcHBlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtkYXlzKCkpO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xyXG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaW5uZXJDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZFRpbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmFuZ2VNb2RlXCIsIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIik7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgICAgIHZhciBjdXN0b21BcHBlbmQgPSBzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIWN1c3RvbUFwcGVuZCAmJiBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIHNlbGYuX2lucHV0Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFwcGVuZFRvXHJcbiAgICAgICAgICAgICAgICA6IHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheShjbGFzc05hbWUsIGRhdGUsIGRheU51bWJlciwgaSkge1xyXG4gICAgICAgIHZhciBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLCBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItZGF5IFwiICsgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcclxuICAgICAgICBkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xyXG4gICAgICAgIGRheUVsZW1lbnQuJGkgPSBpO1xyXG4gICAgICAgIGRheUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmZvcm1hdERhdGUoZGF0ZSwgc2VsZi5jb25maWcuYXJpYURhdGVGb3JtYXQpKTtcclxuICAgICAgICBpZiAoY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZWxmLnRvZGF5RGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xyXG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGVJc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgZGF5RWxlbWVudC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBpZiAoaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gZGF5RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcImVuZFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA+IHNlbGYubWluUmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlIDwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlIDwgc2VsZi5tYXhSYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPiBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChkYXRlIDwgc2VsZi5taW5SYW5nZURhdGUgfHwgZGF0ZSA+IHNlbGYubWF4UmFuZ2VEYXRlKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzICYmXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSAhPT0gXCJwcmV2TW9udGhEYXlcIiAmJlxyXG4gICAgICAgICAgICBkYXlOdW1iZXIgJSA3ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2Rpc2FibGVkIGZsYXRwaWNrci1kYXknPlwiICtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmdldFdlZWsoZGF0ZSkgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3NwYW4+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZGF5RWxlbWVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudEluZGV4LCBvZmZzZXQpIHtcclxuICAgICAgICB2YXIgbmV3SW5kZXggPSBjdXJyZW50SW5kZXggKyBvZmZzZXQgfHwgMCwgdGFyZ2V0Tm9kZSA9IChjdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlbGYuZGF5cy5jaGlsZE5vZGVzW25ld0luZGV4XVxyXG4gICAgICAgICAgICA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0Tm9kZSB8fCBzZWxmLmRheXMuY2hpbGROb2Rlc1tuZXdJbmRleF07XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKHRhcmdldE5vZGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRhcmdldE5vZGUgPT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlTW9udGgoMSwgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggJSA0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKC0xLCB0cnVlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggKz0gNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFmdGVyRGF5QW5pbShmb2N1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZnRlckRheUFuaW0oZm4pIHtcclxuICAgICAgICBzZWxmLmNvbmZpZy5hbmltYXRlID09PSB0cnVlID8gc2VsZi5fYW5pbWF0aW9uTG9vcC5wdXNoKGZuKSA6IGZuKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZERheXMoZGVsdGEpIHtcclxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCAxKS5nZXREYXkoKSAtXHJcbiAgICAgICAgICAgIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArXHJcbiAgICAgICAgICAgIDcpICVcclxuICAgICAgICAgICAgNywgaXNSYW5nZU1vZGUgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCI7XHJcbiAgICAgICAgdmFyIHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChzZWxmLmN1cnJlbnRNb250aCAtIDEgKyAxMikgJSAxMik7XHJcbiAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgpLCBkYXlzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgZGF5TnVtYmVyID0gcHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsIGRheUluZGV4ID0gMDtcclxuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycyAmJiBzZWxmLndlZWtOdW1iZXJzLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChpc1JhbmdlTW9kZSkge1xyXG4gICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoIC0gMSwgZGF5TnVtYmVyKTtcclxuICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsICg0MiAtIGZpcnN0T2ZNb250aCkgJSBkYXlzSW5Nb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBkYXlOdW1iZXIgPD0gcHJldk1vbnRoRGF5czsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJwcmV2TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZGF5TnVtYmVyID0gMTsgZGF5TnVtYmVyIDw9IGRheXNJbk1vbnRoOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xyXG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlwiLCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aDsgZGF5TnVtKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJuZXh0TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCBkYXlOdW0gJSBkYXlzSW5Nb250aCksIGRheU51bSwgZGF5SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUmFuZ2VNb2RlICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgJiYgZGF5cy5jaGlsZE5vZGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAoISFzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA+IGRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqKTtcclxuICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghIXNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB2YXIgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcclxuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5cyk7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5hbmltYXRlIHx8IGRlbHRhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLmRheXNDb250YWluZXIpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWx0YSAmJiBkZWx0YSA+PSAwKVxyXG4gICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZGF5Q29udGFpbmVyLCBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoTmF2KCkge1xyXG4gICAgICAgIHZhciBtb250aE5hdkZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBzZWxmLm1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aFwiKTtcclxuICAgICAgICBzZWxmLnByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcucHJldkFycm93O1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiY3VyLW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuICAgICAgICB2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHllYXJJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKVxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gPSBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4ID0gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XHJcbiAgICAgICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLm5leHRBcnJvdztcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGggPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQpO1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZCh5ZWFySW5wdXQpO1xyXG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5wcmV2TW9udGhOYXYpO1xyXG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoKTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcclxuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKG1vbnRoTmF2RnJhZ21lbnQpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3c7IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZVByZXZNb250aEFycm93ICE9PSBib29sKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJldk1vbnRoTmF2LnN0eWxlLmRpc3BsYXkgPSBib29sID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9faGlkZVByZXZNb250aEFycm93ID0gYm9vbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZU5leHRNb250aEFycm93XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZU5leHRNb250aEFycm93OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyAhPT0gYm9vbClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm5leHRNb250aE5hdi5zdHlsZS5kaXNwbGF5ID0gYm9vbCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLm1vbnRoTmF2O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRUaW1lKCkge1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1RpbWVcIik7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpXHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vQ2FsZW5kYXJcIik7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIik7XHJcbiAgICAgICAgdmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIik7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudCA9IGhvdXJJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHZhciBtaW51dGVJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLW1pbnV0ZVwiKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgPSBtaW51dGVJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudGFiSW5kZXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLnRpbWVfMjRoclxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5kZWZhdWx0SG91clxyXG4gICAgICAgICAgICAgICAgOiBtaWxpdGFyeTJhbXBtKHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSk7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdE1pbnV0ZSk7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcuaG91ckluY3JlbWVudC50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5taW4gPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjBcIiA6IFwiMVwiO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQubWF4ID0gc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIyM1wiIDogXCIxMlwiO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5taW4gPSBcIjBcIjtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQubWF4ID0gXCI1OVwiO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudGl0bGUgPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbnB1dCk7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZUlucHV0KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcudGltZV8yNGhyKVxyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzU2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZElucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnN0ZXAgPSBzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcDtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50Lm1pbiA9IHNlbGYubWludXRlRWxlbWVudC5taW47XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5tYXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQubWF4O1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcclxuICAgICAgICAgICAgc2VsZi5hbVBNID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItYW0tcG1cIiwgc2VsZi5sMTBuLmFtUE1baW50KChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmhvdXJFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGYudGltZUNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla2RheXMoKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmLndlZWtkYXlDb250YWluZXIpXHJcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XHJcbiAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xyXG4gICAgICAgIHZhciB3ZWVrZGF5cyA9IHNlbGYubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmQuc2xpY2UoKTtcclxuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzID0gd2Vla2RheXMuc3BsaWNlKGZpcnN0RGF5T2ZXZWVrLCB3ZWVrZGF5cy5sZW5ndGgpLmNvbmNhdCh3ZWVrZGF5cy5zcGxpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXFxuICAgIDxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlxcbiAgICAgIFwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3BhbiBjbGFzcz1mbGF0cGlja3Itd2Vla2RheT5cIikgKyBcIlxcbiAgICA8L3NwYW4+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBzZWxmLndlZWtkYXlDb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZFdlZWtzKCkge1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xyXG4gICAgICAgIHZhciB3ZWVrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIik7XHJcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3Itd2Vla2RheVwiLCBzZWxmLmwxMG4ud2Vla0FiYnJldmlhdGlvbikpO1xyXG4gICAgICAgIHZhciB3ZWVrTnVtYmVycyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3NcIik7XHJcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcnMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdlZWtXcmFwcGVyOiB3ZWVrV3JhcHBlcixcclxuICAgICAgICAgICAgd2Vla051bWJlcnM6IHdlZWtOdW1iZXJzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNb250aCh2YWx1ZSwgaXNfb2Zmc2V0LCBhbmltYXRlLCBmcm9tX2tleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzX29mZnNldCA9PT0gdm9pZCAwKSB7IGlzX29mZnNldCA9IHRydWU7IH1cclxuICAgICAgICBpZiAoYW5pbWF0ZSA9PT0gdm9pZCAwKSB7IGFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRlOyB9XHJcbiAgICAgICAgaWYgKGZyb21fa2V5Ym9hcmQgPT09IHZvaWQgMCkgeyBmcm9tX2tleWJvYXJkID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgZGVsdGEgPSBpc19vZmZzZXQgPyB2YWx1ZSA6IHZhbHVlIC0gc2VsZi5jdXJyZW50TW9udGg7XHJcbiAgICAgICAgaWYgKChkZWx0YSA8IDAgJiYgc2VsZi5faGlkZVByZXZNb250aEFycm93KSB8fFxyXG4gICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdykpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArPSBkZWx0YTtcclxuICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciArPSBzZWxmLmN1cnJlbnRNb250aCA+IDExID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IChzZWxmLmN1cnJlbnRNb250aCArIDEyKSAlIDEyO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkRGF5cyhhbmltYXRlID8gZGVsdGEgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmICghYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmF2ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKG5hdi5uZXh0U2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2Lm5leHRTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAobmF2LnByZXZpb3VzU2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2LnByZXZpb3VzU2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYucHJldmlvdXNTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5vbGRDdXJNb250aCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aDtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGggPSBzZWxmLm1vbnRoTmF2Lmluc2VydEJlZm9yZShzZWxmLm9sZEN1ck1vbnRoLmNsb25lTm9kZSh0cnVlKSwgZGVsdGEgPiAwID8gc2VsZi5vbGRDdXJNb250aC5uZXh0U2libGluZyA6IHNlbGYub2xkQ3VyTW9udGgpO1xyXG4gICAgICAgIHZhciBkYXlzQ29udGFpbmVyID0gc2VsZi5kYXlzQ29udGFpbmVyO1xyXG4gICAgICAgIGlmIChkYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQgJiYgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVSaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoXHJcbiAgICAgICAgICAgIC5maXJzdENoaWxkO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmxhc3RDaGlsZFxyXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgaWYgKHNlbGYub2xkQ3VyTW9udGguZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbW9udGhUb1N0cihzZWxmLmN1cnJlbnRNb250aCAtIGRlbHRhLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbik7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICBpZiAoZnJvbV9rZXlib2FyZCAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuJGkpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4XzEgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LiRpO1xyXG4gICAgICAgICAgICBhZnRlckRheUFuaW0oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9jdXNPbkRheShpbmRleF8xLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXIodHJpZ2dlckNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWU7IH1cclxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dClcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHNlbGYuc2hvd1RpbWVJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EZXN0cm95XCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBzZWxmLl9oYW5kbGVycy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgdmFyIGggPSBzZWxmLl9oYW5kbGVyc1tpXTtcclxuICAgICAgICAgICAgaC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaC5ldmVudCwgaC5oYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcclxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYubW9iaWxlSW5wdXQpO1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuYWx0SW5wdXQpO1xyXG4gICAgICAgICAgICBkZWxldGUgc2VsZi5hbHRJbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaW5wdXQpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gc2VsZi5pbnB1dC5fdHlwZTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIl9zaG93VGltZUlucHV0XCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqXCIsXHJcbiAgICAgICAgICAgIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcIl9faGlkZVByZXZNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiaXNNb2JpbGVcIixcclxuICAgICAgICAgICAgXCJpc09wZW5cIixcclxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXHJcbiAgICAgICAgICAgIFwibWluRGF0ZUhhc1RpbWVcIixcclxuICAgICAgICAgICAgXCJtYXhEYXRlSGFzVGltZVwiLFxyXG4gICAgICAgICAgICBcImRheXNcIixcclxuICAgICAgICAgICAgXCJkYXlzQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwiX2lucHV0XCIsXHJcbiAgICAgICAgICAgIFwiX3Bvc2l0aW9uRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBcImlubmVyQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwickNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIm1vbnRoTmF2XCIsXHJcbiAgICAgICAgICAgIFwidG9kYXlEYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcImNhbGVuZGFyQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwid2Vla2RheUNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcInByZXZNb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcIm5leHRNb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcImN1cnJlbnRNb250aEVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJjdXJyZW50WWVhckVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcImNvbmZpZ1wiLFxyXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGZba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNDYWxlbmRhckVsZW0oZWxlbSkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlbGVtKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZWxlbSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkb2N1bWVudENsaWNrKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLmlubGluZSkge1xyXG4gICAgICAgICAgICB2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuaW5wdXQgfHxcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0IHx8XHJcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAoZS5wYXRoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wYXRoLmluZGV4T2YgJiZcclxuICAgICAgICAgICAgICAgICAgICAofmUucGF0aC5pbmRleE9mKHNlbGYuaW5wdXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH5lLnBhdGguaW5kZXhPZihzZWxmLmFsdElucHV0KSkpO1xyXG4gICAgICAgICAgICB2YXIgbG9zdEZvY3VzID0gZS50eXBlID09PSBcImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgPyBpc0lucHV0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldClcclxuICAgICAgICAgICAgICAgIDogIWlzSW5wdXQgJiYgIWlzQ2FsZW5kYXJFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAobG9zdEZvY3VzICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5pZ25vcmVkRm9jdXNFbGVtZW50cy5pbmRleE9mKGUudGFyZ2V0KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcclxuICAgICAgICBpZiAoIW5ld1llYXIgfHxcclxuICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbiAmJlxyXG4gICAgICAgICAgICAgICAgbmV3WWVhciA8IHBhcnNlSW50KHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbikpIHx8XHJcbiAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXggJiZcclxuICAgICAgICAgICAgICAgIG5ld1llYXIgPiBwYXJzZUludChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXgpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBuZXdZZWFyTnVtID0gbmV3WWVhciwgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gbmV3WWVhck51bTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWF4KHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZSwgdGltZWxlc3MpIHtcclxuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cclxuICAgICAgICB2YXIgZGF0ZVRvQ2hlY2sgPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCB1bmRlZmluZWQsIHRpbWVsZXNzKTtcclxuICAgICAgICBpZiAoKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5taW5EYXRlSGFzVGltZSkgPCAwKSB8fFxyXG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgJiZcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggJiYgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZGF0ZVRvQ2hlY2sgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBib29sID0gc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCA+IDAsIGFycmF5ID0gYm9vbCA/IHNlbGYuY29uZmlnLmVuYWJsZSA6IHNlbGYuY29uZmlnLmRpc2FibGU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGQgPSB2b2lkIDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBkKGRhdGVUb0NoZWNrKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkIGluc3RhbmNlb2YgRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gc2VsZi5wYXJzZURhdGUoZCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQgJiYgcGFyc2VkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBib29sXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhYm9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgZC5mcm9tICYmXHJcbiAgICAgICAgICAgICAgICBkLnRvICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPj0gZC5mcm9tLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpIDw9IGQudG8uZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhYm9vbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgdmFyIGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gc2VsZi5faW5wdXQ7XHJcbiAgICAgICAgdmFyIGNhbGVuZGFyRWxlbSA9IGlzQ2FsZW5kYXJFbGVtKGUudGFyZ2V0KTtcclxuICAgICAgICB2YXIgYWxsb3dJbnB1dCA9IHNlbGYuY29uZmlnLmFsbG93SW5wdXQ7XHJcbiAgICAgICAgdmFyIGFsbG93S2V5ZG93biA9IHNlbGYuaXNPcGVuICYmICghYWxsb3dJbnB1dCB8fCAhaXNJbnB1dCk7XHJcbiAgICAgICAgdmFyIGFsbG93SW5saW5lS2V5ZG93biA9IHNlbGYuY29uZmlnLmlubGluZSAmJiBpc0lucHV0ICYmICFhbGxvd0lucHV0O1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGlzSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93SW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFsdEZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGYub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYWxlbmRhckVsZW0gfHwgYWxsb3dLZXlkb3duIHx8IGFsbG93SW5saW5lS2V5ZG93bikge1xyXG4gICAgICAgICAgICB2YXIgaXNUaW1lT2JqID0gISFzZWxmLnRpbWVDb250YWluZXIgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REYXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiYgIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGUua2V5ID09PSBcIkFycm93UmlnaHRcIiA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIGRlbHRhXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbnRoKGRlbHRhXzEsIHRydWUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ob3VyRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiBlLnRhcmdldC4kaSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1RpbWVPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCBkZWx0YSAqIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqICYmIHNlbGYuaG91ckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJUYWJcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHNlbGYuaG91ckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGYuc2Vjb25kRWxlbWVudCB8fCBzZWxmLmFtUE0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLnNlY29uZEVsZW1lbnQgJiYgc2VsZi5hbVBNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQgPT09IHNlbGYuYW1QTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBcIkFNXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJQTVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uS2V5RG93blwiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggIT09IDEgfHxcclxuICAgICAgICAgICAgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSB8fFxyXG4gICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgaG92ZXJEYXRlID0gZWxlbS5kYXRlT2JqLCBpbml0aWFsRGF0ZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdW5kZWZpbmVkLCB0cnVlKSwgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUuZ2V0VGltZSgpLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSwgcmFuZ2VFbmREYXRlID0gTWF0aC5tYXgoaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIGNvbnRhaW5zRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciB0ID0gcmFuZ2VTdGFydERhdGU7IHQgPCByYW5nZUVuZERhdGU7IHQgKz0gZHVyYXRpb24uREFZKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmFibGVkKG5ldyBEYXRlKHQpKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGkpIHtcclxuICAgICAgICAgICAgdmFyIG91dE9mUmFuZ2UgPSB0aW1lc3RhbXAgPCBzZWxmLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCkgfHxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA+IHNlbGYubWF4UmFuZ2VEYXRlLmdldFRpbWUoKSwgZGF5RWxlbSA9IHNlbGYuZGF5cy5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAob3V0T2ZSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb250YWluc0Rpc2FibGVkICYmICFvdXRPZlJhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgW1wic3RhcnRSYW5nZVwiLCBcImluUmFuZ2VcIiwgXCJlbmRSYW5nZVwiLCBcIm5vdEFsbG93ZWRcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG1pblJhbmdlRGF0ZSA9IE1hdGgubWF4KHNlbGYubWluUmFuZ2VEYXRlLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUpLCBtYXhSYW5nZURhdGUgPSBNYXRoLm1pbihzZWxmLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksIHJhbmdlRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gPyBcInN0YXJ0UmFuZ2VcIiA6IFwiZW5kUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcInN0YXJ0UmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGluaXRpYWxEYXRlID4gaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiZW5kUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPj0gbWluUmFuZ2VEYXRlICYmIHRpbWVzdGFtcCA8PSBtYXhSYW5nZURhdGUpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgdGltZXN0YW1wID0gc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iai5nZXRUaW1lKCksIGkgPSAwOyBpIDwgNDI7IGkrKywgdGltZXN0YW1wICs9IGR1cmF0aW9uLkRBWSkge1xyXG4gICAgICAgICAgICBfbG9vcF8xKHRpbWVzdGFtcCwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAocG9zaXRpb25FbGVtZW50ID09PSB2b2lkIDApIHsgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5faW5wdXQ7IH1cclxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQgJiYgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4gfHwgc2VsZi5faW5wdXQuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25PcGVuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlT2JqID0gKHNlbGYuY29uZmlnW1wiX1wiICsgdHlwZSArIFwiRGF0ZVwiXSA9IHNlbGYucGFyc2VEYXRlKGRhdGUpKTtcclxuICAgICAgICAgICAgdmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcclxuICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlID09PSBcIm1pblwiID8gXCJtaW5EYXRlSGFzVGltZVwiIDogXCJtYXhEYXRlSGFzVGltZVwiXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRIb3VycygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRTZWNvbmRzKCkgPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IHNlbGYuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGlzRW5hYmxlZChkKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgdHlwZSA9PT0gXCJtaW5cIilcclxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZWRyYXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnRbdHlwZV0gPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISFpbnZlcnNlRGF0ZU9iaiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZURhdGVPYmouZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ29uZmlnKCkge1xyXG4gICAgICAgIHZhciBib29sT3B0cyA9IFtcclxuICAgICAgICAgICAgXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgIFwid2Vla051bWJlcnNcIixcclxuICAgICAgICAgICAgXCJhbGxvd0lucHV0XCIsXHJcbiAgICAgICAgICAgIFwiY2xpY2tPcGVuc1wiLFxyXG4gICAgICAgICAgICBcInRpbWVfMjRoclwiLFxyXG4gICAgICAgICAgICBcImVuYWJsZVRpbWVcIixcclxuICAgICAgICAgICAgXCJub0NhbGVuZGFyXCIsXHJcbiAgICAgICAgICAgIFwiYWx0SW5wdXRcIixcclxuICAgICAgICAgICAgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcclxuICAgICAgICAgICAgXCJpbmxpbmVcIixcclxuICAgICAgICAgICAgXCJzdGF0aWNcIixcclxuICAgICAgICAgICAgXCJlbmFibGVTZWNvbmRzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzYWJsZU1vYmlsZVwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGhvb2tzID0gW1xyXG4gICAgICAgICAgICBcIm9uQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgIFwib25DbG9zZVwiLFxyXG4gICAgICAgICAgICBcIm9uRGF5Q3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFwib25EZXN0cm95XCIsXHJcbiAgICAgICAgICAgIFwib25LZXlEb3duXCIsXHJcbiAgICAgICAgICAgIFwib25Nb250aENoYW5nZVwiLFxyXG4gICAgICAgICAgICBcIm9uT3BlblwiLFxyXG4gICAgICAgICAgICBcIm9uUGFyc2VDb25maWdcIixcclxuICAgICAgICAgICAgXCJvblJlYWR5XCIsXHJcbiAgICAgICAgICAgIFwib25WYWx1ZVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBcIm9uWWVhckNoYW5nZVwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc2VsZi5jb25maWcgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpO1xyXG4gICAgICAgIHZhciB1c2VyQ29uZmlnID0gX19hc3NpZ24oe30sIGluc3RhbmNlQ29uZmlnLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKTtcclxuICAgICAgICB2YXIgZm9ybWF0cyQkMSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJlbmFibGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9lbmFibGUgfHwgW107IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJkaXNhYmxlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZGlzYWJsZSB8fCBbXTsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9kaXNhYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmIHVzZXJDb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICBmb3JtYXRzJCQxLmRhdGVGb3JtYXQgPSB1c2VyQ29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgID8gXCJIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgOiBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBIOmlcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlckNvbmZpZy5hbHRJbnB1dCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUgJiYgIXVzZXJDb25maWcuYWx0Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHMkJDEuYWx0Rm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICA/IFwiaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6UyBLXCIgOiBcIiBLXCIpXHJcbiAgICAgICAgICAgICAgICA6IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCArXHJcbiAgICAgICAgICAgICAgICAgICAgKFwiIGg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpICsgXCIgS1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5EYXRlOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtaW5cIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heERhdGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9tYXhEYXRlOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgZm9ybWF0cyQkMSwgdXNlckNvbmZpZyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib29sT3B0cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID1cclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGhvb2tzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWdbaG9va3NbaV1dICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2hvb2tzW2ldXSA9IGFycmF5aWZ5KHNlbGYuY29uZmlnW2hvb2tzW2ldXSB8fCBbXSkubWFwKGJpbmRUb0luc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBsdWdpbkNvbmYgPSBzZWxmLmNvbmZpZy5wbHVnaW5zW2ldKHNlbGYpIHx8IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGx1Z2luQ29uZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5ob29rcy5pbmRleE9mKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGJpbmRUb0luc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHNlbGYuY29uZmlnW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVzZXJDb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gcGx1Z2luQ29uZltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuaXNNb2JpbGUgPVxyXG4gICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmlubGluZSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmXHJcbiAgICAgICAgICAgICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QYXJzZUNvbmZpZ1wiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlICE9PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGxvY2FsZSBcIiArIHNlbGYuY29uZmlnLmxvY2FsZSk7XHJcbiAgICAgICAgc2VsZi5sMTBuID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCB0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubG9jYWxlXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcubG9jYWxlICE9PSBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgPyBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXVxyXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAocG9zaXRpb25FbGVtZW50ID09PSB2b2lkIDApIHsgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5fcG9zaXRpb25FbGVtZW50OyB9XHJcbiAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjYWxlbmRhckhlaWdodCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0SGVpZ2h0LCBjYWxlbmRhcldpZHRoID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRXaWR0aCwgY29uZmlnUG9zID0gc2VsZi5jb25maWcucG9zaXRpb24sIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1BvcyA9PT0gXCJhYm92ZVwiIHx8XHJcbiAgICAgICAgICAgIChjb25maWdQb3MgIT09IFwiYmVsb3dcIiAmJlxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VGcm9tQm90dG9tIDwgY2FsZW5kYXJIZWlnaHQgJiZcclxuICAgICAgICAgICAgICAgIGlucHV0Qm91bmRzLnRvcCA+IGNhbGVuZGFySGVpZ2h0KTtcclxuICAgICAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICtcclxuICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wICtcclxuICAgICAgICAgICAgKCFzaG93T25Ub3AgPyBwb3NpdGlvbkVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMiA6IC1jYWxlbmRhckhlaWdodCAtIDIpO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIXNob3dPblRvcCk7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLmxlZnQ7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggLSBpbnB1dEJvdW5kcy5yaWdodDtcclxuICAgICAgICB2YXIgcmlnaHRNb3N0ID0gbGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJpZ2h0TW9zdFwiLCByaWdodE1vc3QpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgICBpZiAoIXJpZ2h0TW9zdCkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYnVpbGRXZWVrZGF5cygpO1xyXG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICBidWlsZERheXMoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiAoZGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXkuY2xhc3NMaXN0ICYmXHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHQgPSBmaW5kUGFyZW50KGUudGFyZ2V0LCBpc1NlbGVjdGFibGUpO1xyXG4gICAgICAgIGlmICh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdDtcclxuICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUodGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgdmFyIHNob3VsZENoYW5nZU1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgIT09IHNlbGYuY3VycmVudE1vbnRoICYmXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIjtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIpXHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtzZWxlY3RlZERhdGVdO1xyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGlzRGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShwYXJzZUludChzZWxlY3RlZEluZGV4KSwgMSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgIGlmIChzaG91bGRDaGFuZ2VNb250aCkge1xyXG4gICAgICAgICAgICB2YXIgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV3WWVhcilcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuY29uZmlnLm1pbkRhdGUpID09PSAwKVxyXG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNlbGYuc2hvd1RpbWVJbnB1dCA9IHRydWUpOyB9LCA1MCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLm1pblJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5tYXhSYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aClcclxuICAgICAgICAgICAgZm9jdXNPbkRheSh0YXJnZXQuJGksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYWZ0ZXJEYXlBbmltKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAmJiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTsgfSk7XHJcbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudC5zZWxlY3QoKTsgfSwgNDUxKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICAgICAgICB2YXIgc2luZ2xlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJiAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcclxuICAgICAgICAgICAgaWYgKHNpbmdsZSB8fCByYW5nZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwgJiYgdHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgb3B0aW9uKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSB2YWx1ZTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGp1bXBUb0RhdGUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUsIGZvcm1hdCkge1xyXG4gICAgICAgIHZhciBkYXRlcyA9IFtdO1xyXG4gICAgICAgIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICBlbHNlIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBpbnB1dERhdGUgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYuY29uZmlnLm1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzaW5nbGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiOyBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc0VuYWJsZWQoZCwgZmFsc2UpOyB9KTtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UsIGZvcm1hdCkge1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IHVuZGVmaW5lZDsgfVxyXG4gICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSwgZm9ybWF0KTtcclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGp1bXBUb0RhdGUoKTtcclxuICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKCk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VEYXRlUnVsZXMoYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHxcclxuICAgICAgICAgICAgICAgIHJ1bGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUocnVsZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChydWxlICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgcnVsZS5mcm9tICYmXHJcbiAgICAgICAgICAgICAgICBydWxlLnRvKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxmLnBhcnNlRGF0ZShydWxlLmZyb20sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IHNlbGYucGFyc2VEYXRlKHJ1bGUudG8sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwRGF0ZXMoKSB7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XHJcbiAgICAgICAgc2VsZi5ub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBwcmVsb2FkZWREYXRlID0gc2VsZi5jb25maWcuZGVmYXVsdERhdGUgfHwgc2VsZi5pbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAocHJlbG9hZGVkRGF0ZSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKHByZWxvYWRlZERhdGUsIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgIHZhciBpbml0aWFsRGF0ZSA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGhcclxuICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF1cclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSA+IHNlbGYubm93LmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93LmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3c7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IGluaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBpbml0aWFsRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcclxuICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lID1cclxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpID4gMCk7XHJcbiAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSA9XHJcbiAgICAgICAgICAgICEhc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKSA+IDApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcInNob3dUaW1lSW5wdXRcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX3Nob3dUaW1lSW5wdXQ7IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dUaW1lSW5wdXQgPSBib29sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJzaG93VGltZUlucHV0XCIsIGJvb2wpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10KSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQgJiYgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcuZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10KTtcclxuICAgICAgICByZXR1cm4gZnJtdFxyXG4gICAgICAgICAgICAuc3BsaXQoXCJcIilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYywgaSwgYXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRzW2NdICYmIGFycltpIC0gMV0gIT09IFwiXFxcXFwiXHJcbiAgICAgICAgICAgICAgICA/IGZvcm1hdHNbY10oZGF0ZU9iaiwgc2VsZi5sMTBuLCBzZWxmLmNvbmZpZylcclxuICAgICAgICAgICAgICAgIDogYyAhPT0gXCJcXFxcXCIgPyBjIDogXCJcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MpIHtcclxuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgcGFyc2VkRGF0ZTtcclxuICAgICAgICB2YXIgZGF0ZV9vcmlnID0gZGF0ZTtcclxuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgIT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgZGF0ZS50b0ZpeGVkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gZ2l2ZW5Gb3JtYXQgfHwgKHNlbGYuY29uZmlnIHx8IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKS5kYXRlRm9ybWF0O1xyXG4gICAgICAgICAgICB2YXIgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlc3RyID09PSBcInRvZGF5XCIpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZWxlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fFxyXG4gICAgICAgICAgICAgICAgL0dNVCQvLnRlc3QoZGF0ZXN0cikpXHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnICYmIHNlbGYuY29uZmlnLnBhcnNlRGF0ZSlcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBzZWxmLmNvbmZpZy5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID1cclxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcgfHwgIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEsIDAsIDAsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IHZvaWQgMCwgb3BzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbWF0Y2hJbmRleCA9IDAsIHJlZ2V4U3RyID0gXCJcIjsgaSA8IGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGZvcm1hdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNCYWNrU2xhc2ggPSB0b2tlbiA9PT0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBmb3JtYXRbaSAtIDFdID09PSBcIlxcXFxcIiB8fCBpc0JhY2tTbGFzaDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5SZWdleFt0b2tlbl0gJiYgIWVzY2FwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gdG9rZW5SZWdleFt0b2tlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpLmV4ZWMoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hlZCA9IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHNbdG9rZW4gIT09IFwiWVwiID8gXCJwdXNoXCIgOiBcInVuc2hpZnRcIl0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiByZXZGb3JtYXRbdG9rZW5dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0JhY2tTbGFzaClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gXCIuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IF9hLmZuLCB2YWwgPSBfYS52YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF0ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbihwYXJzZWREYXRlLCB2YWwsIHNlbGYubDEwbikgfHwgcGFyc2VkRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbWF0Y2hlZCA/IHBhcnNlZERhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBkYXRlIFwiICsgZGF0ZV9vcmlnKTtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkRGF0ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xyXG4gICAgICAgIHNlbGYuaW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwXHJcbiAgICAgICAgICAgID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpXHJcbiAgICAgICAgICAgIDogZWxlbWVudDtcclxuICAgICAgICBpZiAoIXNlbGYuaW5wdXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRXJyb3I6IGludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIiwgc2VsZi5pbnB1dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcclxuICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XHJcbiAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbHRJbnB1dCkge1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcyk7XHJcbiAgICAgICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5hbHRJbnB1dDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5hbHRJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dClcclxuICAgICAgICAgICAgc2VsZi5faW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcclxuICAgICAgICBzZWxmLl9wb3NpdGlvbkVsZW1lbnQgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5faW5wdXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cE1vYmlsZSgpIHtcclxuICAgICAgICB2YXIgaW5wdXRUeXBlID0gc2VsZi5jb25maWcuZW5hYmxlVGltZVxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyBcInRpbWVcIiA6IFwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICA6IFwiZGF0ZVwiO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQuc3RlcCA9IHNlbGYuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSB8fCBcImFueVwiO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudGFiSW5kZXggPSAxO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcclxuICAgICAgICBzZWxmLm1vYmlsZUZvcm1hdFN0ciA9XHJcbiAgICAgICAgICAgIGlucHV0VHlwZSA9PT0gXCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiWS1tLWRcXFxcVEg6aTpTXCJcclxuICAgICAgICAgICAgICAgIDogaW5wdXRUeXBlID09PSBcImRhdGVcIiA/IFwiWS1tLWRcIiA6IFwiSDppOlNcIjtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1heCA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5tYXhEYXRlLCBcIlktbS1kXCIpO1xyXG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLm1vYmlsZUlucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRlKGUudGFyZ2V0LnZhbHVlLCBmYWxzZSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgc2VsZi5vcGVuKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgaG9va3MgPSBzZWxmLmNvbmZpZ1tldmVudF07XHJcbiAgICAgICAgaWYgKGhvb2tzICE9PSB1bmRlZmluZWQgJiYgaG9va3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaG9va3NbaV0gJiYgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50ID09PSBcIm9uQ2hhbmdlXCIpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcclxuICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcbiAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RhdGVTZWxlY3RlZChkYXRlKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxmLnNlbGVjdGVkRGF0ZXNbaV0sIGRhdGUpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPCAyKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0pIDw9IDApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlIHx8ICFzZWxmLm1vbnRoTmF2KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgbW9udGhUb1N0cihzZWxmLmN1cnJlbnRNb250aCwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pICsgXCIgXCI7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQudmFsdWUgPSBzZWxmLmN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cclxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKClcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jdXJyZW50TW9udGggKyAxID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpIHtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2UgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlRm9ybWF0U3RyKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cilcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBqb2luQ2hhciA9IHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIlxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uXHJcbiAgICAgICAgICAgIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yO1xyXG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZE9iaikgeyByZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpOyB9KVxyXG4gICAgICAgICAgICAuam9pbihqb2luQ2hhcik7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkT2JqKSB7IHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgc2VsZi5jb25maWcuYWx0Rm9ybWF0KTsgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKGpvaW5DaGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgIT09IGZhbHNlKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblZhbHVlVXBkYXRlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb250aE5hdlNjcm9sbChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpc1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5wYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnBhcmVudE5vZGUuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gc2VsZi5jdXJyZW50TW9udGhFbGVtZW50IHx8IGlzWWVhcikge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBtb3VzZURlbHRhKGUpO1xyXG4gICAgICAgICAgICBpZiAoaXNZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGRlbHRhLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb250aE5hdkNsaWNrKGUpIHtcclxuICAgICAgICB2YXIgaXNQcmV2TW9udGggPSBzZWxmLnByZXZNb250aE5hdi5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGlzTmV4dE1vbnRoID0gc2VsZi5uZXh0TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmIChpc1ByZXZNb250aCB8fCBpc05leHRNb250aClcclxuICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYXJyb3dVcFwiKVxyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciArIDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhcnJvd0Rvd25cIilcclxuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSAxKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlzS2V5RG93biA9IGUudHlwZSA9PT0gXCJrZXlkb3duXCIsIGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pXHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IFwiQU1cIiA/IDEgOiAwXTtcclxuICAgICAgICB2YXIgbWluID0gTnVtYmVyKGlucHV0Lm1pbiksIG1heCA9IE51bWJlcihpbnB1dC5tYXgpLCBzdGVwID0gTnVtYmVyKGlucHV0LnN0ZXApLCBjdXJWYWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCksIGRlbHRhID0gZS5kZWx0YSB8fFxyXG4gICAgICAgICAgICAoaXNLZXlEb3duXHJcbiAgICAgICAgICAgICAgICA/IGUud2hpY2ggPT09IDM4ID8gMSA6IC0xXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZKSkgfHwgMCk7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIGlzSG91ckVsZW0gPSBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCwgaXNNaW51dGVFbGVtID0gaW5wdXQgPT09IHNlbGYubWludXRlRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQoIWlzSG91ckVsZW0pICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGludChpc0hvdXJFbGVtKSAmJiBpbnQoIXNlbGYuYW1QTSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIC0xLCBzZWxmLmhvdXJFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID09PSBzZWxmLmhvdXJFbGVtZW50ID8gbmV3VmFsdWUgLSBtYXggLSBpbnQoIXNlbGYuYW1QTSkgOiBtaW47XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgMSwgc2VsZi5ob3VyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxyXG4gICAgICAgICAgICAgICAgaXNIb3VyRWxlbSAmJlxyXG4gICAgICAgICAgICAgICAgKHN0ZXAgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLmFicyhuZXdWYWx1ZSAtIGN1clZhbHVlKSA+IHN0ZXApKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIgPyBcIkFNXCIgOiBcIlBNXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0KCk7XHJcbiAgICByZXR1cm4gc2VsZjtcclxufVxyXG5mdW5jdGlvbiBfZmxhdHBpY2tyKG5vZGVMaXN0LCBjb25maWcpIHtcclxuICAgIHZhciBub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcclxuICAgIHZhciBpbnN0YW5jZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtb21pdFwiKSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5fZmxhdHBpY2tyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gRmxhdHBpY2tySW5zdGFuY2Uobm9kZSwgY29uZmlnIHx8IHt9KTtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobm9kZS5fZmxhdHBpY2tyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUsIGUuc3RhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID09PSAxID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xyXG59XHJcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mbGF0cGlja3IgPSBOb2RlTGlzdC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9O1xyXG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbdGhpc10sIGNvbmZpZyk7XHJcbiAgICB9O1xyXG59XHJcbnZhciBmbGF0cGlja3I7XHJcbmZsYXRwaWNrciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29uZmlnKSB7XHJcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gX2ZsYXRwaWNrcihbc2VsZWN0b3JdLCBjb25maWcpO1xyXG59O1xyXG53aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xyXG5mbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IGRlZmF1bHRzO1xyXG5mbGF0cGlja3IubDEwbnMgPSB7XHJcbiAgICBlbjogX19hc3NpZ24oe30sIGVuZ2xpc2gpLFxyXG4gICAgZGVmYXVsdDogX19hc3NpZ24oe30sIGVuZ2xpc2gpLFxyXG59O1xyXG5mbGF0cGlja3IubG9jYWxpemUgPSBmdW5jdGlvbiAobDEwbikge1xyXG4gICAgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQsIGwxMG4pO1xyXG59O1xyXG5mbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxufTtcclxuaWYgKHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcclxuICAgIH07XHJcbn1cclxuRGF0ZS5wcm90b3R5cGUuZnBfaW5jciA9IGZ1bmN0aW9uIChkYXlzKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgKHR5cGVvZiBkYXlzID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF5cywgMTApIDogZGF5cykpO1xyXG59O1xyXG52YXIgZmxhdHBpY2tyJDEgPSBmbGF0cGlja3I7XG5cbnJldHVybiBmbGF0cGlja3IkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5qc1xuLy8gbW9kdWxlIGlkID0gMTExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGF0cGlja3JcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBjb250cm9sXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5wbGFjZWhvbGRlcixcbiAgICAgICAgICBpZDogXCJkYXRlLWlucHV0LVwiICsgX3ZtLl91aWQsXG4gICAgICAgICAgbmFtZTogX3ZtLm5hbWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiB9LCBbXG4gICAgICAgIF92bS50aW1lT25seVxuICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNsb2NrXCIgfSlcbiAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jYWxlbmRhci1hbHRcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00ZDQ0M2ZlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVGb3JtSW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mZGNjN2ZkYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZUZvcm1JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mZGNjN2ZkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWZkY2M3ZmRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPHNwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1pY29ucy1yaWdodCc6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ3RleHQnXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGtleWRvd249XCIkZW1pdCgndXBkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnZW1haWwnXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGtleWRvd249XCIkZW1pdCgndXBkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaGFzRXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1pY29ucy1yaWdodCc6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cIiRlbWl0KCd1cGRhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICA6c3RlcD1cImZpZWxkLm1ldGEuc3RlcFwiXG4gICAgICAgICAgICAgICAgOm1pbj1cImZpZWxkLm1ldGEubWluXCJcbiAgICAgICAgICAgICAgICA6bWF4PVwiZmllbGQubWV0YS5tYXhcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgPHZ1ZS1zd2l0Y2ggdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiaXMtbGFyZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkIHx8IGZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCd1cGRhdGUnKVwiPlxuICAgICAgICAgICAgPC92dWUtc3dpdGNoPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVnVlU3dpdGNoIGZyb20gJy4vVnVlU3dpdGNoLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFZ1ZVN3aXRjaCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2RlZmQ2NTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZGVmZDY1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0M2U0NDFkMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmllbGQgLnZ1ZS1zd2l0Y2gge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4udnVlLXN3aXRjaCB7XFxuICAtLWhlaWdodDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnZ1ZS1zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi52dWUtc3dpdGNoOmJlZm9yZSwgLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4udnVlLXN3aXRjaDpiZWZvcmUge1xcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG4udnVlLXN3aXRjaDphZnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcXG59XFxuLnZ1ZS1zd2l0Y2guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG59XFxuLnZ1ZS1zd2l0Y2guY2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcbi52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwZDFiMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM1MmZmZTU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzMjczZGM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjczZGM7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjA5Y2VlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5Y2VlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIzZDE2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDE2MDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM4OWViYWI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRkNTc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NjA7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmI4YzY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1zbWFsbCB7XFxuICAgIC0taGVpZ2h0OiAwLjc1cmVtO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1tZWRpdW0ge1xcbiAgICAtLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMS41cmVtO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FBRTtBQUV2QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsNEJBQXFCO0VBQXJCLDRCQUFxQjtFQUFyQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0NBQUU7QUFDMUI7SUFDRSxXQUFXO0lBQ1gsNEJBQXFCO0lBQXJCLDRCQUFxQjtJQUFyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7Q0FBRTtBQUNqQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLDBCQUFrQjtJQUFsQixrQkFBa0I7Q0FBRTtBQUN0QjtJQUNFLHlDQUF5QztJQUN6QywwQkFBMEI7Q0FBRTtBQUM5QjtJQUNFLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsb0RBQTRDO1lBQTVDLDRDQUE0QztDQUFFO0FBQ2hEO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0UsNEJBQW9CO2NBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO01BQ0UsMkRBQW1EO2NBQW5ELG1EQUFtRDtDQUFFO0FBQ3pEO0lBQ0Usb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUFFO0FBQzFCO01BQ0Usb0JBQW9CO01BQ3BCLHdCQUF3QjtNQUN4QixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0NBQUU7QUFDL0I7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO01BQ3hCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLGtCQUFrQjtDQUFFO0FBQ3RCO0lBQ0Usa0JBQWtCO0NBQUU7QUFDdEI7SUFDRSxpQkFBaUI7Q0FBRVwiLFwiZmlsZVwiOlwiVnVlU3dpdGNoLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmllbGQgLnZ1ZS1zd2l0Y2gge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuXFxuLnZ1ZS1zd2l0Y2gge1xcbiAgLS1oZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAudnVlLXN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAudnVlLXN3aXRjaDpiZWZvcmUsIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1czsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YmVmb3JlIHtcXG4gICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTsgfVxcbiAgLnZ1ZS1zd2l0Y2guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTsgfVxcbiAgICAudnVlLXN3aXRjaC5jaGVja2VkOmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgICAudnVlLXN3aXRjaC5jaGVja2VkOmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBhMGEwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2OyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBkMWIyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMWIyOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmZmZTU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzI3M2RjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjA5Y2VlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5Y2VlOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N2QxZjc7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkMTYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWViYWI7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3OyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NjA7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXNtYWxsIHtcXG4gICAgLS1oZWlnaHQ6IDAuNzVyZW07IH1cXG4gIC52dWUtc3dpdGNoLmlzLW1lZGl1bSB7XFxuICAgIC0taGVpZ2h0OiAxLjI1cmVtOyB9XFxuICAudnVlLXN3aXRjaC5pcy1sYXJnZSB7XFxuICAgIC0taGVpZ2h0OiAxLjVyZW07IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxsYWJlbCBjbGFzcz1cInZ1ZS1zd2l0Y2hcIiA6Y2xhc3M9XCJbc2l6ZSwgdHlwZSwgeyAnY2hlY2tlZCc6IHZhbHVlLCAnZGlzYWJsZWQnOiBkaXNhYmxlZCB9XVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiRlbWl0KCdpbnB1dCcsIGNoZWNrZWQpXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgIDpjaGVja2VkPVwidmFsdWVcIj5cbiAgICA8L2xhYmVsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5jb25zdCBzaXplcyA9IFsnaXMtc21hbGwnLCAnaXMtbWVkaXVtJywgJ2lzLWxhcmdlJ107XG5jb25zdCB0eXBlcyA9IFsnaXMtcHJpbWFyeScsICdpcy13YXJuaW5nJywgJ2lzLWRhbmdlcicsICdpcy1zdWNjZXNzJywgJ2lzLWluZm8nXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdWdWVTd2l0Y2gnLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdHlwZXMuaW5jbHVkZXModmFsdWUpLFxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB2YWx1ZSA9PiBzaXplcy5pbmNsdWRlcyh2YWx1ZSksXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL2luaXRpYWwtdmFyaWFibGVzJztcbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy9kZXJpdmVkLXZhcmlhYmxlcy5zYXNzJztcblxuLmZpZWxkIHtcbiAgICAudnVlLXN3aXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbn1cblxuLnZ1ZS1zd2l0Y2gge1xuICAgIC0taGVpZ2h0OiAkc2l6ZS1ub3JtYWw7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xuICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1saWdodGVyO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcbiAgICB9XG5cbiAgICAmLmNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICR0ZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRwYWlyIGluICRjb2xvcnMge1xuICAgICAgICAkY29sb3I6IG50aCgkcGFpciwgMSk7XG4gICAgICAgICYuaXMtI3skbmFtZX0ge1xuICAgICAgICAgICAgJi5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjUlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IsIDI1JSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1zbWFsbCB7XG4gICAgICAgIC0taGVpZ2h0OiAkc2l6ZS1zbWFsbDtcbiAgICB9XG4gICAgJi5pcy1tZWRpdW0ge1xuICAgICAgICAtLWhlaWdodDogJHNpemUtbWVkaXVtO1xuICAgIH1cbiAgICAmLmlzLWxhcmdlIHtcbiAgICAgICAgLS1oZWlnaHQ6ICRzaXplLWxhcmdlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxhYmVsXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidnVlLXN3aXRjaFwiLFxuICAgICAgY2xhc3M6IFtcbiAgICAgICAgX3ZtLnNpemUsXG4gICAgICAgIF92bS50eXBlLFxuICAgICAgICB7IGNoZWNrZWQ6IF92bS52YWx1ZSwgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCB9XG4gICAgICBdXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja2VkLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQsXG4gICAgICAgICAgcmVxdWlyZWQ6IF92bS5yZXF1aXJlZFxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIGNoZWNrZWQ6IF92bS52YWx1ZSxcbiAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5jaGVja2VkKVxuICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmNoZWNrZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgIDogX3ZtLmNoZWNrZWRcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tlZCA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAoX3ZtLmNoZWNrZWQgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3ZtLmNoZWNrZWQgPSAkJGNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJpbnB1dFwiLCBfdm0uY2hlY2tlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdkZWZkNjUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZGVmZDY1MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCBbXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJ0ZXh0XCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImhhcy1pY29ucy1yaWdodFwiOiBfdm0uaGFzRXJyb3IgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uZmllbGQubWV0YS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZC52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGQsIFwidmFsdWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5oYXNFcnJvclxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9KV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcImVtYWlsXCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImhhcy1pY29ucy1yaWdodFwiOiBfdm0uaGFzRXJyb3IgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uZmllbGQubWV0YS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaGFzRXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJudW1iZXJcIlxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaGFzLWljb25zLXJpZ2h0XCI6IF92bS5oYXNFcnJvciB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1kYW5nZXJcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5maWVsZC5tZXRhLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgc3RlcDogX3ZtLmZpZWxkLm1ldGEuc3RlcCxcbiAgICAgICAgICAgICAgICBtaW46IF92bS5maWVsZC5tZXRhLm1pbixcbiAgICAgICAgICAgICAgICBtYXg6IF92bS5maWVsZC5tZXRhLm1heCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZC52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGQsIFwidmFsdWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5oYXNFcnJvclxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9KV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcImNoZWNrYm94XCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2dWUtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzaXplOiBcImlzLWxhcmdlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkIHx8IF92bS5maWVsZC5tZXRhLnJlYWRvbmx5XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWZkY2M3ZmRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mZGNjN2ZkYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmRhdGEuaWNvbiB8fCBfdm0uZGF0YS50aXRsZVxuICAgICAgICA/IF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmRhdGEuaWNvblxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuaWNvbiB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRhdGEudGl0bGVcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVlLWZvcm1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEuZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gIWZpZWxkLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmNvbHVtblNpemVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oZmllbGQubGFiZWwpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9ycy5nZXQoZmllbGQubmFtZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEuY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KGZpZWxkLm5hbWUsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBfdm0uZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2dWUtZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZ1ZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZpZWxkLm1ldGEub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleS1tYXBcIjogZmllbGQubWV0YS5rZXlNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBmaWVsZC5tZXRhLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmllbGQubWV0YS5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJkYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmaWVsZC5tZXRhLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBmaWVsZC5tZXRhLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChmaWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZmllbGQubWV0YS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWRhbmdlclwiOiBfdm0uZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBmaWVsZC5tZXRhLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuZm9yYmlkZGVuIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24ubGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHsgXCJpcy1sb2FkaW5nXCI6IF92bS5sb2FkaW5nIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgeyBcImlzLWxvYWRpbmdcIjogX3ZtLmxvYWRpbmcgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5mb3JiaWRkZW5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5sYWJlbCkpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXMtY2xlYXJmaXhcIiB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveVxuICAgICAgICA/IF9jKFwibW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3dNb2RhbCxcbiAgICAgICAgICAgICAgX186IF92bS5fXyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJjYW5jZWwtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNvbW1pdC1hY3Rpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmRlc3Ryb3koKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFiNTJlOTI3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy10aHJlZS1xdWFydGVyc1wiPlxuICAgICAgICAgICAgPHZ1ZS1mb3JtIDpkYXRhPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJib3ggYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaW5pdGlhbGlzZWRcIj5cbiAgICAgICAgICAgIDwvdnVlLWZvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVnVlRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVGb3JtIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybToge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLiRyb3V0ZS5uYW1lLCBudWxsLCBmYWxzZSkpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBkYXRhLmZvcm07XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL293bmVycy9DcmVhdGUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uaW5pdGlhbGlzZWRcbiAgICAgICAgICA/IF9jKFwidnVlLWZvcm1cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3ggYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5mb3JtIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWZjMDI2MGQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mYzAyNjBkMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vb3duZXJzL0NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyNyJdLCJzb3VyY2VSb290IjoiIn0=