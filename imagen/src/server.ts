import { buildServer } from "./app";
import { config } from "./config";

const server = buildServer();

const start = async () => {
  try {
    await server.listen({ port: parseInt(config.PORT), host: config.HOST });
    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    console.log(`Server listening on port ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
