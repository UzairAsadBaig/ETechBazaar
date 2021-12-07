"use strict";

import { loadFromLocalStorage, ManageAddToCart } from './addToCart';
import { cartBillCalculator } from './cartBillCalc';
import { ManageAdminTabedMenu } from "./admin";
import { hideNavAuto } from "./hideNav";
import { loginEvent } from "./login";
import { setMap } from "./mapBox";
import { loadCarouselContent } from "./owlcarosuel";
import { prodQuant } from "./product";
import { search } from "./search";
import { cartProdQuant } from './cartProdQuant';
import { submitOrderEvent } from './submitOrder';
import { createProductByAdmin } from './creteProduct_Admin';


window.addEventListener( 'load', function () {

  loadFromLocalStorage();
  cartBillCalculator();
} )

hideNavAuto();

prodQuant();

loadCarouselContent();

setMap();

ManageAdminTabedMenu();

search();

loginEvent();

cartBillCalculator();

ManageAddToCart();


cartProdQuant();


submitOrderEvent();

createProductByAdmin();