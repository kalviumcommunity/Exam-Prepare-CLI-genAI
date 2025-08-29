import OpenAI from "openai";

const client = new OpenAI();

const prompt = "Suggest three unique ice cream flavors.";

const run = async () => {
  for (const p of [0.3, 0.7, 1.0]) {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
      top_p: p,
    });

    console.log(`\n--- top_p: ${p} ---`);
    console.log(response.choices[0].message.content);
  }
};

run();
