import React from "react";
import { useQuery } from "react-query";
import { getPokemonData } from "../../lib/actions";

type PokemonCardData = {
  name: string;
  abilities?: Array<string>;
  image?: string;
  types?: Array<string>;
};

interface PokemonCardContainerProps {
  pokemon: string;
}

const PokemonCardContainer: React.FC<PokemonCardContainerProps> = ({
  pokemon,
}) => {
  const [pokemonCardData, setPokemonCardData] =
    React.useState<PokemonCardData | null>(null);

  const { isLoading, isError, data } = useQuery("pokemon", () => {
    getPokemonData(pokemon);
  });

  React.useEffect(() => {
    if (data) {
      setPokemonCardData(data);
    }
  }, [pokemon]);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
        <p className="text-3xl text-gray-700 font-semibold">
          {pokemonCardData?.name}
        </p>

        <img
          src={pokemonCardData?.image}
          alt={pokemonCardData?.name}
          className="w-full h-50"
        />
        <div className="flex text-xl text-gray-700 font-semibold mt-1">
          {pokemonCardData?.types?.map((type, key) => {
            return (
              <p
                className="px-2 mx-2 rounded-full bg-teal-400"
                key={`pokemon-${key}`}
              >
                {type}
              </p>
            );
          })}
        </div>
        <p className="text-sm text-gray-700 font-semibold mt-5 m-2">
          Abilities
        </p>
        <div className="text-sm text-gray-700 font-light mt-1">
          {pokemonCardData?.abilities?.map((ability, key) => {
            return (
              <div
                className=" rounded-full bg-teal-400 px-2 m-2"
                key={`pokemon-${key}`}
              >
                {ability}
              </div>
            );
          })}
        </div>

        {/* <button className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50">
          Get more info
        </button> */}
      </div>
    </div>
  );
};

export default PokemonCardContainer;
