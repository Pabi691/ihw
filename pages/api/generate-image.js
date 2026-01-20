import { GoogleGenAI, PersonGeneration } from "@google/genai";

// console.log('apiKey', process.env.GEMINI_API_KEY);
// console.log('REACT_APP_WEB_TOKEN', process.env.REACT_APP_WEB_TOKEN);
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});




export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  try {
    const imageResponse = await ai.models.generateImages({
      model: 'imagen-4.0-generate-preview-06-06',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: '1:1',
        outputMimeType: 'image/jpeg',
        personGeneration: PersonGeneration.ALLOW_ADULT,
      },
    });

    if (imageResponse.generatedImages && imageResponse.generatedImages.length > 0) {
      res.status(200).json({ imageUrl: imageResponse.generatedImages[0].url });
    } else {
      res.status(500).json({ error: 'No image was generated.' });
    }
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image.', details: error.message });
  }
}