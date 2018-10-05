import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const PokemonReducer = function(state = {}, action) {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
