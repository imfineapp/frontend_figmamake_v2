/**
 * Компонент горизонтального слайдера экстренной помощи для Telegram Mini App
 * 
 * Этот компонент предоставляет пользователю набор техник экстренной психологической помощи
 * в виде горизонтально прокручиваемых карточек с поддержкой drag-and-drop навигации.
 * 
 * Основные возможности:
 * - Горизонтальная прокрутка с помощью мыши/тача
 * - Drag-and-drop навигация для удобства использования
 * - Клики по карточкам для активации техник помощи
 * - Адаптивность для мобильных и десктопных устройств
 * - Плавные анимации и hover эффекты
 * 
 * @author AI Assistant  
 * @version 2.0
 */

import { useState, useRef } from 'react';

/**
 * Интерфейс данных для карточки экстренной помощи
 * Определяет структуру информации о каждой технике помощи
 */
interface EmergencyCard {
  /** Уникальный идентификатор карточки для отслеживания кликов */
  id: string;
  
  /** Заголовок техники экстренной помощи */
  title: string;
  
  /** Подробное описание техники или инструкция по применению */
  description: string;
}

/**
 * Массив данных карточек экстренной помощи
 * 
 * Каждая карточка содержит информацию о конкретной технике психологической помощи,
 * которую пользователь может применить в стрессовой ситуации.
 * 
 * Порядок карточек определяет их отображение в слайдере (слева направо).
 */
const emergencyCards: EmergencyCard[] = [
  {
    id: 'sensory',
    title: 'Sensory grounding',
    description: `Check in with yourself — it's the first step to self-care! Do it everyday.`
  },
  {
    id: 'muscle', 
    title: 'Progressive muscle relaxation',
    description: `Check in with yourself — it's the first step to self-care! Do it everyday.`
  },
  {
    id: 'bursts',
    title: 'Intense short bursts',
    description: `Check in with yourself — it's the first step to self-care! Do it everyday.`
  },
  {
    id: 'diving',
    title: 'Cold diving reflex', 
    description: `Check in with yourself — it's the first step to self-care! Do it everyday.`
  },
  {
    id: 'breathing',
    title: 'Emergency breathing patterns',
    description: `Check in with yourself — it's the first step to self-care! Do it everyday.`
  }
];

/**
 * Интерфейс пропсов для компонента EmergencySlider
 * Определяет callback функции для взаимодействия с родительским компонентом
 */
interface EmergencySliderProps {
  /**
   * Callback функция, вызываемая при клике на карточку
   * Позволяет родительскому компоненту обработать выбор техники помощи
   * @param cardId - идентификатор выбранной карточки
   */
  onCardClick?: (cardId: string) => void;
}

/**
 * Основной компонент слайдера экстренной помощи
 * 
 * Рендерит горизонтально прокручиваемый список карточек с техниками экстренной помощи.
 * Поддерживает как touch-события (для мобильных устройств), так и mouse-события 
 * (для десктопных устройств) для drag-and-drop навигации.
 * 
 * @param props - объект с пропсами компонента
 * @param props.onCardClick - callback для обработки кликов по карточкам
 * @returns JSX элемент горизонтального слайдера
 */
