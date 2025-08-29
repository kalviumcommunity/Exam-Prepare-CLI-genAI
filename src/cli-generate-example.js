// src/cli-generate-example.js
import { getSystemPrompt, getUserPrompt } from './prompts.js';

const topic = process.argv[2] || "Sample Topic";

console.log("=== System Prompt ===");
console.log(getSystemPrompt());

console.log("\n=== User Prompt ===");
console.log(getUserPrompt(topic));
