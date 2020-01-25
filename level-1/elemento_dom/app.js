/**
 * Aggiunge un paragrafo sul documento usando solo javascript
 * - https://www.w3schools.com/js/js_htmldom_nodes.asp
 * - Il paragrafo deve contenere la scritta Hello world
 */

var paragrafo = document.createElement("p");
paragrafo.innerHTML = "<p>HELLO WORLD</p>";
document.body.appendChild(paragrafo);