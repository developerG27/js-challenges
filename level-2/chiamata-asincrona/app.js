/**
 * Creare un blog usando questo servizio: https://jsonplaceholder.typicode.com/photos
 */
var blog = new XMLHttpRequest();
blog.open("get","https://jsonplaceholder.typicode.com/photos",true, null, null); //method, url, async, user, password
blog.send(null); //solo con get è null

blog.onreadystatechange = function(){ //Attende il cambio dello stato poi fa partire una funzione
  if(blog.readyState === 4)
}

//TODO: fino a qui ci sono, poi come procedo? (la guida arriva fino agli status/sicurezza)