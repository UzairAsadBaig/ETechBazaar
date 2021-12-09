"use strict";

import { loadFromLocalStorage } from "./addToCart";
import { cartBillCalculator } from "./cartBillCalc";



//-----------------------------------------------DOM Elements
export const cartProdQuant = function() {
    const allProd = document.querySelector(".all_products");

    allProd.addEventListener('click', function(e) {
        e.stopPropagation();

        if (e.target.classList.contains('cart_incdec')) {

            const quant = e.target.closest('.cart-detail').querySelector('.quantity');



            if (e.target.classList.contains('inc')) {

                quant.textContent = ('0' + (Number(quant.textContent) + 1)).slice(-2);
                cartBillCalculator();
                localStorage.setItem(quant.closest('.cart-detail').dataset.id + "_product", quant.closest('.cart-detail').outerHTML)

            }
            if (e.target.classList.contains('dec')) {


                if (Number(quant.textContent) !== 0) {

                    quant.textContent = ('0' + (Number(quant.textContent) - 1)).slice(-2);
                    localStorage.setItem(quant.closest('.cart-detail').dataset.id + "_product", quant.closest('.cart-detail').outerHTML)
                    cartBillCalculator();
                    if (Number(quant.textContent) === 0) {
                        localStorage.removeItem(quant.closest('.cart-detail').dataset.id + "_product");
                        quant.closest('.cart-detail').remove();
                        cartBillCalculator();
                        loadFromLocalStorage();
                    }




                }
            }

        }

    })

}