const input = document.getElementById('search'); 
const btn = document.getElementById('btn')

btn.addEventListener('click', getyourpokemon); 

async function getyourpokemon(e){

let inputValue = input.value; 
let api = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`

      
console.log(api); 
let response = await axios.get(api); 
console.log(response);
  //

function getImage(){
    let pokeImage = document.getElementById('whatPokemon'); 
    console.log(response.data.sprites); 
    let thisPoke = response.data.sprites.front_default; 

    pokeImage.src = thisPoke; 

}

getImage(); 

}




