"use strict";
const reduceProd = document.querySelector( '.product_reduce' );
const increaseProd = document.querySelector( '.product_increase' );
const quantityVal = document.querySelector( '.quantity_val' );

let quantity = Number( quantityVal.innerHTML );

increaseProd.addEventListener( 'click', function () {
    quantityVal.innerHTML = quantity + 1;
    quantity++;
} )

reduceProd.addEventListener( 'click', function () {
    if ( quantity !== 1 ) {
        quantityVal.innerHTML = quantity - 1;
        quantity--;
    }

} )