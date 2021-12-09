'use strict';
const $c5a2f6f6c926e271$export$ed1e85c4022b4965 = function() {
    const totalPrice = document.querySelector('.total_price');
    const cartBadge = document.querySelectorAll('.cart_badge');
    const cartProducts = document.querySelectorAll('.cart-detail');
    let price, quantity, totalBill = 0, noOfprod = 0;
    cartProducts.forEach((cp)=>{
        price = parseFloat(cp.querySelector(".prod_price").textContent);
        quantity = Number(cp.querySelector(".quantity").textContent);
        totalBill += price * quantity;
        noOfprod += quantity;
    });
    totalPrice.textContent = totalBill.toFixed(1);
    cartBadge[0].textContent = noOfprod;
    cartBadge[1].textContent = noOfprod;
};


'use strict';
const $dd050f2a708f92b1$export$4fd4be8835a439d2 = function(id, price, name, imgSrc, category, color, model, qn = 1) {
    category = category.split(' ').join('_');
    let cartVal = `<div class="row cart-detail" data-price=${price} data-id=${id} data-category=${category} data-color=${color} data-name=${name} data-model=${model}>
       <div class="col-lg-4 col-sm-4 col-4 cart-detail-img"><img src=${imgSrc} /></div>
       <div class="col-lg-8 col-sm-8 col-8 cart-detail-product">
        <p>${name}</p><span class="price">Rs.<span class="prod_price">${price}</span></span><br /><a type="button" class="cart_incdec dec"> - </a><span class="count">Quantity: <span class="quantity">01</span></span><a type="button" class="cart_incdec inc"> + </a>
       </div>
    </div>`;
    const cartProds = document.querySelector('.all_products');
    if (cartProds.querySelector(`[data-id="${id}"]`)) {
        const quant = Number(cartProds.querySelector(`[data-id="${id}"]`).querySelector('.quantity').textContent);
        cartProds.querySelector(`[data-id="${id}"]`).querySelector('.quantity').textContent = ('0' + (quant + qn)).slice(-2);
        let p = Number(new DOMParser().parseFromString(localStorage.getItem(id + "_product"), 'text/html').body.querySelector('.quantity').textContent);
        let newQ = p + qn;
        cartVal = `<div class="row cart-detail" data-price=${price} data-id=${id} data-category=${category} data-color=${color} data-name=${name} data-model=${model}>
       <div class="col-lg-4 col-sm-4 col-4 cart-detail-img"><img src=${imgSrc} /></div>
       <div class="col-lg-8 col-sm-8 col-8 cart-detail-product">
        <p>${name}</p><span class="price">Rs.<span class="prod_price">${price}</span></span><br /><a type="button" class="cart_incdec dec"> - </a><span class="count">Quantity: <span class="quantity">${('0' + newQ).slice(-2)}</span></span><a type="button" class="cart_incdec inc"> + </a>
       </div>
    </div>`;
        localStorage.setItem(id + "_product", cartVal);
    } else {
        cartProds.insertAdjacentHTML('afterbegin', cartVal);
        localStorage.setItem(id + "_product", cartVal);
    }
};
const $dd050f2a708f92b1$var$body = document.querySelector('body');
const $dd050f2a708f92b1$export$e68c847c0bceb7d5 = function() {
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.includes("_product")) {
            // console.log( localStorage.getItem( key ) );
            let newcartVal = localStorage.getItem(key);
            document.querySelector('.all_products').insertAdjacentHTML('afterbegin', newcartVal);
        }
    }
};
const $dd050f2a708f92b1$export$90355ad74bbdd792 = function() {
    $dd050f2a708f92b1$var$body.addEventListener('click', function(e) {
        if (e.target.classList.contains('add_to_cart')) {
            let name, price, quantity, id, imgSrc;
            e.preventDefault();
            const card = e.target.closest('.card');
            id = card.dataset.id;
            let category = card.dataset.category;
            let color = card.dataset.color;
            let model = card.dataset.model;
            name = card.querySelector('.card_item_name').textContent;
            price = card.querySelector('.card_price').textContent.split('.')[1];
            imgSrc = card.querySelector('img').getAttribute('src');
            $dd050f2a708f92b1$export$4fd4be8835a439d2(id, price, name, imgSrc, category, color, model);
            console.log("if ", id, price, name, imgSrc, category, color, model);
            $c5a2f6f6c926e271$export$ed1e85c4022b4965();
        } else if (e.target.classList.contains("add_to_card")) {
            let name, price, quantity, id, imgSrc;
            const card = e.target.closest('.product_info_box');
            console.log(card);
            id = card.dataset.id;
            let category = card.dataset.category;
            let color = card.dataset.color;
            let model = card.dataset.model;
            name = card.querySelector('.product_heading').textContent;
            price = card.querySelector('.product_price').textContent.split('.')[1];
            imgSrc = document.querySelector('.product_img').getAttribute('src');
            let qn = Number(document.querySelector('.quantity_val').textContent);
            console.log(qn);
            $dd050f2a708f92b1$export$4fd4be8835a439d2(id, price, name, imgSrc, category, color, model, qn);
            console.log("elif ", id, price, name, imgSrc, category, color, model, qn);
            $c5a2f6f6c926e271$export$ed1e85c4022b4965();
        }
    });
};



