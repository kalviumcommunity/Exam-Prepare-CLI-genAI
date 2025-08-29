// tests/embeddings.test.js
import { addDocument, search, clearStore, getAllDocs } from '../src/embeddings.js';

jest.setTimeout(30000);

describe('embeddings vector store', () => {
  beforeAll(async () => {
    await clearStore();
  });

  test('addDocument and getAllDocs', async () => {
    await addDocument({ title: "T1", content: "Alpha beta gamma" });
    const docs = await getAllDocs();
    expect(docs.length).toBeGreaterThanOrEqual(1);
    expect(docs[0]).toHaveProperty('embedding');
  });

  test('search returns relevant doc', async () => {
    await clearStore();
    await addDocument({ title: "Closures", content: "A closure captures variables from its parent scope."});
    await addDocument({ title: "Arrays", content: "Array methods include map, filter, reduce."});
    const results = await search("closure capturing variables", 1);
    expect(results.length).toBe(1);
    expect(results[0].title.toLowerCase()).toContain('closure');
  });
});
