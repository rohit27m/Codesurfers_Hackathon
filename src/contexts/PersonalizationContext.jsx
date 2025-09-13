import React, { createContext, useContext, useState } from 'react';

const PersonalizationContext = createContext(null);

export function PersonalizationProvider({ children }) {
  const [prefs, setPrefs] = useState({ readingLevel: 'middle-grade', targetLength: 'short', language: 'en' });
  const value = { prefs, setPrefs };
  return <PersonalizationContext.Provider value={value}>{children}</PersonalizationContext.Provider>;
}

export function usePersonalization() {
  const ctx = useContext(PersonalizationContext);
  if (!ctx) throw new Error('usePersonalization must be used within PersonalizationProvider');
  return ctx;
}