"use strict";
//-----------------------------------------------DOM Elements
const $c1d64eae7b370874$var$buttons = document.querySelector(".buttons");
const $c1d64eae7b370874$var$adminBody = document.querySelectorAll(".tabbed-body");
const $c1d64eae7b370874$var$adminSearchUBtn = document.querySelector(".admin-search-update-button");
const $c1d64eae7b370874$var$adminSearchUInp = document.querySelector(".admin-search-update-input");
const $c1d64eae7b370874$var$adminSearchDBtn = document.querySelector(".admin-search-delete-button");
const $c1d64eae7b370874$var$adminSearchDInp = document.querySelector(".admin-search-delete-input");
const $c1d64eae7b370874$var$productNameU = document.querySelector("#product-name-u");
const $c1d64eae7b370874$var$productCategoryU = document.querySelector("#product-category-u");
const $c1d64eae7b370874$var$productModelU = document.querySelector("#product-model-u");
const $c1d64eae7b370874$var$productBrandU = document.querySelector("#product-brand-u");
const $c1d64eae7b370874$var$productColorU = document.querySelector("#product-color-u");
const $c1d64eae7b370874$var$productPriceU = document.querySelector("#product-price-u");
const $c1d64eae7b370874$var$productInstockU = document.querySelector("#instock-u");
const $c1d64eae7b370874$var$productUsedU = document.querySelector("#used-u");
const $c1d64eae7b370874$var$productDescriptionU = document.querySelector("#product-description-u");
// const productImageU = document.querySelector("#upload-image-u");
const $c1d64eae7b370874$var$searchNfill = async function() {
    try {
        const res = await axios({
            method: "GET",
            url: `/api/v1/product/${$c1d64eae7b370874$var$adminSearchUInp.value}`
        });
        if (res.data.status == "success") {
            const product = res.data.product;
            $c1d64eae7b370874$var$productNameU.value = product.name;
            $c1d64eae7b370874$var$productCategoryU.value = product.category;
            $c1d64eae7b370874$var$productModelU.value = product.model;
            $c1d64eae7b370874$var$productBrandU.value = product.brand;
            $c1d64eae7b370874$var$productColorU.value = product.color;
            $c1d64eae7b370874$var$productPriceU.value = product.price;
            $c1d64eae7b370874$var$productInstockU.checked = product.instock;
            $c1d64eae7b370874$var$productUsedU.checked = product.condition == "new" ? false : true;
            $c1d64eae7b370874$var$productDescriptionU.value = product.description;
        // console.log(productImageU.files);
        } else alert("Wrong ID, please try again!");
    } catch (e) {
        alert("Wrong ID, please try again!");
        $c1d64eae7b370874$var$adminSearchUInp.value = "";
    }
};
const $c1d64eae7b370874$var$searchNdelete = async function() {
    try {
        const res = await axios({
            method: "DELETE",
            url: `/api/v1/product/${$c1d64eae7b370874$var$adminSearchDInp.value}`
        });
        if (res.status == "204") {
            alert("Successfully deleted");
            $c1d64eae7b370874$var$adminSearchDInp.value = "";
        } else {
            alert("Wrong ID, please try again!");
            $c1d64eae7b370874$var$adminSearchDInp.value = "";
        }
    } catch (e) {
        alert("Wrong ID, please try again!");
        $c1d64eae7b370874$var$adminSearchDInp.value = "";
    }
};
const $c1d64eae7b370874$export$d260071aaae01165 = function() {
    //Tabbed Containers
    if ($c1d64eae7b370874$var$buttons) $c1d64eae7b370874$var$buttons.addEventListener("click", function(event) {
        event.preventDefault();
        const btn = event.target;
        if (btn.classList.contains("btns")) {
            Array.from(btn.parentElement.children).forEach((element)=>element.classList.remove("activeBtn")
            );
            btn.classList.add("activeBtn");
            $c1d64eae7b370874$var$adminBody.forEach((i)=>i.classList.remove("activeTab")
            );
            document.querySelector(`.tab${btn.getAttribute("num")}`).classList.add("activeTab");
        }
    });
    //Update
    if ($c1d64eae7b370874$var$adminSearchUBtn) {
        $c1d64eae7b370874$var$adminSearchUBtn.addEventListener("click", function(e) {
            e.preventDefault();
            $c1d64eae7b370874$var$searchNfill();
        });
        $c1d64eae7b370874$var$adminSearchUBtn.addEventListener("keypress", function(e) {
            e.preventDefault();
            if (e.key == "Enter") $c1d64eae7b370874$var$searchNfill();
        });
    }
    //Delete
    if ($c1d64eae7b370874$var$adminSearchDBtn) {
        $c1d64eae7b370874$var$adminSearchDBtn.addEventListener("click", function(e) {
            e.preventDefault();
            if (confirm("Do you really want to delete")) $c1d64eae7b370874$var$searchNdelete();
        });
        $c1d64eae7b370874$var$adminSearchDBtn.addEventListener("keypress", function(e) {
            e.preventDefault();
            if (e.key == "Enter") {
                if (confirm("Do you really want to delete")) $c1d64eae7b370874$var$searchNdelete();
            }
        });
    }
};


