# AI Personalized Storytelling

An open-source React + Vite project for generating personalized, age‑appropriate stories with local (privacy‑friendly) or hosted AI models. This repo is currently an MVP scaffold with Ollama (local model) integration and placeholder logic you can extend.

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

## Quick Start (Most Common Commands)
| Goal | Command | Notes |
|------|---------|-------|
| Install dependencies | `npm install` | Run once after cloning |
| Start dev server | `npm run dev` | Opens on http://localhost:5173/ |
| Build production bundle | `npm run build` | Output in `dist/` |
| Preview production build | `npm run preview` | Serves built `dist/` |
| Pull default Ollama model | `ollama pull mistral` | Replace with another model if desired |
| Test local model | `ollama run mistral "Hello"` | Verifies model works |
| Change AI provider model | Edit `src/contexts/AIProviderContext.jsx` | Set `model` + `name` (e.g. `ollama`) |

## Development Workflow
```bash
# 1. Install deps
npm install

# 2. Ensure Ollama installed & pull a model
ollama pull mistral

# 3. Run dev server
npm run dev

# 4. Open in browser
#   http://localhost:5173/

# 5. Build for production (optional)
npm run build
```

## Core User Flow (Implemented MVP)
1. Enter idea, genre, tone.
2. (Optional) Add characters and personalization settings.
3. Click Generate Story.
4. App builds a prompt and calls the local model via proxy `/ollama`.
5. Story paragraphs render (non‑streaming for now).

## Command -> Function Mapping
| What You Want | Use This | Why |
|---------------|----------|-----|
| Run development UI | `npm run dev` | Fast HMR with Vite |
| Compile for deployment | `npm run build` | Optimized static assets |
| Preview production locally | `npm run preview` | Sanity check build result |
| Switch to a different local model | `ollama pull <model>` + update provider context | Makes new model available |
| Update default AI provider | Edit `AIProviderContext.jsx` | Centralizes model + temperature |
| Adjust prompt logic | Edit `src/services/promptBuilder.js` | Controls structure of AI input |
| Add new utility | Place file in `src/utils/` | Shared helpers kept small |
| Add a new data list | `src/data/` | Keep seed lists separate |

## Extending / Next Steps
- Streaming output: modify `ollamaService` with `stream: true` and parse server-sent chunks.
- Story history: implement localStorage list (`useLocalStorage`) + a new `StoryHistoryList` component.
- Provider switcher UI: expose `setProvider` from `AIProviderContext` via a dropdown.
- Enhanced prompt: include structured character sheet & reading level constraints.
- Safety: add vocabulary filtering and prohibited content scan before display.

## Contribution
PRs welcome after initial implementation. See `CONTRIBUTING.md` (stub) for guidelines.

## License
MIT - see `LICENSE`.

## Disclaimer
No production safety filters included yet. Add content moderation before deploying publicly.

## Troubleshooting (Ollama)
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `Model not found` | Model not pulled | `ollama pull mistral` (or chosen model) |
| Network/CORS error calling `/ollama/api/generate` | Dev server not restarted after proxy change | Stop & re-run `npm run dev` |
| ECONNREFUSED | Ollama daemon not running | Launch Ollama app or run any `ollama run` command |
| Empty story | Model returned short/empty response | Adjust idea / tone or temperature |
| Slow generation | Large model on weak CPU | Pull a smaller model (e.g. `phi3`) |

### Change Default Model
Edit: `src/contexts/AIProviderContext.jsx`
```js
const [provider, setProvider] = useState({ name: 'ollama', model: 'phi3', temperature: 0.8 });
```
Then pull it:
```bash
ollama pull phi3
```

### Switch to Another Provider (Placeholder OpenAI)
1. Set `name: 'openai'` + model.
2. Add `VITE_OPENAI_API_KEY` to `.env`.
3. Implement real network call in `openaiService.js` (currently mock).

## FAQ
**Q: Why not streaming yet?**  Simplicity first; add streaming once core UX stable.
**Q: Can I deploy this serverlessly?** Yes, it builds to static assets; but local model inference won’t work on a static host—use a backend or hosted model.
**Q: Where do I add tests?** Create `tests/` or colocate with source once logic grows; start with utilities.
**Q: How do I save stories?** Implement a `StoryHistoryContext` + persist to localStorage (see Extending section).

## Contribution
PRs welcome after initial implementation. See `CONTRIBUTING.md`.

## License
MIT - see `LICENSE`.

## Disclaimer
No production safety filters included yet. Add content moderation before deploying publicly.
