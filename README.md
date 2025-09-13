# AI Personalized Storytelling (Skeleton)

Open-source scaffold for an AI-powered personalized storytelling web app built with React + Vite. This repository currently contains only placeholder logic & structure — no real AI calls yet.

## Vision
Enable users (especially educators, parents, young readers) to generate safe, age-appropriate, customizable stories with adjustable tone, genre, characters, and reading level.

## Status
Early scaffold: components, contexts, hooks, and services are stubs. Use this as a starting point to implement real functionality.

## Tech Stack (planned)
- React 18 + Vite
- Provider-agnostic AI layer (OpenAI, others later)
- Local storage for MVP persistence

## High-Level Flow
1. User enters idea + selects genre & tone.
2. Adds characters and personalization settings.
3. Prompt builder composes system & user prompts.
4. AI streaming response populates story paragraphs.
5. User can save, edit, branch, export (future).

## Directory Structure
```
src/
  components/        # UI primitives & sections
  contexts/          # React context providers
  hooks/             # Custom hooks
  services/          # AI + persistence abstractions
  utils/             # Generic helpers
  data/              # Seed lists (genres, tones, etc.)
```

## Roadmap (excerpt)
See `ROADMAP.md` for full list.
- MVP: idea input, character builder, AI story generation, display.
- Phase 2: editing segments, history, export.
- Phase 3: illustrations, narration, collaboration.

## Environment Variables
Create a `.env` from `.env.example` once real API calls are added.
```
VITE_AI_PROVIDER=openai
VITE_OPENAI_API_KEY=sk-...
```
Never commit real keys.

## Development
Install dependencies once you decide to implement:
```bash
npm install
npm run dev
```

## Contribution
PRs welcome after initial implementation. See `CONTRIBUTING.md` (stub) for guidelines.

## License
MIT - see `LICENSE`.

## Disclaimer
No production safety filters included yet. Add content moderation before deploying publicly.

## Troubleshooting (Ollama)
Error: `Model not found. Pull it first: ollama pull mistral`
- Run: `ollama pull mistral`
- Test: `ollama run mistral "Hello"`
- If proxy 404: ensure dev server restarted after editing `vite.config.js`.
- If network blocked: check firewall allows localhost:11434.

Change default model:
- Edit `src/contexts/AIProviderContext.jsx` and set `model` to one you have pulled (e.g. `phi3`), then `ollama pull phi3`.
