const orderForm = document.querySelector(".submit_order_form");

const emptyCart = function() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes("_product")) {
      localStorage.removeItem(key);
    }
  }
};
const SubmitOrderForm = async function(
  name,
  phone,
  address,
  totalPrice,
  products
) {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/order",
      data: {
        name,
        phone,
        address,
        totalPrice,
        products,
      },
    });

    if (res.data.status === "success") {
      emptyCart();
      location.assign("/");
    }
  } catch (error) {
    // alert(error)
  }
};

export const submitOrderEvent = () => {
  if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.querySelector("#user-name").value;
      const phone = document.querySelector("#user-phoneNo").value;
      const address = document.querySelector("#user-address").value;

      const cartDrop = document.querySelector(".cart_drop");
      const Prods = Array.from(cartDrop.querySelectorAll(".cart-detail"));
      const totalPrice = Number(
        cartDrop.querySelector(".total_price").textContent
      );
      const allProds = Prods.map((el) => {
        return {
          name: el.dataset.name,
          price: el.dataset.price,
          model: el.dataset.model,
          category: el.dataset.category.split("_").join(" "),
          color: el.dataset.color,
          condition: el.dataset.condition,
          quantity: Number(el.querySelector(".quantity").textContent),
        };
      });

      SubmitOrderForm(name, phone, address, totalPrice, allProds);
    });
  }
};
