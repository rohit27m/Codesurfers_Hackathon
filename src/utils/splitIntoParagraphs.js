export function splitIntoParagraphs(text='') {
  return text.split(/\n{2,}/).map(t => t.trim()).filter(Boolean);
}
