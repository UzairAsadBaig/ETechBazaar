"use strict";

//-----------------------------------------------DOM Elements
const buttons = document.querySelector(".buttons");
const adminBody = document.querySelectorAll(".tabbed-body");


export const ManageAdminTabedMenu=function () {

  //Tabbed Containers
  if ( buttons ) {
    buttons.addEventListener( "click", function ( event ) {
      event.preventDefault();
      const btn=event.target;
      if ( btn.classList.contains( "btns" ) ) {
        Array.from( btn.parentElement.children ).forEach( ( element ) =>
          element.classList.remove( "activeBtn" )
        );
        btn.classList.add( "activeBtn" );
        adminBody.forEach( ( i ) => i.classList.remove( "activeTab" ) );
        document
          .querySelector( `.tab${btn.getAttribute( "num" )}` )
          .classList.add( "activeTab" );
      }
    } );

  }
  
}

