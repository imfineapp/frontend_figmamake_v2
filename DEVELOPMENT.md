# 🛠 Руководство разработчика Menhausen

Подробное руководство по разработке, архитектуре и лучшим практикам для проекта Menhausen Telegram Mini App.

## 📋 Содержание

- [Архитектура проекта](#-архитектура-проекта)
- [Настройка среды разработки](#-настройка-среды-разработки)
- [Компоненты и их взаимодействие](#-компоненты-и-их-взаимодействие)
- [Стейт менеджмент](#-стейт-менеджмент)
- [Стилизация и дизайн система](#-стилизация-и-дизайн-система)
- [Telegram Mini App интеграция](#-telegram-mini-app-интеграция)
- [Производительность](#-производительность)
- [Тестирование](#-тестирование)
- [Деплой и CI/CD](#-деплой-и-cicd)

## 🏗 Архитектура проекта

### Общая структура

```
Menhausen App
├── Presentation Layer (React Components)
├── Business Logic Layer (Custom Hooks)
├── Data Access Layer (API calls, Local Storage)
└── Infrastructure Layer (Telegram API, Utils)
```

### Принципы архитектуры

1. **Single Responsibility** - каждый компонент отвечает за одну задачу
2. **Composition over Inheritance** - предпочтение композиции над наследованием
3. **Dependency Injection** - зависимости передаются через props
4. **Immutability** - неизменяемость данных

### Структура компонентов

```typescript
// Базовая структура компонента
interface ComponentProps {
  // Обязательные props
  required: string;
  
  // Опциональные props с значениями по умолчанию
  optional?: boolean;
  
  // Callback функции
  onAction?: (data: unknown) => void;
  
  // Children для композиции
  children?: React.ReactNode;
}

export function Component({ 
  required, 
  optional = false, 
  onAction,
  children 
}: ComponentProps) {
  // Hooks в начале
  const [state, setState] = useState();
  
  // Обработчики событий
  const handleAction = useCallback(() => {
    // Логика
    onAction?.(data);
  }, [onAction]);
  
  // Рендер
  return (
    <div>
      {children}
    </div>
  );
}
```

## 🔧 Настройка среды разработки

### VS Code настройки

Создайте файл `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### Рекомендуемые расширения

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense  
- TypeScript Importer
- Error Lens
- GitLens

### Git hooks настройка

```bash
# Установка husky
npm install --save-dev husky
npx husky install

# Добавление pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Добавление commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## 🧩 Компоненты и их взаимодействие

### Иерархия компонентов

```
App
├── OnboardingPage (Page 0)
├── SurveyPage (Page 1)
└── MainPage (Page 2)
    ├── UserProfile
    ├── HayouBlock
    │   ├── InfoIcon
    │   └── MoodSlider
    ├── ActivityBlock
    ├── ThemeCards[]
    ├── EmergencySlider
    │   └── EmergencyCard[]
    └── SocialLinks
```

### Паттерны передачи данных

```typescript
// 1. Props drilling для простых случаев
<Component data={data} onAction={handleAction} />

// 2. Context для глобального состояния
const AppContext = createContext<AppState>();

// 3. Custom hooks для логики
const useMoodTracking = () => {
  const [mood, setMood] = useState(3);
  
  const updateMood = useCallback((newMood: number) => {
    setMood(newMood);
    // Сохранение в localStorage
    localStorage.setItem('lastMood', String(newMood));
  }, []);
  
  return { mood, updateMood };
};
```

### Обработка событий

```typescript
// Типизированные обработчики
interface EventHandlers {
  onMoodChange: (mood: number) => void;
  onEmergencySelect: (technique: string) => void;
  onPageChange: (page: number) => void;
}

// Мемоизация обработчиков
const handleMoodChange = useCallback((mood: number) => {
  console.log('Mood changed:', mood);
  // Логика обновления
}, []);
```

## 📊 Стейт менеджмент

### Локальное состояние (useState)

```typescript
// Простое состояние
const [isLoading, setIsLoading] = useState(false);

// Объектное состояние
const [formData, setFormData] = useState({
  concerns: [],
  mood: 3,
  notes: ''
});

// Функциональные обновления
setFormData(prev => ({
  ...prev,
  mood: newMood
}));
```

### Состояние с useReducer

```typescript
// Для сложной логики
interface AppState {
  currentPage: number;
  selectedConcerns: string[];
  userProfile: UserProfile;
}

type AppAction = 
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'TOGGLE_CONCERN'; payload: string }
  | { type: 'UPDATE_PROFILE'; payload: Partial<UserProfile> };

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'TOGGLE_CONCERN':
      const concerns = state.selectedConcerns.includes(action.payload)
        ? state.selectedConcerns.filter(c => c !== action.payload)
        : [...state.selectedConcerns, action.payload];
      return { ...state, selectedConcerns: concerns };
    default:
      return state;
  }
}
```

### Персистентность данных

```typescript
// Custom hook для localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}
```

## 🎨 Стилизация и дизайн система

### Цветовая палитра

```css
:root {
  /* Основные цвета */
  --primary: #E1FF00;      /* Желтый акцент */
  --background: #111111;    /* Темный фон */
  --foreground: #FFFFFF;    /* Белый текст */
  --muted: #696969;        /* Приглушенный серый */
  --border: #505050;       /* Границы */
  
  /* Градиенты */
  --gradient-primary: linear-gradient(135deg, #E1FF00 0%, #B8CC00 100%);
  --gradient-dark: linear-gradient(135deg, #111111 0%, #2D2B2B 100%);
}
```

### Типографика

```css
/* Шрифты */
.font-heading {
  font-family: 'Kreon', serif;
  font-weight: 400;
}

.font-body {
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
}

/* Размеры */
.text-display { font-size: 2.25rem; }
.text-heading { font-size: 1.5rem; }
.text-body { font-size: 1.25rem; }
.text-caption { font-size: 0.9375rem; }
```

### Компонентная система

```typescript
// Базовый компонент кнопки
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) {
  const baseClasses = 'rounded-xl font-medium transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-[#E1FF00] text-[#424040] hover:bg-[#d1ef00]',
    secondary: 'bg-[#2d2b2b] text-[#E1FF00] hover:bg-[#404040]',
    ghost: 'text-[#E1FF00] hover:bg-[rgba(225,255,0,0.1)]'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base', 
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Анимации

```typescript
// Framer Motion варианты
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

// Использование
<motion.div {...fadeInUp}>
  Content
</motion.div>
```

## 📱 Telegram Mini App интеграция

### Инициализация

```typescript
// telegram.ts - Утилиты для работы с Telegram API
export class TelegramWebApp {
  private static instance: TelegramWebApp;
  private webApp: any;

  private constructor() {
    this.webApp = window.Telegram?.WebApp;
    this.init();
  }

  static getInstance(): TelegramWebApp {
    if (!TelegramWebApp.instance) {
      TelegramWebApp.instance = new TelegramWebApp();
    }
    return TelegramWebApp.instance;
  }

  private init() {
    if (!this.webApp) {
      console.warn('Telegram WebApp API недоступен');
      return;
    }

    this.webApp.ready();
    this.webApp.expand();
    this.webApp.disableVerticalSwipes();
    
    // Настройка темы
    this.setTheme();
  }

  setTheme() {
    this.webApp?.setHeaderColor('#111111');
    this.webApp?.setBackgroundColor('#111111');
  }

  getUserData() {
    return this.webApp?.initDataUnsafe?.user || null;
  }

  close() {
    this.webApp?.close();
  }
}
```

### Hooks для Telegram

```typescript
// useTelegram.ts
export function useTelegram() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = TelegramWebApp.getInstance();
    
    if (tg) {
      setIsReady(true);
      setUser(tg.getUserData());
    }
  }, []);

  const showMainButton = useCallback((text: string, callback: () => void) => {
    const webApp = window.Telegram?.WebApp;
    if (webApp) {
      webApp.MainButton.setText(text);
      webApp.MainButton.show();
      webApp.MainButton.onClick(callback);
    }
  }, []);

  const hideMainButton = useCallback(() => {
    window.Telegram?.WebApp?.MainButton.hide();
  }, []);

  return {
    isReady,
    user,
    showMainButton,
    hideMainButton,
    close: () => TelegramWebApp.getInstance().close()
  };
}
```

## ⚡ Производительность

### Оптимизация рендеринга

```typescript
// React.memo для предотвращения лишних ререндеров
export const MoodSlider = React.memo(function MoodSlider({ 
  value, 
  onChange 
}: MoodSliderProps) {
  // Компонент
});

// useMemo для дорогих вычислений
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback для стабилизации функций
const handleClick = useCallback((id: string) => {
  onItemSelect(id);
}, [onItemSelect]);
```

### Ленивая загрузка

```typescript
// Lazy loading компонентов
const MainPage = React.lazy(() => import('./imports/004HomeMainPage'));

// Использование с Suspense
<Suspense fallback={<LoadingSpinner />}>
  <MainPage />
</Suspense>
```

### Виртуализация списков

```typescript
// Для больших списков
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }: { items: Item[] }) {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}
```

## 🧪 Тестирование

### Unit тесты

```typescript
// MoodSlider.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MoodSlider } from './MoodSlider';

describe('MoodSlider', () => {
  it('должен отображать правильный текст настроения', () => {
    render(<MoodSlider initialValue={2} />);
    expect(screen.getByText("I'm neutral")).toBeInTheDocument();
  });

  it('должен вызывать onValueChange при клике', () => {
    const onValueChange = jest.fn();
    render(<MoodSlider onValueChange={onValueChange} />);
    
    const slider = screen.getByRole('slider');
    fireEvent.click(slider);
    
    expect(onValueChange).toHaveBeenCalled();
  });
});
```

### Интеграционные тесты

```typescript
// App.test.tsx
describe('App Integration', () => {
  it('должен корректно переключаться между страницами', () => {
    render(<App />);
    
    // Проверяем первую страницу
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    
    // Переходим на вторую страницу
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('What worries you')).toBeInTheDocument();
  });
});
```

### E2E тесты

```typescript
// cypress/integration/app.spec.ts
describe('Menhausen App', () => {
  it('должен пройти полный онбординг', () => {
    cy.visit('/');
    
    // Первая страница
    cy.contains('Welcome').should('be.visible');
    cy.get('[data-testid="next-button"]').click();
    
    // Вторая страница
    cy.contains('What worries you').should('be.visible');
    cy.get('[data-testid="concern-stress"]').click();
    cy.get('[data-testid="next-button"]').click();
    
    // Главная страница
    cy.contains('How are you?').should('be.visible');
  });
});
```

## 🚀 Деплой и CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Мониторинг

```typescript
// monitoring.ts
export function setupMonitoring() {
  // Error tracking
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Отправка в Sentry или другую систему мониторинга
  });

  // Performance monitoring
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('Page load time:', entry.duration);
      }
    }
  });
  
  observer.observe({ entryTypes: ['navigation', 'measure'] });
}
```

---

Этот документ живой и должен обновляться по мере развития проекта. Если у вас есть вопросы или предложения по улучшению, создайте issue в репозитории.