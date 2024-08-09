import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables
dotenv.config();

// Define a schema for your environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  HOST: z.string().default("localhost"),
  PORT: z.string().default("3000"),
  OPEN_AI: z.string(),
});

// Parse and validate environment variables
const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error("Invalid environment variables:", JSON.stringify(envParse.error.format(), null, 4));
  process.exit(1);
}

export const config = envParse.data;
