import dotenv from 'dotenv';
import IServerConfig from "./configs/IServerConfig";
import {helloEndpoint} from './entities/endpoint/hello/helloEndpoint.js';
import server from "./entities/server/server.js";
dotenv.config();


const config: IServerConfig = {
  port: +process.env.PORT,
  globalMiddlewares: [],
  errorMiddlewares: [],
  endpoints: [helloEndpoint],
  initCallbacks: [],
  shutdownCallbacks: [],
};

const createServer = async () => {
  await new server(config).run();
};
createServer();
