# SYSTEM PATTERNS: Menhausen Telegram Mini App

## ARCHITECTURAL PATTERNS
- Modular, component-based frontend (Next.js, React)
- Phased, milestone-driven rollout (MVP → payments → badges → CMS → offline → Web3)
- Secure-by-design: client-side encryption, privacy-first
- Internationalization-first: i18n, auto-detect, multi-language content
- Offline-ready architecture (future phase)
- Separation of concerns: UI, logic, data, integration

## PRINCIPLES
- Simplicity and maintainability
- Scalability (user, data, features)
- Privacy by design (encrypted responses, minimal server data)
- Resilience (sync, error handling, phased deployment)
- User empowerment (autonomy, clear feedback, onboarding)

## PHASED IMPLEMENTATION
- Each phase is independently testable and deployable
- Creative phase triggers: new UI/UX, architecture, data model, or integration
- Memory Bank updated at each phase transition
