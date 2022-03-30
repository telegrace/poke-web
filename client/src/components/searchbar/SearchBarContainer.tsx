import React from "react";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";
interface SearchBarContainerProps {
  pokemonHandler: (pokemon: string) => void;
  showSearchBar: boolean;
  toggleSearchBar: (boolean: boolean) => void;
}
const SearchBarContainer: React.FC<SearchBarContainerProps> = ({
  pokemonHandler,
  showSearchBar,
  toggleSearchBar,
}) => {
  return (
    <div
      className=" 
		container mx-auto w-3/4"
    >
      {!showSearchBar && <SearchIcon toggleSearchBar={toggleSearchBar} />}
      {showSearchBar && (
        <SearchBar
          toggleSearchBar={toggleSearchBar}
          pokemonHandler={pokemonHandler}
        />
      )}
    </div>
  );
};

export default SearchBarContainer;
