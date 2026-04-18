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
const http_1 = __importDefault(require("http"));
const ioredis_1 = require("ioredis");
const pg_1 = __importDefault(require("pg"));
const server_1 = __importDefault(require("./app/server"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // // Redis Connection
            console.log(`Connecting Redis...`);
            const redis = new ioredis_1.Redis("redis://redis:6380", {
                lazyConnect: true,
            });
            yield redis.connect();
            console.log(`Redis Connection Success...`);
            // Postgresql Connection
            console.log(`Connecting Postgres...`);
            const { Client } = pg_1.default;
            const client = new Client({
                host: "db",
                port: 5433,
                database: "my_db",
                user: "my_user",
                password: "my_pass",
            });
            yield client.connect();
            console.log(`Postgres Connection Success...`);
            // Http Server Stuff
            const PORT = process.env.PORT ? +process.env.PORT : 8000;
            const server = http_1.default.createServer(server_1.default);
            server.listen(PORT, () => console.log(`Http server is listening on PORT ${PORT}`));
        }
        catch (err) {
            console.log(`Error Starting Server`, err);
        }
    });
}
init();
