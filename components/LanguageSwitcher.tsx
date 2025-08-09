/**
 * Компонент переключения языка
 * 
 * Позволяет пользователю выбрать язык интерфейса
 * с автоматическим сохранением в localStorage
 */


import { useI18n } from '../src/hooks/useI18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  /** Показывать как кнопку или выпадающий список */
  variant?: 'button' | 'select';
  /** Размер компонента */
  size?: 'sm' | 'md' | 'lg';
  /** Показывать текст языка */
  showText?: boolean;
  /** CSS классы */
  className?: string;
}

const languageNames = {
  en: 'English',
  ru: 'Русский'
} as const;

export function LanguageSwitcher({ 
  variant = 'select', 
  size = 'md', 
  showText = true,
  className = '' 
}: LanguageSwitcherProps) {
  const { language, changeLanguage, supportedLanguages, t } = useI18n();

  // Стили в зависимости от размера
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3'
  };

  if (variant === 'button') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {supportedLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`
              ${sizeClasses[size]} 
              rounded-lg border transition-all duration-200
              ${language === lang 
                ? 'bg-[#E1FF00] text-[#111111] border-[#E1FF00]' 
                : 'bg-transparent text-[#ffffff] border-[#333333] hover:border-[#E1FF00]'
              }
            `}
          >
            {showText ? languageNames[lang] : lang.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-[#ffffff] mb-2">
        <Globe className="inline w-4 h-4 mr-2" />
        {t('settings.language.title')}
      </label>
      
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value as any)}
        className={`
          ${sizeClasses[size]}
          w-full bg-[#222222] text-[#ffffff] border border-[#333333] 
          rounded-lg focus:border-[#E1FF00] focus:outline-none
          transition-colors duration-200
        `}
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {showText ? languageNames[lang] : lang.toUpperCase()}
          </option>
        ))}
      </select>
      
      <p className="mt-1 text-xs text-[#888888]">
        {t('settings.language.description')}
      </p>
    </div>
  );
}

/**
 * Компактный переключатель языка для заголовка
 */
export function CompactLanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, changeLanguage, supportedLanguages } = useI18n();

  const handleToggle = () => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    changeLanguage(supportedLanguages[nextIndex]!);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        flex items-center gap-1 px-2 py-1 rounded-md
        bg-[#222222] text-[#ffffff] border border-[#333333]
        hover:border-[#E1FF00] transition-colors duration-200
        ${className}
      `}
      title="Переключить язык / Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}
