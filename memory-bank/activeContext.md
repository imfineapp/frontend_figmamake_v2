# ACTIVE CONTEXT: IMPLEMENT MODE (Level 4)

## CURRENT MODE
**Mode:** IMPLEMENT (Level 4 - Complex System)
**Status:** Active
**Phase:** Phase 2 – Onboarding Flow Implementation

## CURRENT FOCUS
- Implement illustration-heavy onboarding with SVG components
- Create multi-step navigation with progress indicators
- Add smooth transitions between onboarding screens
- Integrate with Telegram user context and theme
- Ensure all visible text continues to use i18n

## NEXT STEPS
1. Build onboarding screens from Figma with reusable components
2. Implement progress indicator and navigation (Back/Next/Skip policies)
3. Add animated transitions (enter/exit) optimized for low-end devices
4. Wire to Telegram WebApp context (theme, initData)
5. Validate a11y and keyboard navigation

## TRANSITION CRITERIA
- [ ] All onboarding screens implemented and navigable
- [ ] Progress indicator accurate and responsive
- [ ] Telegram context integrated and tested
- [ ] i18n coverage verified for all onboarding strings
- [ ] Performance validated on mobile devices

## STAKEHOLDERS & ROLES
- **Product Owner:** Requirements, acceptance
- **Design:** Figma handoff, motion specs
- **Engineering:** Implementation, performance, QA
- **Content:** Onboarding copy (en/ru)

## PROJECT CONTEXT
- **Project:** Menhausen Telegram Mini App
- **Level:** 4 (Complex System)
- **Current Phase:** Phase 2 – Onboarding
- **MVP Scope:** Onboarding, check-ins, cards, i18n, encryption

## TECHNICAL CONTEXT
- **Framework:** React 18+, Vite, Tailwind CSS v4
- **Integrations:** Telegram WebApp SDK (theme, language)
- **Internationalization:** i18n with Telegram auto-detect and language switcher

## DECISION POINTS
- **Navigation policy:** Allow Skip or enforce full onboarding?
- **Animation budget:** FPS targets and motion easing
- **State storage:** Persist onboarding progress in localStorage?

## RISKS & MITIGATIONS
- **Performance on low-end devices:** Use simple transitions and memoization
- **Telegram client differences:** Test iOS/Android/Web/Desktop
- **Content overflow in translations:** Pseudo-localization checks

## SUCCESS CRITERIA
- Seamless, performant onboarding flow
- Fully localized onboarding content (en/ru)
- Clean integration with Telegram context
- Positive user feedback in pilot tests

