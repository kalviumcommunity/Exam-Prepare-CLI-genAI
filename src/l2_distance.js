import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to calculate L2 distance
function l2Distance(vecA, vecB) {
  return Math.sqrt(
    vecA.reduce((sum, val, i) => sum + Math.pow(val - vecB[i], 2), 0)
  );
}

async function runL2Distance() {
  const text1 = "I love playing football.";
  const text2 = "Soccer is my favorite sport.";
  const text3 = "I enjoy cooking Italian food.";

  // Create embeddings
  const embedding1 = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text1,
  });

  const embedding2 = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text2,
  });

  const embedding3 = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text3,
  });

  const vector1 = embedding1.data[0].embedding;
  const vector2 = embedding2.data[0].embedding;
  const vector3 = embedding3.data[0].embedding;

  // Compute L2 distances
  console.log(`L2 Distance (Text1 vs Text2): ${l2Distance(vector1, vector2)}`);
  console.log(`L2 Distance (Text1 vs Text3): ${l2Distance(vector1, vector3)}`);
}

runL2Distance();
