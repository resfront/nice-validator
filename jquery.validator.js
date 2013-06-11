/*! Validator 1.0.0-alpha
* (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
* http://niceue.github.io/validator/
*/
(function(e,t){"use strict";function i(s,a){var l,o,u,d=this;return!d instanceof i?new i(s,a):(q(a)&&(a={success:a}),u=D(s,"data-"+m+"-option"),u=u&&"{"===u.charAt(0)?Function("return "+u)():null,l=d.options=e.extend({},L,a,u),o=l.theme,o&&P[o]&&(l=e.extend(l,P[o],a)),d.$el=e(s),d.rules=new r(l.rules,!0),d.messages=new n(l.messages,!0),d.fields={},d.elements={},d.isValid=!0,d._init(),t)}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(S(e))for(var n in e)i[n]=s(e[n])}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(S(e))for(var r in e){if(!e[r])return;i[r]=e[r]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){if(t&&t.tagName){var i=t;switch(t.tagName.toUpperCase()){case"INPUT":case"SELECT":case"TEXTAREA":i=t.form||e(t).closest(".n-"+m)}return e(i).data(m)||e(i)[m]().data(m)}}function o(i,r){var n=e.trim(D(i,"data-rule-"+r));if(n)return n=Function("return "+n)(),n?s(n):t}function u(e,t,i){var r=t.msg;return S(r)&&i&&(r=r[i]),N(r)||(r=D(e,"data-msg-"+i)||""),r}function d(e){if(!e)return"";var t=C.exec(e);return t?t[1]:""}function c(e){return(e||L.msgTemplate).replace("{#msg}",'<span class="msg-wrap"></span>')}function f(t,i,r){var n,s,a,l,o;return i.target?(n=e(i.target,r),n.length&&(t=n[0])):(o=D(t,"data-target"),o&&(o=e(o,r)),o&&o.length&&o.is("."+_)&&(s=o)),a=t.name||"#"+t.id,s=s||e("."+_+'[data-for="'+a+'"]',r),s.length||(n=e(o||t),l=c(i.tpl),s=e(l).addClass(_).attr({tabindex:-1,role:"alert",style:i.style||"","data-for":a}),i.cls&&s.addClass(i.cls),s[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](n)),s}function g(t,i,r){var n,s,a,l,o=i.effect;n={error:y,ok:v,tip:b,loading:k}[i.type||(i.type="error")],e(t).is(":checkbox,:radio")&&(t=h(t,"left"===i.pos)),a=f(t,i,r),l=a.find("span.msg-wrap"),l.length||(l=e('<span class="msg-wrap"></span>').appendTo(a)),-1!==a[0].className.indexOf("bottom")&&(l[0].style.top=e(t).outerHeight()-(I?parseInt(e(t).css("padding-top"))+4:0)+"px"),l[0].innerHTML=(i.arrow||"")+(i.icon||"")+'<span class="n-msg">'+i.msg+"</span>",l[0].className="msg-wrap "+n,a[0].style.display="",o&&(q(o)?s=o:j(o)&&q(o[0])&&(s=o[0]),s&&s(l,i.type))}function p(t,i,r){i=i||{},e(t).is(":checkbox,:radio")&&(i.pos=i.pos||d(L.msgTheme),t=h(t,"left"===i.pos));var n,s=f(t,i,r),a=i.effect;s.length&&(j(a)&&q(a[1])?(n=s.find("span.msg-wrap"),s[0].style.display="",a[1](n,i.type)):s[0].style.display="none")}function h(t,i){return e(t).closest(".n-"+m).find('input[name="'+t.name+'"]')[i?"first":"last"]()[0]}var m="validator",v="n-ok",y="n-error",b="n-tip",k="n-loading",w="n-invalid",_="msg-box",x="aria-invalid",M="data-inputstatus",O=":input:not(:button,:submit,:reset,:disabled)",$=/(\w+)(?:[\[\(]([^\]\)]*)[\]\)])?/,A=/(?:([^:\[]*):)?\s*(.*)/,F=/[^\x00-\xff]/g,C=/^.*(top|right|bottom|left).*$/,T=/(?:(post|get):)?(.+)/i,R=/[<>\&\/]/g,V=e.noop,E=e.proxy,q=e.isFunction,j=e.isArray,N=function(e){return"string"==typeof e},S=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},I=!(!window.ActiveXObject||!document.querySelector),D=function(e,i,r){return r===t?e.getAttribute(i):(null===r?e.removeAttribute(i):e.setAttribute(i,""+r),t)},H=window.console||{log:V,info:V,warn:V},L={debug:0,timely:2,stopOnError:0,showError:1,showOk:1,defaultMsg:"{0} is not valid.",loadingMsg:"Validating...",msgTemplate:"<span>{#msg}</span>",msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",formClass:"n-default",ignore:"",valid:V,invalid:V},P={"default":{msgClass:"n-right",showOk:""}};e.fn[m]=function(t){var r=this,n=arguments;return r.is(":input")?r:(!r.is("form")&&(r=this.find("form")),!r.length&&(r=this),r.each(function(){if(N(t)){if("_"===t.charAt(0))return;var r=e(this).data(m);r&&r[t].apply(r,Array.prototype.slice.call(n,1))}else new i(this,t)}),this)},e.fn.isValid=function(){var e=this[0],t=l(e);return t?t._checkField(e):!0},i.prototype={_init:function(){var t=this,i=t.options,r=t.fields;j(i.groups)&&e.map(i.groups,function(i){if(!N(i.fields)||!q(i.callback))return null;var n=e(a(i.fields),t.$el),s=function(){return i.callback.call(t,n)};e.extend(s,i),e.map(i.fields.split(" "),function(e){r[e]=r[e]||{},r[e].group=s})}),S(i.fields)&&e.each(i.fields,function(e,t){t&&(r[e]=N(t)?{rule:t}:t)}),e(O,t.$el).each(function(){var e,n=this,s=n.id;s&&"#"+s in r||(s=n.name),s&&(e=r[s]||{},e.rule||(e.rule=D(n,"data-rule")||""),e.rules=[],D(n,"data-rule",null),e.rule&&(e.name=e.name||n.name,e.key=s,e.required=-1!==e.rule.indexOf("required"),e.must=-1!==e.rule.indexOf("match")||-1!==e.rule.indexOf("checked"),e.required&&D(n,"aria-required",!0),("timely"in e&&!e.timely||!i.timely)&&D(n,"notimely",!0),N(e.target)&&D(n,"data-target",e.target),N(e.tip)&&D(n,"data-tip",e.tip),r[s]=t._parseField(e)))}),t.msgOpt={type:"error",tpl:c(i.msgTemplate),pos:d(i.msgClass),cls:i.msgClass,icon:i.msgIcon,arrow:i.msgArrow,style:i.msgStyle,effect:i.effect},t.$el.data(m)||(t.$el.on("submit",E(t,"_submit")).on("reset",E(t,"_reset")).on("validated.field",O,E(t,"_validatedField")).on("validated.rule",O,E(t,"_validatedRule")).on("focusin",O,E(t,"_focus")).on("focusout validate",O,E(t,"_blur")).on("click",":radio,:checkbox",E(t,"_click")),2===i.timely&&t.$el.on("keyup",O,E(t,"_blur")),t.$el.data(m,t).addClass("n-"+m+" "+i.formClass),D(t.$el[0],"novalidate","true"))},_submit:function(i){var r,n=this,s=n.options,a=i.target,l="focus.field",o=e(O,n.$el);n._reset(),n.submiting=!0,s.ignore&&(o=o.not(s.ignore)),o.each(function(i,r){if(!e(r).is("[novalidate]")){var a=n.getField(this);if(a)return n._validate(this,a),!n.isValid&&s.stopOnError?(e(this).trigger(l).trigger(l),!1):t}}),n.isValid||s.stopOnError||e(":input."+w+":first",n.$el).trigger(l).trigger(l),(!n.isValid||!D(a,"action")&&i)&&i.preventDefault(),r=n.isValid||2===s.debug?"valid":"invalid",s[r].call(n,a),n.$el.trigger(r+".form",[a]),n.submiting=!1},_reset:function(){var t=this,i=t.options.showError;N(i)?e(i).html(""):(e("[data-for]."+_,t.$el).map(function(){this.style.display="none"}),e(O,t.$el).map(function(){D(this,M,null),D(this,x,null),e(this).removeClass(w)})),t.isValid=!0},_focus:function(e){var t=e.target;this.submiting||""!==t.value&&("false"===D(t,x)||"tip"===D(t,M))||this.showMsg(t,{msg:D(t,"data-tip"),type:"tip"})},_blur:function(t,i){var r,n,s=this,a=s.options,l=t.target,o=100;if(!i){if("validate"===t.type)n=!0;else{if(e(l).is("[notimely]"))return;if(2===a.timely&&"keyup"!==t.type)return}if(a.ignore&&e(l).is(a.ignore))return;if("keyup"===t.type){var u=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(48>u&&!d[u])return;o=500}}r=s.getField(l),r&&(r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(function(){s._validate(l,r,n)},o))},_click:function(e){this._blur(e,!0)},_parseField:function(i){var r,n=A.exec(i.rule);if(n)return i.display=n[1],r=(n[2]||"").split(";"),e.map(r,function(r){var n=$.exec(r);return n?(i.rules.push({method:n[1],params:n[2]?e.trim(n[2]).split(", "):t}),t):null}),i.vid=0,i.rid=i.rules[0].method,i},_validatedField:function(i,r,n){var s=this,a=s.options,l=a.showError,o=i.target,u=r.isValid=!!n.valid;if(u&&(n.type="ok"),e(o)[u?"removeClass":"addClass"](w).trigger((u?"valid":"invalid")+".field",[r,n]).attr(x,!u),r.old.ret=n,s.elements[r.key]=o,l){if(N(l))e(l).html(n.msg||"");else if(n.msg||n.showOk)return s.showMsg(o,n),t;(o.value||s.submiting)&&s.hideMsg(o,n)}},_validatedRule:function(i,r,n,s){n=n||a.getField(o);var a=this,l=a.options,o=i.target,d="",c=n.rid,f=!1,g=!1;if(s=s||{},n.old=n.old||{},r!==!0?(d=u(o,n,c),d||(N(r)?(d=r,r={error:d}):S(r)&&(r.error?d=r.error:(f=!0,r.ok&&N(r.ok)&&(g=!0),d=r.ok))),s.msg=(f?d:d||a.messages[c]||L.defaultMsg).replace("{0}",n.display||"")):f=!0,f){if(s.valid=!0,!g){var p=D(o,"data-ok");p?(g=!0,s.msg=p):N(l.showOk)&&(g=!0,s.msg=l.showOk)}s.showOk=g,e(o).trigger("valid.rule",[c])}else a.isValid=!1,e(o).trigger("invalid.rule",[c]);l.debug&&H[f?"info":"warn"](n.vid+": "+c+" -> "+(s.msg||!0)),f&&n.old.value!==t&&n.old.value!==o.value?(n.vid=0,a._checkRule(o,n)):f&&n.vid<n.rules.length-1?(n.vid++,a._checkRule(o,n)):(n.vid=0,e(o).trigger("validated.field",[n,s]))},_checkRule:function(i,r){var n,s=this,a=r.rules[r.vid],l=a.method,u=a.params;r.rid=l,r.old.value=i.value,n=(o(i,l)||s.rules[l]||function(){return!0}).call(s,i,u,r),n!==t?e(i).trigger("validated.rule",[n,r]):s.isValid=!1},_checkField:function(e,t){return(t=t||this.getField(e))?(this._validate(e,t,!0),t.isValid):!0},_validate:function(i,r,n){var s,a,l=this,o=l.options,u=e(i),d={},c=r.group,f=D(i,M),g=r.isValid=!0;if(r&&r.rules&&!i.disabled&&!u.is("[novalidate]")){if(s=r.old=r.old||{},n=n||r.must,r.required||""!==i.value||c)if(!n&&s&&s.ret!==t&&s.value===i.value){if(s.ret.valid||(g=l.isValid=!1),"tip"===f)return;if(""!==i.value)return d=s.ret,u.trigger("validated.field",[r,d]),t}else c&&(e.extend(d,c),a=c.call(l),a===!0?(a=t,l.hideMsg(i,d)):(N(a)&&(a={error:a}),l.hideMsg(i),r.vid=0,r.rid="group",g=!1));else{if("tip"===f)return;if(l._focus({target:i}),s.value="",!u.is(":checkbox,:radio"))return u.trigger("validated.field",[r,{valid:!0}]),t}o.debug&&H.log(i),a!==t?u.trigger("validated.rule",[a,r,d]):r.rule&&l._checkRule(i,r)}},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,i.fields[t]},test:function(i,r){var n,s,a,l=$.exec(r);return l?(s=l[1],a=l[2]?e.trim(l[2]).split(", "):t,s in this.rules&&(n=this.rules[s].call(this,i,a)),n===!0||n===t||n):!0},getRangeMsg:function(e,t,i,r){if(t){var n=this,s=n.messages[i]||"",a=t[0].split("~"),l=a[0],o=a[1],u="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&o){if(c&&e>=+l&&+o>=e)return!0;d=d.concat(a)}else if(l&&!o){if(c&&e>=+l)return!0;d.push(l),u="gt"}else if(!l&&o){if(c&&+o>=e)return!0;d.push(o),u="lt"}}else{if(e===+l)return!0;d.push(l),u="eq"}return s&&(r&&r+u in s&&(u=r+u),d[0]=s[u]),n.renderMsg.apply(null,d)}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,N(t)?{msg:t}:t)},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},showMsg:function(e,t){t=this._getMsgOpt(t),(t.msg||t.showOk)&&(D(e,M,t.type),g(e,t,this.$el))},hideMsg:function(e,t){t=this._getMsgOpt(t),p(e,t,this.$el)},mapMsg:function(t){var i=this;e.each(t,function(t,r){var n=i.elements[t]||e(':input[name="'+t+'"]',i.$el)[0];i.showMsg(n,r)})},setMsg:function(e){new n(e,this.messages)},setRule:function(e){new r(e,this.rules)},setField:function(i,r){var n=this,s={};if(N(i)){if(null===r)return e.map(i.split(" "),function(e){e&&n.fields[e]&&(n.fields[e]=null)}),t;r&&(s[i]=r)}else S(i)&&(s=i);e.extend(!0,n.options.fields,s),n._init()},destroy:function(){this.$el.off().removeData(m)}},e(function(){e("body").on("focusin",":input[data-rule]",function(){l(this)?e(this).trigger("focusin"):e(this).removeAttr("data-rule")}).on("submit","form:not([novalidate])",function(t){var i,r=e(this);r.data(m)||(i=r[m]().data(m),e.isEmptyObject(i.fields)?r.attr("novalidate",!0).removeData(m):i._submit(t))})}),new r({required:function(t){return!!e.trim(t.value)},integer:function(e,t){var i,r="0|",n="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=n;break;case"-":i="-"+n;break;case"+0":i=r+n;break;case"-0":i=r+"-"+n;break;default:i=r+"-?"+n}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i){var r,n,s,a,l,o=t.value,u="eq";if(i&&(1===i.length?n=i[0]:(u=i[0],n=i[1]),a=e("#"===n.charAt(0)?n:':input[name="'+n+'"]',this.$el)[0]))switch(l=this.getField(a),s=this.messages.match[u].replace("{1}",l.display||n),r=a.value,u){case"lt":return+r>+o||s;case"lte":return+r>=+o||s;case"gte":return+o>=+r||s;case"gt":return+o>+r||s;default:return o===r||s}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(!e(t).is(":radio,:checkbox"))return!0;var r=e('input[name="'+t.name+'"]',this.$el).filter(function(){return!this.disabled&&this.checked&&e(this).is(":visible")}).length;return i?this.getRangeMsg(r,i,"checked"):!!r||this.messages.required},length:function(e,t){var i=e.value,r=(t[1]?i.replace(F,"xx"):i).length;return t&&"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(r,t,"length",t[1]?"2_":"")},remote:function(i,r,n){var s,a=this,l={},o=function(e){return N(e)||S(e)&&("error"in e||"ok"in e)?e:t};return r?(s=T.exec(r[0]),l[i.name]=i.value,r[1]&&e.map(r.slice(1),function(t){l[t]=e(':input[name="'+t+'"]',this.$el).val()}),a.showMsg(i,{type:"loading",msg:a.options.loadingMsg}),e.ajax({url:s[2],type:s[1]||"POST",data:l,cache:!1,complete:function(r,s){var a,l=r.responseText;""===l?l=!0:l||"error"!==s?"{"===l.charAt(0)&&(l=e.parseJSON(l)||{},a=o(l),a===t&&(a=o(l.data)),l=a||"success"===s):l="Net error",e(i).trigger("validated.rule",[l,n])}}),t):!0},filter:function(e,t){var i=t?RegExp("["+t[0]+"]","g"):R;e.value=e.value.replace(i,"")}}),i.defaults=L,i.showMsg=g,i.hideMsg=p,i.setTheme=function(t,i){S(t)?e.each(t,function(e,t){P[e]=t}):N(t)&&S(i)&&(P[t]=i)},i.config=function(t){e.each(t,function(e,t){"rules"===e?new r(t):"messages"===e?new n(t):L[e]=t})},e[m]=i})(jQuery);
