/**
 * Crea uno script che dopo tre secondi dal caricamento dell'HTML fa un redirect a http:google.com
 * -https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
 */

setInterval(function() {
  window.location.replace("http://www.google.com");
}, 3000);