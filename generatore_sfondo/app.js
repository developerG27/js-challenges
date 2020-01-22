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
  document.querySelector("body").style.backgroundColor = color;
});

/* TODO: ho dichiarato la variabile
-inserito i colori nell'array
-aggiunto l'evento click e la funzione
-ho richiamato il body
-gli ho dato lo stile al background
-dove sto sbagliando? */

/**
 * TODO: Prima di tutto se vuoi andare a capo con i TODO devi fare così e non come hai fatto sopra.
 * TODO: color è un array in questo caso, e quindi se vuoi inserire "color" come sfondo devi metter color[0] (un numero a scelta, tra 0 e 7)
 * TODO: siccome però deve essere uno sfondo casuale devi inserire color[parseInt(Math.random * 10)]
 * TODO: Cancella i tuoi TODO una volta che ricevi i miei suggerimenti, quando hai risolto e hai ancora dubbi, scrivene di nuovi.
 */
