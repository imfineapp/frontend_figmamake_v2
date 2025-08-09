/**
 * Конфигурация i18n для Menhausen Telegram Mini App
 * 
 * Обеспечивает:
 * - Автоматическое определение языка из Telegram
 * - Fallback на английский для неподдерживаемых языков
 * - Динамическую загрузку языковых ресурсов
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт языковых ресурсов
import en from './locales/en.json';
import ru from './locales/ru.json';

// Поддерживаемые языки
export const supportedLanguages = ['en', 'ru'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

// Функция для определения языка из Telegram
const getTelegramLanguage = (): string => {
  // Проверяем Telegram WebApp API
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    const tgLang = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;
    if (tgLang) {
      // Преобразуем языковые коды Telegram в наши поддерживаемые языки
      if (tgLang.startsWith('ru')) return 'ru';
      if (tgLang.startsWith('en')) return 'en';
    }
  }
  
  // Fallback на браузерный язык
  const browserLang = navigator.language || 'en';
  if (browserLang.startsWith('ru')) return 'ru';
  
  return 'en'; // Fallback по умолчанию
};

// Кастомный детектор языка для Telegram
const telegramLanguageDetector = {
  name: 'telegramDetector',
  lookup(): string | undefined {
    return getTelegramLanguage();
  },
  cacheUserLanguage(lng: string) {
    // Сохраняем выбранный язык в localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('menhausen-language', lng);
    }
  }
};

// Добавляем кастомный детектор перед инициализацией
const languageDetector = new LanguageDetector();
languageDetector.addDetector(telegramLanguageDetector);

// Инициализация i18n
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // Языковые ресурсы
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    },
    
    // Настройки детекции языка
    detection: {
      // Порядок детекции языка
      order: ['telegramDetector', 'localStorage', 'navigator'],
      
      // Кеширование выбранного языка
      caches: ['localStorage'],
      
      // Ключ для localStorage
      lookupLocalStorage: 'menhausen-language'
    },
    
    // Язык по умолчанию
    fallbackLng: 'en',
    
    // Отладка (только в development)
    debug: process.env.NODE_ENV === 'development',
    
    // Настройки интерполяции
    interpolation: {
      escapeValue: false // React уже экранирует значения
    },
    
    // Пространства имен
    defaultNS: 'translation',
    
    // Настройки загрузки
    load: 'languageOnly', // Загружаем только основной язык (ru, en), игнорируем регион
    
    // Поведение при отсутствующих переводах
    returnEmptyString: false,
    returnNull: false,
    
    // Настройки React
    react: {
      useSuspense: false // Отключаем Suspense для совместимости с Telegram Mini App
    }
  });

// Кастомный детектор уже добавлен выше

export default i18n;
