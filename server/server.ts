import fastify from "fastify";

const app = fastify();

app.register(require("fastify-cors"), {
  // put your options here
  origin: "http://localhost:3000",
});

app.get("/ping", async (request, reply) => {
  console.log("GET /ping");
  // reply.send("<!doctype html><title>Hello World!</title><p>Hello World!");
  return "pong\n";
});

app.listen(3001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
