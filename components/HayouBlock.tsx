/**
 * Компонент блока настроения пользователя - HayouBlock
 * Объединяет дизайн из импортированного макета с интерактивным функционалом
 * 
 * Включает в себя:
 * - Интерактивную иконку информации с hover эффектами
 * - Заголовок "How are you?"  
 * - Интерактивный слайдер настроения с 5 позициями
 * - Описательный текст
 * - Кнопку отправки с hover эффектами
 */

import { useState } from 'react';
// Импорт SVG путей из правильного файла макета
import svgPaths from "../imports/svg-jv59jjv4gt";

/**
 * Компонент иконки информации с интерактивностью
 * Показывает подсказку при клике и имеет hover эффекты
 */
function InfoIcon24() {
  const handleInfoClick = () => {
    console.log('Info icon clicked');
    // Здесь можно добавить логику для показа модального окна или подсказки
    alert('Здесь будет информация о том, как отслеживать своё настроение и самочувствие');
  };

  return (
    <button 
      onClick={handleInfoClick}
      className="relative shrink-0 size-6 hover:opacity-70 transition-opacity duration-200 cursor-pointer" 
      data-name="Info_icon_24"
      aria-label="Информация о настроении"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Info_icon_24">
          {/* Основной круг иконки */}
          <path
            d={svgPaths.pace200}
            id="Vector"
            stroke="var(--stroke-0, #2D2B2B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          {/* Вертикальная линия в центре */}
          <path
            d="M12 16V12"
            id="Vector_2"
            stroke="var(--stroke-0, #2D2B2B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          {/* Точка сверху */}
          <path
            d="M12 8H12.01"
            id="Vector_3"
            stroke="var(--stroke-0, #2D2B2B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}

/**
 * Заголовочная группа с текстом "How are you?" и иконкой информации
 * Расположены по краям с выравниванием между ними
 */
function InfoGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Info_group"
    >
      {/* Заголовок */}
      <div className="font-['Kreon:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[24px] text-left text-nowrap">
        <p className="block leading-[0.8] whitespace-pre">How are you?</p>
      </div>
      {/* Интерактивная иконка информации */}
      <InfoIcon24 />
    </div>
  );
}

/**
 * Интерактивный слайдер настроения с 5 позициями
 * Объединяет функциональность MoodSlider с дизайном из макета
 */
interface MoodSliderProps {
  initialValue?: number;
  onValueChange?: (value: number) => void;
}

// Массив текстов для каждой позиции слайдера (0-4)
const moodTexts = [
  "I'm feeling down",    // Позиция 0
  "I'm anxious",         // Позиция 1 
  "I'm neutral",         // Позиция 2 (по умолчанию)
  "I'm energized",       // Позиция 3
  "I'm happy"           // Позиция 4
];

function MoodSliderComponent({ initialValue = 2, onValueChange }: MoodSliderProps) {
  // Состояние текущего значения слайдера (0-4)
  const [value, setValue] = useState(initialValue);
  
  /**
   * Обработчик изменения значения слайдера
   * @param newValue - новое значение от 0 до 4
   */
  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  /**
   * Обработчик клика по слайдеру для установки позиции
   * Рассчитывает позицию на основе координат клика
   */
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const newValue = Math.round(percentage * 4); // 0-4 для 5 позиций
    const clampedValue = Math.max(0, Math.min(4, newValue));
    handleSliderChange(clampedValue);
  };

  // Вычисляем процент заполнения слайдера на основе текущего значения
  const sliderWidth = (value / 4) * 100;

  return (
    <>
      {/* Отображение текущего настроения */}
      <div
        className="h-[26px] relative shrink-0 w-full"
        data-name="I\'m feeling down..."
      >
        <div className="absolute font-['Kreon:Regular',_sans-serif] font-normal inset-0 leading-[0] text-[#313131] text-[32px] text-left">
          <p className="block leading-[0.8]">{moodTexts[value]}</p>
        </div>
      </div>
      
      {/* Интерактивный прогресс-бар в стиле макета */}
      <div 
        className="bg-[#2d2b2b] h-[30px] relative rounded-xl shrink-0 w-full cursor-pointer"
        onClick={handleClick}
      >
        {/* Заполненная часть слайдера (желтая) с динамической шириной */}
        <div
          className="absolute bg-[#e1ff00] h-[30px] left-0 rounded-xl top-0 transition-all duration-300 ease-out"
          style={{ width: `${sliderWidth}%` }}
          data-name="Block"
        >
          {/* Граница заполненной части в стиле оригинального макета */}
          <div className="absolute border-2 border-[#2d2b2b] border-solid inset-0 pointer-events-none rounded-xl" />
        </div>
      </div>
    </>
  );
}

/**
 * Кнопка отправки с интерактивными эффектами
 * Включает hover эффекты и анимации
 */
function SendButton() {
  const handleSendClick = () => {
    console.log('Send button clicked');
    // Здесь можно добавить логику отправки данных настроения
  };

  return (
    <button
      onClick={handleSendClick}
      className="bg-[#2d2b2b] h-[46px] relative rounded-xl shrink-0 w-full hover:bg-[#404040] transition-colors duration-200 active:scale-95"
      data-name="Start Mining"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[46px] items-center justify-center px-[126px] py-[15px] relative w-full">
          <div className="font-['PT_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1ff00] text-[15px] text-center text-nowrap tracking-[-0.43px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Send
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

/**
 * Основной контейнер содержимого блока
 * Содержит все элементы с симметричными отступами от фона
 * Общая ширина блока: 351px, контент: 319px, отступы: по 16px с каждой стороны
 */
function ContentFrame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start left-4 p-0 top-3 w-[319px]">
      {/* Заголовочная группа */}
      <InfoGroup />
      
      {/* Интерактивный слайдер настроения */}
      <MoodSliderComponent initialValue={2} />
      
      {/* Описательный текст */}
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333333] text-[20px] text-left w-full">
        <p className="block leading-none">{`Check in with yourself — it's the first step to self-care! Do it everyday.`}</p>
      </div>
      
      {/* Кнопка отправки */}
      <SendButton />
    </div>
  );
}

/**
 * Группа с фоном и содержимым
 * Применяет желтый фон и центрирует контент
 */
function BackgroundGroup() {
  return (
    <div className="absolute bottom-0 contents left-1/2 top-0 translate-x-[-50%]">
      {/* Желтый фон блока */}
      <div
        className="absolute bg-[#e1ff00] inset-0 rounded-xl"
        data-name="Background"
      />
      {/* Содержимое поверх фона с симметричными отступами */}
      <ContentFrame />
    </div>
  );
}

/**
 * Главный экспортируемый компонент HayouBlock
 * Предоставляет полнофункциональный блок настроения пользователя
 * 
 * @returns JSX компонент с интерактивным блоком настроения
 */
export default function HayouBlock() {
  return (
    <div 
      className="h-[278px] relative shrink-0 w-[351px]" 
      data-name="HAYOU_block"
    >
      <BackgroundGroup />
    </div>
  );
}