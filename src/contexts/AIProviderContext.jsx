import React, { createContext, useContext, useState } from 'react';

const AIProviderContext = createContext(null);

export function AIProvider({ children }) {
  const [provider, setProvider] = useState({ name: 'ollama', model: 'mistral', temperature: 0.8 });
  const value = { provider, setProvider };
  return <AIProviderContext.Provider value={value}>{children}</AIProviderContext.Provider>;
}

export function useAIProvider() {
  const ctx = useContext(AIProviderContext);
  if (!ctx) throw new Error('useAIProvider must be used within AIProvider');
  return ctx;
}
