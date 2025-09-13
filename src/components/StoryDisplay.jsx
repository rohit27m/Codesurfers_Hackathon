import React from 'react';
import { useStory } from '../contexts/StoryContext.jsx';

export function StoryDisplay({ generationState }) {
  const { story } = useStory();
  const { status, error } = generationState || {}; // from hook

  return (
    <section>
      <h2>Story</h2>
      {status === 'idle' && <p style={{ opacity: 0.7 }}>No story yet. Enter details and generate.</p>}
      {status === 'loading' && <p>Generating story...</p>}
      {status === 'error' && <p style={{ color: '#f87171' }}>Error: {error}</p>}
      {status === 'success' && story.paragraphs.length === 0 && <p>(No content)</p>}
      {story.paragraphs.map((p, i) => (
        <p key={i} style={{ lineHeight: 1.55 }}>{p}</p>
      ))}
    </section>
  );
}
