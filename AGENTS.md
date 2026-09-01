# Base44 Setup Notes

## Project
Static GitHub Repo Gallery — vanilla HTML/CSS/JS, no build step, no dependencies.

## Running
- Served by nginx (alpine) on host port 3000 via `docker-compose.base44.yml`.
- Source is bind-mounted read-only at `/usr/share/nginx/html`; edits appear on browser refresh (call `reload_preview` to force the iframe to refresh).
- No backend, no database, no build step.

## Secrets
None required. The app calls the public GitHub API unauthenticated (subject to GitHub's rate limits).

## Verification
- `curl -sf http://localhost:3000/` returns the HTML page.
- The preview loads the profile and repo list from the GitHub API for user `Asanag10` (hardcoded in `js/script.js`).
