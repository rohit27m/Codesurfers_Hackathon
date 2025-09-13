# Contributing Guide (Stub)

## Development Setup
1. Clone repo
2. `npm install`
3. `npm run dev`

## Coding Style
- Prefer functional components
- Keep components focused (SRP)
- Use small pure helpers in `utils/`

## Commit Messages
Conventional style (suggested):
```
feat: add streaming parser
fix: correct reading time calc
chore: update dependencies
```

## Pull Requests
- Link related issue
- Include brief description & screenshots if UI changes
- Add/adjust docs for new features

## Testing (Future)
Will add Vitest/Jest once logic matures.

## Security
Do not commit secrets. Use `.env.example`.
