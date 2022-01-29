/* eslint-disable no-debugger */
const cors = require("cors");

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("pokemon.json");
const port = process.env.PORT || 4000;

server.use(cors());
server.use(router);
server.listen(port);

/* (async function getPokeAPI() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // fetch resuelve a una promesa

  // if response.status ==
  const pokemon = await response.json(); // (para extraer json de un body) el método json me devuelve una promesa
  console.log("mira esto, nene", pokemon.count);
  // debugger; // (para ver qué tiene pokemon)
})();
 */
// getPokeAPI();
