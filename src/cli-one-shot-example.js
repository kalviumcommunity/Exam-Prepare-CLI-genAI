// src/cli-one-shot-example.js
import { getSystemPrompt, getUserPrompt, getOneShotPrompt } from './prompts.js';

const topic = process.argv[2] || "Sample Topic";

console.log("=== System Prompt ===");
console.log(getSystemPrompt());

console.log("\n=== One-Shot Example ===");
console.log(getOneShotPrompt().content);

console.log("\n=== User Prompt ===");
console.log(getUserPrompt(topic));
