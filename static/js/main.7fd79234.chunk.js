(this["webpackJsonpsupera-interview"]=this["webpackJsonpsupera-interview"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e){e.exports=JSON.parse('[{"id":312,"name":"Super Mario Odyssey","price":197.88,"score":100,"image":"super-mario-odyssey.png"},{"id":201,"name":"Call Of Duty Infinite Warfare","price":49.99,"score":80,"image":"call-of-duty-infinite-warfare.png"},{"id":102,"name":"The Witcher III Wild Hunt","price":119.5,"score":250,"image":"the-witcher-iii-wild-hunt.png"},{"id":99,"name":"Call Of Duty WWII","price":249.99,"score":205,"image":"call-of-duty-wwii.png"},{"id":12,"name":"Mortal Kombat XL","price":69.99,"score":150,"image":"mortal-kombat-xl.png"},{"id":74,"name":"Shards of Darkness","price":71.94,"score":400,"image":"shards-of-darkness.png"},{"id":31,"name":"Terra M\xe9dia: Sombras de Mordor","price":79.99,"score":50,"image":"terra-media-sombras-de-mordor.png"},{"id":420,"name":"FIFA 18","price":195.39,"score":325,"image":"fifa-18.png"},{"id":501,"name":"Horizon Zero Dawn","price":115.8,"score":290,"image":"horizon-zero-dawn.png"}]')},function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(8),i=c.n(n),s=(c(13),c(3)),o=(c(14),c(15),c(16),c(17),c(0));var d=function(e){return Object(o.jsx)("div",{className:"backdrop-body",onClick:function(){e.toggleModal()}})};var l=function(e){return Object(o.jsxs)("div",{children:[e.children,Object(o.jsx)(d,{toggleModal:e.toggleModal})]})},u=c(2),j=c(4);c(19),c(20);var b=function(e){return Object(o.jsxs)("div",{className:"cart-product-body",children:[Object(o.jsx)("div",{className:"cart-product-remove-btn",onClick:function(){e.removeFromCart(e.itemIndex)},children:Object(o.jsx)("span",{children:"-"})}),Object(o.jsx)("div",{className:"cart-product-image",children:Object(o.jsx)("img",{className:"cart-product-img",src:"/react-game-shop/assets/"+e.product.image,alt:e.product.name})}),Object(o.jsx)("div",{className:"cart-product-title",children:Object(o.jsx)("span",{children:e.product.name})}),Object(o.jsxs)("div",{className:"cart-product-quantity",children:[Object(o.jsx)("span",{children:"X"}),Object(o.jsx)("input",{type:"number",min:"1",value:e.product.quantity,onChange:function(t){e.changeQuantity(t.target.value,e.itemIndex)}})]})]})};var m=function(e){var t=e.items.reduce((function(e,t){return e+t.price*t.quantity}),0),c=e.items.reduce((function(e,t){return e+ +t.quantity}),0);function r(){return t>=250?0:10*c}return Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:["Subtotal: R$",t.toFixed(2)]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:["Frete: R$",r()]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:["Total: R$",function(){var e=r();return(t+e).toFixed(2)}()]})]})};c(21);var p=function(e){var t=e.className?e.className:"";return Object(o.jsx)("input",{className:"close-button "+t,type:"button",value:"X",onClick:function(){e.clickHandler()},"data-testid":"close-btn"})};var O=function(e){function t(t,c){var r=e.products.map((function(e,r){return r===c?Object(j.a)(Object(j.a)({},e),{},{quantity:+t}):e}));e.setCart(Object(u.a)(r))}var c=0===e.products.length;function r(t){var c=Object(u.a)(e.products);c.splice(t,1),e.setCart(Object(u.a)(c))}return Object(o.jsxs)("div",{className:"cart-modal-body",children:[Object(o.jsxs)("div",{className:"cart-modal-items",children:[e.products.map((function(e,c){return Object(o.jsx)(b,{product:e,itemIndex:c,changeQuantity:t,removeFromCart:r},e.id)})),c&&Object(o.jsx)("h1",{children:"Carrinho vazio."})]}),Object(o.jsxs)("div",{className:"cart-modal-info",children:[Object(o.jsx)("div",{className:"cart-modal-pricing",children:Object(o.jsx)(m,{items:e.products})}),Object(o.jsx)("div",{className:"cart-modal-checkout",children:Object(o.jsx)("input",{type:"button",value:"Comprar",className:"cart-modal-checkout-btn"})})]}),Object(o.jsx)("div",{className:"cart-modal-close",children:Object(o.jsx)(p,{clickHandler:function(){e.toggleModal()}})})]})};var x=function(e){var t=Object(r.useState)(!1),c=Object(s.a)(t,2),a=c[0],n=c[1];function i(){n((function(e){return!e}))}return Object(o.jsxs)("div",{className:"cart-body",children:[Object(o.jsx)("img",{src:"/react-game-shop/assets/cart-icon.svg",alt:"cart",onClick:i}),a&&Object(o.jsx)(l,{toggleModal:i,children:Object(o.jsx)(O,{products:e.products,setCart:e.setCart,toggleModal:i})})]})};var f=function(e){return Object(o.jsx)("div",{className:"navbar-body",children:Object(o.jsx)(x,{products:e.products,setCart:e.setCart})})};c(22),c(23);var v=function(e){return Object(o.jsxs)("div",{className:"sorter-body",children:[Object(o.jsx)("label",{className:"sorter-label",children:"Ordenar por:"}),Object(o.jsxs)("select",{onChange:function(t){e.setSortOption(t.target.value)},value:e.sortOption,children:[Object(o.jsx)("option",{value:"price",children:"pre\xe7o"}),Object(o.jsx)("option",{value:"score",children:"popularidade"}),Object(o.jsx)("option",{value:"title",children:"ordem alfab\xe9tica"})]})]})};c(24),c(25);var h=function(e){return Object(o.jsxs)("div",{className:"product-body",onClick:function(){e.modalToggle(e.item)},children:[Object(o.jsx)("div",{className:"product-image",children:Object(o.jsx)("img",{src:"".concat("/react-game-shop","/assets/").concat(e.item.image),alt:e.item.name})}),Object(o.jsxs)("div",{className:"product-info",children:[Object(o.jsx)("span",{className:"product-title",children:e.item.name}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{className:"product-price",children:["R$",e.item.price]})]})]})};var g=function(e){return Object(o.jsx)("div",{className:"product-list",children:e.products.map((function(t){return Object(o.jsx)(h,{item:t,modalToggle:e.modalToggle},t.id)}))})};c(26);var y=function(e){return Object(o.jsxs)("div",{className:"buy-item-body",children:[Object(o.jsxs)("div",{className:"buy-item-image",children:[Object(o.jsx)("img",{src:"".concat("/react-game-shop","/assets/").concat(e.clickedItem.image),alt:e.clickedItem.name}),Object(o.jsx)("span",{children:e.clickedItem.name})]}),Object(o.jsx)("div",{className:"buy-item-info",children:Object(o.jsxs)("div",{className:"buy-item-price",children:[Object(o.jsxs)("span",{children:["Pre\xe7o: R$",e.clickedItem.price]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"button",value:"Comprar",onClick:function(){e.toggleModal(),e.addToCart(e.clickedItem)}})]})}),Object(o.jsx)("div",{className:"buy-item-close-div",children:Object(o.jsx)(p,{clickHandler:e.toggleModal})})]})};var N=function(e){var t=Object(r.useState)({}),c=Object(s.a)(t,2),a=c[0],n=c[1],i=Object(r.useState)("price"),d=Object(s.a)(i,2),b=d[0],m=d[1],p=Object(r.useState)(!1),O=Object(s.a)(p,2),x=O[0],f=O[1],h=Object(u.a)(e.products);switch(b){case"price":h.sort(C);break;case"score":h.sort((function(e,t){return e.score-t.score}));break;case"title":h.sort((function(e,t){return e.name.localeCompare(t.name)}));break;default:h.sort(C)}function N(){f((function(e){return!e}))}function C(e,t){return t.price-e.price}return Object(o.jsxs)("div",{className:"store-body",children:[Object(o.jsx)(v,{setSortOption:m,sortOption:b}),x&&Object(o.jsx)(l,{toggleModal:N,children:Object(o.jsx)(y,{toggleModal:N,clickedItem:a,addToCart:function(t){if(e.cart.find((function(e){return e.id===t.id}))){var c=e.cart.findIndex((function(e){return e.id===t.id})),r=Object(u.a)(e.cart);r[c].quantity++,e.setCart(Object(u.a)(r))}else{var a=Object(j.a)(Object(j.a)({},t),{},{quantity:1});e.setCart((function(e){return[].concat(Object(u.a)(e),[a])}))}}})}),Object(o.jsx)(g,{products:h,modalToggle:function(e){N(),n(e)}})]})},C=c(27);var k=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{products:c,setCart:a}),Object(o.jsx)(N,{products:C,cart:c,setCart:a})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.7fd79234.chunk.js.map