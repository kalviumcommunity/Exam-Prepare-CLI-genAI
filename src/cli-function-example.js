// src/cli-function-example.js
import { saveTestToFile } from "./functions.js";

async function main() {
  // Simulated AI output
  const generatedTest = {
    questions: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
      }
    ]
  };

  console.log("Simulating AI function call: saveTestToFile...");
  const filePath = await saveTestToFile(generatedTest, "math-sample.json");
  console.log("✅ Test saved at:", filePath);
}

main();

