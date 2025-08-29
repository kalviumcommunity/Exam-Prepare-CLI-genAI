// src/cli-multi-shot-example.js
import { getSystemPrompt, getUserPrompt, getMultiShotPrompt } from './prompts.js';

const topic = process.argv[2] || "Sample Topic";

console.log("=== System Prompt ===");
console.log(getSystemPrompt());

console.log("\n=== Multi-Shot Examples ===");
getMultiShotPrompt().forEach(ex => console.log(ex.content));

console.log("\n=== User Prompt ===");
console.log(getUserPrompt(topic));
