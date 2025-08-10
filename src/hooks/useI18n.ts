/**
 * Hook для управления интернационализацией
 * 
 * Обеспечивает:
 * - Автоматическое определение языка через Telegram
 * - Переключение языка с сохранением в localStorage
 * - Типизированные переводы
 * - Fallback на английский
 */

import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { supportedLanguages, type SupportedLanguage } from '../i18n';

interface UseI18nReturn {
  /** Текущий язык */
  language: SupportedLanguage;
  
  /** Функция перевода с типизацией */
  t: (key: string, options?: any) => string;
  
  /** Изменить язык */
  changeLanguage: (language: SupportedLanguage) => Promise<void>;
  
  /** Доступные языки */
  supportedLanguages: readonly SupportedLanguage[];
  
  /** Готовность системы i18n */
  isReady: boolean;
  
  /** Направление текста (ltr/rtl) */
  direction: 'ltr' | 'rtl';
  
  /** Функция форматирования с учетом локали */
  formatNumber: (value: number) => string;
  formatDate: (date: Date) => string;
}

/**
 * Hook для работы с интернационализацией
 */
export function useI18n(): UseI18nReturn {
  const { t, i18n, ready } = useTranslation();
  
  // Получаем текущий язык с fallback
  const currentLanguage = (supportedLanguages.includes(i18n.language as SupportedLanguage) 
    ? i18n.language 
    : 'en') as SupportedLanguage;

  // Функция изменения языка
  const changeLanguage = useCallback(async (language: SupportedLanguage) => {
    try {
      await i18n.changeLanguage(language);
      
      // Сохраняем в localStorage
      localStorage.setItem('menhausen-language', language);
      
      // Уведомляем Telegram о смене языка (если доступно)
      if (window.Telegram?.WebApp) {
        // Можно добавить логику уведомления Telegram о смене языка
        console.log(`Language changed to: ${language}`);
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, [i18n]);

  // Определяем направление текста (все поддерживаемые языки используют LTR)
  const direction: 'ltr' | 'rtl' = 'ltr';

  // Функции форматирования
  const formatNumber = useCallback((value: number): string => {
    try {
      return new Intl.NumberFormat(currentLanguage).format(value);
    } catch {
      return value.toString();
    }
  }, [currentLanguage]);

  const formatDate = useCallback((date: Date): string => {
    try {
      return new Intl.DateTimeFormat(currentLanguage, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    } catch {
      return date.toLocaleDateString();
    }
  }, [currentLanguage]);

  // Эффект для отслеживания изменений языка в Telegram
  useEffect(() => {
    const handleTelegramThemeChange = () => {
      // Если Telegram изменил тему, проверяем не изменился ли язык
      if (window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code) {
        const tgLang = window.Telegram.WebApp.initDataUnsafe.user.language_code;
        let targetLang: SupportedLanguage = 'en';
        
        if (tgLang.startsWith('ru')) targetLang = 'ru';
        else if (tgLang.startsWith('en')) targetLang = 'en';
        
        // Если язык Telegram отличается от текущего, обновляем
        if (targetLang !== currentLanguage) {
          changeLanguage(targetLang);
        }
      }
    };

    // Подписываемся на события Telegram (если доступно)
    if (window.Telegram?.WebApp) {
      window.addEventListener('themechanged', handleTelegramThemeChange);
      
      return () => {
        window.removeEventListener('themechanged', handleTelegramThemeChange);
      };
    }
    
    // Возвращаем undefined для случаев когда Telegram недоступен
    return undefined;
  }, [currentLanguage, changeLanguage]);

  return {
    language: currentLanguage,
    t,
    changeLanguage,
    supportedLanguages,
    isReady: ready,
    direction,
    formatNumber,
    formatDate
  };
}

/**
 * Типизированная функция перевода для компонентов
 */
export function useTypedTranslation() {
  const { t } = useTranslation();
  
  return {
    // Основные разделы приложения
    app: (key: keyof typeof import('../i18n/locales/en.json')['app']) => 
      t(`app.${key}`),
    
    navigation: (key: keyof typeof import('../i18n/locales/en.json')['navigation']) => 
      t(`navigation.${key}`),
    
    onboarding: (key: string) => t(`onboarding.${key}`),
    
    checkin: (key: string) => t(`checkin.${key}`),
    
    cards: (key: string) => t(`cards.${key}`),
    
    emergency: (key: string) => t(`emergency.${key}`),
    
    profile: (key: string) => t(`profile.${key}`),
    
    settings: (key: string) => t(`settings.${key}`),
    
    common: (key: keyof typeof import('../i18n/locales/en.json')['common']) => 
      t(`common.${key}`),
    
    errors: (key: keyof typeof import('../i18n/locales/en.json')['errors']) => 
      t(`errors.${key}`)
  };
}
