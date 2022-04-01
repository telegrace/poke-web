export const getPokemonData = async (pokemonName: string) => {
  const res = await `http://localhost:3001/pokemon/${pokemonName}`;
  return res;
};
