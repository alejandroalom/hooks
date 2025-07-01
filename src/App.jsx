import React from 'react';
import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters';
import Character from './components/Character';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rick, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <div className="App">
      {loadingPokemon && <p>Cargando Pokémon...</p>}
      {errorPokemon && <p>Error: {errorPokemon}</p>}
      {pokemon && (
        <Character
          title="Personaje Pokémon"
          name={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      )}

      {loadingRick && <p>Cargando Rick and Morty...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
      {rick && (
        <Character
          title="Personaje Rick and Morty"
          name={rick.name}
          image={rick.image}
        />
      )}
    </div>
  );
}

export default App;

