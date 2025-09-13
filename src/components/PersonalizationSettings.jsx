import React, { useState } from 'react';
import { AGE_LEVELS } from '../data/ageLevels.js';

export function PersonalizationSettings({ onChange }) {
  const [readingLevel, setReadingLevel] = useState('middle-grade');
  const [targetLength, setTargetLength] = useState('short');
  const [language, setLanguage] = useState('en');

  function emit(next) { onChange?.(next); }

  function handle(setter, key) {
    return (e) => { const value = e.target.value; setter(value); emit({ readingLevel, targetLength, language, [key]: value }); };
  }

  return (
    <section>
      <h2>Personalization</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <label style={{ display: 'grid', gap: 4 }}>
          <span>Reading Level</span>
          <select value={readingLevel} onChange={e => { const v = e.target.value; setReadingLevel(v); emit({ readingLevel: v, targetLength, language }); }}>
            {AGE_LEVELS.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>
        </label>
        <label style={{ display: 'grid', gap: 4 }}>
          <span>Target Length</span>
          <select value={targetLength} onChange={e => { const v = e.target.value; setTargetLength(v); emit({ readingLevel, targetLength: v, language }); }}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </label>
        <label style={{ display: 'grid', gap: 4 }}>
          <span>Language</span>
          <select value={language} onChange={e => { const v = e.target.value; setLanguage(v); emit({ readingLevel, targetLength, language: v }); }}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>
    </section>
  );
}
