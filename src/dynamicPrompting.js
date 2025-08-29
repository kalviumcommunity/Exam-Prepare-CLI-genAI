import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// user input (could come from frontend / CLI / DB)
const topic = "quantum physics";
const level = "beginner";

async function runDynamicPrompt() {
  try {
    const prompt = `Explain ${topic} in simple terms for a ${level} student.`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful tutor." },
        { role: "user", content: prompt }
      ],
    });

    console.log("Dynamic Prompt Response:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

runDynamicPrompt();
