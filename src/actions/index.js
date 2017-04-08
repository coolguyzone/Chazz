import axios from 'axios';

const firmnessURL = 'http://cheeswhiz.herokuapp.com/api/cheese/firmness/';
const animalURL = 'http://cheeswhiz.herokuapp.com/api/cheese/animal/';

let firmnessFilteredCheeses = [];
let animalFilteredCheeses = [];

//helper function to combine array with duplicates
function smooshArrays (array1, array2) {
  let combinedCheeses = [];
  let array1Names = array1.map((element) => element.name);
  let array2Names = array2.map((element) => element.name);

  for (var i = 0; i < array1Names.length; i++) {
    if (array2Names.indexOf(array1Names[i]) > -1) {
      combinedCheeses.push(array1[i]);
    }
  }
  console.log(combinedCheeses);
}

function fetchAnimalCheeseArray(animal) {
  animalFilteredCheeses = [];

//fetch cheeses by animal and then push them to animalfilteredcheeses array
//fetch cheeses by firmness and then push them to firmnessfilteredcheeses array
//smoosh animalfiltered and firmness filtered arrays together for all entries that are duplicates
//randomize and return combined array


  return axios
    .get(animalURL + animal)
    .then((response) => {
      console.log(response);
      animalFilteredCheeses = response.data;
      console.log(animalFilteredCheeses);
    })
    .then(() => {
      //if there's already an array of firmness sorted cheeses
      if (firmnessFilteredCheeses.length > 0) {
        smooshArrays(firmnessFilteredCheeses, animalFilteredCheeses)
      }
    })

}

function fetchFirmnessCheeseArray(firmness) {
  firmnessFilteredCheeses = [];

  return axios
    .get(firmnessURL + firmness)
    .then ((response) => {
      console.log(response);
      firmnessFilteredCheeses = response.data;
      console.log(firmnessFilteredCheeses);
    })
    .then(() => {
      //if there's already an array of firmness sorted cheeses
      if (animalFilteredCheeses.length > 0) {
        smooshArrays(firmnessFilteredCheeses, animalFilteredCheeses)
      }
    })
}



export const selectAnimalDropdown = (selection) => {
  return {
    type: 'SELECT_ANIMAL_DROPDOWN',
    selection
  }
}

export const selectFirmnessDropdown = (selection) => {
  return {
    type: 'SELECT_FIRMNESS_DROPDOWN',
    selection
  }
}

export const doAnimalCheeseSearch = (animal) => {
  return {
    type: 'DO_ANIMAL_CHEESE_SEARCH',
    payload: fetchAnimalCheeseArray(animal.toLowerCase())
  }
}

export const doFirmnessCheeseSearch = (firmness) => {
  return {
    type: 'DO_FIRMNESS_CHEESE_SEARCH',
    payload: fetchFirmnessCheeseArray(firmness.toLowerCase())
  }
}
