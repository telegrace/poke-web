import React from "react";
import axios from "axios";
import PokemonCardContainer from "./pokemon-card/PokemonCardContainer";
import SearchBarContainer from "./searchbar/SearchBarContainer";

const PokeWeb: React.FC<any> = () => {
  const [pokemon, setPokemon] = React.useState<string>("");

  const pokemonHandler = (pokemon: string) => {
    setPokemon(pokemon);
  };

  React.useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon]);
  return (
    <>
      <SearchBarContainer pokemonHandler={pokemonHandler} />
      <PokemonCardContainer pokemon={pokemon} />
    </>
  );
};

export default PokeWeb;
