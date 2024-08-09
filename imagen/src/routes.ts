// routes.ts

import { FastifyInstance } from "fastify";
import { getAvailableStyles } from "./style";
import {
  GenerateSchema,
  GenerateMultipleSchema,
  GenerateSimilarSchema,
  Generate,
  GenerateMultiple,
  GenerateSimilar,
} from "./schema";

/**
 *
 * @param server
 */
export function registerRoutes(server: FastifyInstance) {
  /**
   *
   */
  server.post<{ Body: Generate }>(
    "/generate",
    { schema: { body: GenerateSchema } },
    async (request, reply) => {
      const { style, prompt, creativity, withThumbnail } = request.body;
      let api = "openai";

      switch (api) {
        case "openai":
          break;
      }
      return { message: "Image generated successfully" };
    }
  );

  /**
   *
   */
  server.post<{ Body: GenerateMultiple }>(
    "/generateMultiple",
    { schema: { body: GenerateMultipleSchema } },
    async (request, reply) => {
      const generateRequests = request.body;
      // Implementation for multiple image generation
      return { message: `${generateRequests.length} images generated successfully` };
    }
  );

  /**
   *
   */
  server.post<{ Body: GenerateSimilar }>(
    "/generateSimilar",
    { schema: { body: GenerateSimilarSchema } },
    async (request, reply) => {
      const { style, similarity, image, withThumbnail } = request.body;
      // Implementation for generating similar images
      return { message: "Similar image generated successfully" };
    }
  );

  /**
   *
   */
  server.get("/styles", async (request, reply) => {
    const styles = getAvailableStyles();
    return { styles };
  });
}
