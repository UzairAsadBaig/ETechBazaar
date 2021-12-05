'use strict';

export const hideNavAuto=function () {
  $( window ).scroll( function () {
    if ( $( document ).scrollTop()>25 ) {
      //Here 200 may be not be exactly 200px
      if ( $( window ).width()<576 ) $( ".fixedelement" ).hide();
    } else {
      //Here 200 may be not be exactly 200px
      if ( $( window ).width()<576 ) $( ".fixedelement" ).show();
    }
  } );

  
}

