# Task: Telegram Mini App - Menhausen (Level 4 System Implementation)

## Description
Design and implement a scalable, secure, and internationalized Telegram Mini App for mental wellness, targeting men 25–45 in Russian-speaking regions, with onboarding, daily check-ins, card system, and client-side encryption. The system will be architected for phased rollout (onboarding/check-ins/cards → payments → badges → CMS → offline → Web3).

## Complexity
Level: 4  
Type: Complex System

## Technology Stack
- Framework: Next.js (React 18+), Vite, Tailwind CSS v4
- Language: TypeScript
- Backend: Firebase (Firestore, Functions, Hosting)
- Storage: Firestore (user data), JSON (cards, TBD), localStorage (encrypted responses)
- CI/CD: Netlify (Mini App), Firebase Hosting (CMS), GitHub Actions
- Internationalization: i18n, auto-detect via Telegram language

## Technology Validation Checkpoints
- [ ] Project initialization command verified
- [ ] Required dependencies identified and installed
- [ ] Build configuration validated
- [ ] Hello world verification completed
- [ ] Test build passes successfully

## Status
- [x] Initialization complete
- [x] Planning complete
- [ ] Technology validation complete
- [ ] Creative phases (UI/UX, Architecture, Data Model)
- [ ] Implementation steps

## Implementation Plan

### Phase 1: Core MVP (Onboarding, Check-ins, Cards, i18n, Encryption)
1. **Requirements & Architecture**
   - [ ] Finalize requirements and user stories for MVP
   - [ ] Create system context, high-level, and component diagrams
   - [ ] Document business context, vision, and goals
2. **Internationalization**
   - [ ] Integrate i18n with auto-detect from Telegram
   - [ ] Prepare all UI and card content for multi-language
3. **Onboarding Flow**
   - [ ] Implement 3-step onboarding (benefits, pain survey, mental state)
   - [ ] Enforce non-skippable onboarding on first launch
   - [ ] Store onboarding completion state
4. **Check-in System**
   - [ ] Implement lever-based mood check-in (1–5 scale, text labels)
   - [ ] Store check-in data in Firestore (summary only)
   - [ ] Show 7-day mood graph with week-to-week comparison
   - [ ] Enforce daily check-in requirement
5. **Card System**
   - [ ] Implement topic-based card list (10 per topic, infinite scroll, min 4 visible)
   - [ ] Card step types: text, choice, 1–5 star rating, text input, bookmarking
   - [ ] Card completion flow and local encrypted storage of responses
6. **Encryption**
   - [ ] Implement AES-256-GCM client-side encryption for responses/preferences
   - [ ] Generate encryption key per device (not tied to Telegram ID)
   - [ ] Store key in browser/WebView only
7. **Testing & Documentation**
   - [ ] Unit/integration tests for onboarding, check-ins, cards, encryption
   - [ ] Update projectbrief.md, activeContext.md, systemPatterns.md, techContext.md

### Phase 2: Payments
1. **Subscription Tiers**
   - [ ] Implement free, basic (limited topics), and premium (all topics) tiers
   - [ ] Integrate Telegram Payments API
   - [ ] Implement paywall with preview/teaser for premium content
   - [ ] Enforce access rules per tier
2. **Testing**
   - [ ] Payment flow tests (success, failure, edge cases)

### Phase 3: Badges & Gamification
1. **Badge System**
   - [ ] Implement badge logic (streaks, firsts, milestones)
   - [ ] Pop-up notifications and badge collection screen
   - [ ] Progress tracking and categories
2. **Testing**
   - [ ] Badge earning, display, and progress logic

### Phase 4: CMS (Card Management)
1. **Card Storage Decision**
   - [ ] Decide on JSON storage (repo, Firebase Storage, CDN)
2. **CMS Implementation**
   - [ ] Build React+Firebase Auth CMS for card editing, categorization, export
   - [ ] Preview and draft/publish workflow

### Phase 5: Offline Functionality
1. **Offline Mode**
   - [ ] Enable offline check-ins and card access (local cache, auto-sync)
   - [ ] Offline mode indicator

### Phase 6: Web3/TON Integration (Future)
1. **TON Wallet**
   - [ ] Optional TonConnect integration (not in MVP)
   - [ ] Plan for NFT badges, TON Storage, anonymization

## Creative Phases Required
- [ ] UI/UX Design (Onboarding, Check-in, Card, Badge, Paywall, CMS)
- [ ] Architecture (System, Data, Security, Internationalization)
- [ ] Data Model (Card JSON, User, Badge, Payment, Encrypted Data)

## Dependencies
- Telegram WebApp SDK
- Firebase (Firestore, Functions, Hosting)
- Netlify (or alternative for Mini App)
- i18n library (e.g., react-i18next)
- AES-256-GCM crypto library (e.g., CryptoJS)
- Charting library (for mood graph)
- Telegram Payments API

## Challenges & Mitigations
- **Multi-language content management**: Use i18n with translation files, automate card translation workflow.
- **Encryption key management**: Store key only in browser/WebView, never transmit to server.
- **Offline/online sync**: Use local cache with sync queue, clear user feedback on sync status.
- **Telegram SDK quirks**: Test on multiple Telegram clients (iOS, Android, Desktop, Web).
- **Payment edge cases**: Handle payment failures, retries, and user support flows.
- **Phased rollout**: Ensure each phase is independently testable and does not block core flows.

## Testing Strategy
- Unit and integration tests for all flows
- Manual and automated UI tests (multi-language, device matrix)
- Security tests for encryption and data privacy
- Payment and badge logic tests
- Offline/online sync tests

## Documentation Plan
- Update Memory Bank docs at each phase
- API and architecture documentation
- User and admin guides

---

**Current Status:** Planning complete, ready for creative phases  
**Next Steps:** Begin creative phases (UI/UX, Architecture, Data Model)  
**Mode Transition:** PLAN → CREATIVE

---

**Plan Verification Checklist:**  
- [x] Requirements clearly documented  
- [x] Technology stack validated  
- [x] Affected components identified  
- [x] Implementation steps detailed  
- [x] Dependencies documented  
- [x] Challenges & mitigations addressed  
- [x] Creative phases identified  
- [x] tasks.md updated with plan  

---

**Upon completion:**  
→ Proceed to CREATIVE MODE for UI/UX and architecture design.

