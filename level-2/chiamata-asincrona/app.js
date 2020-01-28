/**
 * Creare un blog usando questo servizio: https://jsonplaceholder.typicode.com/photos
 */
var blog = new XMLHttpRequest();
blog.open("get","https://jsonplaceholder.typicode.com/photos",true, null, null); //method, url, async, user, password
blog.send(null); //solo con get è null

blog.onreadystatechange = function(){ //Attende il cambio dello stato poi fa partire una funzione
  if(blog.readyState === 4){
    var response = JSON.parse(blog.response);
    var graphic = document.getElementById('cards')
    for(var i = 0; i < 50; i++){
      graphic.innerHTML +=
      `<div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <img class="card-img-top" src="${response[i].url}">
            <h5 class="card-title">${response[i].title}</h5>
          </div>
        </div>
      </div> `
    }
  }
};