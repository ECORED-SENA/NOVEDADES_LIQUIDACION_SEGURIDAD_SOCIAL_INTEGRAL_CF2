(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02f306d3"],{"0b42":function(e,t,i){var n=i("da84"),s=i("e8b5"),r=i("68ee"),a=i("861d"),o=i("b622"),d=o("species"),c=n.Array;e.exports=function(e){var t;return s(e)&&(t=e.constructor,r(t)&&(t===c||s(t.prototype))?t=void 0:a(t)&&(t=t[d],null===t&&(t=void 0))),void 0===t?c:t}},2267:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"img-infografica"},[i("div",{ref:"img-ref-"+e.mainId,staticClass:"img-infografica__img"},[e._t("imagen")],2),e.elements.length?i("div",{staticClass:"img-infografica__content"},[e._l(e.elements,(function(t,n){return i("div",{key:"img-infografica-btn-"+t.id,staticClass:"img-infografica__item",style:[{top:t.y},{left:t.x}],on:{mouseover:function(i){e.selected=t.id},mouseleave:function(t){e.selected=0}}},[i("div",{staticClass:"img-infografica__item__dot"}),t.hasOwnProperty("numero")?i("div",{staticClass:"img-infografica__item__numero"},[e._v(e._s(t.numero))]):e._e()])})),e._l(e.elements,(function(t){return i("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"img-infografica-card-"+t.id,ref:"card-ref-"+t.id,refInFor:!0,staticClass:"img-infografica__card",class:{"img-infografica__card--selected":e.selected===t.id},style:e.getCardCords(t.id),on:{mouseover:function(i){e.selected=t.id},mouseleave:function(t){e.selected=0}}})})),e.firstElement&&e.showIndicator?i("div",{staticClass:"img-infografica__indicador",style:[{top:e.firstElement.y},{left:e.firstElement.x}]},[i("div",{staticClass:"indicador--hover"})]):e._e()],2):e._e(),i("div",{staticClass:"hidden-slot"},[e._t("default")],2)])},s=[],r=(i("7db0"),i("d3b7"),i("ab14")),a={name:"ImagenInfografica",mixins:[r["a"]],data:function(){return{firstSelection:!1,showIndicator:!0}},computed:{firstElement:function(){return this.elements.length&&this.elements[0]}},watch:{selected:function(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getCardCords:function(e){var t="card-ref-"+e;if(!(t in this.$refs))return[{top:0},{left:0}];var i=this.elements.find((function(t){return t.id===e})),n=this.$refs["img-ref-"+this.mainId],s={w:n.clientWidth,h:n.clientHeight},r=this.$refs[t][0],a={x:parseInt(i.x,10),y:parseInt(i.y,10),w:r.clientWidth,h:r.clientHeight},o=a.y/100*s.h,d=a.x/100*s.w,c=[];return o+a.h>s.h?c.push({bottom:0}):c.push({top:i.y}),d+a.w>s.w?c.push({right:0}):c.push({left:i.x}),c}}},o=a,d=i("2877"),c=Object(d["a"])(o,n,s,!1,null,null,null);t["default"]=c.exports},"65f0":function(e,t,i){var n=i("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"7db0":function(e,t,i){"use strict";var n=i("23e7"),s=i("b727").find,r=i("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r(a)},ab14:function(e,t,i){"use strict";t["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const i={};return 0===t?i.next=e[t+1]:(t+1===e.length||(i.next=e[t+1]),i.back=e[t-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const i=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b727:function(e,t,i){var n=i("0366"),s=i("e330"),r=i("44ad"),a=i("7b0b"),o=i("07fa"),d=i("65f0"),c=s([].push),f=function(e){var t=1==e,i=2==e,s=3==e,f=4==e,l=6==e,u=7==e,h=5==e||l;return function(m,g,v,p){for(var _,w,b=a(m),y=r(b),x=n(g,v),C=o(y),I=0,S=p||d,$=t?S(m,C):i||u?S(m,0):void 0;C>I;I++)if((h||I in y)&&(_=y[I],w=x(_,I,b),e))if(t)$[I]=w;else if(w)switch(e){case 3:return!0;case 5:return _;case 6:return I;case 2:c($,_)}else switch(e){case 4:return!1;case 7:c($,_)}return l?-1:s||f?f:$}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-02f306d3.c863fcc4.js.map