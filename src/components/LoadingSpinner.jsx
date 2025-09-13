import React from 'react';

export function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span className="spinner" aria-hidden>⏳</span>
      <span>{label}</span>
    </div>
  );
}
