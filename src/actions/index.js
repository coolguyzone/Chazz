import axios from 'axios';

const firmnessURL = 'http://cheeswhiz.herokuapp.com/api/cheese/firmness/';
const animalURL = 'http://cheeswhiz.herokuapp.com/api/cheese/animal';

function fetchCheeseArray(animal, firmness) {
  let firmnessFilteredCheeses = [];
  let animalFilteredCheeses = [];

//fetch cheeses by animal and then push them to animalfilteredcheeses array
//fetch cheeses by firmness and then push them to firmnessfilteredcheeses array
//smoosh animalfiltered and firmness filtered arrays together for all entries that are duplicates
//randomize and return combined array

  return axios
    .get(firmnessURL + firmness)
    .then ((response) => {
      console.log(response);
      firmnessFilteredCheeses.push(response.data);
      console.log(firmnessFilteredCheeses);
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
