// Builds system+user prompt strings (placeholder logic)
export function buildStoryPrompt({ idea, genre, tone, characters = [], prefs = {} }) {
  return `You are a creative writing AI. Idea: ${idea || 'N/A'} Genre: ${genre||'general'} Tone: ${tone||'balanced'} ReadingLevel: ${prefs.readingLevel||'middle'} Characters: ${characters.map(c=>c.name).join(', ')}`;
}
