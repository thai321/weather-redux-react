import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  // console.log('Action received: ', action);
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data,...state]; // inditical as above
      // [city, city, city] NOT [city, [city,city]]
      // don't use push since it will manipulated the existing array
  }   // use concat, so it create a new version of array/state,
      // not adding or modified the exsiting state
  return state;
}
