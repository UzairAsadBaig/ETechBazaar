
'use strict';

mapboxgl.accessToken='pk.eyJ1IjoibXV6YW1pbDA3IiwiYSI6ImNrdWgwemg1YTByZTIyb3J1bTkwZ2xhNmoifQ.s6wy8ILJvNh7YMhG0toiDA';


const map = new mapboxgl.Map( {
  container: 'map', // container ID
  style: 'mapbox://styles/muzamil07/ckuhyqgah4lm717pmp4ek9es2', // style URL
  center: [ 74.3818244, 31.5793448 ], // starting position
  zoom: 15,
  scrollZoom: false, // starting zoom
  // maxBounds: bounds // Set the map's geographical boundaries.
} );


const el=document.createElement( 'div' );
el.className='marker';

// Add marker to map
window.addEventListener( 'load', function () {
  
  new mapboxgl.Marker( {
    element: el,
    anchor: 'bottom' // bottom of image will point to exact gps location
  } ).setLngLat( [ 74.3818244, 31.5793448 ] )
    .addTo( map )
  
  
  // Add a Popup
  new mapboxgl.Popup( {
    offset: 30
  } ).setLngLat( [ 74.3818244, 31.5793448 ] ).setHTML( `<p>Security Lab</p>` ).addTo( map )
  
})


map.on( 'click', function () {
  location.assign( 'https://www.google.com/maps/place/CCTV+Cameras+Sale+Point/@31.5793448,74.3818244,17z/data=!4m5!3m4!1s0x39191bac2a9da4bf:0xe67b4d53bd68864d!8m2!3d31.5784699!4d74.3818157' );
} );