'use strict';
const $ff8827465dcd95b3$export$76802abe1e130b06 = function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 25) //Here 200 may be not be exactly 200px
        {
            if ($(window).width() < 576) $(".fixedelement").hide();
        } else //Here 200 may be not be exactly 200px
        if ($(window).width() < 576) $(".fixedelement").show();
    });
};


const $0934852f44418050$var$usernameInp = document.querySelector(".username_input");
const $0934852f44418050$var$passwordInp = document.querySelector(".password_input");
const $0934852f44418050$var$loginBtn = document.querySelector(".login_btn");
const $0934852f44418050$var$login = async (username, password)=>{
    try {
        const res = await axios({
            method: "POST",
            url: "/api/v1/user/login",
            data: {
                username: username,
                password: password
            }
        });
        if (res.data.status === "success") {
            alert("Logged In Successfully!");
            window.setTimeout(()=>{
                location.assign("/admin/dashboard");
            }, 500);
        }
    } catch (err) {
        alert(err.response.data.message);
    }
};
const $0934852f44418050$export$77164d99f6e997a1 = ()=>{
    if ($0934852f44418050$var$loginBtn) {
        $0934852f44418050$var$loginBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            $0934852f44418050$var$login($0934852f44418050$var$usernameInp.value, $0934852f44418050$var$passwordInp.value);
        });
        $0934852f44418050$var$passwordInp.addEventListener("keypress", (e)=>{
            if (e.key === "Enter") {
                e.preventDefault();
                $0934852f44418050$var$login($0934852f44418050$var$usernameInp.value, $0934852f44418050$var$passwordInp.value);
            }
        });
    }
};


'use strict';
const $fe408d53a7288e3e$var$MapSection = document.querySelector("#map");
const $fe408d53a7288e3e$export$e33a4f6b06312f34 = function() {
    if ($fe408d53a7288e3e$var$MapSection) {
        mapboxgl.accessToken = 'pk.eyJ1IjoibXV6YW1pbDA3IiwiYSI6ImNrdWgwemg1YTByZTIyb3J1bTkwZ2xhNmoifQ.s6wy8ILJvNh7YMhG0toiDA';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/muzamil07/ckuhyqgah4lm717pmp4ek9es2',
            center: [
                74.3818244,
                31.5793448
            ],
            zoom: 15,
            scrollZoom: false
        });
        const el = document.createElement('div');
        el.className = 'marker';
        // Add marker to map
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom' // bottom of image will point to exact gps location
        }).setLngLat([
            74.3818244,
            31.5793448
        ]).addTo(map);
        new mapboxgl.Popup({
            offset: 30,
            focusAfterOpen: false
        }).setLngLat([
            74.3818244,
            31.5793448
        ]).setHTML(`<p>E-Tech Bazaar</p>`).addTo(map);
        map.on('click', function() {
            location.assign('https://www.google.com/maps/place/CCTV+Cameras+Sale+Point/@31.5793448,74.3818244,17z/data=!4m5!3m4!1s0x39191bac2a9da4bf:0xe67b4d53bd68864d!8m2!3d31.5784699!4d74.3818157');
        });
    }
};


