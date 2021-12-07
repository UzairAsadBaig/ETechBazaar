'use strict';

export const cartBillCalculator = function () {
  const totalPrice = document.querySelector( '.total_price' );
  const cartBadge=document.querySelectorAll( '.cart_badge' );
  const cartProducts=document.querySelectorAll( '.cart-detail' );
  let price, quantity,totalBill=0.0,noOfprod=0;
  cartProducts.forEach(cp => {
    
    price=parseFloat(cp.querySelector( ".prod_price" ).textContent);
    quantity=Number( cp.querySelector( ".quantity" ).textContent );
    totalBill+=( price*quantity );
    noOfprod+=quantity;
    
  } );

  totalPrice.textContent=totalBill.toFixed(1);
  cartBadge[ 0 ].textContent=noOfprod;
  cartBadge[ 1 ].textContent=noOfprod;
  

  

} 