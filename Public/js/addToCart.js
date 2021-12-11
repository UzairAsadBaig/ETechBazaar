"use strict";

import { cartBillCalculator } from "./cartBillCalc";

export const goToCart = function(
  id,
  price,
  name,
  imgSrc,
  category,
  color,
  model,
  qn,
  condition
) {
  category = category.split(" ").join("_");
  let cartVal = `<div class="row cart-detail" data-price=${price} data-id=${id} data-category=${category} data-color=${color} data-name=${name} data-model=${model} data-condition=${condition}>
       <div class="col-lg-4 col-sm-4 col-4 cart-detail-img"><img src=${imgSrc} /></div>
       <div class="col-lg-8 col-sm-8 col-8 cart-detail-product">
        <p>${name}</p><span class="price">Rs.<span class="prod_price">${price}</span></span><br /><a type="button" class="cart_incdec dec"> - </a><span class="count">Quantity: <span class="quantity">${("0"+qn).slice( -2 )}</span></span><a type="button" class="cart_incdec inc"> + </a>
       </div>
    </div>`;

  const cartProds = document.querySelector(".all_products");

  if (cartProds.querySelector(`[data-id="${id}"]`)) {
    const quant = Number(
      cartProds.querySelector(`[data-id="${id}"]`).querySelector(".quantity")
        .textContent
    );
    cartProds
      .querySelector(`[data-id="${id}"]`)
      .querySelector(".quantity").textContent = ("0" + (quant + qn)).slice(-2);

    let p = Number(
      new DOMParser()
        .parseFromString(localStorage.getItem(id + "_product"), "text/html")
        .body.querySelector(".quantity").textContent
    );
    let newQ = p + qn;

    cartVal = `<div class="row cart-detail" data-price=${price} data-id=${id} data-category=${category} data-color=${color} data-name=${name} data-model=${model} data-condition=${condition}>
       <div class="col-lg-4 col-sm-4 col-4 cart-detail-img"><img src=${imgSrc} /></div>
       <div class="col-lg-8 col-sm-8 col-8 cart-detail-product">
        <p>${name}</p><span class="price">Rs.<span class="prod_price">${price}</span></span><br /><a type="button" class="cart_incdec dec"> - </a><span class="count">Quantity: <span class="quantity">${(
      "0" + newQ
    ).slice(-2)}</span></span><a type="button" class="cart_incdec inc"> + </a>
       </div>
    </div>`;
    localStorage.setItem(id + "_product", cartVal);
  } else {
    cartProds.insertAdjacentHTML("afterbegin", cartVal);
    localStorage.setItem(id + "_product", cartVal);
  }
};
const body = document.querySelector("body");

export const loadFromLocalStorage = function() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes("_product")) {
      let newcartVal = localStorage.getItem(key);
      document
        .querySelector(".all_products")
        .insertAdjacentHTML("afterbegin", newcartVal);
    }
  }
};

export const ManageAddToCart = function() {
  body.addEventListener("click", function(e) {
    if (e.target.classList.contains("add_to_cart")) {
      let name, price, quantity, id, imgSrc;
      e.preventDefault();
      const card = e.target.closest(".card");

      id = card.dataset.id;
      let category = card.dataset.category;
      let color = card.dataset.color;
      let model = card.dataset.model;
      let condition = card.dataset.condition;
      name = card.querySelector(".card_item_name").textContent;
      price = card.querySelector(".card_price").textContent.split(".")[1];
      imgSrc = card.querySelector("img").getAttribute("src");

      goToCart(id, price, name, imgSrc, category, color, model, 1, condition);

      cartBillCalculator();
    } else if (e.target.classList.contains("add_to_card")) {
      let name, price, quantity, id, imgSrc;
      const card = e.target.closest(".product_info_box");

      id = card.dataset.id;
      let category = card.dataset.category;
      let color = card.dataset.color;
      let model = card.dataset.model;
      let condition = card.dataset.condition;
      name = card.querySelector(".product_heading").textContent;
      price = card.querySelector(".product_price").textContent.split(".")[1];
      imgSrc = document.querySelector(".product_img").getAttribute("src");
      let qn = Number(document.querySelector(".quantity_val").textContent);

      goToCart(id, price, name, imgSrc, category, color, model, qn, condition);

      cartBillCalculator();
    }
  });
};