const $548257a41dc4b3aa$export$77e42a852d45f198 = function() {
    $(".owl-carousel").owlCarousel({
        stagePadding: 0,
        loop: true,
        margin: 12,
        autoplay: 300,
        //autoplayTimeout: 3500,
        smartSpeed: 1800,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.3
            },
            289: {
                items: 2.3
            },
            376: {
                items: 2.4
            },
            400: {
                items: 2.5
            },
            500: {
                items: 2
            },
            600: {
                items: 2.5
            },
            800: {
                items: 3
            },
            900: {
                items: 2.6
            },
            1000: {
                items: 3.3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });
};


"use strict";
//-----------------------------------------------DOM Elements
const $39d4c3131b6ecffc$var$reduceProd = document.querySelector(".product_reduce");
const $39d4c3131b6ecffc$var$increaseProd = document.querySelector(".product_increase");
const $39d4c3131b6ecffc$var$quantityVal = document.querySelector(".quantity_val");
const $39d4c3131b6ecffc$export$fe860b7907da3595 = function() {
    let quantity;
    if ($39d4c3131b6ecffc$var$quantityVal) quantity = Number($39d4c3131b6ecffc$var$quantityVal.innerHTML);
    if ($39d4c3131b6ecffc$var$increaseProd) $39d4c3131b6ecffc$var$increaseProd.addEventListener("click", function() {
        $39d4c3131b6ecffc$var$quantityVal.innerHTML = quantity + 1;
        quantity++;
    });
    if ($39d4c3131b6ecffc$var$reduceProd) $39d4c3131b6ecffc$var$reduceProd.addEventListener("click", function() {
        if (quantity !== 1) {
            $39d4c3131b6ecffc$var$quantityVal.innerHTML = quantity - 1;
            quantity--;
        }
    });
};


const $4e8e46b799e1b079$var$searchBtn = document.querySelector(".search_btn");
const $4e8e46b799e1b079$var$searchInp = document.querySelector(".search_input");
const $4e8e46b799e1b079$var$hitUrl = async (e)=>{
    e.preventDefault();
    location.assign(`/search/${$4e8e46b799e1b079$var$searchInp.value}`);
};
const $4e8e46b799e1b079$export$d76128d007d19019 = ()=>{
    $4e8e46b799e1b079$var$searchBtn.addEventListener("click", $4e8e46b799e1b079$var$hitUrl);
    $4e8e46b799e1b079$var$searchInp.addEventListener("keypress", function(e) {
        if (e.key == "Enter") $4e8e46b799e1b079$var$hitUrl(e);
    });
};




"use strict";
const $ccfd3742a44b4cad$export$5ab6ca14213248e2 = function() {
    const allProd = document.querySelector(".all_products");
    allProd.addEventListener('click', function(e) {
        e.stopPropagation();
        // console.log( e.target );
        if (e.target.classList.contains('cart_incdec')) {
            const quant = e.target.closest('.cart-detail').querySelector('.quantity');
            // console.log( quant );
            if (e.target.classList.contains('inc')) {
                // console.log( "inc" );
                quant.textContent = ('0' + (Number(quant.textContent) + 1)).slice(-2);
                $c5a2f6f6c926e271$export$ed1e85c4022b4965();
                localStorage.setItem(quant.closest('.cart-detail').dataset.id + "_product", quant.closest('.cart-detail').outerHTML);
            }
            if (e.target.classList.contains('dec')) // console.log( "dec" );
            {
                if (Number(quant.textContent) !== 0) {
                    quant.textContent = ('0' + (Number(quant.textContent) - 1)).slice(-2);
                    localStorage.setItem(quant.closest('.cart-detail').dataset.id + "_product", quant.closest('.cart-detail').outerHTML);
                    $c5a2f6f6c926e271$export$ed1e85c4022b4965();
                    if (Number(quant.textContent) === 0) {
                        console.log("removing");
                        localStorage.removeItem(quant.closest('.cart-detail').dataset.id + "_product");
                        quant.closest('.cart-detail').remove();
                        $c5a2f6f6c926e271$export$ed1e85c4022b4965();
                        $dd050f2a708f92b1$export$e68c847c0bceb7d5();
                    }
                }
            }
        }
    });
};


