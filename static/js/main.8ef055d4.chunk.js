(this.webpackJsonpamazonclone=this.webpackJsonpamazonclone||[]).push([[0],{57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},76:function(e,t,i){},78:function(e,t,i){"use strict";i.r(t);var c=i(7),n=i.n(c),a=i(35),s=i.n(a),r=(i(57),i(58),i(20)),o=i(15),l=i(11),A=(i(59),i(48)),d=i.n(A),j=i(49),I=i.n(j),u=i(5),m=Object(c.createContext)(),b=function(e){var t=e.reducer,i=e.initialState,n=e.children;return Object(u.jsx)(m.Provider,{value:Object(c.useReducer)(t,i),children:n})},h=function(){return Object(c.useContext)(m)},g=i(47),x=i(51),p=i(30),O=Object(g.a)({apiKey:"AIzaSyDvX7N_myLESGEdoLTCVFl9jPCFdO1AK74",authDomain:"clone-4cd56.firebaseapp.com",projectId:"clone-4cd56",storageBucket:"clone-4cd56.appspot.com",messagingSenderId:"1029638839699",appId:"1:1029638839699:web:054c91d27457dab8f49c66",measurementId:"G-ZZ09R1NKG5"}),E=(Object(x.a)(O),Object(p.b)(O));var f=function(){var e,t=h(),i=Object(l.a)(t,1)[0].basket;return Object(u.jsxs)("nav",{className:"header",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG18.png",alt:"",className:"header__logo"})}),Object(u.jsxs)("div",{className:"header__search",children:[Object(u.jsx)("input",{type:"text",className:"header__searchInput"}),Object(u.jsx)(d.a,{className:"header__searchIcon"})]}),Object(u.jsxs)("div",{className:"header__nav",children:[Object(u.jsx)(r.b,{className:"header__link",to:"/login",children:Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===(e=E.currentUser)||void 0===e?void 0:e.email," "]}),!E.currentUser&&Object(u.jsx)("span",{className:"header__optionLineTwo",children:"Sign in"})]})}),Object(u.jsx)(r.b,{className:"header__link",children:Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(u.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(u.jsx)(r.b,{className:"header__link",children:Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(u.jsx)("span",{clasasName:"header__optionLineTwo",children:"Prime"})]})}),Object(u.jsx)(r.b,{to:"/checkout",className:"header__link",children:Object(u.jsxs)("div",{className:"header__optionBasket",children:[Object(u.jsx)(I.a,{classname:"header_basketIcon"}),Object(u.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===i||void 0===i?void 0:i.length})]})}),E.currentUser&&Object(u.jsx)(r.b,{to:"/",className:"header__link",children:Object(u.jsx)("div",{className:"header__optionBasket",children:Object(u.jsx)("span",{className:"header__optionLineOne",onClick:Object(p.d)(E),children:"Sign Out"})})})]})]})};i(70),i(71);var N=function(e){var t=e.id,i=e.title,c=e.price,n=e.rating,a=e.image,s=h(),r=Object(l.a)(s,2),o=(r[0].basket,r[1]);return Object(u.jsxs)("div",{className:"product",children:[Object(u.jsxs)("div",{className:"product__info",children:[Object(u.jsx)("p",{children:i}),Object(u.jsxs)("p",{className:"product__price",children:[Object(u.jsx)("small",{children:"\u20b9"}),Object(u.jsx)("strong",{children:c})]}),Object(u.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e){return Object(u.jsx)("p",{children:"\u2b50"})}))})]}),Object(u.jsx)("img",{src:a,alt:""}),Object(u.jsx)("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:t,title:i,price:c,rating:n,image:a}})},children:"Add to Basket"})]})};var v=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg    ",alt:""}),Object(u.jsxs)("div",{className:"home__row",children:[Object(u.jsx)(N,{id:"1",title:"Cromptom Steam Iron",price:1200,rating:5,image:"https://m.media-amazon.com/images/I/71ScDJ8rlrL._SX425_.jpg"}),Object(u.jsx)(N,{id:"2",title:"Samsung 23L Microwave oven",price:1e4,rating:5,image:"data:image/jpeg;base64,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"})]}),Object(u.jsxs)("div",{className:"home__row",children:[Object(u.jsx)(N,{id:"3",title:"Microsoft Surface",price:12e4,rating:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy7dUHyB7weU1ERnbH35rHBD1TRYWsnXKaQ&usqp=CAU"}),Object(u.jsx)(N,{id:"4",title:"Realme Smart Watch",price:4990,rating:5,image:"data:image/jpeg;base64,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"}),Object(u.jsx)(N,{id:"5",title:"Gym Gear",price:999,rating:4,image:"https://m.media-amazon.com/images/I/51XZ4sNE+-L.jpg"})]}),Object(u.jsx)("div",{className:"home__row",children:Object(u.jsx)(N,{id:"6",title:"Samsung 4k 55 Inches Smart LED TV",price:55e3,rating:5,image:"https://images.samsung.com/is/image/samsung/p6pim/in/ua55aue60aklxl/gallery/in-uhd-4k-tv-ua55aue60aklxl-front--gray-436230152?$684_547_PNG$"})})]})};i(72),i(73);var z=function(e){var t=e.id,i=e.title,c=e.image,n=e.price,a=(e.rating,h()),s=Object(l.a)(a,2),r=(s[0].basket,s[1]);return Object(u.jsxs)("div",{className:"checkoutProduct",children:[Object(u.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(u.jsxs)("div",{className:"checkoutProduct__info",children:[Object(u.jsx)("p",{className:"checkoutProduct_title",children:i}),Object(u.jsxs)("p",{className:"checkoutProduct__price",children:[Object(u.jsx)("small",{children:"\u20b9"}),Object(u.jsx)("strong",{children:n})]}),Object(u.jsx)("div",{className:"checkoutProduct__rating",children:Array(5).fill().map((function(e){return Object(u.jsx)("p",{children:"\u2b50"})}))}),Object(u.jsx)("button",{onClick:function(){r({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},k=(i(74),i(50)),C=i.n(k),R=i(14),B=i(34),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(R.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var i=Object(R.a)(e.basket),c=e.basket.findIndex((function(e){return e.id===t.id}));return c>=0?i.splice(c,1):console.warn("cant remove product (id: ".concat(t.id,") as its not in basket.")),Object(B.a)(Object(B.a)({},e),{},{basket:i});default:return e}};var T=function(){var e=h(),t=Object(l.a)(e,1)[0].basket;return Object(u.jsxs)("div",{className:"subtotal",children:[Object(u.jsx)(C.a,{renderText:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["SubTotal (",t.length," items): ",Object(u.jsx)("strong",{children:e})]}),Object(u.jsxs)("small",{className:"subtotal__gift",children:[Object(u.jsx)("input",{type:"checkbox"}),"This order contains gift."]})]})},decimalScale:2,value:y(t),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(u.jsx)("button",{className:"subtotal_checkout",children:"Proceed to Checkout"})]})};var S=function(){var e=h(),t=Object(l.a)(e,1)[0].basket;return Object(u.jsxs)("div",{className:"checkout",children:[Object(u.jsxs)("div",{className:"checkoutLeft",children:[Object(u.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg",className:"checkout__image",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Your shopping basket is empty"}),Object(u.jsx)("p",{children:'You have no items in your basket. To buy one or more click on "Add to basket" next to the item.'})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"checkout__title",children:"Your shopping basket"}),t.map((function(e){return Object(u.jsx)(z,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(u.jsx)("div",{className:"checkout__right",children:Object(u.jsx)(T,{})})]})},D=i(0),V=i.n(D),Q=i(2);i(76);var U=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),A=s[0],d=s[1],j=Object(o.f)(),I=function(){var e=Object(Q.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(p.c)(E,i,A);case 4:e.sent,j.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(Q.a)(V.a.mark((function e(t){var c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(p.a)(E,i,A);case 4:c=e.sent,console.log(c),j.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG18.png",className:"login_logo",alt:""})}),Object(u.jsxs)("div",{className:"login_container",children:[Object(u.jsx)("h1",{className:"sign_in",children:"Sign in"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("h5",{children:"E-mail"}),Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){n(e.target.value)}}),Object(u.jsx)("h5",{children:"Password"}),Object(u.jsx)("input",{type:"password",value:A,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"login_signInButton",onClick:I,children:"Sign in"})]}),Object(u.jsx)("p",{className:"login_conditions",children:"By Signing-in you agree to Amazon's Conditions of Use & Save."}),Object(u.jsx)("button",{className:"login_registerButton",onClick:m,children:"Create your Amazon Account"})]})]})};var F=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.c,{children:[Object(u.jsxs)(o.a,{path:"/checkout",children:[Object(u.jsx)(f,{}),Object(u.jsx)(S,{})]}),Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(U,{})}),Object(u.jsxs)(o.a,{path:"/",children:[Object(u.jsx)(f,{}),Object(u.jsx)(v,{})]})]})})})},P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,90)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(b,{initialState:{basket:[],user:null},reducer:w,children:Object(u.jsx)(F,{})})}),document.getElementById("root")),P()}},[[78,1,2]]]);
//# sourceMappingURL=main.8ef055d4.chunk.js.map