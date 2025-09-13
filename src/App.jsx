import React, { useState } from 'react';
import { StoryInput } from './components/StoryInput.jsx';
import { CharacterForm } from './components/CharacterForm.jsx';
import { PersonalizationSettings } from './components/PersonalizationSettings.jsx';
import { StoryDisplay } from './components/StoryDisplay.jsx';
import { useAICompletion } from './hooks/useAICompletion.js';
import { buildStoryPrompt } from './services/promptBuilder.js';
import { useStory } from './contexts/StoryContext.jsx';

export default function App() {
  const { setStory } = useStory();
  const ai = useAICompletion();
  const [seed, setSeed] = useState({ idea: '', genre: '', tone: '' });
  const [characters, setCharacters] = useState([]);
  const [prefs, setPrefs] = useState({});

  async function handleGenerate(partial) {
    const nextSeed = { ...seed, ...partial };
    setSeed(nextSeed);
    const prompt = buildStoryPrompt({ ...nextSeed, characters, prefs });
    try {
      const text = await ai.generate(prompt);
      if (text) {
        setStory({ paragraphs: text.split(/\n+/).filter(Boolean), status: 'ready' });
      }
    } catch (e) {
      // error handled in hook state; no-op
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: 1000, margin: '0 auto', display: 'grid', gap: '2rem' }}>
      <header>
        <h1 style={{ margin: 0 }}>AI Personalized Storytelling</h1>
        <p style={{ opacity: 0.75, marginTop: '0.25rem' }}>Local model generation via Ollama (non-streaming demo).</p>
      </header>
      <StoryInput onGenerate={handleGenerate} disabled={ai.status === 'loading'} />
      <CharacterForm onChange={setCharacters} />
      <PersonalizationSettings onChange={setPrefs} />
      <StoryDisplay generationState={ai} />
    </div>
  );
}
