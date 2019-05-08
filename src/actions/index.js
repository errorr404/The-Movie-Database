import { ADD_TO_LIST, ADD_TO_FAV, ADD_TO_CURRENT } from '../constant';
export const addToList = (movie) =>{
  const action = {
    type: ADD_TO_LIST,
    movie
  }
  return action;
}

export const addToFav = (movie) => {
  const action  = {
    type:ADD_TO_FAV,
    movie
  }
  return action;
}


export const addToCurrent =  (movie) => {
  const action = {
    type:ADD_TO_CURRENT,
    movie
  }
  return action;
}