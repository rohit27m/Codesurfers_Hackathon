import React, { createContext, useContext, useState } from 'react';

// Minimal placeholder context. Will hold story state & actions in future.
const StoryContext = createContext(null);

export function StoryProvider({ children }) {
  const [story, setStory] = useState({ paragraphs: [], status: 'idle' });
  const value = { story, setStory };
  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>;
}

export function useStory() {
  const ctx = useContext(StoryContext);
  if (!ctx) throw new Error('useStory must be used within StoryProvider');
  return ctx;
}
