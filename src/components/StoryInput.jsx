import React, { useState } from 'react';
import { GENRES } from '../data/genres.js';
import { TONES } from '../data/tones.js';

export function StoryInput({ onGenerate, disabled }) {
  const [idea, setIdea] = useState('A young explorer finds a hidden forest portal');
  const [genre, setGenre] = useState('Fantasy');
  const [tone, setTone] = useState('Whimsical');

  function submit(e) {
    e.preventDefault();
    onGenerate?.({ idea, genre, tone });
  }

  return (
    <section>
      <h2>Story Seed</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: '0.75rem', maxWidth: 600 }}>
        <label style={{ display: 'grid', gap: 4 }}>
          <span>Idea</span>
          <textarea value={idea} onChange={e => setIdea(e.target.value)} rows={3} required style={{ resize: 'vertical', padding: 8, borderRadius: 6 }} />
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label style={{ flex: 1, display: 'grid', gap: 4 }}>
            <span>Genre</span>
            <select value={genre} onChange={e => setGenre(e.target.value)}>{GENRES.map(g => <option key={g}>{g}</option>)}</select>
          </label>
          <label style={{ flex: 1, display: 'grid', gap: 4 }}>
            <span>Tone</span>
            <select value={tone} onChange={e => setTone(e.target.value)}>{TONES.map(t => <option key={t}>{t}</option>)}</select>
          </label>
        </div>
        <button type="submit" disabled={disabled || !idea.trim()} style={{ padding: '0.6rem 1.1rem', borderRadius: 8, background: 'var(--accent)', color: 'white', border: 'none', cursor: 'pointer', opacity: disabled ? 0.6 : 1 }}>
          {disabled ? 'Generating...' : 'Generate Story'}
        </button>
      </form>
    </section>
  );
}
