/**
 *  blog con https://pokeapi.co/api/v2/pokemon
 */


var pokemon = new XMLHttpRequest();
pokemon.open("get","https://pokeapi.co/api/v2/pokemon",true, null, null);
pokemon.send (null)
pokemon.onreadystatechange = function(){
  if(pokemon.readyState === 4){
    var response = JSON.parse(pokemon.response);
    var template = document.getElementById('cards')
    for(var i = 0; i < 20; i++){
      template.innerHTML +=
      `<div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${response[i].name}</h5>
            <img class="card-img-top" src="${response[i].url}">
          </div>
        </div>
      </div> `
    }
  }
};

//TODO: quando richiamo il name e url mi da errore nella console, perchè?