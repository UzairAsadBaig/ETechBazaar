"use strict";

//-----------------------------------------------DOM Elements
const reduceProd = document.querySelector(".product_reduce");
const increaseProd = document.querySelector(".product_increase");
const quantityVal = document.querySelector(".quantity_val");
const buttons = document.querySelector(".buttons");
const adminBody = document.querySelectorAll(".tabbed-body");

//Tabbed Containers
buttons.addEventListener("click", function (event) {
  event.preventDefault();
  const btn = event.target;
  if (btn.classList.contains("btns")) {
    Array.from(btn.parentElement.children).forEach((element) =>
      element.classList.remove("activeBtn")
    );
    btn.classList.add("activeBtn");
    adminBody.forEach((i) => i.classList.remove("activeTab"));
    document
      .querySelector(`.tab${btn.getAttribute("num")}`)
      .classList.add("activeTab");
    console.log(adminBody);
  }
});

//Order products quntity
let quantity = Number(quantityVal.innerHTML);

increaseProd.addEventListener("click", function () {
  quantityVal.innerHTML = quantity + 1;
  quantity++;
});

reduceProd.addEventListener("click", function () {
  if (quantity !== 1) {
    quantityVal.innerHTML = quantity - 1;
    quantity--;
  }
});
