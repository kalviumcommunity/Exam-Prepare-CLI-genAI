import OpenAI from "openai";

const client = new OpenAI();

const prompt = "Suggest a fun activity for a group of friends on a weekend.";

// Loop through different k values
const run = async () => {
  for (const k of [1, 5, 20]) {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
      top_k: k,
    });

    console.log(`\n--- top_k: ${k} ---`);
    console.log(response.choices[0].message.content);
  }
};

run();
