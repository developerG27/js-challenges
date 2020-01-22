/**
 * Ad ogni click dell'utente viene cambiato lo sfondo:
 * - Creare un array con diversi colori
 * - Salvare il documento in una variabile
 * - Allacciare l'evento click al documento
 * - Ad ogni click si cambia lo stile del background
 * - Inserisci come valore della proprietà l'array che viene richiamato in maniera Random
 *  */

var color = ["blue", "red", "green", "pink", "red", "orange", "yellow", "brown"];

document.addEventListener('click',function(){
  document.querySelector("body").style.backgroundColor = color;
})
/* TODO: ho dichiarato la variabile
-inserito i colori nell'array
-aggiunto l'evento click e la funzione
-ho richiamato il body
-gli ho dato lo stile al background
-dove sto sbagliando? */