/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict"
function e(e){var t=!1,n=0,o=document.createElement("span")
return new MutationObserver(function(){e(),t=!1}).observe(o,{attributes:!0}),function(){t||(t=!0,o.setAttribute("x-index",n),n+=1)}}function t(e){var t=!1
return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ae))}}function n(e){var t={}
return e&&"[object Function]"===t.toString.call(e)}function o(e,t){if(1!==e.nodeType)return[]
var n=window.getComputedStyle(e,null)
return t?n[t]:n}function r(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function i(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body
var t=o(e),n=t.overflow,f=t.overflowX
return/(auto|scroll)/.test(n+t.overflowY+f)?e:i(r(e))}function f(e){var t=e&&e.offsetParent,n=t&&t.nodeName
return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===o(t,"position")?f(t):t:window.document.documentElement}function a(e){var t=e.nodeName
return"BODY"!==t&&("HTML"===t||f(e.firstElementChild)===e)}function s(e){return null!==e.parentNode?s(e.parentNode):e}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange()
i.setStart(o,0),i.setEnd(r,0)
var l=i.commonAncestorContainer
if(e!==l&&t!==l||o.contains(r))return a(l)?l:f(l)
var d=s(e)
return d.host?p(d.host,t):p(e,s(t).host)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName
if("BODY"===o||"HTML"===o){var r=window.document.documentElement
return(window.document.scrollingElement||r)[n]}return e[n]}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=l(t,"top"),r=l(t,"left"),i=n?-1:1
return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function u(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom"
return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}function c(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],ue()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function h(){var e=window.document.body,t=window.document.documentElement,n=ue()&&window.getComputedStyle(t)
return{height:c("Height",e,t,n),width:c("Width",e,t,n)}}function m(e){return ge({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var t={}
if(ue())try{t=e.getBoundingClientRect()
var n=l(e,"top"),r=l(e,"left")
t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}catch(e){}else t=e.getBoundingClientRect()
var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},f="HTML"===e.nodeName?h():{},a=f.width||e.clientWidth||i.right-i.left,s=f.height||e.clientHeight||i.bottom-i.top,p=e.offsetWidth-a,d=e.offsetHeight-s
if(p||d){var c=o(e)
p-=u(c,"x"),d-=u(c,"y"),i.width-=p,i.height-=d}return m(i)}function v(e,t){var n=ue(),r="HTML"===t.nodeName,f=g(e),a=g(t),s=i(e),p=o(t),l=+p.borderTopWidth.split("px")[0],u=+p.borderLeftWidth.split("px")[0],c=m({top:f.top-a.top-l,left:f.left-a.left-u,width:f.width,height:f.height})
if(c.marginTop=0,c.marginLeft=0,!n&&r){var h=+p.marginTop.split("px")[0],v=+p.marginLeft.split("px")[0]
c.top-=l-h,c.bottom-=l-h,c.left-=u-v,c.right-=u-v,c.marginTop=h,c.marginLeft=v}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(c=d(c,t)),c}function b(e){var t=window.document.documentElement,n=v(e,t),o=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),i=l(t),f=l(t,"left")
return m({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:r})}function w(e){var t=e.nodeName
return"BODY"!==t&&"HTML"!==t&&("fixed"===o(e,"position")||w(r(e)))}function y(e,t,n,o){var f={top:0,left:0},a=p(e,t)
if("viewport"===o)f=b(a)
else{var s=void 0
"scrollParent"===o?(s=i(r(e)),"BODY"===s.nodeName&&(s=window.document.documentElement)):s="window"===o?window.document.documentElement:o
var l=v(s,a)
if("HTML"!==s.nodeName||w(a))f=l
else{var d=h(),u=d.height,c=d.width
f.top+=l.top-l.marginTop,f.bottom=u+l.top,f.left+=l.left-l.marginLeft,f.right=c+l.left}}return f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function O(e){return e.width*e.height}function E(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===e.indexOf("auto"))return e
var f=y(n,o,i,r),a={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},s=Object.keys(a).map(function(e){return ge({key:e},a[e],{area:O(a[e])})}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,o=e.height
return t>=n.clientWidth&&o>=n.clientHeight}),l=p.length>0?p[0].key:s[0].key,d=e.split("-")[1]
return l+(d?"-"+d:"")}function x(e,t,n){return v(n,p(t,n))}function L(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight)
return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"}
return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function M(e,t,n){n=n.split("-")[0]
var o=L(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height"
return r[f]=t[f]+t[s]/2-o[s]/2,r[a]=n===a?t[a]-o[p]:t[T(a)],r}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n})
var o=C(e,function(e){return e[t]===n})
return e.indexOf(o)}function k(e,t,o){return(void 0===o?e:e.slice(0,N(e,"name",o))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var o=e.function||e.fn
e.enabled&&n(o)&&(t.offsets.popper=m(t.offsets.popper),t.offsets.reference=m(t.offsets.reference),t=o(t,e))}),t}function S(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=M(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=k(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var n=e.name
return e.enabled&&n===t})}function A(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e
if(void 0!==window.document.body.style[i])return i}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[A("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,n,o){var r="BODY"===e.nodeName,f=r?window:e
f.addEventListener(t,n,{passive:!0}),r||D(i(f.parentNode),t,n,o),o.push(f)}function H(e,t,n,o){n.updateBound=o,window.addEventListener("resize",n.updateBound,{passive:!0})
var r=i(e)
return D(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function P(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function j(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=j(this.reference,this.state))}function F(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&F(t[n])&&(o="px"),e.style[n]=t[n]+o})}function U(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function Y(e){return R(e.instance.popper,e.styles),U(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&R(e.arrowElement,e.arrowStyles),e}function q(e,t,n,o,r){var i=x(r,t,e),f=E(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return t.setAttribute("x-placement",f),R(t,{position:"absolute"}),n}function K(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration
void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var a=void 0!==i?i:t.gpuAcceleration,s=f(e.instance.popper),p=g(s),l={position:r.position},d={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},u="bottom"===n?"top":"bottom",c="right"===o?"left":"right",h=A("transform"),m=void 0,v=void 0
if(v="bottom"===u?-p.height+d.bottom:d.top,m="right"===c?-p.width+d.right:d.left,a&&h)l[h]="translate3d("+m+"px, "+v+"px, 0)",l[u]=0,l[c]=0,l.willChange="transform"
else{var b="bottom"===u?-1:1,w="right"===c?-1:1
l[u]=v*b,l[c]=m*w,l.willChange=u+", "+c}var y={"x-placement":e.placement}
return e.attributes=ge({},y,e.attributes),e.styles=ge({},l,e.styles),e.arrowStyles=ge({},e.offsets.arrow,e.arrowStyles),e}function z(e,t,n){var o=C(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order})
if(!r){var i="`"+t+"`",f="`"+n+"`"
console.warn(f+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function G(e,t){if(!z(e.instance.modifiers,"arrow","keepTogether"))return e
var n=t.element
if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e
var r=e.placement.split("-")[0],i=e.offsets,f=i.popper,a=i.reference,s=-1!==["left","right"].indexOf(r),p=s?"height":"width",l=s?"Top":"Left",d=l.toLowerCase(),u=s?"left":"top",c=s?"bottom":"right",h=L(n)[p]
a[c]-h<f[d]&&(e.offsets.popper[d]-=f[d]-(a[c]-h)),a[d]+h>f[c]&&(e.offsets.popper[d]+=a[d]+h-f[c])
var g=a[d]+a[p]/2-h/2,v=o(e.instance.popper,"margin"+l).replace("px",""),b=g-m(e.offsets.popper)[d]-v
return b=Math.max(Math.min(f[p]-h,b),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[d]=Math.round(b),e.offsets.arrow[u]="",e}function V(e){return"end"===e?"start":"start"===e?"end":e}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=be.indexOf(e),o=be.slice(n+1).concat(be.slice(0,n))
return t?o.reverse():o}function X(e,t){if(W(e.instance.modifiers,"inner"))return e
if(e.flipped&&e.placement===e.originalPlacement)return e
var n=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=T(o),i=e.placement.split("-")[1]||"",f=[]
switch(t.behavior){case we.FLIP:f=[o,r]
break
case we.CLOCKWISE:f=_(o)
break
case we.COUNTERCLOCKWISE:f=_(o,!0)
break
default:f=t.behavior}return f.forEach(function(a,s){if(o!==a||f.length===s+1)return e
o=e.placement.split("-")[0],r=T(o)
var p=e.offsets.popper,l=e.offsets.reference,d=Math.floor,u="left"===o&&d(p.right)>d(l.left)||"right"===o&&d(p.left)<d(l.right)||"top"===o&&d(p.bottom)>d(l.top)||"bottom"===o&&d(p.top)<d(l.bottom),c=d(p.left)<d(n.left),h=d(p.right)>d(n.right),m=d(p.top)<d(n.top),g=d(p.bottom)>d(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(u||v||w)&&(e.flipped=!0,(u||v)&&(o=f[s+1]),w&&(i=V(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=ge({},e.offsets.popper,M(e.instance.popper,e.offsets.reference,e.placement)),e=k(e.instance.modifiers,e,"flip"))}),e}function J(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,f=-1!==["top","bottom"].indexOf(r),a=f?"right":"bottom",s=f?"left":"top",p=f?"width":"height"
return n[a]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[a])&&(e.offsets.popper[s]=i(o[a])),e}function Q(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2]
if(!i)return e
if(0===f.indexOf("%")){var a=void 0
switch(f){case"%p":a=n
break
case"%":case"%r":default:a=o}return m(a)[t]/100*i}if("vh"===f||"vw"===f){return("vh"===f?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function Z(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=f.indexOf(C(f,function(e){return-1!==e.search(/,|\s/)}))
f[a]&&-1===f[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var s=/\s*,\s*|\s+/,p=-1!==a?[f.slice(0,a).concat([f[a].split(s)[0]]),[f[a].split(s)[1]].concat(f.slice(a+1))]:[f]
return p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1
return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)},[]).map(function(e){return Q(e,r,t,n)})}),p.forEach(function(e,t){e.forEach(function(n,o){F(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}function $(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,f=r.reference,a=o.split("-")[0],s=void 0
return s=F(+n)?[+n,0]:Z(n,i,f,a),"left"===a?(i.top+=s[0],i.left-=s[1]):"right"===a?(i.top+=s[0],i.left+=s[1]):"top"===a?(i.left+=s[0],i.top-=s[1]):"bottom"===a&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e}function ee(e,t){var n=t.boundariesElement||f(e.instance.popper)
e.instance.reference===n&&(n=f(n))
var o=y(e.instance.popper,e.instance.reference,t.padding,n)
t.boundaries=o
var r=t.priority,i=e.offsets.popper,a={primary:function(e){var n=i[e]
return i[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(i[e],o[e])),me({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=i[n]
return i[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(i[n],o[e]-("right"===e?i.width:i.height))),me({},n,r)}}
return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary"
i=ge({},i,a[t](e))}),e.offsets.popper=i,e}function te(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1]
if(o){var r=e.offsets,i=r.reference,f=r.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",l={start:me({},s,i[s]),end:me({},s,i[s]+i[p]-f[p])}
e.offsets.popper=ge({},f,l[o])}return e}function ne(e){if(!z(e.instance.modifiers,"hide","preventOverflow"))return e
var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries
if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e
e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e
e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function oe(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return r[f?"left":"top"]=i[n]-(a?r[f?"width":"height"]:0),e.placement=T(t),e.offsets.popper=m(r),e}for(var re=["native code","[object MutationObserverConstructor]"],ie="undefined"!=typeof window,fe=["Edge","Trident","Firefox"],ae=0,se=0;se<fe.length;se+=1)if(ie&&navigator.userAgent.indexOf(fe[se])>=0){ae=1
break}var pe=ie&&function(e){return re.some(function(t){return(e||"").toString().indexOf(t)>-1})}(window.MutationObserver),le=pe?e:t,de=void 0,ue=function(){return void 0===de&&(de=-1!==navigator.appVersion.indexOf("MSIE 10")),de},ce=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},he=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),me=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ve=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],be=ve.slice(3),we={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ye={shift:{order:100,enabled:!0,fn:te},offset:{order:200,enabled:!0,fn:$,offset:0},preventOverflow:{order:300,enabled:!0,fn:ee,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:J},arrow:{order:500,enabled:!0,fn:G,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:X,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:oe},hide:{order:800,enabled:!0,fn:ne},computeStyle:{order:850,enabled:!0,fn:K,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Y,onLoad:q,gpuAcceleration:void 0}},Oe={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:ye},Ee=function(){function e(t,o){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
ce(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=le(this.update.bind(this)),this.options=ge({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ge({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){r.options.modifiers[t]=ge({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ge({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&n(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update()
var f=this.options.eventsEnabled
f&&this.enableEventListeners(),this.state.eventsEnabled=f}return he(e,[{key:"update",value:function(){return S.call(this)}},{key:"destroy",value:function(){return B.call(this)}},{key:"enableEventListeners",value:function(){return P.call(this)}},{key:"disableEventListeners",value:function(){return I.call(this)}}]),e}()
return Ee.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ee.placements=ve,Ee.Defaults=Oe,Ee})