const $aa8862ee2d4f0269$var$orderForm = document.querySelector('.submit_order_form');
const $aa8862ee2d4f0269$var$emptyCart = function() {
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.includes("_product")) localStorage.removeItem(key);
    }
};
const $aa8862ee2d4f0269$var$SubmitOrderForm = async function(name, phone, address, totalPrice, products) {
    try {
        const res = await axios({
            method: "POST",
            url: '/api/v1/order',
            data: {
                name: name,
                phone: phone,
                address: address,
                totalPrice: totalPrice,
                products: products
            }
        });
        if (res.data.status === "success") {
            $aa8862ee2d4f0269$var$emptyCart();
            location.assign('/');
        }
    } catch (error) {
    // alert(error)
    }
};
const $aa8862ee2d4f0269$export$863cb804d4b72252 = ()=>{
    if ($aa8862ee2d4f0269$var$orderForm) $aa8862ee2d4f0269$var$orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#user-name').value;
        const phone = document.querySelector('#user-phoneNo').value;
        const address = document.querySelector('#user-address').value;
        const cartDrop = document.querySelector('.cart_drop');
        const Prods = Array.from(cartDrop.querySelectorAll('.cart-detail'));
        const totalPrice = Number(cartDrop.querySelector('.total_price').textContent);
        console.log(Prods);
        const allProds = Prods.map((el)=>{
            return {
                name: el.dataset.name,
                price: el.dataset.price,
                model: el.dataset.model,
                category: el.dataset.category.split('_').join(' '),
                color: el.dataset.color,
                quantity: Number(el.querySelector('.quantity').textContent)
            };
        });
        // console.log( allProds );
        $aa8862ee2d4f0269$var$SubmitOrderForm(name, phone, address, totalPrice, allProds);
        console.log(name, phone, address, totalPrice, allProds);
    });
};


const $70b22ab0475c8013$var$createProd = async function(formData, type, id) {
    try {
        const method = type == "c" ? "POST" : "PATCH";
        const res = await axios({
            method: method,
            url: id == "" ? `/api/v1/product` : `/api/v1/product/${id}`,
            data: formData
        });
        if (res.data.status === `success`) alert(id == "" ? `Data Uploaded Successfully!` : `Data Updated Successfully!`);
    } catch (error) {
        alert(`400 Error, please try again`);
    }
};
const $70b22ab0475c8013$var$createProductForm = document.querySelector(`.create_product_form`);
const $70b22ab0475c8013$var$updateProductForm = document.querySelector(`.update_product_form`);
const $70b22ab0475c8013$var$id = document.querySelector(`.admin-search-update-input`);
const $70b22ab0475c8013$export$ddba1df951bccd8b = function(type) {
    const formType = type == "c" ? $70b22ab0475c8013$var$createProductForm : $70b22ab0475c8013$var$updateProductForm;
    if (formType) formType.addEventListener(`submit`, function(e) {
        e.preventDefault();
        const form = new FormData();
        const select = formType.querySelector(`#product-category-${type}`);
        const condition = formType.querySelector(`#used-${type}`).checked ? `used` : `new`;
        form.append(`name`, formType.querySelector(`#product-name-${type}`).value);
        form.append(`category`, select.options[select.selectedIndex].value);
        form.append(`model`, formType.querySelector(`#product-model-${type}`).value);
        form.append(`brand`, formType.querySelector(`#product-brand-${type}`).value);
        form.append(`color`, formType.querySelector(`#product-color-${type}`).value);
        form.append(`price`, Number(formType.querySelector(`#product-price-${type}`).value));
        form.append(`instock`, formType.querySelector(`#instock-${type}`).checked);
        form.append(`condition`, condition);
        form.append(`description`, formType.querySelector(`#product-description-${type}`).value);
        if (formType.querySelector(`#upload-image-${type}`).files[0]) form.append(`images`, formType.querySelector(`#upload-image-${type}`).files[0]);
        $70b22ab0475c8013$var$createProd(form, type, $70b22ab0475c8013$var$id.value);
    });
};


"use strict";
window.addEventListener("load", function() {
    $dd050f2a708f92b1$export$e68c847c0bceb7d5();
    $c5a2f6f6c926e271$export$ed1e85c4022b4965();
});
$ff8827465dcd95b3$export$76802abe1e130b06();
$39d4c3131b6ecffc$export$fe860b7907da3595();
$548257a41dc4b3aa$export$77e42a852d45f198();
$fe408d53a7288e3e$export$e33a4f6b06312f34();
$c1d64eae7b370874$export$d260071aaae01165();
$4e8e46b799e1b079$export$d76128d007d19019();
$0934852f44418050$export$77164d99f6e997a1();
$c5a2f6f6c926e271$export$ed1e85c4022b4965();
$dd050f2a708f92b1$export$90355ad74bbdd792();
$ccfd3742a44b4cad$export$5ab6ca14213248e2();
$aa8862ee2d4f0269$export$863cb804d4b72252();
$70b22ab0475c8013$export$ddba1df951bccd8b("c");
$70b22ab0475c8013$export$ddba1df951bccd8b("u");


//# sourceMappingURL=bundle.js.map
