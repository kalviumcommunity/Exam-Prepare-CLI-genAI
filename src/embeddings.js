// src/embeddings.js
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import OpenAI from 'openai';

const VECTOR_STORE_PATH = path.resolve(process.cwd(), 'data/embeddings.json');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ensure file exists
async function ensureStore() {
  try {
    await fs.access(VECTOR_STORE_PATH);
  } catch {
    await fs.mkdir(path.dirname(VECTOR_STORE_PATH), { recursive: true });
    await fs.writeFile(VECTOR_STORE_PATH, JSON.stringify({ documents: [] }, null, 2));
  }
}

async function readStore() {
  await ensureStore();
  const raw = await fs.readFile(VECTOR_STORE_PATH, 'utf8');
  return JSON.parse(raw);
}

async function writeStore(store) {
  await fs.writeFile(VECTOR_STORE_PATH, JSON.stringify(store, null, 2));
}

export async function embedText(text) {
  if (!text || text.length === 0) return null;
  const resp = await client.embeddings.create({
    model: "text-embedding-3-small", // or a preferred model
    input: text
  });
  return resp.data[0].embedding;
}

function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
}

export async function addDocument({ id, title, content, metadata = {} }) {
  await ensureStore();
  const embedding = await embedText(content);
  const store = await readStore();
  const docId = id ?? crypto.randomUUID();
  store.documents.push({ id: docId, title, content, metadata, embedding });
  await writeStore(store);
  return docId;
}

export async function search(query, topK = 5) {
  const qEmb = await embedText(query);
  const store = await readStore();
  const scored = store.documents
    .map(doc => ({ ...doc, score: cosine(qEmb, doc.embedding) }))
    .sort((a,b) => b.score - a.score)
    .slice(0, topK);
  return scored;
}

export async function clearStore() {
  await writeStore({ documents: [] });
}

export async function getAllDocs() {
  const store = await readStore();
  return store.documents;
}
