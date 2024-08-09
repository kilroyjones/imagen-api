import type { ImageGenerationStrategy } from "../types";

class OpenAIStrategy implements ImageGenerationStrategy {
  async generate(params: {
    style: string;
    prompt: string;
    creativity: number;
    withThumbnail: boolean;
  }): Promise<{ message: string }> {
    const apiUrl = "https://api.openai.com/v1/images/generations";

    const requestBody = {
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
    };

    return { message: "Image generated with OpenAI" };
  }
}

// import Fastify from "fastify";
// import { ImageGenerator, ImageGenerationOptions, ImageGenerationResult } from "../types";
// import { config } from "../config";

// const fastify = Fastify();

// fastify.get('/api-call', async (request, reply) => {
//   try {
//     const response = await fetch('https://api.example.com/data')
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (error) {
//     request.log.error(error)
//     reply.status(500).send({ error: 'Failed to fetch data' })
//   }
// })
// fastify.get("/api-call", async (request, reply) => {
//   const response = await fastify.inject({
//     method: "GET",
//     url: "https://api.example.com/data",
//   });

//   return JSON.parse(response.payload);

// });

// export class OpenAIGenerator implements ImageGenerator {
//   private apiKey: string;
//   private organization?: string;

//   constructor() {
//     this.apiKey = config.OPEN_AI;
//   }

//   async generate(options: ImageGenerationOptions): Promise<ImageGenerationResult[]> {
//     const apiUrl = "https://api.openai.com/v1/images/generations";

//     const requestBody = {
//       prompt: options.prompt,
//       n: options.n || 1,
//       size: options.size || "1024x1024",
//       quality: options.quality || "standard",
//     };

//     try {
//     //   const response = await axios.post(apiUrl, requestBody, {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //       Authorization: `Bearer ${this.apiKey}`,
//     //       ...(this.organization && { "OpenAI-Organization": this.organization }),
//     //     },
//     //   });

//     //   return response.data.data.map((item: any) => ({
//     //     url: item.url,
//     //     revised_prompt: item.revised_prompt,
//     //   }));
//     // } catch (error) {
//     //   console.error("Error generating image with OpenAI:", error.response?.data || error.message);
//     //   throw new Error("Failed to generate image with OpenAI");
//     // }
//   }
// }
