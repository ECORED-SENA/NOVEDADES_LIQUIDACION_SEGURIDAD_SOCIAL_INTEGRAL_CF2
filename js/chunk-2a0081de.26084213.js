(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0081de"],{"0b42":function(t,e,i){var s=i("da84"),n=i("e8b5"),a=i("68ee"),r=i("861d"),c=i("b622"),o=c("species"),d=s.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,a(e)&&(e===d||n(e.prototype))?e=void 0:r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?d:e}},"5d4d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-infografica-b",class:{"img-infografica-b--open":t.selectedItem}},[i("div",{ref:"img-ref-"+t.mainId,staticClass:"img-infografica-b__img"},[t._t("imagen")],2),t.elements.length?i("div",{staticClass:"img-infografica-b__content"},t._l(t.elements,(function(e,s){return i("div",{key:"img-infografica-b-btn-"+e.id,staticClass:"img-infografica-b__item",style:[{top:e.y},{left:e.x}],on:{click:function(i){t.selected=e.id}}},[t.showIndicator&&t.firstElement.id===e.id?i("div",{staticClass:"indicador--click"}):t._e(),i("div",{staticClass:"img-infografica-b__item__tooltip"},[i("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.tooltip)}})]),i("div",{staticClass:"img-infografica-b__item__dot"}),e.hasOwnProperty("numero")?i("div",{staticClass:"img-infografica-b__item__numero"},[t._v(t._s(e.numero))]):i("div",{staticClass:"img-infografica-b__item__numero"},[i("i",{staticClass:"fas fa-plus"})])])})),0):t._e(),t.selectedItem?i("div",{staticClass:"img-infografica-b__modal p-3 p-md-4 p-xl-5",style:t.getImageHeight()},[i("div",{staticClass:"img-infografica-b__modal__btn-cerrar",on:{click:function(e){t.selected=0}}},[i("i",{staticClass:"fas fa-times"})]),i("div",{directives:[{name:"child",rawName:"v-child",value:t.selectedItem.elm,expression:"selectedItem.elm"}],staticClass:"img-infografica-b__modal__contenido"})]):t._e(),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)])},n=[],a=(i("7db0"),i("d3b7"),i("ab14")),r={name:"ImagenInfograficaB",mixins:[a["a"]],data:function(){return{firstSelection:!1,showIndicator:!0}},computed:{selectedItem:function(){var t=this;return this.elements.find((function(e){return e.id===t.selected}))},firstElement:function(){return this.elements.length&&this.elements[0]}},watch:{selected:function(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getImageHeight:function(){var t=this.$refs["img-ref-"+this.mainId];if(t)return{"min-height":t.clientHeight+"px"}}}},c=r,o=i("2877"),d=Object(o["a"])(c,s,n,!1,null,null,null);e["default"]=d.exports},"65f0":function(t,e,i){var s=i("0b42");t.exports=function(t,e){return new(s(t))(0===e?0:e)}},"7db0":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").find,a=i("44d2"),r="find",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),s({target:"Array",proto:!0,forced:c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b727:function(t,e,i){var s=i("0366"),n=i("e330"),a=i("44ad"),r=i("7b0b"),c=i("07fa"),o=i("65f0"),d=n([].push),l=function(t){var e=1==t,i=2==t,n=3==t,l=4==t,f=6==t,m=7==t,u=5==t||f;return function(h,g,_,p){for(var v,b,w=r(h),x=a(w),I=s(g,_),C=c(x),y=0,S=p||o,k=e?S(h,C):i||m?S(h,0):void 0;C>y;y++)if((u||y in x)&&(v=x[y],b=I(v,y,w),t))if(e)k[y]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:d(k,v)}else switch(t){case 4:return!1;case 7:d(k,v)}return f?-1:n||l?l:k}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=chunk-2a0081de.26084213.js.map