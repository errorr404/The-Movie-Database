import { ADD_TO_LIST, ADD_TO_FAV, ADD_TO_CURRENT} from '../constant';


const reminders = (state={movieList:[],fav:[],currentMovie:{}},action)=>{
  let reminders = null;
//  let lists = null;
  switch (action.type) {
    case ADD_TO_LIST:
    console.log('added to list',action.movie)
    var tempState = {...state};
    tempState.movieList = action.movie
    return tempState
    
    case ADD_TO_FAV:
    var tempState = {...state}
    tempState.fav.push(action.movie);
    return tempState;
    
    case ADD_TO_CURRENT:
    var tempState = {...state}
    tempState.currentMovie = action.movie
    return tempState;
    default:
    return state;

  }

}

export default reminders;
