import Fastify, { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { registerRoutes } from "./routes";

export function buildServer(): FastifyInstance {
  const server: FastifyInstance = Fastify({
    logger: true,
  }).withTypeProvider<TypeBoxTypeProvider>();

  // Register routes
  registerRoutes(server);

  return server;
}
