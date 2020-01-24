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
/**
 * TODO: Hai creato la funzione ma non l'hai richiamata, in pratica gli hai insegnato al computer come si fa, ma non gli hai mai detto falla!
 * TODO: In questo caso questa funzione deve essere eseguita ogni secondo, quindi dovrai creare un setInterval con latenza di 1000 millesecondi che esegue time()
 */
