import React from "react";

interface PokemonCardContainerProps {
  pokemon: string;
}

const PokemonCardContainer: React.FC<PokemonCardContainerProps> = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
        <p className="text-3xl text-gray-700 font-semibold"> Premium </p>
        <p className="text-xl text-gray-700 font-semibold mt-1"> Rp 220.000 </p>
        <p className="text-sm text-gray-700 font-semibold mt-1">
          {" "}
          IDR per month{" "}
        </p>

        <p className="text-sm text-gray-700 font-light mt-5 leading-7">
          {" "}
          The VIP support plan for businesses ready to monetize and sell on a
          larger scale.{" "}
        </p>

        <button className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50">
          Get more info
        </button>
      </div>
    </div>
  );
};

export default PokemonCardContainer;
