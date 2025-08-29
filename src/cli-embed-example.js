// src/cli-embed-example.js
import { addDocument, search, clearStore, getAllDocs } from './embeddings.js';

async function main() {
  console.log("Adding sample docs...");
  await clearStore();
  await addDocument({ title: "JS Closures - Notes", content: "A closure is a function having access to the parent scope..."});
  await addDocument({ title: "JS Scopes", content: "JavaScript has function scope and block scope with let/const..."});
  console.log("Searching for 'how closures capture variables' ...");
  const results = await search("how closures capture variables", 3);
  console.log(results.map(r => ({title: r.title, score: r.score})));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
