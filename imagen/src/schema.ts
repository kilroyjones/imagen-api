import { Type, Static } from "@sinclair/typebox";

export const GenerateSchema = Type.Object({
  style: Type.String(),
  prompt: Type.String(),
  creativity: Type.Number(),
  withThumbnail: Type.Boolean(),
});

export const GenerateSimilarSchema = Type.Object({
  style: Type.String(),
  similarity: Type.Number(),
  image: Type.String(),
  withThumbnail: Type.Boolean(),
});

export const GenerateMultipleSchema = Type.Array(GenerateSchema);

// Create types from the schemas
export type Generate = Static<typeof GenerateSchema>;
export type GenerateMultiple = Static<typeof GenerateMultipleSchema>;
export type GenerateSimilar = Static<typeof GenerateSimilarSchema>;
