// Placeholder: wraps AI completion streaming once implemented.
import { useState } from 'react';
import { useAIProvider } from '../contexts/AIProviderContext.jsx';
import { fetchCompletionOllama } from '../services/ollamaService.js';
import { fetchCompletion } from '../services/openaiService.js';

export function useAICompletion() {
  const { provider } = useAIProvider();
  const [state, setState] = useState({ status: 'idle', chunks: [], error: null });

  async function generate(prompt) {
    if (!prompt) return;
    setState({ status: 'loading', chunks: [], error: null });
    try {
      let result;
      if (provider.name === 'ollama') {
        result = await fetchCompletionOllama({ prompt, model: provider.model, temperature: provider.temperature });
      } else if (provider.name === 'openai') {
        result = await fetchCompletion({ prompt, model: provider.model, temperature: provider.temperature });
      } else {
        throw new Error('Unsupported provider: ' + provider.name);
      }
  const text = result.content || '';
  setState({ status: 'success', chunks: [text], error: null });
  return text;
    } catch (err) {
  setState({ status: 'error', chunks: [], error: err.message });
  throw err;
    }
  }

  return { ...state, generate };
}
