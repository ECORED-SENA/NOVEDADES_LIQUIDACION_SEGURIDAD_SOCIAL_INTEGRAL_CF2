(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario~intro~referencias"],{"00b4":function(t,r,e){"use strict";e("ac1f");var n=e("23e7"),o=e("da84"),i=e("c65b"),a=e("e330"),c=e("1626"),u=e("861d"),f=function(){var t=!1,r=/[ac]/;return r.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&t}(),s=o.Error,d=a(/./.test);n({target:"RegExp",proto:!0,forced:!f},{test:function(t){var r=this.exec;if(!c(r))return d(this,t);var e=i(r,this,t);if(null!==e&&!u(e))throw new s("RegExp exec method returned something other than an Object or null");return!!e}})},"057f":function(t,r,e){var n=e("c6b6"),o=e("fc6a"),i=e("241c").f,a=e("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(r){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?u(t):i(o(t))}},"0b42":function(t,r,e){var n=e("da84"),o=e("e8b5"),i=e("68ee"),a=e("861d"),c=e("b622"),u=c("species"),f=n.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,i(r)&&(r===f||o(r.prototype))?r=void 0:a(r)&&(r=r[u],null===r&&(r=void 0))),void 0===r?f:r}},"107c":function(t,r,e){var n=e("d039"),o=e("da84"),i=o.RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"1dde":function(t,r,e){var n=e("d039"),o=e("b622"),i=e("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},2909:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t){if(Array.isArray(t))return n(t)}e.d(r,"a",(function(){return u}));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e("fb6a"),e("b0c0"),e("ac1f"),e("00b4");function a(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||i(t)||a(t)||c()}},"428f":function(t,r,e){var n=e("da84");t.exports=n},"4dae":function(t,r,e){var n=e("da84"),o=e("23cb"),i=e("07fa"),a=e("8418"),c=n.Array,u=Math.max;t.exports=function(t,r,e){for(var n=i(t),f=o(r,n),s=o(void 0===e?n:e,n),d=c(u(s-f,0)),l=0;f<s;f++,l++)a(d,l,t[f]);return d.length=l,d}},"4df4":function(t,r,e){"use strict";var n=e("da84"),o=e("0366"),i=e("c65b"),a=e("7b0b"),c=e("9bdd"),u=e("e95a"),f=e("68ee"),s=e("07fa"),d=e("8418"),l=e("9a1f"),b=e("35a1"),v=n.Array;t.exports=function(t){var r=a(t),e=f(this),n=arguments.length,p=n>1?arguments[1]:void 0,g=void 0!==p;g&&(p=o(p,n>2?arguments[2]:void 0));var y,h,m,x,w,S,O=b(r),A=0;if(!O||this==v&&u(O))for(y=s(r),h=e?new this(y):v(y);y>A;A++)S=g?p(r[A],A):r[A],d(h,A,S);else for(x=l(r,O),w=x.next,h=e?new this:[];!(m=i(w,x)).done;A++)S=g?c(x,p,[m.value,A],!0):m.value,d(h,A,S);return h.length=A,h}},"65f0":function(t,r,e){var n=e("0b42");t.exports=function(t,r){return new(n(t))(0===r?0:r)}},"746f":function(t,r,e){var n=e("428f"),o=e("1a2d"),i=e("e538"),a=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},8418:function(t,r,e){"use strict";var n=e("a04b"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},9263:function(t,r,e){"use strict";var n=e("c65b"),o=e("e330"),i=e("577e"),a=e("ad6d"),c=e("9f7f"),u=e("5692"),f=e("7c73"),s=e("69f3").get,d=e("fce3"),l=e("107c"),b=u("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,g=o("".charAt),y=o("".indexOf),h=o("".replace),m=o("".slice),x=function(){var t=/a/,r=/b*/g;return n(v,t,"a"),n(v,r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),w=c.BROKEN_CARET,S=void 0!==/()??/.exec("")[1],O=x||S||w||d||l;O&&(p=function(t){var r,e,o,c,u,d,l,O=this,A=s(O),I=i(t),E=A.raw;if(E)return E.lastIndex=O.lastIndex,r=n(p,E,I),O.lastIndex=E.lastIndex,r;var R=A.groups,j=w&&O.sticky,P=n(a,O),k=O.source,N=0,$=I;if(j&&(P=h(P,"y",""),-1===y(P,"g")&&(P+="g"),$=m(I,O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==g(I,O.lastIndex-1))&&(k="(?: "+k+")",$=" "+$,N++),e=new RegExp("^(?:"+k+")",P)),S&&(e=new RegExp("^"+k+"$(?!\\s)",P)),x&&(o=O.lastIndex),c=n(v,j?e:O,$),j?c?(c.input=m(c.input,N),c[0]=m(c[0],N),c.index=O.lastIndex,O.lastIndex+=c[0].length):O.lastIndex=0:x&&c&&(O.lastIndex=O.global?c.index+c[0].length:o),S&&c&&c.length>1&&n(b,c[0],e,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&R)for(c.groups=d=f(null),u=0;u<R.length;u++)l=R[u],d[l[0]]=c[l[1]];return c}),t.exports=p},"9bdd":function(t,r,e){var n=e("825a"),o=e("2a62");t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(a){o(t,"throw",a)}}},"9f7f":function(t,r,e){var n=e("d039"),o=e("da84"),i=o.RegExp,a=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=a||n((function(){return!i("a","y").sticky})),u=a||n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:c,UNSUPPORTED_Y:a}},a4d3:function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("d066"),a=e("2ba4"),c=e("c65b"),u=e("e330"),f=e("c430"),s=e("83ab"),d=e("4930"),l=e("d039"),b=e("1a2d"),v=e("e8b5"),p=e("1626"),g=e("861d"),y=e("3a9b"),h=e("d9b5"),m=e("825a"),x=e("7b0b"),w=e("fc6a"),S=e("a04b"),O=e("577e"),A=e("5c6c"),I=e("7c73"),E=e("df75"),R=e("241c"),j=e("057f"),P=e("7418"),k=e("06cf"),N=e("9bf2"),$=e("d1e7"),C=e("f36a"),D=e("6eeb"),T=e("5692"),J=e("f772"),M=e("d012"),U=e("90e3"),_=e("b622"),B=e("e538"),K=e("746f"),F=e("d44e"),Y=e("69f3"),q=e("b727").forEach,L=J("hidden"),Q="Symbol",W="prototype",z=_("toPrimitive"),G=Y.set,H=Y.getterFor(Q),V=Object[W],X=o.Symbol,Z=X&&X[W],tt=o.TypeError,rt=o.QObject,et=i("JSON","stringify"),nt=k.f,ot=N.f,it=j.f,at=$.f,ct=u([].push),ut=T("symbols"),ft=T("op-symbols"),st=T("string-to-symbol-registry"),dt=T("symbol-to-string-registry"),lt=T("wks"),bt=!rt||!rt[W]||!rt[W].findChild,vt=s&&l((function(){return 7!=I(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=nt(V,r);n&&delete V[r],ot(t,r,e),n&&t!==V&&ot(V,r,n)}:ot,pt=function(t,r){var e=ut[t]=I(Z);return G(e,{type:Q,tag:t,description:r}),s||(e.description=r),e},gt=function(t,r,e){t===V&&gt(ft,r,e),m(t);var n=S(r);return m(e),b(ut,n)?(e.enumerable?(b(t,L)&&t[L][n]&&(t[L][n]=!1),e=I(e,{enumerable:A(0,!1)})):(b(t,L)||ot(t,L,A(1,{})),t[L][n]=!0),vt(t,n,e)):ot(t,n,e)},yt=function(t,r){m(t);var e=w(r),n=E(e).concat(St(e));return q(n,(function(r){s&&!c(mt,e,r)||gt(t,r,e[r])})),t},ht=function(t,r){return void 0===r?I(t):yt(I(t),r)},mt=function(t){var r=S(t),e=c(at,this,r);return!(this===V&&b(ut,r)&&!b(ft,r))&&(!(e||!b(this,r)||!b(ut,r)||b(this,L)&&this[L][r])||e)},xt=function(t,r){var e=w(t),n=S(r);if(e!==V||!b(ut,n)||b(ft,n)){var o=nt(e,n);return!o||!b(ut,n)||b(e,L)&&e[L][n]||(o.enumerable=!0),o}},wt=function(t){var r=it(w(t)),e=[];return q(r,(function(t){b(ut,t)||b(M,t)||ct(e,t)})),e},St=function(t){var r=t===V,e=it(r?ft:w(t)),n=[];return q(e,(function(t){!b(ut,t)||r&&!b(V,t)||ct(n,ut[t])})),n};if(d||(X=function(){if(y(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,r=U(t),e=function(t){this===V&&c(e,ft,t),b(this,L)&&b(this[L],r)&&(this[L][r]=!1),vt(this,r,A(1,t))};return s&&bt&&vt(V,r,{configurable:!0,set:e}),pt(r,t)},Z=X[W],D(Z,"toString",(function(){return H(this).tag})),D(X,"withoutSetter",(function(t){return pt(U(t),t)})),$.f=mt,N.f=gt,k.f=xt,R.f=j.f=wt,P.f=St,B.f=function(t){return pt(_(t),t)},s&&(ot(Z,"description",{configurable:!0,get:function(){return H(this).description}}),f||D(V,"propertyIsEnumerable",mt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:X}),q(E(lt),(function(t){K(t)})),n({target:Q,stat:!0,forced:!d},{for:function(t){var r=O(t);if(b(st,r))return st[r];var e=X(r);return st[r]=e,dt[e]=r,e},keyFor:function(t){if(!h(t))throw tt(t+" is not a symbol");if(b(dt,t))return dt[t]},useSetter:function(){bt=!0},useSimple:function(){bt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!s},{create:ht,defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:xt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:St}),n({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(x(t))}}),et){var Ot=!d||l((function(){var t=X();return"[null]"!=et([t])||"{}"!=et({a:t})||"{}"!=et(Object(t))}));n({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,r,e){var n=C(arguments),o=r;if((g(r)||void 0!==t)&&!h(t))return v(r)||(r=function(t,r){if(p(o)&&(r=c(o,this,t,r)),!h(r))return r}),n[1]=r,a(et,null,n)}})}if(!Z[z]){var At=Z.valueOf;D(Z,z,(function(t){return c(At,this)}))}F(X,Q),M[L]=!0},a630:function(t,r,e){var n=e("23e7"),o=e("4df4"),i=e("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},ac1f:function(t,r,e){"use strict";var n=e("23e7"),o=e("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,r,e){"use strict";var n=e("825a");t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},b727:function(t,r,e){var n=e("0366"),o=e("e330"),i=e("44ad"),a=e("7b0b"),c=e("07fa"),u=e("65f0"),f=o([].push),s=function(t){var r=1==t,e=2==t,o=3==t,s=4==t,d=6==t,l=7==t,b=5==t||d;return function(v,p,g,y){for(var h,m,x=a(v),w=i(x),S=n(p,g),O=c(w),A=0,I=y||u,E=r?I(v,O):e||l?I(v,0):void 0;O>A;A++)if((b||A in w)&&(h=w[A],m=S(h,A,x),t))if(r)E[A]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return A;case 2:f(E,h)}else switch(t){case 4:return!1;case 7:f(E,h)}return d?-1:o||s?s:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},d28b:function(t,r,e){var n=e("746f");n("iterator")},e01a:function(t,r,e){"use strict";var n=e("23e7"),o=e("83ab"),i=e("da84"),a=e("e330"),c=e("1a2d"),u=e("1626"),f=e("3a9b"),s=e("577e"),d=e("9bf2").f,l=e("e893"),b=i.Symbol,v=b&&b.prototype;if(o&&u(b)&&(!("description"in v)||void 0!==b().description)){var p={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),r=f(v,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[r]=!0),r};l(g,b),g.prototype=v,v.constructor=g;var y="Symbol(test)"==String(b("test")),h=a(v.toString),m=a(v.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),S=a("".slice);d(v,"description",{configurable:!0,get:function(){var t=m(this),r=h(t);if(c(p,t))return"";var e=y?S(r,7,-1):w(r,x,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:g})}},e538:function(t,r,e){var n=e("b622");r.f=n},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ecc5:function(t,r,e){"use strict";r["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),r=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||r}},methods:{quitarAcentos(t){const r=t.replace(/<\/?[^>]+(>|$)/g,""),e={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return r.split("").map(t=>e[t]||t).join("").toString()}}}},fb6a:function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("e8b5"),a=e("68ee"),c=e("861d"),u=e("23cb"),f=e("07fa"),s=e("fc6a"),d=e("8418"),l=e("b622"),b=e("1dde"),v=e("f36a"),p=b("slice"),g=l("species"),y=o.Array,h=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,r){var e,n,o,l=s(this),b=f(l),p=u(t,b),m=u(void 0===r?b:r,b);if(i(l)&&(e=l.constructor,a(e)&&(e===y||i(e.prototype))?e=void 0:c(e)&&(e=e[g],null===e&&(e=void 0)),e===y||void 0===e))return v(l,p,m);for(n=new(void 0===e?y:e)(h(m-p,0)),o=0;p<m;p++,o++)p in l&&d(n,o,l[p]);return n.length=o,n}})},fce3:function(t,r,e){var n=e("d039"),o=e("da84"),i=o.RegExp;t.exports=n((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=glosario~intro~referencias.d5714942.js.map