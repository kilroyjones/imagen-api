// Generation
export interface GenerateRequest {
  style: string;
  prompt: string;
  creativity: number;
  withThumbnail: boolean;
  api: string;
}

export interface GenerateSimilarRequest {
  style: string;
  similarity: number;
  image: string;
  withThumbnail: boolean;
  api: string;
}

export type GenerateMultipleRequest = GenerateRequest[];

// Image generation
interface ImageGenerationStrategy {
  generate(params: {
    style: string;
    prompt: string;
    creativity: number;
    withThumbnail: boolean;
    api: string;
  }): Promise<{ message: string }>;
}
