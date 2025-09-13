// Placeholder service adapter for OpenAI (no network call implemented).
export async function fetchCompletion({ prompt, model = 'gpt-4o-mini', temperature = 0.8 }) {
  // Intentionally not implementing: user will supply API key & real call.
  // Return mock structure.
  return { id: 'mock', model, content: 'Once upon a time (placeholder)...', usage: { tokens: 42 } };
}
