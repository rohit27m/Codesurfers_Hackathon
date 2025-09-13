# Prompt Engineering Notes (Planned)

## Objectives
- Maintain consistent age-appropriate tone
- Keep narrative coherent with character traits
- Allow style modulation (whimsical, dark, humorous, inspiring)
- Support adjustable reading level

## Template Draft (Pseudocode)
```
SYSTEM: You are an expert children’s storyteller. Write vivid, safe, age-appropriate prose. Avoid violence or mature themes. Keep sentences clear and varied.

USER: IDEA: <idea>
GENRE: <genre>
TONE: <tone>
READING_LEVEL: <level>
TARGET_LENGTH: <short|medium|long>
CHARACTERS:
- Name: <name>, Role: <role>, Traits: <traits>

Write the story in paragraphs. Do not include meta commentary.
```

## Variables
- idea: free text seed
- genre: curated list from `data/genres.js`
- tone: curated list from `data/tones.js`
- reading level: maps to constraints (avg sentence length, vocabulary tier)
- target length: influences approximate paragraph count

## Post-Processing (Future)
- Adjust complexity if readability scores exceed threshold
- Ensure proper paragraph breaks
- Normalize quotes & punctuation

## Evaluation Metrics (Future)
- Flesch-Kincaid estimate
- Unique character name consistency
- Offensive / disallowed term scan
