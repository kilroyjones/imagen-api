export const baseStyles = {
  anime: [
    "anime style",
    "vibrant colors",
    "large eyes",
    "exaggerated expressions",
    "dynamic poses",
  ],
  photorealistic: [
    "photorealistic",
    "highly detailed",
    "sharp focus",
    "true to life colors",
    "natural lighting",
  ],
  cartoon: [
    "cartoon style",
    "bold outlines",
    "flat colors",
    "exaggerated features",
    "simple backgrounds",
  ],
  watercolor: [
    "watercolor painting",
    "soft edges",
    "translucent colors",
    "visible brush strokes",
    "paper texture",
  ],
  "oil painting": [
    "oil painting style",
    "rich textures",
    "visible brush strokes",
    "layered colors",
    "canvas texture",
  ],
  "pixel art": [
    "pixel art style",
    "low resolution",
    "limited color palette",
    "blocky shapes",
    "retro game aesthetic",
  ],
  abstract: [
    "abstract style",
    "non-representational",
    "geometric shapes",
    "bold colors",
    "emotional expression",
  ],
  surrealism: [
    "surrealist style",
    "dreamlike imagery",
    "impossible scenes",
    "juxtaposition of unrelated elements",
    "symbolic representations",
  ],
  "pop art": [
    "pop art style",
    "bold colors",
    "repetitive patterns",
    "cultural icons",
    "comic book inspired",
  ],
  cyberpunk: [
    "cyberpunk aesthetic",
    "neon lights",
    "futuristic technology",
    "urban dystopia",
    "high tech low life",
  ],
};

//
export function getStylePrompt(style: string): string {
  const stylePrompts = baseStyles[style as keyof typeof baseStyles];
  return stylePrompts ? stylePrompts.join(" ") : "";
}

//
export function getAvailableStyles(): string[] {
  return Object.keys(baseStyles);
}
