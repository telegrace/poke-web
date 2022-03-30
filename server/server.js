"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const axios_1 = __importDefault(require("axios"));
const app = (0, fastify_1.default)();
app.register(require("fastify-cors"), {
    // put your options here
    origin: (origin, callback) => {
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
app.get("/ping", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GET /ping");
    return "pong\n";
}));
app.get("/pokemon", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default
        .get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then((response) => {
        var _a, _b, _c, _d, _e;
        let abilities = [];
        if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.abilities) {
            for (let i = 0; i < ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.abilities.length); i++) {
                abilities.push(response === null || response === void 0 ? void 0 : response.data.abilities[i].ability.name);
            }
        }
        let types = [];
        if ((_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.types) {
            for (let i = 0; i < (response === null || response === void 0 ? void 0 : response.data.types.length); i++) {
                types.push(response === null || response === void 0 ? void 0 : response.data.types[i].type.name);
            }
        }
        let pokemonCardData = {
            name: "pikachua",
            abilities,
            image: (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.sprites) === null || _e === void 0 ? void 0 : _e.front_default,
            types,
        };
        reply.send(pokemonCardData);
    })
        .catch((err) => {
        console.log(err);
        reply.statusCode = 500;
    });
}));
app.listen(3001, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
