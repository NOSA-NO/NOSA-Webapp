# NOSA Webapp Foundation

A scalable and student-friendly foundation for the NOSA (Next Orbit School Antenna) satellite web application.

## Goals
- Present satellite imagery in a modern, touch-friendly web experience
- Educate visitors about weather satellites and processing
- Provide architecture that can later connect to APIs, database and cloud storage
- Support both normal web usage and school exhibition touchscreen mode

## Tech Stack
- Next.js (App Router)
- React + TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui-style reusable UI primitives (`src/components/ui`)
- Framer Motion for transitions
- Vitest + Testing Library for basic tests

## Routes
- `/start` — interactive rotating landing experience
- `/live` — prototype live viewer with location + image-type controls
- `/galerie` — gallery with filtering/sorting/search prep
- `/galerie/image/[id]` — detail page with metadata, likes, QR prototype, download toggle
- `/zeitraffer` — timelapse viewer with filters
- `/wissen` + `/wissen/[slug]` — educational article list/detail
- `/partner` — partner cards
- `/das-sind-wir` — project intro + timeline
- `/spiele` — country guessing game prototype
- `/display` — reserved foundation route for future guided exhibition mode

## Architecture

### Data abstraction (important)
UI never maps mock arrays directly in route files. Instead it uses `src/lib/data.ts` functions:
- `getImages()`
- `getImageById()`
- `getLatestSatelliteImage()`
- `getTimelapses()`
- `getArticles()`
- `getPartners()`

Current source: `src/data/mock`.
Future source can be switched to API/database/cloud while preserving function contracts.

### Exhibition mode and downloads
Environment-based configuration in `src/lib/config.ts`:
- `NOSA_APP_MODE=web|exhibition`
- `NOSA_DISABLE_DOWNLOADS=true|false`
- `NOSA_INACTIVITY_TIMEOUT_MS`

In exhibition mode:
- inactivity returns to `/start`
- download actions are disabled by config

## Folder Structure
```text
src/
  app/
  components/
    ui/
    layout/
    gallery/
    live/
    timeline/
    games/
    articles/
    start/
    timelapse/
    partner/
  data/mock/
  lib/
  types/
public/
  demo/images
  demo/videos
  demo/maps
```

## Local Development
```bash
npm install
npm run dev
```

## Quality Commands
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deployment
### Vercel
- Default target platform
- Configure environment variables from `.env.example`

### School server / self-hosted
- Use `Dockerfile` to build and run
- Expose port `3000`
- Configure reverse proxy and HTTPS externally

Build and run with Docker:
```bash
docker build -t nosa-webapp .
docker run -p 3000:3000 --env-file .env.local nosa-webapp
```

## Team Workflow Recommendation
- Keep feature work in small branches
- Use pull requests for review
- Update mock data contracts and UI separately when possible
- Keep `src/lib/data.ts` interface stable while replacing backend implementation
