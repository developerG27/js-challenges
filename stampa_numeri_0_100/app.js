/**
 * Stampa sul body tutti i numeri da 0 a 100
 * - Crei un ciclo for che fa un innerHTML +=
 * - Ricordati di aggiungere un <br>
 */

var number = [];

for (var i = 0; i < number.length; i++) {
  document.body.innerHTML += number[i] + "<br>";
}

//TODO: .length serve? è giusto dichiarare la variabile cosi?

/**
 * TODO: Quando scrivi codice devi ragionare, non scrivere a memoria quello che ti ricordi.
 * TODO: Il codice che hai scritto ora è: number è uguale a un array vuoto, fin quando 0 è minore ad array vuoto aumenta di 1, capisci che non ha senso?
 * TODO: la logica è la seguente, i è uguale a zero, fin quando i è minore a 100, aumenta i di uno, poi devi stampare sul body la variabile i + <br>
 *
 * */
