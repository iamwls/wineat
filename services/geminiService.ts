
import { GoogleGenAI, Type } from "@google/genai";
import { Wine, RecommendationResult } from "../types";

const ai = new GoogleGenAI({
  apiKey: (globalThis as any)?.process?.env?.VITE_GEMINI_API_KEY || "",
 });

export const getWineRecommendations = async (food: string, budget: string): Promise<Wine[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class sommelier. A user wants to eat "${food}" and has a budget of approximately "${budget}". 
      Recommend the top 3 best matching wines that fit this budget. 
      For each wine, provide BOTH the global/original name and a natural Korean translation/name.
      The pairing reason should be friendly, polite, and must end with the "~요" style in Korean (e.g., "잘 어울려요", "추천드려요").
      Output the results in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ranking: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "Original/Global name of the wine" },
                  nameKo: { type: Type.STRING, description: "Korean name of the wine" },
                  type: { type: Type.STRING, enum: ['Red', 'White', 'Sparkling', 'Rosé', 'Dessert'] },
                  priceRange: { type: Type.STRING, description: "Estimated price range (e.g., 3-5만원)" },
                  pairingReason: { type: Type.STRING, description: "1-2 sentence explanation of why it pairs well" },
                  score: { type: Type.NUMBER, description: "Matching score out of 100" }
                },
                required: ["name", "nameKo", "type", "priceRange", "pairingReason", "score"]
              }
            }
          },
          required: ["ranking"]
        }
      }
    });

    const result = JSON.parse(response.text || '{"ranking": []}') as RecommendationResult;
    return result.ranking;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
