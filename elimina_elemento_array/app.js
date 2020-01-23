/**
 * A partire da un array di 6 elementi, elimina il terzo elemento
 * - Crea un array di 6 elementi
 * - Elimina il terzo elemento
 * - Stampa sul documento il nuovo array
 */

var city = [
  "Monaco",
  "Londra",
  "Florida",
  "Messico",
  "Amsterdam",
  "Madagascar",
  "Dubai"
];
city.splice(2,1);
document.body.innerHTML = city + '<br>';