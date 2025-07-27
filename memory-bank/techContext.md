# TECH CONTEXT: Menhausen Telegram Mini App

## TECHNOLOGY STACK
- **Frontend:** Next.js, React 18+, Vite, Tailwind CSS v4, TypeScript
- **Backend:** Firebase (Firestore, Functions, Hosting)
- **CI/CD:** Netlify (Mini App), Firebase Hosting (CMS), GitHub Actions
- **Internationalization:** i18n (auto-detect via Telegram)
- **Encryption:** AES-256-GCM (CryptoJS)
- **Charting:** For mood graph (e.g., Recharts)
- **Integrations:** Telegram WebApp SDK, Telegram Payments API

## INTEGRATION POINTS
- Telegram WebApp SDK (user context, payments, notifications)
- Firebase (user data, check-ins, badge progress, CMS)
- i18n library (UI, cards, onboarding)
- Charting library (mood graph)
- CryptoJS (client-side encryption)

## CONSTRAINTS & OPEN DECISIONS
- Card storage: JSON in repo, Firebase Storage, or CDN (TBD in creative phase)
- Offline support: local cache, sync queue (future phase)
- Web3/TON: not in MVP, planned for future
- All features must be accessible and performant on mobile Telegram clients

## ENVIRONMENTS
- Development, staging, production (separate Firebase projects, Netlify sites)
