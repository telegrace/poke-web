import fastify, { FastifyReply, FastifyRequest } from "fastify";
import axios from "axios";
import { Callback } from "./types/server";
import jwt from "fastify-jwt";

const app = fastify();

app.register(require("fastify-cors"), {
  // put your options here
  origin: (origin: string, callback: Callback) => {
    const hostname = new URL(origin).hostname;
    if (hostname === "localhost") {
      //  Request from localhost will pass
      console.log();
      callback(null, true);
      return;
    }
    // Generate an error on other origins, disabling access
    callback(new Error("Not allowed"));
  },
});

app.get("/secret", (req, reply) => {
  reply.send({ hello: "world" });
});

app.get("/login", (req, reply) => {
  //Auth User
  reply.send({ hello: "world" });
});

app.get("/ping", async (request, reply) => {
  console.log("GET /ping");
  return "pong\n";
});

app.get(
  "/pokemon/:pokemonName",
  async (
    request: FastifyRequest<{ Params: { pokemonName: string } }>,
    reply: FastifyReply
  ) => {
    const { pokemonName } = request.params;
    if (typeof pokemonName === "string") {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then((response) => {
          console.log("response", response);
          let abilities = [];
          if (response?.data?.abilities) {
            for (let i = 0; i < response?.data?.abilities.length; i++) {
              abilities.push(response?.data.abilities[i].ability.name);
            }
          }
          let types = [];
          if (response?.data?.types) {
            for (let i = 0; i < response?.data.types.length; i++) {
              types.push(response?.data.types[i].type.name);
            }
          }
          let pokemonCardData = {
            name: pokemonName,
            abilities,
            image: response?.data?.sprites?.front_default,
            types,
          };
          reply.send(pokemonCardData);
        })
        .catch((err) => {
          console.log(err);
          reply.statusCode = 500;
        });
    } else {
      reply.statusCode = 500;
    }
  }
);

app.listen(3001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
