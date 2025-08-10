import svgPaths from "./svg-0zb5wqdngu";
import { useI18n } from "../src/hooks/useI18n";

function Light() {
  return (
    <div
      className="absolute h-[917px] left-1/2 top-[-65px] translate-x-[-50%] w-[211px]"
      data-name="Light"
    >
      <div className="absolute bottom-[-27.808%] left-[-120.853%] right-[-120.853%] top-[-27.808%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 721 1427"
        >
          <g id="Light">
            <g filter="url(#filter0_f_1_843)" id="Ellipse 2">
              <ellipse
                cx="361.5"
                cy="320"
                fill="var(--fill-0, #999999)"
                fillOpacity="0.3"
                rx="92.5"
                ry="65"
              />
            </g>
            <g filter="url(#filter1_f_1_843)" id="Ellipse 1">
              <ellipse
                cx="360.5"
                cy="1113.5"
                fill="var(--fill-0, #999999)"
                fillOpacity="0.3"
                rx="105.5"
                ry="58.5"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="640"
              id="filter0_f_1_843"
              width="695"
              x="14"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_843"
                stdDeviation="127.5"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="627"
              id="filter1_f_1_843"
              width="721"
              x="0"
              y="800"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_843"
                stdDeviation="127.5"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  const { t } = useI18n();
  return (
    <div
      className="absolute bg-[#e1ff00] box-border content-stretch flex flex-row gap-2.5 h-[46px] items-center justify-center left-[23px] px-[126px] py-[15px] rounded-xl top-[758px] w-[350px]"
      data-name="Button"
      aria-label={t('navigation.next')}
    >
      <div className="font-['PT_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424040] text-[15px] text-center text-nowrap tracking-[-0.43px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          {t('navigation.next')}
        </p>
      </div>
    </div>
  );
}

function SymbolBig() {
  return (
    <div className="relative size-full" data-name="Symbol_big">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 13"
      >
        <g id="Symbol_big">
          <path
            d={svgPaths.p32eb3680}
            fill="var(--fill-0, #E1FF00)"
            id="Arrow 6 (Stroke)"
          />
          <path
            d={svgPaths.p4e98b40}
            fill="var(--fill-0, #E1FF00)"
            id="Arrow 11 (Stroke)"
          />
          <path
            d={svgPaths.pbce3040}
            fill="var(--fill-0, #E1FF00)"
            id="Ellipse 3 (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

function Menhausen() {
  return (
    <div
      className="absolute bottom-[7.2%] left-[15.488%] right-[1.172%] top-[2.215%]"
      data-name="Menhausen"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 75 12"
      >
        <g id="Menhausen">
          <path
            d={svgPaths.p32d14cf0}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector"
          />
          <path
            d={svgPaths.p1786c280}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p23ce7e00}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p35fc2600}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p30139900}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p33206e80}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p2cb2bd40}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3436ffe0}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2d60800}
            fill="var(--fill-0, #E3E3E3)"
            id="Vector_9"
          />
        </g>
      </svg>
    </div>
  );
}

function MiniStripeLogo() {
  return (
    <div
      className="absolute h-[13px] left-[152px] top-[69px] w-[89px]"
      data-name="Mini_stripe_logo"
    >
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-[91.011%] top-0">
        <div className="flex-none h-[13px] rotate-[180deg] w-2">
          <SymbolBig />
        </div>
      </div>
      <Menhausen />
    </div>
  );
}

export default function Component002OnboardingPage01() {
  const { t } = useI18n();
  return (
    <div
      className="bg-[#111111] relative size-full"
      data-name="002_onboarding page_01"
    >
      <Light />
      <div className="absolute font-['PT_Sans:Regular',_sans-serif] h-[89px] leading-[0] left-[195.5px] not-italic text-[#ffffff] text-[20px] text-center top-[376px] translate-x-[-50%] w-[347px]">
        <p className="block leading-none">
          {t('onboarding.heroDescription')}
        </p>
      </div>
      <div className="absolute font-['Kreon:Regular',_sans-serif] font-normal leading-[0] left-[197.5px] text-[#c2c2c2] text-[0px] text-center top-[277px] translate-x-[-50%] w-[351px]">
        <p className="block leading-[0.8] mb-0 text-[36px]">{t('onboarding.hero.line1')}</p>
        <p className="leading-[0.8] text-[36px]">
          <span className="text-[#e1ff00]">{t('onboarding.hero.line2Yellow')}</span>
          <span>{`\u00A0${t('onboarding.hero.line2Rest')}`}</span>
        </p>
      </div>
      <Button />
      <MiniStripeLogo />
    </div>
  );
}