import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function stopSequenceExample() {
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "List three fruits, but stop when you reach banana.",
      },
    ],
    stop: ["banana"], // stop sequence
  });

  console.log(completion.choices[0].message.content);
}

stopSequenceExample();
