"use strict";

//-----------------------------------------------DOM Elements
const buttons = document.querySelector(".buttons");
const adminBody = document.querySelectorAll(".tabbed-body");
const adminSearchUBtn = document.querySelector(".admin-search-update-button");
const adminSearchUInp = document.querySelector(".admin-search-update-input");
const adminSearchDBtn = document.querySelector(".admin-search-delete-button");
const adminSearchDInp = document.querySelector(".admin-search-delete-input");

const productNameU = document.querySelector("#product-name-u");
const productCategoryU = document.querySelector("#product-category-u");
const productModelU = document.querySelector("#product-model-u");
const productBrandU = document.querySelector("#product-brand-u");
const productColorU = document.querySelector("#product-color-u");
const productPriceU = document.querySelector("#product-price-u");
const productInstockU = document.querySelector("#instock-u");
const productUsedU = document.querySelector("#used-u");
const productDescriptionU = document.querySelector("#product-description-u");
// const productImageU = document.querySelector("#upload-image-u");

const searchNfill = async function() {
    try {
        const res = await axios({
            method: "GET",
            url: `/api/v1/product/${adminSearchUInp.value}`,
        });

        if (res.data.status == "success") {
            const product = res.data.product;
            productNameU.value = product.name;
            productCategoryU.value = product.category;
            productModelU.value = product.model;
            productBrandU.value = product.brand;
            productColorU.value = product.color;
            productPriceU.value = product.price;
            productInstockU.checked = product.instock;
            productUsedU.checked = product.condition == "new" ? false : true;
            productDescriptionU.value = product.description;

        } else {
            alert("Wrong ID, please try again!");
        }
    } catch (e) {
        alert("Wrong ID, please try again!");
        adminSearchUInp.value = "";
    }
};

const searchNdelete = async function() {
    try {
        const res = await axios({
            method: "DELETE",
            url: `/api/v1/product/${adminSearchDInp.value}`,
        });
        if (res.status == "204") {
            alert("Successfully deleted");
            adminSearchDInp.value = "";
        } else {
            alert("Wrong ID, please try again!");
            adminSearchDInp.value = "";
        }
    } catch (e) {
        alert("Wrong ID, please try again!");
        adminSearchDInp.value = "";
    }
};

export const ManageAdminTabedMenu = function() {
    //Tabbed Containers
    if (buttons) {
        buttons.addEventListener("click", function(event) {
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
            }
        });
    }

    //Update
    if (adminSearchUBtn) {
        adminSearchUBtn.addEventListener("click", function(e) {
            e.preventDefault();
            searchNfill();
        });
        adminSearchUBtn.addEventListener("keypress", function(e) {
            e.preventDefault();
            if (e.key == "Enter") searchNfill();
        });
    }

    //Delete
    if (adminSearchDBtn) {
        adminSearchDBtn.addEventListener("click", function(e) {
            e.preventDefault();
            if (confirm("Do you really want to delete")) searchNdelete();
        });
        adminSearchDBtn.addEventListener("keypress", function(e) {
            e.preventDefault();
            if (e.key == "Enter")
                if (confirm("Do you really want to delete")) searchNdelete();
        });
    }
};