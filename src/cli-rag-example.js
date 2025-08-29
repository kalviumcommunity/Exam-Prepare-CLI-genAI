// src/cli-rag-example.js
import { buildRagPrompt } from "./rag.js";

const topic = process.argv[2] || "Sample Topic";

async function main() {
  const prompt = await buildRagPrompt(topic);
  console.log("=== RAG Prompt ===");
  console.log(JSON.stringify(prompt, null, 2));
}

main();
