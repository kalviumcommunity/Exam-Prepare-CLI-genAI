// src/cli-structured-example.js
import { getStructuredOutputExample } from "./output-schema.js";

console.log("=== Structured Output Example ===");
console.log(JSON.stringify(getStructuredOutputExample(), null, 2));
