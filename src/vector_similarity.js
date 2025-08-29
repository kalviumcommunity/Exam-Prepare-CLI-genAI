import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Cosine similarity function
function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

async function vectorSimilarityExample() {
  // Two sentences to compare
  const sentence1 = "The cat is sleeping on the couch.";
  const sentence2 = "A dog is resting on the sofa.";

  // Create embeddings
  const embedding1 = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: sentence1,
  });

  const embedding2 = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: sentence2,
  });

  const vector1 = embedding1.data[0].embedding;
  const vector2 = embedding2.data[0].embedding;

  // Compute similarity
  const similarity = cosineSimilarity(vector1, vector2);

  console.log(`Cosine Similarity: ${similarity}`);
}

vectorSimilarityExample();
