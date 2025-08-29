import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runZeroShot() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Translate the sentence 'How are you?' into French." }
      ],
    });

    console.log("Zero Shot Response:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

runZeroShot();
