/**
 * Ad ogni click dell'utente viene cambiato lo sfondo:
 * - Creare un array con diversi colori
 * - Salvare il documento in una variabile
 * - Allacciare l'evento click al documento
 * - Ad ogni click si cambia lo stile del background
 * - Inserisci come valore della proprietà l'array che viene richiamato in maniera Random
 *  */

var color = [
  "blue",
  "red",
  "green",
  "pink",
  "red",
  "orange",
  "yellow",
  "brown"
];

document.addEventListener("click", function() {
  document.body.style.backgroundColor = color[parseInt(Math.random() * 10)];
});