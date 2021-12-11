const createProd = async function(formData, type, id) {
  try {
    const method = type == "c" ? "POST" : "PATCH";

    const res = await axios({
      method,
      url: id == "" ? `/api/v1/product` : `/api/v1/product/${id}`,
      data: formData,
    });

    if (res.data.status === `success`) {
      alert(
        id == "" ? `Data Uploaded Successfully!` : `Data Updated Successfully!`
      );
    }
  } catch (error) {
    alert(`400 Error, please try again`);
  }
};

const createProductForm = document.querySelector(`.create_product_form`);
const updateProductForm = document.querySelector(`.update_product_form`);
const id = document.querySelector(`.admin-search-update-input`);

export const createAndUploadProductByAdmin = function(type) {
  const formType = type == "c" ? createProductForm : updateProductForm;
  if (formType) {
    formType.addEventListener(`submit`, function(e) {
      e.preventDefault();

      const form = new FormData();

      const select = formType.querySelector(`#product-category-${type}`);
      const condition = formType.querySelector(`#used-${type}`).checked
        ? `used`
        : `new`;

      form.append(
        `name`,
        formType.querySelector(`#product-name-${type}`).value
      );
      form.append(`category`, select.options[select.selectedIndex].value);
      form.append(
        `model`,
        formType.querySelector(`#product-model-${type}`).value
      );
      form.append(
        `brand`,
        formType.querySelector(`#product-brand-${type}`).value
      );
      form.append(
        `color`,
        formType.querySelector(`#product-color-${type}`).value
      );
      form.append(
        `price`,
        Number(formType.querySelector(`#product-price-${type}`).value)
      );
      form.append(
        `instock`,
        formType.querySelector(`#instock-${type}`).checked
      );
      form.append(`condition`, condition);
      form.append(
        `description`,
        formType.querySelector(`#product-description-${type}`).value
      );
      if (formType.querySelector(`#upload-image-${type}`).files[0]) {
        form.append(
          `images`,
          formType.querySelector(`#upload-image-${type}`).files[0]
        );
      }


      select.options[ select.selectedIndex ].value=select.options[ 0 ].value;
      formType.querySelector( `#used-${type}` ).checked=formType.querySelector( `#instock-${type}` ).checked=false;

      formType.querySelector( `#product-name-${type}` ).value=formType.querySelector( `#product-model-${type}` ).value=formType.querySelector( `#product-brand-${type}` ).value=formType.querySelector( `#product-color-${type}` ).value=formType.querySelector( `#product-price-${type}` ).value=formType.querySelector( `#product-description-${type}` ).value="";

      formType.querySelector( `#upload-image-${type}` ).value="";

      createProd(form, type, id.value);
    });
  }
};
