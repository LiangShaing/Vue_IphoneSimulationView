/*!
 * iphone-simulation-view v0.0.5
 * (c) Allen Liang
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Img = _interopDefault(require('./img/phone.png'));

//
//
//
//
//
//
//
//
//
var script = {
  components: {},
  props: {
    img: {
      type: String,
      "default": ""
    },
    text: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {};
  },
  methods: {},
  watch: {},
  mounted: function mounted() {}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex-row-wapper"
  }, [_c('img', {
    staticClass: "picture-thumbnail",
    attrs: {
      "src": _vm.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_c('div', {
    staticClass: "text-message message-background"
  }, [_vm._v(_vm._s(_vm.text))])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a63bca3c_0", {
    source: ".flex-row-wapper[data-v-a63bca3c]{display:inline-block;position:relative;white-space:nowrap;transition:margin-top .5s,opacity .5s;opacity:1;margin-top:5px;margin-bottom:12px;width:100%}.picture-thumbnail[data-v-a63bca3c]{position:absolute;top:0;width:36px;height:36px;margin:0 8px 0 12px;border-radius:50%;background-color:#bdbdbd;flex:0 0 36px}.message[data-v-a63bca3c]{display:inline-table;border-radius:12px;margin-left:56px}.text-message[data-v-a63bca3c]{white-space:initial;border-radius:16px;color:#4c4c4c;max-width:220px;font-size:1.2em}.message-background[data-v-a63bca3c]{padding:8px 12px;background-color:#efefef;display:inline-flex;align-self:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-a63bca3c";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
var script$1 = {
  components: {},
  props: {
    text: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {};
  },
  methods: {},
  watch: {},
  mounted: function mounted() {}
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex-row-wapper customer-message"
  }, [_c('div', {
    staticClass: "message"
  }, [_c('div', {
    staticClass: "text-message message-background"
  }, [_vm._v(_vm._s(_vm.text))])])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c319867e_0", {
    source: ".flex-row-wapper[data-v-c319867e]{display:inline-block;position:relative;white-space:nowrap;transition:margin-top .5s,opacity .5s;opacity:1;margin-top:5px;margin-bottom:12px;width:100%}.customer-message .message[data-v-c319867e]{margin-right:14px;float:right}.message[data-v-c319867e]{display:inline-table;border-radius:12px;margin-left:56px}.text-message[data-v-c319867e]{white-space:initial;border-radius:16px;color:#4c4c4c;max-width:220px;font-size:1.2em}.message-background[data-v-c319867e]{padding:8px 12px;background-color:#efefef;display:inline-flex;align-self:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-c319867e";
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
var script$2 = {
  components: {
    Manager: __vue_component__,
    Customer: __vue_component__$1
  },
  props: {
    messagesData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  methods: {},
  watch: {},
  mounted: function mounted() {}
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._l(_vm.messagesData, function (item, index) {
    return [item.user == 'manager' ? _c('manager', {
      key: index,
      attrs: {
        "text": item.text,
        "img": item.img
      }
    }) : _vm._e(), _vm._v(" "), item.user == 'customer' ? _c('customer', {
      key: index,
      attrs: {
        "text": item.text
      }
    }) : _vm._e()];
  })], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = "data-v-db259c20";
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$3 = {
  components: {
    Messages: __vue_component__$2
  },
  props: {
    contentType: {
      type: String,
      "default": "",
      validator: function validator(x) {
        return ["", "message"].indexOf(x) !== -1;
      }
    },
    messagesData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      imgSrc: Img
    };
  },
  methods: {},
  watch: {},
  mounted: function mounted() {}
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "profile"
  }, [_c('div', {
    staticClass: "profile2"
  }, [_c('img', {
    staticClass: "imgStyle",
    attrs: {
      "src": _vm.imgSrc
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "iphone"
  }, [_c('div', {
    attrs: {
      "id": "iphoneView"
    }
  }, [_vm.contentType === '' ? _vm._t("default") : _vm._e(), _vm._v(" "), _vm.contentType === 'message' && _vm.messagesData.length != 0 ? _c('messages', {
    attrs: {
      "messagesData": _vm.messagesData
    }
  }) : _vm._e()], 2)])])]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-ebc223fc_0", {
    source: ".imgStyle[data-v-ebc223fc]{top:0;left:0;width:100%;height:100%}.iphone[data-v-ebc223fc]{position:absolute;top:109px;left:26.5px;width:375px;height:669px;border:0}.profile[data-v-ebc223fc]{width:299.6px;height:622.3px;overflow:hidden;transform-origin:0 0 0}.profile2[data-v-ebc223fc]{position:relative;top:0;left:0;width:428px;height:889px;background:0 0;transform-origin:0 0 0;transform:scale(.7)}#iphoneView[data-v-ebc223fc]{height:100%;overflow:auto}#iphoneView[data-v-ebc223fc]::-webkit-scrollbar{display:none}#iphoneView div[data-v-ebc223fc]{font-family:\"Microsoft JhengHei\",sans-serif!important}.title[data-v-ebc223fc]{text-align:center;font-size:2rem!important;margin:20px;font-weight:500}.option[data-v-ebc223fc]{margin:20px;font-size:1.5em!important}.option .content[data-v-ebc223fc]{margin:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-ebc223fc";
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

//  install(Vue, options) {
//   // Let's register our component globally
//   // https://vuejs.org/v2/guide/components-registration.html
//   Vue.component("nice-handsome-button-liang", NiceHandsomeButtonLiang);
//  }
// };

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("iphone-simulation-view", __vue_component__$3);
}

var plugin = {
  install: install
};
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

__vue_component__$3.install = install;

module.exports = __vue_component__$3;
