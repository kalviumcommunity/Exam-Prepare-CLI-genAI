// src/prompts.js

export function getSystemPrompt() {
  return `You are ExamPrepareCLI, an AI tutor that generates high-quality multiple-choice mock test questions.
Rules:
- Always return 4 options with exactly one correct answer.
- Be concise and accurate.
- Output questions in JSON format (to be parsed later).`;
}

export function getUserPrompt(topic) {
  return `Generate 3 multiple-choice questions about: ${topic}`;
}

export function buildPrompt(topic) {
  return {
    role: "system",
    content: getSystemPrompt()
  };
}
