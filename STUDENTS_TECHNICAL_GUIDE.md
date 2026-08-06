# NOSA Technical Guide (Short)

## How data works right now
- The app uses mock data in `src/data/mock`.
- Pages do not import mock arrays directly.
- Instead they call functions from `src/lib/data.ts` such as `getImages()` or `getTimelapses()`.

## Why this matters
This makes it easy to replace mock data with real APIs later without rewriting every page.

## Exhibition mode
- Controlled by environment variables in `.env`.
- `NOSA_APP_MODE=exhibition` enables inactivity reset behavior.
- Download buttons are disabled in exhibition mode by configuration.

## Next extension steps
1. Add API routes under `src/app/api`.
2. Replace `src/lib/data.ts` implementation with API calls.
3. Keep the same function names so UI code stays stable.
