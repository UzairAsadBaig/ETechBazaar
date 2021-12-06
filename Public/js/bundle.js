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
const $c1d64eae7b370874$var$searchNfill = async function() {
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
    } else alert("Wrong ID, please try again!");
};
const $c1d64eae7b370874$var$searchNdelete = async function() {
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
    if ($c1d64eae7b370874$var$adminSearchDBtn) {
        console.log($c1d64eae7b370874$var$adminSearchDBtn);
        $c1d64eae7b370874$var$adminSearchDBtn.addEventListener("click", function(e) {
            e.preventDefault();
            $c1d64eae7b370874$var$searchNdelete();
        });
        $c1d64eae7b370874$var$adminSearchDBtn.addEventListener("keypress", function(e) {
            e.preventDefault();
            if (e.key == "Enter") $c1d64eae7b370874$var$searchNdelete();
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
        console.log(err.response.data);
        alert(err.response.data.message);
    }
};
const $0934852f44418050$export$77164d99f6e997a1 = ()=>{
    if ($0934852f44418050$var$loginBtn) $0934852f44418050$var$loginBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        $0934852f44418050$var$login($0934852f44418050$var$usernameInp.value, $0934852f44418050$var$passwordInp.value);
    });
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
$ff8827465dcd95b3$export$76802abe1e130b06();
$39d4c3131b6ecffc$export$fe860b7907da3595();
$548257a41dc4b3aa$export$77e42a852d45f198();
$fe408d53a7288e3e$export$e33a4f6b06312f34();
$c1d64eae7b370874$export$d260071aaae01165();
$4e8e46b799e1b079$export$d76128d007d19019();
$0934852f44418050$export$77164d99f6e997a1();


//# sourceMappingURL=bundle.js.map
