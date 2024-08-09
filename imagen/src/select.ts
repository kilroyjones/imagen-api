// Define types for our API information
type ApiModel = string;
type ApiName = string;

interface ApiInfo {
  name: ApiName;
  models: ApiModel[];
  baseCost: number;
  performanceScore: number;
  specialties: string[];
}

interface ApiSelection {
  name: ApiName;
  model: ApiModel;
  estimatedCost: number;
}

// Create a map of available APIs
const availableApis: Map<ApiName, ApiInfo> = new Map([
  [
    "openai",
    {
      name: "openai",
      models: ["dall-e-2", "dall-e-3"],
      baseCost: 0.02,
      performanceScore: 9,
      specialties: ["photorealistic", "creative"],
    },
  ],
  [
    "stablediffusion",
    {
      name: "stablediffusion",
      models: ["sd-1.5", "sd-2.1"],
      baseCost: 0.01,
      performanceScore: 8,
      specialties: ["artistic", "style-transfer"],
    },
  ],
  [
    "midjourney",
    {
      name: "midjourney",
      models: ["v4", "v5"],
      baseCost: 0.03,
      performanceScore: 9.5,
      specialties: ["detailed", "conceptual"],
    },
  ],
]);

// Function to select the most appropriate API
function selectApi(
  task: string,
  maxCost: number,
  preferredStyle?: string,
  minPerformance?: number
): ApiSelection {
  let bestMatch: ApiSelection | null = null;
  let bestScore = -Infinity;

  for (const [apiName, apiInfo] of availableApis) {
    for (const model of apiInfo.models) {
      const score = calculateScore(apiInfo, model, task, maxCost, preferredStyle, minPerformance);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = {
          name: apiName,
          model: model,
          estimatedCost: estimateCost(apiInfo, model, task),
        };
      }
    }
  }

  if (!bestMatch) {
    throw new Error("No suitable API found for the given criteria");
  }

  return bestMatch;
}

// Helper function to calculate a score for each API/model combination
function calculateScore(
  api: ApiInfo,
  model: ApiModel,
  task: string,
  maxCost: number,
  preferredStyle?: string,
  minPerformance?: number
): number {
  let score = 0;

  // Check if the estimated cost is within budget
  const estimatedCost = estimateCost(api, model, task);
  if (estimatedCost > maxCost) return -Infinity;

  // Add performance score
  score += api.performanceScore;
  if (minPerformance && api.performanceScore < minPerformance) return -Infinity;

  // Check for preferred style
  if (preferredStyle && api.specialties.includes(preferredStyle)) {
    score += 5;
  }

  // Adjust score based on cost (lower is better)
  score += ((maxCost - estimatedCost) / maxCost) * 10;

  return score;
}

// Helper function to estimate cost (this is a simplified example)
function estimateCost(api: ApiInfo, model: ApiModel, task: string): number {
  // In a real scenario, this would be more complex and might depend on the specific task
  return api.baseCost * (model.includes("3") || model.includes("5") ? 1.5 : 1);
}

// Example usage
try {
  const selectedApi = selectApi("generate realistic portrait", 0.05, "photorealistic", 8);
  console.log(`Selected API: ${selectedApi.name}`);
  console.log(`Selected model: ${selectedApi.model}`);
  console.log(`Estimated cost: $${selectedApi.estimatedCost.toFixed(3)}`);
} catch (error) {
  console.error((error as Error).message);
}
