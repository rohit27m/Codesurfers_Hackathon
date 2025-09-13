import React, { useState } from 'react';

export function CharacterForm({ onChange }) {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('Luna');
  const [role, setRole] = useState('Protagonist');
  const [traits, setTraits] = useState('curious, brave');

  function addCharacter(e) {
    e.preventDefault();
    const c = { id: crypto.randomUUID(), name: name.trim(), role: role.trim(), traits: traits.split(',').map(t => t.trim()).filter(Boolean) };
    const next = [...characters, c];
    setCharacters(next);
    onChange?.(next);
    setName('');
    setRole('');
    setTraits('');
  }

  function remove(id) {
    const next = characters.filter(c => c.id !== id);
    setCharacters(next);
    onChange?.(next);
  }

  return (
    <section>
      <h2>Characters</h2>
      <form onSubmit={addCharacter} style={{ display: 'grid', gap: '0.5rem', maxWidth: 600 }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required style={{ flex: 1 }} />
          <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)} required style={{ flex: 1 }} />
        </div>
        <input placeholder="Traits (comma separated)" value={traits} onChange={e => setTraits(e.target.value)} />
        <button disabled={!name.trim() || !role.trim()} style={{ width: 'fit-content', padding: '0.4rem 0.9rem', borderRadius: 6, background: '#333', color: 'white', border: '1px solid #444' }}>Add Character</button>
      </form>
      {!!characters.length && (
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', lineHeight: 1.4 }}>
          {characters.map(c => (
            <li key={c.id} style={{ marginBottom: 4 }}>
              <strong>{c.name}</strong> – {c.role} – {c.traits.join(', ')}{' '}
              <button onClick={() => remove(c.id)} style={{ marginLeft: 8, background: 'transparent', color: '#f87171', border: 'none', cursor: 'pointer' }}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
