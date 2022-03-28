import React from "react";
import axios from "axios";
import PokemonCardContainer from "./pokemon-card/PokemonCardContainer";
import SearchBarContainer from "./searchbar/SearchBarContainer";

type PokemonCardData = {
  name: string;
  abilities?: Array<string>;
  image?: string;
  types?: Array<string>;
};

const PokeWeb: React.FC<any> = () => {
  let pokemonCardDataFirst = {
    name: "",
  };

  const [pokemon, setPokemon] = React.useState<string>("");
  const [pokemonCardData, setPokemonCardData] =
    React.useState<PokemonCardData>(pokemonCardDataFirst);

  const pokemonHandler = (pokemon: string) => {
    setPokemon(pokemon);
  };

  React.useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      .then(({ data }) => {
        let abilities = [];
        if (data.abilities) {
          for (let i = 0; i < data.abilities.length; i++) {
            abilities.push(data.abilities[i].ability.name);
          }
        }
        let types = [];
        if (data.types) {
          for (let i = 0; i < data.types.length; i++) {
            types.push(data.types[i].type.name);
          }
        }
        setPokemonCardData({
          name: pokemon,
          abilities,
          image: data?.sprites?.front_default,
          types,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon]);
  return (
    <>
      <SearchBarContainer pokemonHandler={pokemonHandler} />
      {pokemonCardData.name && (
        <PokemonCardContainer pokemonCardData={pokemonCardData} />
      )}
    </>
  );
};

export default PokeWeb;
