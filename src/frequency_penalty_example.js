import OpenAI from "openai";

const client = new OpenAI();

const prompt = "Write a short poem about the moon.";

// Loop through different penalty values
const run = async () => {
  for (const penalty of [0, 0.5, 1]) {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 80,
      frequency_penalty: penalty,
    });

    console.log(`\n--- frequency_penalty: ${penalty} ---`);
    console.log(response.choices[0].message.content);
  }
};

run();
