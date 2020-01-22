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

document.body.addEventListener("click", function() {
  document.body.style.backgroundColor = color[parseInt(Math.random * 10)];
});

/**
 * TODO: color è un array in questo caso, e quindi se vuoi inserire "color" come sfondo devi metter color[0] (un numero a scelta, tra 0 e 7)
 * TODO: siccome però deve essere uno sfondo casuale devi inserire color[parseInt(Math.random * 10)]
 * TODO: mi rispieghi questi due passaggi
 */

/**
 * TODO: l'allacciamento all'evento si fa al document quindi non bisogna scrivere document.body ma solo document.addEventListener (per quello ti ho detto di fare di nuovo il pull)
 * TODO: Math.random è una funzione e quindi si scrive così Math.random() e non Math.random
 */
