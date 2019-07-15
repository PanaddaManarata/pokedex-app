const input = document.getElementById('search'); 
const btn = document.getElementById('btn')

input.addEventListener('keyup',  function(){
  if (event.key === "Enter") {
       getyourpokemon();  
      console.log("key")
  }
})



btn.addEventListener('click', getyourpokemon); 

async function getyourpokemon(e){

let inputValue = input.value; 
let api = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`;
//let evapi = `http://pokeapi.co/api/v2/evolution-chain/${inputValue}/`;
      
console.log(api); 
//console.log(evapi); 
let response = await axios.get(api); 
//let responseEv = await axios.get(evapi); 
console.log(response.data);
//console.log(responseEv); 





function getImage(){
    let pokeImage = document.getElementById('whatPokemon'); 
    console.log(response.data.sprites); 
    let thisPoke = response.data.sprites.front_default; 

    pokeImage.src = thisPoke; 

}

getImage(); 




function getName(){
    let pokeName = document.getElementById('name'); 
    let thisName = response.data.name; 
    console.log(response.data.name)

    pokeName.innerHTML = thisName; 
}


getName(); 

function getNumber(){
  let pokeNumber = document.getElementById('number'); 
  let thisNumber = response.data.id;
  console.log(thisNumber) 

  pokeNumber.innerHTML = thisNumber; 
}

getNumber(); 

function getMoves(){
const move =  document.getElementsByClassName('moves');
console.log("get your moves");
console.log(response.data.moves);
//let pokeMoves = response.data.moves; 
//let randomMoves = Math.floor(Math.random() * pokeMoves.length); 
//console.log(pokeMoves.length)
//console.log(randomMoves)
// let thisMove = [response.data.moves[0].move.name, response.data.moves[1].move.name,
// response.data.moves[2].move.name, response.data.moves[3].move.name 
//]

//let random = response.data.moves; 
//console.log(random.length)


 
for (i=0; i < move.length ; i++ ){
  console.log(move.length);

  move[i].innerHTML = response.data.moves[i].move.name; 

}
}

getMoves(); 

function getWeight(){

  let pokeWeight = document.getElementById('weight'); 
  let thisWeight = response.data.weight; 
  console.log(thisWeight)
  
  pokeWeight.innerHTML = "Weight: " + thisWeight/10 + " kg"; 


}

getWeight(); 

function getType(){
  let pokeType = document.getElementById('type'); 
  let thisType = response.data.types[0].type.name; 
  console.log(thisType); 

  pokeType.innerHTML = "Type: "+ thisType; 
}

getType(); 
















}




