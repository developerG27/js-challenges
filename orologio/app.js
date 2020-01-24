/**
 * Crea sul document un orologio funzionante
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
 */

function time() {
  var clock = new Date();
  var hour = clock.getHours();
  var minute = clock.getMinutes();
  var second = clock.getSeconds();
  document.body.innerHTML = hour + ":" + minute + ":" + second;
}

//TODO: fino a qui ho capito, poi non riesco a capire l'esempio, mi spieghi?