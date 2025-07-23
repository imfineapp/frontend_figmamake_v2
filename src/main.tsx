/**
 * Точка входа для Menhausen Telegram Mini App
 * 
 * Инициализирует React приложение с поддержкой:
 * - Telegram Web App API
 * - TypeScript строгого режима
 * - Глобальных стилей
 * - Error Boundary для обработки ошибок
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../styles/globals.css'

// === ТИПЫ ДЛЯ TELEGRAM WEB APP ===
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        disableVerticalSwipes: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        MainButton: {
          show: () => void;
          hide: () => void;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
        };
        initData: string;
        initDataUnsafe: any;
        colorScheme: 'light' | 'dark';
        themeParams: any;
      };
    };
  }
}

declare global {
  interface ImportMeta {
    env: {
      MODE: string;
      [key: string]: any;
    };
  }
}

// === ERROR BOUNDARY КОМПОНЕНТ ===
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Telegram Mini App Error:', error, errorInfo);
    
    // В продакшене здесь можно отправить ошибку в сервис мониторинга
    if (typeof import.meta.env !== 'undefined' && import.meta.env.MODE === 'production') {
      // TODO: Отправить ошибку в систему мониторинга
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h1 className="text-xl font-semibold text-[#E1FF00] mb-4">
              Что-то пошло не так
            </h1>
            <p className="text-[#ffffff] mb-6">
              Произошла ошибка при загрузке приложения. Попробуйте перезапустить.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#E1FF00] text-[#111111] px-6 py-2 rounded-lg font-medium hover:bg-[#d1ef00] transition-colors"
            >
              Перезагрузить
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// === ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ ===
const initApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// === ЗАПУСК ===
// Ждем полной загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// === ЛОГИРОВАНИЕ ДЛЯ ОТЛАДКИ ===
if (import.meta.env.MODE === 'development') {
  console.log('🚀 Menhausen Telegram Mini App starting...');
  console.log('📱 Telegram WebApp available:', !!window.Telegram?.WebApp);
  console.log('🎨 Theme:', window.Telegram?.WebApp?.colorScheme || 'unknown');
}