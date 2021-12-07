


const createProd=async function ( formData ) {
  
try {
  const res=await axios( {
    method: "POST",
    url: "/api/v1/product",
    data: formData,
    
  } )
  
  if ( res.data.status==="success" ) {
    alert( "Data Uploaded Successfully!" );
  }

} catch (error) {
  alert( "400 Error, please try again" );
}


}





const createProductForm=document.querySelector( '.create_product_form' );

export const createProductByAdmin=function(){
  if ( createProductForm ) {
    createProductForm.addEventListener( 'submit', function ( e ) {

      e.preventDefault();

      const form=new FormData();
      
      const select=createProductForm.querySelector( '#product-category-c' );
      const condition=createProductForm.querySelector( '#used-c' ).checked ? "used":"new";

      form.append( 'name', createProductForm.querySelector( '#product-name-c' ).value );
      form.append( 'category', select.options[ select.selectedIndex ].value );
      form.append( 'model', createProductForm.querySelector( '#product-model-c' ).value );
      form.append( 'brand', createProductForm.querySelector( '#product-brand-c' ).value );
      form.append( 'color', createProductForm.querySelector( '#product-color-c' ).value );
      form.append( 'price', Number(createProductForm.querySelector( '#product-price-c' ).value) );
      form.append( 'instock', createProductForm.querySelector( '#instcok-c' ).checked );
      form.append( 'condition',condition);
      form.append( 'description', createProductForm.querySelector( '#product-description' ).value );
      form.append( 'images', createProductForm.querySelector( '#upload-image' ).files[ 0 ] );
        
     createProd( form );


    } )
  }




}

