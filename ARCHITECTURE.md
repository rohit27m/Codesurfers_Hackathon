# Architecture Overview

This document describes the planned architecture for the AI Personalized Storytelling application.

## Layers
- UI (components)
- State (contexts + hooks)
- Domain Logic (prompt builder, post-processing)
- Provider Adapters (AI service implementations)
- Persistence (localStorage now, extensible later)

## Data Flow (MVP)
```
[User Input Forms] -> buildStoryPrompt() -> useAICompletion() -> StoryContext updates -> StoryDisplay
```

## Key Concepts
### Prompt Composition
`promptBuilder.js` will assemble:
- System instructions (style, safety, brevity)
- User narrative seed (idea, genre, tone)
- Character sheet (names, roles, traits)
- Personalization controls (reading level, target length)

### Streaming
Future: incremental display via fetch streaming or provider SDK.

### State Ownership
- `StoryContext`: current story text, generation status.
- `PersonalizationContext`: user preferences.
- `AIProviderContext`: active model + settings.

### Extensibility
Provider adapters implement a common function signature: 
```
async function fetchCompletion({ prompt, model, temperature }) -> { content, usage }
```

### Safety & Moderation (Future)
Add pre- and post- filters, disallowed topic detection, age-level adjustment.

### Performance Considerations
- Debounce user inputs before generating preview prompts.
- Cache last N prompts & results in localStorage.
- Lazy-load heavy provider SDKs.

## Component Sketch
- StoryInput
- CharacterForm
- PersonalizationSettings
- StoryDisplay
- LoadingSpinner

## Future Diagram (not yet implemented)
```
User -> Forms -> PromptBuilder -> AIService -> Stream Parser -> PostProcess -> State -> UI
```
