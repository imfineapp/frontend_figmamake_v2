# 🧠 Menhausen - Telegram Mini App

Платформа для отслеживания ментального здоровья и психологической поддержки в формате Telegram Mini App.

## 📋 Содержание

- [Описание проекта](#-описание-проекта)
- [Технологический стек](#-технологический-стек)
- [Быстрый старт](#-быстрый-старт)
- [Установка и настройка](#-установка-и-настройка)
- [Разработка](#-разработка)
- [Сборка и деплой](#-сборка-и-деплой)
- [Структура проекта](#-структура-проекта)
- [Telegram Mini App интеграция](#-telegram-mini-app-интеграция)
- [Скрипты](#-скрипты)
- [Конфигурация](#-конфигурация)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

## 🎯 Описание проекта

Menhausen - это современное веб-приложение для Telegram, предназначенное для:

- 📊 Отслеживания ментального здоровья и настроения
- 🧘 Предоставления техник экстренной психологической помощи
- 📱 Интерактивного многостраничного онбординга
- 🎨 Интуитивного и адаптивного интерфейса
- 🔒 Безопасной работы в экосистеме Telegram

### Основные возможности

- **Интерактивный слайдер настроения** с 5 позициями
- **Горизонтальный слайдер экстренной помощи** с drag-and-drop навигацией
- **Система опросов** для анализа проблем пользователя
- **Прогресс-индикаторы** для отслеживания активности
- **Адаптивный дизайн** для мобильных устройств

## 🛠 Технологический стек

### Основные технологии
- **React 18** - Современная библиотека для UI
- **TypeScript** - Типизированный JavaScript
- **Vite** - Быстрый сборщик и dev-сервер
- **Tailwind CSS v4** - Utility-first CSS фреймворк

### Дополнительные библиотеки
- **React Hook Form** - Управление формами
- **Framer Motion** - Анимации и переходы
- **Lucide React** - Современные иконки
- **Recharts** - Графики и диаграммы
- **React DnD** - Drag and drop функциональность

### Инструменты разработки
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода
- **Husky** - Git hooks
- **TypeScript** - Статическая типизация

## 🚀 Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/your-username/menhausen-telegram-mini-app.git
cd menhausen-telegram-mini-app

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

## 📦 Установка и настройка

### Требования к системе

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (или yarn/pnpm)
- **Git** для контроля версий

### Пошаговая установка

1. **Клонирование репозитория**
   ```bash
   git clone https://github.com/your-username/menhausen-telegram-mini-app.git
   cd menhausen-telegram-mini-app
   ```

2. **Установка зависимостей**
   ```bash
   # Используя npm
   npm install
   
   # Используя yarn
   yarn install
   
   # Используя pnpm
   pnpm install
   ```

3. **Настройка переменных окружения** (опционально)
   ```bash
   cp .env.example .env.local
   # Отредактируйте .env.local под ваши нужды
   ```

4. **Проверка установки**
   ```bash
   npm run type-check
   npm run lint
   ```

## 🔧 Разработка

### Запуск сервера разработки

```bash
npm run dev
```

Сервер запустится на `http://localhost:3000` с горячей перезагрузкой.

### Основные команды разработки

```bash
# Проверка типов TypeScript
npm run type-check

# Линтинг кода
npm run lint

# Автоматическое исправление линтинга
npm run lint:fix

# Форматирование кода
npm run format

# Проверка форматирования
npm run format:check
```

### Структура компонентов

```
components/
├── ui/           # Переиспользуемые UI компоненты (shadcn/ui)
├── MoodSlider.tsx    # Интерактивный слайдер настроения
├── EmergencySlider.tsx # Горизонтальный слайдер помощи
└── HayouBlock.tsx    # Блок настроения пользователя
```

### Рекомендации по разработке

1. **Используйте TypeScript** для всех новых компонентов
2. **Следуйте принципам accessibility** (ARIA, семантические теги)
3. **Документируйте сложные функции** с помощью JSDoc
4. **Тестируйте на мобильных устройствах** (основная платформа)
5. **Оптимизируйте производительность** (React.memo, useMemo, useCallback)

## 🏗 Сборка и деплой

### Создание production сборки

```bash
npm run build
```

Файлы сборки будут в директории `dist/`.

### Превью production сборки

```bash
npm run preview
```

### Деплой

#### Netlify

Выполняется автоматически при пуше в main и для каждого PR.

#### GitHub Pages
```bash
# После сборки
npm run build

# Деплой в GitHub Pages (если настроен)
npm run deploy
```

#### Vercel
```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel
```

#### Netlify
```bash
# Установка Netlify CLI  
npm install -g netlify-cli

# Деплой
netlify deploy --prod --dir=dist
```

## 📁 Структура проекта

```
menhausen-telegram-mini-app/
├── src/
│   └── main.tsx              # Точка входа React приложения
├── components/               # React компоненты
│   ├── ui/                  # shadcn/ui компоненты
│   ├── MoodSlider.tsx       # Слайдер настроения
│   ├── EmergencySlider.tsx  # Слайдер экстренной помощи
│   └── HayouBlock.tsx       # Блок настроения
├── imports/                 # Импортированные Figma компоненты
│   ├── 002OnboardingPage01.tsx
│   ├── 003SurveyPageTemplate.tsx
│   ├── 004HomeMainPage.tsx
│   └── svg-*.ts             # SVG ассеты
├── styles/
│   └── globals.css          # Глобальные стили и Tailwind
├── App.tsx                  # Основной компонент приложения
├── index.html              # HTML шаблон
├── vite.config.ts          # Конфигурация Vite
├── tsconfig.json           # Конфигурация TypeScript
├── tailwind.config.ts      # Конфигурация Tailwind CSS
├── package.json            # Зависимости и скрипты
└── README.md              # Документация
```

## 📱 Telegram Mini App интеграция

### Telegram Web App API

Приложение интегрировано с Telegram Web App API:

```typescript
// Проверка доступности API
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;
  
  // Инициализация
  tg.ready();
  tg.expand();
  
  // Настройка темы
  tg.setHeaderColor('#111111');
  tg.setBackgroundColor('#111111');
}
```

### Настройка бота

1. Создайте бота через [@BotFather](https://t.me/botfather)
2. Получите токен бота
3. Настройте Web App URL через команду `/setmenubutton`
4. Укажите URL вашего приложения

### Тестирование в Telegram

1. **Локальная разработка**: используйте ngrok для создания HTTPS туннеля
   ```bash
   # Установка ngrok
   npm install -g ngrok
   
   # Создание туннеля
   ngrok http 3000
   ```

2. **Production**: разверните на платформе с HTTPS

## 📜 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Создание production сборки |
| `npm run preview` | Превью production сборки |
| `npm run lint` | Проверка кода линтером |
| `npm run lint:fix` | Автоисправление ошибок линтера |
| `npm run type-check` | Проверка типов TypeScript |
| `npm run format` | Форматирование кода Prettier |
| `npm run format:check` | Проверка форматирования |

## ⚙️ Конфигурация

### Vite (vite.config.ts)

- Настройка алиасов путей
- Конфигурация плагинов (React, Tailwind)
- Оптимизация сборки
- Настройки dev-сервера

### TypeScript (tsconfig.json)

- Строгий режим типизации
- Алиасы путей для удобного импорта
- Современные ES модули
- React JSX настройки

### Tailwind CSS

- Tailwind CSS v4 с новым синтаксисом
- Кастомные цветовые переменные
- Адаптивный дизайн
- Темная тема поддержка

### ESLint

- Правила для React и TypeScript
- Accessibility проверки
- Автоматическое исправление
- Интеграция с Prettier

## 🐛 Troubleshooting

### Частые проблемы

**Проблема**: `Module not found` ошибки
```bash
# Решение: очистка node_modules и переустановка
rm -rf node_modules package-lock.json
npm install
```

**Проблема**: TypeScript ошибки типов
```bash
# Решение: проверка и обновление типов
npm run type-check
```

**Проблема**: Telegram Web App API недоступен
```javascript
// Проверка в коде
if (!window.Telegram?.WebApp) {
  console.warn('Telegram Web App API не доступен');
}
```

**Проблема**: Стили не применяются
```bash
# Проверка Tailwind конфигурации
npm run build
# Проверить что globals.css импортируется
```

### Отладка

1. **Включите source maps** в `vite.config.ts`
2. **Используйте React DevTools** для отладки компонентов
3. **Проверяйте консоль браузера** на ошибки
4. **Тестируйте в мобильном браузере** для Telegram специфичных проблем

### Логирование

```typescript
// Разработка
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Production
console.error('Critical error:', error);
```

## 🤝 Contributing

### Процесс разработки

1. **Fork** репозитория
2. Создайте **feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit** изменения: `git commit -m 'Add amazing feature'`
4. **Push** в branch: `git push origin feature/amazing-feature`
5. Создайте **Pull Request**

### Стандарты кода

- Используйте **TypeScript** для всех новых файлов
- Следуйте **ESLint** и **Prettier** правилам
- Добавляйте **JSDoc** комментарии для сложных функций
- Покрывайте новый функционал **тестами** (когда добавлены)
- Обновляйте **документацию** при необходимости

### Commit сообщения

Используйте [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: добавить новый компонент слайдера
fix: исправить проблему с навигацией
docs: обновить README
style: отформатировать код
refactor: переработать логику состояния
test: добавить тесты для компонента
```

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 👥 Команда

- **Разработка UI/UX**: AI Assistant
- **Архитектура**: AI Assistant  
- **Telegram интеграция**: AI Assistant

## 🔗 Полезные ссылки

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

**Сделано с ❤️ для улучшения ментального здоровья**