import React from "react";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";
interface SearchBarContainerProps {
  pokemonHandler: (pokemon: string) => void;
}
const SearchBarContainer: React.FC<SearchBarContainerProps> = ({
  pokemonHandler,
}) => {
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);

  const toggleSearchBar = (boolean: boolean) => {
    setShowSearchBar(boolean);
  };

  return (
    <div
      className=" 
		container mx-auto py-5 w-3/4"
    >
      {!showSearchBar && <SearchIcon toggleSearchBar={toggleSearchBar} />}
      {showSearchBar && <SearchBar toggleSearchBar={toggleSearchBar} />}
    </div>
  );
};

export default SearchBarContainer;
