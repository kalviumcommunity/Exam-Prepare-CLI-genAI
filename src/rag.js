// src/rag.js
import { search } from './embeddings.js';

export async function retrieveContext(topic, topK = 3) {
  const hits = await search(topic, topK);
  // combine into one context string (trim to reasonable length if needed)
  return hits.map((h, i) => `### Source ${i+1}: ${h.title}\n${h.content}`).join('\n\n');
}
