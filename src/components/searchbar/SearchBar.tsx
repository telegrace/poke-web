import React from "react";
import pokemonJson from "../../data/pokemon-v1.json";
import CloseIcon from "./CloseIcon";

interface SearchBarProps {
  toggleSearchBar: (boolean: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleSearchBar }) => {
  const [search, setSearch] = React.useState<string>("Type here");
  const [matches, setMatches] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    if (!search) {
      setMatches([]);
    }
    if (search.length > 0) {
      searchFn(search);
    }
  }, [search]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchFn = (searchText: string) => {
    let matchResults = [];
    for (let i = 0; i < pokemonJson.length; i++) {
      if (pokemonJson[i].toLowerCase().indexOf(searchText) === 0) {
        matchResults.push(pokemonJson[i]);
      }
      if (matchResults.length >= 4) {
        break;
      } else {
        setMatches(["No results :("]);
      }
    }
    setMatches(matchResults);
  };

  // take up the whole screen
  return (
    <div className="p-8 bg-black text-white">
      <CloseIcon toggleSearchBar={toggleSearchBar} />
      <div className="p-8">
        <h1 className="text-5xl">
          <input
            placeholder="Start typing..."
            onChange={searchHandler}
            className="bg-inherit focus:outline-none"
          />
        </h1>
        {matches.map((pokemon, key) => {
          return (
            <li
              key={`pokemon-${key}`}
              className="pt-4 text-4xl hover:text-red-500"
            >
              {pokemon}
            </li>
          );
        })}
        {/* need to talk to the api */}
      </div>
    </div>
  );
};

export default SearchBar;

//abstract this away and make a pop up
