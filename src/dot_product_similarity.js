import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to calculate dot product
function dotProduct(vecA, vecB) {
  return vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
}

async function runDotProductSimilarity() {
  const text1 = "Artificial intelligence is transforming technology.";
  const text2 = "Machine learning is a part of AI.";
  const text3 = "I enjoy swimming in the ocean.";

  // Generate embeddings
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

  // Compute dot product similarities
  console.log(`Dot Product (Text1 vs Text2): ${dotProduct(vector1, vector2)}`);
  console.log(`Dot Product (Text1 vs Text3): ${dotProduct(vector1, vector3)}`);
}

runDotProductSimilarity();
