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
}
setInterval(function() {
  clock()
}, 1000);
