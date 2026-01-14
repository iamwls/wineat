
import { GoogleGenAI, Type } from "@google/genai";
import { Wine, RecommendationResult } from "../types";

export const getWineRecommendations = async (food: string, budget: string): Promise<Wine[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class sommelier. A user wants to eat "${food}" and has a budget of "${budget}". 
      Recommend the top 3 best matching wines. 
      Provide BOTH the global/original name and a natural Korean translation.
      The pairing reason must be friendly and end with "~요" style.
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
                  name: { type: Type.STRING },
                  nameKo: { type: Type.STRING },
                  type: { type: Type.STRING, enum: ['Red', 'White', 'Sparkling', 'Rosé', 'Dessert'] },
                  priceRange: { type: Type.STRING },
                  pairingReason: { type: Type.STRING },
                  score: { type: Type.NUMBER }
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
