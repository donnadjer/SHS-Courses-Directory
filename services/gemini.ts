import { GoogleGenAI, Type } from "@google/genai";
import { CourseCategory } from "../types";
import { REGIONS } from "../constants";

export interface GeneratedSchoolData {
  description: string;
  location: string;
  region: string;
  courses: CourseCategory[];
  website?: string;
}

export const generateSchoolDetails = async (schoolName: string): Promise<GeneratedSchoolData | null> => {
  try {
    // Initialize Gemini inside the function to ensure the API key is current,
    // especially if set via window.aistudio.openSelectKey() just before this call.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      I need information about a Senior High School in Ghana named "${schoolName}".
      Please provide a brief description (max 2 sentences), its likely location (city/town), the Region it is in, and a list of courses it likely offers.
      The courses MUST be selected from this exact list:
      [${Object.values(CourseCategory).join(', ')}].
      Also provide a website URL if known, otherwise null.
      If the school is not a real or known school in Ghana, provide generic plausible details for a Ghanian school.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            location: { type: Type.STRING },
            region: { type: Type.STRING, enum: REGIONS },
            courses: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING, enum: Object.values(CourseCategory) } 
            },
            website: { type: Type.STRING, nullable: true }
          },
          required: ["description", "location", "region", "courses"],
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return null;

    const data = JSON.parse(jsonText) as GeneratedSchoolData;
    return data;
  } catch (error) {
    console.error("Error generating school details:", error);
    return null;
  }
};

export const generateSchoolImage = async (schoolName: string, region: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash-image';
    
    const prompt = `A photorealistic wide shot of a senior high school campus in Ghana, specifically ${schoolName} located in ${region}. The image should feature a main administration block or classroom block with Ghanaian architectural style, blue sky, and perhaps some greenery. High quality, educational setting.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [{ text: prompt }]
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating school image:", error);
    return null;
  }
};