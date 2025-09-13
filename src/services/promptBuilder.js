// Builds system+user prompt strings with proper length constraints
export function buildStoryPrompt({ idea, genre, tone, characters = [], prefs = {} }) {
  const { readingLevel = 'middle-grade', targetLength = 'short', language = 'en' } = prefs;
  
  // Map target length to specific constraints
  const lengthMap = {
    short: 'Write a brief story (2-3 paragraphs, about 150-300 words)',
    medium: 'Write a medium-length story (4-6 paragraphs, about 400-600 words)', 
    long: 'Write a longer story (7-10 paragraphs, about 700-1000 words)'
  };
  
  const lengthInstruction = lengthMap[targetLength] || lengthMap.short;
  
  // Map reading level to vocabulary constraints
  const levelMap = {
    'early': 'Use simple words and short sentences suitable for ages 5-7',
    'middle-grade': 'Use age-appropriate vocabulary and varied sentence structure for ages 8-12',
    'ya': 'Use more sophisticated vocabulary and complex sentences for ages 13-17'
  };
  
  const levelInstruction = levelMap[readingLevel] || levelMap['middle-grade'];
  
  const systemPrompt = `You are a creative storytelling assistant. ${lengthInstruction}. ${levelInstruction}. Keep the tone ${tone || 'balanced'} and make it engaging.`;
  
  const characterInfo = characters.length > 0 
    ? `\n\nCharacters to include:\n${characters.map(c => `- ${c.name} (${c.role}): ${c.traits.join(', ')}`).join('\n')}`
    : '';
  
  const userPrompt = `Write a ${genre || 'general'} story based on this idea: "${idea || 'A simple adventure'}"${characterInfo}`;
  
  return `${systemPrompt}\n\n${userPrompt}`;
}
