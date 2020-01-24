/**
 * Crea sul document un orologio funzionante
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
 */

function clock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  setInterval(function clock(){
    document.body.innerHTML = hour + ":" + minute + ":" + second;
  }, 1000);
}


//TODO: non mi appare niente, dove sto sbagliando? Ho aggiunto setInterval e i millesecondi come mi hai scritto nel todo precedente
