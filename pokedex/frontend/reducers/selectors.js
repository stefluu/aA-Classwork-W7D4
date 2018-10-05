import {values} from 'lodash';

export const selectAllPokemon = (state) => {
   let vals = (_.values(state.entities.pokemon));
   return vals;
};
