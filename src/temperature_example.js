import OpenAI from "openai";

const client = new OpenAI();

const prompt = "Write a tagline for a futuristic electric bike.";

const run = async () => {
  for (const temp of [0.2, 0.7, 1.2]) {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
      temperature: temp,
    });

    console.log(`\n--- Temperature: ${temp} ---`);
    console.log(response.choices[0].message.content);
  }
};

run();
