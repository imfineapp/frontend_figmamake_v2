/**
 * Конфигурация Vite для разработки Menhausen Telegram Mini App
 * 
 * Включает настройки для:
 * - React с поддержкой JSX
 * - TypeScript компиляции
 * - Tailwind CSS v4 интеграции
 * - Алиасов путей для удобной разработки
 * - Оптимизации для продакшн сборки
 * - Поддержки Telegram Web App API
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // === ПЛАГИНЫ ===
  plugins: [
    // React плагин с поддержкой Fast Refresh
    react({
      // Включаем автоматический импорт React в JSX файлах
      jsxImportSource: 'react',
      // Дополнительные настройки для разработки
      include: '**/*.{js,jsx,ts,tsx}',
    }),
    
    // Tailwind CSS v4 плагин
    tailwindcss(),
  ],
  
  // === АЛИАСЫ ПУТЕЙ ===
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@/components': resolve(__dirname, './components'),
      '@/imports': resolve(__dirname, './imports'),
      '@/styles': resolve(__dirname, './styles'),
      '@/assets': resolve(__dirname, './assets'),
    },
  },
  
  // === НАСТРОЙКИ СЕРВЕРА РАЗРАБОТКИ ===
  server: {
    port: 3000,
    host: true, // Разрешаем доступ с внешних устройств
    cors: true,
    // Настройки для локальной разработки с HTTPS (необходимо для Telegram Mini App)
    https: false, // Установить в true для HTTPS в продакшн
    open: false, // Не открываем браузер автоматически
  },
  
  // === НАСТРОЙКИ СБОРКИ ===
  build: {
    // Целевые браузеры для оптимизации
    target: 'es2020',
    
    // Настройки выходной директории
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Настройки для чанков и оптимизации
    rollupOptions: {
      output: {
        // Разделение на чанки для лучшей загрузки
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'framer-motion'],
          utils: ['clsx', 'class-variance-authority'],
        },
      },
    },
    
    // Минификация и оптимизация
    minify: 'terser',
    sourcemap: true,
    
    // Настройки для ассетов
    assetsInlineLimit: 4096, // 4kb
  },
  
  // === НАСТРОЙКИ CSS ===
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/globals.css";`,
      },
    },
  },
  
  // === ОПРЕДЕЛЕНИЕ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ ===
  define: {
    // Версия приложения из package.json
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    
    // Режим разработки
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    
    // Поддержка Telegram Web App API
    __TELEGRAM__: 'true',
  },
  
  // === ОПТИМИЗАЦИЯ ЗАВИСИМОСТЕЙ ===
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-hook-form',
      'lucide-react',
      'framer-motion',
      'clsx',
    ],
    exclude: [
      // Исключаем SSR-only пакеты
    ],
  },
  
  // === НАСТРОЙКИ ДЛЯ PREVIEW ===
  preview: {
    port: 4173,
    host: true,
    cors: true,
  },
})