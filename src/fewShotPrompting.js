import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runFewShotPrompt() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that translates English to French." },
        
        // Few-shot examples
        { role: "user", content: "Translate: 'Hello, how are you?'" },
        { role: "assistant", content: "Bonjour, comment ça va ?" },
        
        { role: "user", content: "Translate: 'I love programming.'" },
        { role: "assistant", content: "J'aime programmer." },
        
        // Now the real query
        { role: "user", content: "Translate: 'Have a great day!'" }
      ],
    });

    console.log("Few-Shot Prompt Response:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

runFewShotPrompt();
