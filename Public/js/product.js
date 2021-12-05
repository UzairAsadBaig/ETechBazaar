"use strict";



//-----------------------------------------------DOM Elements
const reduceProd=document.querySelector( ".product_reduce" );
const increaseProd=document.querySelector( ".product_increase" );
const quantityVal=document.querySelector( ".quantity_val" );





// ********* Prduct quantity calculate

export const prodQuant=function () {

  let quantity;
  if ( quantityVal ) {

    quantity=Number( quantityVal.innerHTML );
  }


  if ( increaseProd ) {
    increaseProd.addEventListener( "click", function () {
      quantityVal.innerHTML=quantity+1;
      quantity++;
    } );
  }
  
  if ( reduceProd ) {
    reduceProd.addEventListener( "click", function () {
      if ( quantity!==1 ) {
        quantityVal.innerHTML=quantity-1;
        quantity--;
      }
    } );
  }
  
  
}