from openai import OpenAI

client = OpenAI()

prompt = "Write a short story about a robot learning to dance."

# Top P controls how much probability mass to sample from
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}],
    max_tokens=100,
    temperature=0.7,
    top_p=0.5   # nucleus sampling (only sample from tokens with cumulative prob ≤ 0.5)
)

print(response.choices[0].message["content"])
