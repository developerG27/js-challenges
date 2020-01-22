/**
 * Stampa sul body tutti i numeri da 0 a 100
 * - Crei un ciclo for che fa un innerHTML +=
 * - Ricordati di aggiungere un <br>
 */

var number = []; 

for(var i = 0; i <number.length; i++){
  document.body.innerHTML += number[i] + '<br>';
}

//TODO: .length serve? è giusto dichiarare la variabile cosi?