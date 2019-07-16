const input = document.getElementById('search'); 
const btn = document.getElementById('btn')

input.addEventListener('keyup',  function(){
  if (event.key === "Enter") {
       showyourpokemon();  
      console.log("key")
  }
})


btn.addEventListener('click', showyourpokemon); 

async function showyourpokemon(e){

  console.clear(); 

  let api = `https://pokeapi.co/api/v2/pokemon/${input.value}/`;
  let speciesapi = `http://pokeapi.co/api/v2/pokemon-species/${input.value}/`;

  console.log("api data: " + api); 
  console.log("species data: " + speciesapi); 
  let response = await axios.get(api); 
  let responseSpecies = await axios.get(speciesapi); 
  console.log(response.data);
  console.log(responseSpecies); 

  if (responseSpecies.data.evolves_from_species) {
    // get evolution api 
    console.log("evo:" + responseSpecies.data.evolves_from_species.name)
    var Evolution = responseSpecies.data.evolves_from_species.name; 
    var evolveapi = `https://pokeapi.co/api/v2/pokemon/${Evolution}/`;
    var responseEvolution = await axios.get(evolveapi); 
    console.log("evolve " + evolveapi )

    console.log(responseEvolution.data)

    
    getSpecies(); 
    getEvolutionImg(); 
 } else {
   console.log("happy");
   document.getElementById('evolutionName').innerHTML = ""; 
   document.getElementById('evolution').src = "#"
 }

 

function getSpecies(){
console.log(); 
console.log('Species: ' + responseSpecies.data.genera[2].genus);
}



function getEvolutionImg(){
  var pokeEvoImg = document.getElementById('evolution'); 
  let thisEvoPoke = responseEvolution.data.sprites.front_default; 
    console.log("Img evolution " + thisEvoPoke); 
    pokeEvoImg.src = thisEvoPoke; 
    document.getElementById('evolutionName').innerHTML = Evolution; 
}


function getImage(){
    let pokeImage = document.getElementById('whatPokemon'); 
    let thisPoke = response.data.sprites.front_default; 
    console.log("Response data sprites: " + thisPoke); 
    pokeImage.src = thisPoke; 

}


function getName(){
    let pokeName = document.getElementById('name'); 
    let thisName = response.data.name; 
    console.log(response.data.name)

    pokeName.innerHTML = thisName; 
}




function getNumber(){
  let pokeNumber = document.getElementById('number'); 
  let thisNumber = response.data.id;
  console.log(thisNumber) 

  pokeNumber.innerHTML = thisNumber; 
}




function getWeight(){

  let pokeWeight = document.getElementById('weight'); 
  let thisWeight = response.data.weight; 
  console.log("weight: " + thisWeight);
  
  pokeWeight.innerHTML = "Weight: " + thisWeight/10 + " kg"; 


}

 

function getType(){
  let pokeType = document.getElementById('type'); 
  let thisType = response.data.types[0].type.name; 
  console.log("type: " + thisType); 

  pokeType.innerHTML = "Type: "+ thisType; 
}



function getMoves(){
  const move =  document.getElementsByClassName('moves');
  console.log("moves: " + response.data.moves.length);
  //let pokeMoves = response.data.moves; 
  //let randomMoves = Math.floor(Math.random() * pokeMoves.length); 
  //console.log(pokeMoves.length)
  //console.log(randomMoves)
  // let thisMove = [response.data.moves[0].move.name, response.data.moves[1].move.name,
  // response.data.moves[2].move.name, response.data.moves[3].move.name 
  //]
  
  //let random = response.data.moves; 
  //console.log(random.length)
  console.log("move length (1): " + move.length);
  https://prod.liveshare.vsengsaas.visualstudio.com/join?9E29D50A9CF4871088A994D5D6871DC223D6
  for (i=0; i < move.length ; i++ ){
    console.log("test: " + move.length);
  
    move[i].innerHTML = response.data.moves[i].move.name; 
  
  }
  }
  
  getImage();
  getName(); 
  getNumber(); 
  getWeight();
  getType(); 
  getMoves(); 





}





