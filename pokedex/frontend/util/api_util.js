export const fetchAllPokemon = function() {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};


//root -> ruut or rut
//route -> rowt or ruut
