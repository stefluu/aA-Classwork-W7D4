import React from 'react';


const PokemonIndexItem = function(pokemon) {
  return (
    <li>
      <span>{pokemon.name}</span>
      <img src={pokemon.image_url} />
    </li>
  );
};

export default PokemonIndexItem;
