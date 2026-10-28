# DuaJiwa — Digital Invitation Marketplace Concept

A React/Vite storefront concept for browsing digital wedding invitation designs and starting an inquiry through WhatsApp. The project explores a lightweight catalog, visual previews, and a subdomain-based invitation delivery path.

[View the frontend demo](https://duajiwa-alpha.vercel.app)

## Implemented experience

- Responsive landing page with invitation template cards, categories, and preview interactions.
- Design details, illustrative pricing, and a WhatsApp inquiry flow.
- Hostname-based routing: the main site renders the marketplace, while a subdomain requests invitation data from an API.
- Explicit loading and not-found states for the invitation-data request.

## Stack and structure

| Layer | Source |
| --- | --- |
| UI | React 19, Vite 8, Tailwind CSS 4, Lucide icons |
| Marketplace | [`src/pages/HomePage.jsx`](src/pages/HomePage.jsx) |
| Invitation route | [`src/pages/InvitationPage.jsx`](src/pages/InvitationPage.jsx) |
| API adapter | [`src/utils/api.js`](src/utils/api.js) |

## Run locally

Requirements: Node.js compatible with Vite 8 and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The marketplace screen uses local sample catalog data; no backend is needed to explore that page.

To test subdomain invitation lookup, configure `VITE_API_URL` for a compatible invitation API. Client-exposed `VITE_` variables must never contain secrets. The corresponding API needs to provide `GET /api/invitations/:subdomain`.

```bash
npm run lint
npm run build
npm run preview
```

## Current boundaries

- Template listings, views, likes, ratings, and prices are illustrative UI content, not verified sales or live marketplace metrics.
- Invitation detail currently displays fetched JSON for inspection; it is **not** a finished invitation renderer.
- The WhatsApp flow starts an inquiry; it does not complete checkout or process payment.
- Invitation creation API utilities exist, but this repository does not demonstrate a complete publisher/admin workflow.

**Status:** Frontend concept/prototype. Appropriate as a small UI case study with those limitations, rather than a claim of a launched end-to-end invitation platform.
