import axios from 'axios';
import arrayShuffler from '../helpers/array-shuffler';
import Cookies from 'js-cookie';

const firmnessURL = 'http://cheeswhiz.herokuapp.com/api/cheese/firmness/';
const animalURL = 'http://cheeswhiz.herokuapp.com/api/cheese/animal/';
const loginURL = 'http://cheeswhiz.herokuapp.com/api/user/login';

let firmnessFilteredCheeses = [];
let animalFilteredCheeses = [];

//helper function to shuffle an array
// function arrayShuffler(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

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
  return(arrayShuffler(combinedCheeses));
}

function loginUser(email, password) {
  return axios
    .post(loginURL, {
      email: email,
      password: password
    })
    .then((response) => {
      Cookies.set('token', response.data.token);
      let x = Cookies.get('token');
      console.log('x',x);
    })
    .catch((error) => console.log(error))
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
        return smooshArrays(firmnessFilteredCheeses, animalFilteredCheeses)
      }
    })

}

function fetchFirmnessCheeseArray(firmness) {
  firmnessFilteredCheeses = [];

  return axios
    .get(firmnessURL + firmness)
    .then ((response) => {
      firmnessFilteredCheeses = response.data;
    })
    .then(() => {
      //if there's already an array of firmness sorted cheeses
      if (animalFilteredCheeses.length > 0) {
        return smooshArrays(firmnessFilteredCheeses, animalFilteredCheeses)
      }
    })
}

function getSpotify() {

  let query = 'jazz blues';
  let type = 'playlist';

  let url = `https://api.spotify.com/v1/search?q=${query}&type=playlist&market=US&limit=50`;

  return axios
    .get(url)
    .then((response) => {
      let pArray = response.data.playlists.items;
      let uriArray = pArray.map((element) =>  {
        return element.uri;
      });
      return arrayShuffler(uriArray);
    })
    .catch((err) => {
      console.log('API GET Request Failed.');
      return null;
    });

};



export const initialPlaylist = () => {

  return {
    type: 'NEXT_PLAYLIST',
    payload: getSpotify()
  };
};

export const nextPlaylist = () => {

  return {
    type: 'NEXT_PLAYLIST'
  };
};

export const selectAnimalDropdown = (selection) => {
  return {
    type: 'SELECT_ANIMAL_DROPDOWN',
    selection
  };
};

export const selectFirmnessDropdown = (selection) => {
  return {
    type: 'SELECT_FIRMNESS_DROPDOWN',
    selection
  };
};


export const doAnimalCheeseSearch = (animal) => {
  return {
    type: 'DO_ANIMAL_CHEESE_SEARCH',
    payload: fetchAnimalCheeseArray(animal.toLowerCase())
  };
};

export const logUserIn = (email, password) => {
  return {
    type: 'LOG_USER_IN',
    payload: loginUser(email, password)
  };
};

export const doFirmnessCheeseSearch = (firmness) => {
  return {
    type: 'DO_FIRMNESS_CHEESE_SEARCH',
    payload: fetchFirmnessCheeseArray(firmness.toLowerCase())
  };
};
//
let removedCheese;

const spliceCheese = (index, cheeseState) => {
  removedCheese = cheeseState.splice(index, 1);
  console.log('removedchz', removedCheese);
  return cheeseState.map((element) => element);


}

export const removeCheeseFromState = (index, cheeseState) => {
  return {
    type: 'REMOVE_CHEESE_FROM_STATE',
    payload: spliceCheese(index, cheeseState),
    removedCheese: removedCheese

  };
};
