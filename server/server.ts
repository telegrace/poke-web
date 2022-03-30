import fastify from "fastify";
import axios from "axios";

const app = fastify();

type Callback = (err: Error | null, value?: boolean) => void;

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

app.get("/", (req, reply) => {
  reply.send({ hello: "world" });
});

app.get("/ping", async (request, reply) => {
  console.log("GET /ping");
  return "pong\n";
});

app.get("/pokemon", async (request, reply) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then((response) => {
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
        name: "pikachua",
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
});

app.listen(3001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
