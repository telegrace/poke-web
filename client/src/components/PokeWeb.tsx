import React from "react";
import PokemonCardContainer from "./pokemon-card/PokemonCardContainer";
import SearchBarContainer from "./searchbar/SearchBarContainer";
import ReportBug from "./ReportBug";

const PokeWeb: React.FC<any> = () => {
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);
  const [pokemon, setPokemon] = React.useState<string>("");

  const pokemonHandler = (pokemon: string) => {
    setPokemon(pokemon);
  };

  const toggleSearchBar = (boolean: boolean) => {
    setShowSearchBar(boolean);
  };

  return (
    <>
      <SearchBarContainer
        pokemonHandler={pokemonHandler}
        showSearchBar={showSearchBar}
        toggleSearchBar={toggleSearchBar}
      />
      {!showSearchBar && pokemon && <PokemonCardContainer pokemon={pokemon} />}
      <ReportBug />
    </>
  );
};

export default PokeWeb;
