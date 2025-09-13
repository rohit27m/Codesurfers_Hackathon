// Ollama local inference service (non-streaming placeholder)
// Requires Ollama running locally: https://ollama.ai
// Default port: 11434
export async function fetchCompletionOllama({ prompt, model = 'mistral', temperature = 0.8 }) {
  const body = { model, prompt, stream: false, options: { temperature } };
  const res = await fetch('/ollama/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text();
    if (res.status === 404 && /not found/i.test(text)) {
      throw new Error(`Model not found. Pull it first: ollama pull ${model}`);
    }
    throw new Error(`Ollama error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return { content: data.response || '' };
}
