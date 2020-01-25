/**
 * Stampa sul documento le iniziali del tuo nome e cognome
 * - Salva in due variabili il tuo nome e cognome
 * - Usa charAt per procurarti le iniziali del tuo nome e cognome
 * - Stampa il risultato sul documento
 */

var name = 'Sabrina';
var surname = 'Paola';

document.body.innerHTML = name.charAt(0) + '<br>' + surname.charAt(0);