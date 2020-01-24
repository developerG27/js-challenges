/**
 * Crea sul document un orologio funzionante
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
 */

function clock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  document.body.innerHTML = hour + ":" + minute + ":" + second;

  /*setInterval(function clock() {
    document.body.innerHTML = hour + ":" + minute + ":" + second;
  }, 1000);*/
}

/*
parametro1: una funzione anonima
parametro2: i millesecondi

setInterval(parametro1
    Qui si richiama la tua funzione clock()
  , parametro2)
*/

//TODO: non mi appare niente, dove sto sbagliando? Ho aggiunto setInterval e i millesecondi come mi hai scritto nel todo precedente

/**
 * TODO: Quando crei una funzione poi la devi richiamare, è come se avessi insegnato al pc una nuova cosa, ma non gli dici come farla
 * TODO: Il setInterval va fuori della funzione, perchè te vuoi richiamare quella funzione ogni 1000 millesecondi
 */
