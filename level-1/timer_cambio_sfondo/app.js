/**
 * Cambia lo sfondo automaticamente del tuo browser ogni 3 secondi
 * - Creare un array con diversi colori
 * - Salvare il documento in una variabile
 * - creare un setInterval che ogni 3 secondi cambi lo sfondo
 * - Il colore dello sfondo viene scelto in maniera random sempre in base all'array
 */
var color = ["Red", "Orange", "Yellow", "Brown", "Blue"];

document.body.style.backgroundColor = color[parseInt(Math.random() * 10)];

setInterval(function() {
  document.body.style.backgroundColor = color[parseInt(Math.random() * 10)];
}, 3000);