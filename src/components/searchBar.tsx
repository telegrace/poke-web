import React from "react";
import pokemonJson from "../data/pokemon-v1.json";
// interface Props {
// }

const SearchBar: React.FC<any> = () => {
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

  return (
    <>
      <input placeholder="pikachu" onChange={searchHandler} />
      {matches.map((pokemon, key) => {
        return <li key={`pokemon-${key}`}>{pokemon}</li>;
      })}
    </>
  );
};

export default SearchBar;
