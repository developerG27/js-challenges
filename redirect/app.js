/**
 * Crea uno script che dopo tre secondi dal caricamento dell'HTML fa un redirect a http:google.com
 * -https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
 */

setInterval(function() {
  window.location.replace("http://www.google.com");
}, 3000);

/**
 * TODO: Funziona ma non è il modo giusto per farlo, in quanto setInterval è "una funzione che viene ripetuta ad ogni intervallo di tempo, in questo caso 3000 millisecondi"
 * TODO: La funziona giusta è setTimeOut in quanto "esegue il codice una volta dopo i 3000 millisecondi"
 */
