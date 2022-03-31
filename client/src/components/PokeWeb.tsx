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
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);
  const [pokemon, setPokemon] = React.useState<string>("");
  const [pokemonCardData, setPokemonCardData] =
    React.useState<PokemonCardData>(pokemonCardDataFirst);

  const pokemonHandler = (pokemon: string) => {
    setPokemon(pokemon);
  };

  const toggleSearchBar = (boolean: boolean) => {
    setShowSearchBar(boolean);
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemon/${pokemon}`)
      .then(({ data }) => {
        setPokemonCardData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon]);
  return (
    <>
      <SearchBarContainer
        pokemonHandler={pokemonHandler}
        showSearchBar={showSearchBar}
        toggleSearchBar={toggleSearchBar}
      />
      {pokemonCardData.name && !showSearchBar && (
        <PokemonCardContainer pokemonCardData={pokemonCardData} />
      )}
      {/* If Searchbar no PokemonCard */}
    </>
  );
};

export default PokeWeb;
