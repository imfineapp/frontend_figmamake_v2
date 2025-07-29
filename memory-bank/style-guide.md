# Menhausen Telegram Mini App - Style Guide

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#007AFF` (Blue for main actions and highlights)
- **Primary Foreground**: `#FFFFFF` (Text on primary background)
- **Secondary**: `#34C759` (Green for positive actions and success states)
- **Destructive**: `#FF3B30` (Red for destructive actions and errors)

### Neutral Colors
- **Background**: `#F2F2F7` (Light gray for main background)
- **Foreground**: `#000000` (Black for primary text)
- **Muted**: `#8E8E93` (Gray for secondary text and borders)
- **Accent**: `#E5E5EA` (Light gray for cards and containers)

## 📐 Typography

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

### Font Sizes
- **Heading 1**: 28px, Semi-bold
- **Heading 2**: 22px, Semi-bold
- **Heading 3**: 17px, Semi-bold
- **Body**: 17px, Regular
- **Caption**: 15px, Regular
- **Small**: 13px, Regular

## 🖼️ Icons & Imagery

### Icons
- Use Lucide React icons consistently throughout the app
- Icons should be 24px by default
- Match icon color to the surrounding text or use primary color for interactive elements

### SVG Graphics
- Custom SVG illustrations with gradient effects
- Soft lighting effects and subtle shadows
- Consistent color scheme with primary blues and neutral backgrounds

## 🧱 Components

### Buttons
- Use the `Button` component from `components/ui/button.tsx`
- Variants: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon
- Always include proper focus states and hover effects

### Sliders
- Custom slider implementations for specific use cases:
  - MoodSlider: 5-position vertical slider with emotional state labels
  - EmergencySlider: Horizontal draggable card slider
- Use `components/ui/slider.tsx` for standard range sliders

### Cards
- Use `components/ui/card.tsx` for content containers
- Consistent padding and rounded corners
- Subtle shadows for depth

### Progress Indicators
- Use `components/ui/progress.tsx` for linear progress
- Custom implementations for step-based progress (e.g., onboarding)

## 📱 Layout & Spacing

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **xxl**: 48px

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+

### Container Widths
- Mobile: 100% with 16px side padding
- Max width for content: 600px

## 🎯 Interaction Patterns

### Navigation
- Linear progression for onboarding (no backward navigation)
- Clear progress indicators
- Consistent "Next" button styling

### Feedback
- Use toast notifications via `sonner` for non-critical messages
- Inline validation for forms
- Visual feedback for interactive elements (hover, active states)

### Gestures
- Touch-friendly targets (minimum 44px)
- Support for both mouse and touch interactions
- Drag-and-drop for sliders and card arrangements

## 🌙 Dark Mode

- Not currently implemented but planned for future
- Use Tailwind's dark mode variants when implementing

## 🌍 Internationalization

- All text content should be in i18n format
- Consider text expansion for different languages
- Right-to-left support preparation

## 🔧 Technical Guidelines

### React Patterns
- Use functional components with hooks
- TypeScript for type safety
- Component composition over inheritance

### Tailwind CSS
- Use utility classes for styling
- Custom values via theme configuration
- Responsive design with mobile-first approach

### Accessibility
- Proper semantic HTML
- ARIA attributes where needed
- Color contrast ratios meeting WCAG AA standards
- Keyboard navigation support