export function EmergencySlider({ onCardClick }: EmergencySliderProps) {
  // === СОСТОЯНИЯ КОМПОНЕНТА ===
  
  /**
   * Флаг состояния перетаскивания
   * Используется для различения между кликом и drag-операцией
   */
  const [isDragging, setIsDragging] = useState(false);
  
  /**
   * Начальная X-координата при начале drag-операции
   * Сохраняется для расчета расстояния перетаскивания
   */
  const [startX, setStartX] = useState(0);
  
  /**
   * Начальная позиция прокрутки контейнера при начале drag-операции
   * Используется для правильного расчета новой позиции прокрутки
   */
  const [scrollLeft, setScrollLeft] = useState(0);
  
  /**
   * Реф для доступа к DOM-элементу слайдера
   * Необходим для программной манипуляции прокруткой
   */
  const sliderRef = useRef<HTMLDivElement>(null);

  // === ОБРАБОТЧИКИ MOUSE СОБЫТИЙ (для десктопа) ===
  
  /**
   * Обработчик начала перетаскивания мышью
   * 
   * Инициализирует drag-операцию, сохраняя начальные координаты и состояние прокрутки.
   * Вызывается при нажатии кнопки мыши на слайдере.
   * 
   * @param e - событие нажатия мыши
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    // Устанавливаем флаг активного перетаскивания
    setIsDragging(true);
    
    // Сохраняем начальную X-координату (с учетом offset контейнера)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    
    // Сохраняем текущую позицию прокрутки
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  /**
   * Обработчик завершения перетаскивания мышью
   * 
   * Сбрасывает флаг перетаскивания, завершая drag-операцию.
   * Вызывается при отпускании кнопки мыши.
   */
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /**
   * Обработчик движения мыши во время перетаскивания
   * 
   * Обновляет позицию прокрутки слайдера в реальном времени на основе движения мыши.
   * Применяет множитель для увеличения чувствительности перетаскивания.
   * 
   * @param e - событие движения мыши
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    // Проверяем, активно ли перетаскивание и доступен ли элемент
    if (!isDragging || !sliderRef.current) return;
    
    // Предотвращаем стандартное поведение браузера (выделение текста и т.д.)
    e.preventDefault();
    
    // Вычисляем текущую X-координату относительно контейнера
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    
    // Рассчитываем расстояние перемещения с множителем чувствительности
    const walk = (x - startX) * 1.5; // 1.5 - множитель для более быстрой прокрутки
    
    // Обновляем позицию прокрутки (инвертируем направление для интуитивного поведения)
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // === ОБРАБОТЧИКИ TOUCH СОБЫТИЙ (для мобильных устройств) ===
  
  /**
   * Обработчик начала touch-события
   * 
   * Аналогичен handleMouseDown, но для touch-интерфейса.
   * Инициализирует drag-операцию при касании экрана.
   * 
   * @param e - событие касания
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches || !e.touches[0] || !sliderRef.current) return;
    setIsDragging(true);
    
    // Используем первое касание из массива touches
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  /**
   * Обработчик движения пальца по экрану
   * 
   * Обновляет позицию прокрутки на основе движения пальца.
   * Аналогичен handleMouseMove для touch-интерфейса.
   * 
   * @param e - событие движения касания
   */
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current || !e.touches || !e.touches[0]) return;
    
    // Вычисляем новую позицию на основе движения пальца
    const x = e.touches[0].pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  /**
   * Обработчик завершения touch-события
   * 
   * Сбрасывает флаг перетаскивания при завершении касания.
   */
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // === ОБРАБОТЧИКИ КЛИКОВ ПО КАРТОЧКАМ ===
  
  /**
   * Обработчик клика по карточке экстренной помощи
   * 
   * Различает между кликом и drag-операцией. Если происходило перетаскивание,
   * клик игнорируется для предотвращения случайной активации карточки.
   * 
   * @param cardId - идентификатор выбранной карточки
   * @param e - событие клика мыши
   */
  const handleCardClick = (cardId: string, e: React.MouseEvent) => {
    // Если происходило перетаскивание, не обрабатываем клик
    if (isDragging) {
      e.preventDefault();
      return;
    }
    
    // Уведомляем родительский компонент о выборе карточки
    onCardClick?.(cardId);
  };

  // === ВНУТРЕННИЕ КОМПОНЕНТЫ ===
  
  /**
   * Компонент отдельной карточки экстренной помощи
   * 
   * Рендерит карточку с заголовком и описанием техники помощи.
   * Включает hover эффекты и обработку кликов.
   * 
   * @param props - объект с пропсами карточки
   * @param props.card - данные карточки (заголовок, описание, id)
   * @param props.index - индекс карточки в массиве (для потенциального функционала)
   * @returns JSX элемент карточки
   */
  const EmergencyCard = ({ card }: { card: EmergencyCard }) => (
    <button
      onClick={(e) => handleCardClick(card.id, e)}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 hover:opacity-80 transition-opacity duration-200 active:scale-95"
      style={{ 
        // Динамически отключаем pointer events во время перетаскивания
        pointerEvents: isDragging ? 'none' : 'auto' 
      }}
      aria-label={`Техника экстренной помощи: ${card.title}`}
    >
      {/* === ФОН КАРТОЧКИ === */}
      {/* Желтый фон карточки с фиксированными размерами */}
      <div className="[grid-area:1_/_1] bg-[#e1ff00] h-[168px] ml-0 mt-0 rounded-xl w-[294px]" />
      
      {/* === ЗАГОЛОВОК КАРТОЧКИ === */}
      {/* Название техники помощи, позиционированное в верхней части карточки */}
      <div className="[grid-area:1_/_1] font-['Kreon:Regular',_sans-serif] font-normal leading-[0] ml-5 mt-5 relative text-[#313131] text-[24px] text-left w-[248px]">
        <p className="block leading-[0.8]">{card.title}</p>
      </div>
      
      {/* === ОПИСАНИЕ КАРТОЧКИ === */}
      {/* Подробное описание или инструкция по применению техники */}
      <div className="[grid-area:1_/_1] font-['PT_Sans:Regular',_sans-serif] leading-[0] ml-[19px] mt-[59px] not-italic relative text-[#333333] text-[20px] text-left w-[249px]">
        <p className="block leading-none">{card.description}</p>
      </div>
    </button>
  );

  // === ОСНОВНОЙ РЕНДЕР ===
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* === КОНТЕЙНЕР СЛАЙДЕРА === */}
      {/* 
        Основной контейнер с горизонтальной прокруткой.
        Настроен для поддержки drag-and-drop на всех устройствах.
        Скрывает полосы прокрутки для чистого внешнего вида.
      */}
      <div 
        ref={sliderRef}
        className="flex gap-[15px] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          // Скрываем стандартные полосы прокрутки в разных браузерах
          scrollbarWidth: 'none',        // Firefox
          msOverflowStyle: 'none',       // Internet Explorer/Edge
          WebkitOverflowScrolling: 'touch' // iOS Safari для плавной прокрутки
        }}
        // === ОБРАБОТЧИКИ MOUSE СОБЫТИЙ ===
        onMouseDown={handleMouseDown}     // Начало перетаскивания мышью
        onMouseUp={handleMouseUp}         // Завершение перетаскивания мышью
        onMouseMove={handleMouseMove}     // Движение мыши во время перетаскивания
        onMouseLeave={handleMouseUp}      // Курсор покинул область (завершаем drag)
        
        // === ОБРАБОТЧИКИ TOUCH СОБЫТИЙ ===
        onTouchStart={handleTouchStart}   // Начало касания
        onTouchMove={handleTouchMove}     // Движение пальца
        onTouchEnd={handleTouchEnd}       // Завершение касания
        
        // === ACCESSIBILITY ===
        role="region"
        aria-label="Слайдер техник экстренной помощи"
        tabIndex={0}
      >
        {/* === РЕНДЕРИНГ КАРТОЧЕК === */}
        {/* 
          Итерируем по массиву карточек и рендерим каждую как отдельный компонент.
          Каждая карточка получает уникальный ключ для оптимизации React рендеринга.
        */}
        {emergencyCards.map((card) => (
          <EmergencyCard 
            key={card.id}        // Уникальный ключ для React
            card={card}          // Данные карточки
          />
        ))}
      </div>
    </div>
  );
}