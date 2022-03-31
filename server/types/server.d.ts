import { FastifyRequest } from "fastify";

export type Callback = (err: Error | null, value?: boolean) => void;
interface PokemonNameRequest extends FastifyRequest {
  params: {
    pokemonName?: string;
  };
}
