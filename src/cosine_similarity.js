import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to calculate cosine similarity
function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

async function runCosineSimilarity() {
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

  // Compute similarities
  console.log(`Similarity (Text1 vs Text2): ${cosineSimilarity(vector1, vector2)}`);
  console.log(`Similarity (Text1 vs Text3): ${cosineSimilarity(vector1, vector3)}`);
}

runCosineSimilarity();
