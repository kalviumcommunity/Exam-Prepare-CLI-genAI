import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chainOfThoughtExample() {
  const prompt = `
Q: A train travels 60 km in 1 hour. How long will it take to travel 180 km?
Think step by step.
A:
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  console.log("Chain of Thought Example:\n");
  console.log(response.choices[0].message.content);
}

chainOfThoughtExample();
