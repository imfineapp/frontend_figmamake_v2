import svgPaths from "./svg-o5jzzeti43";

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

function SmallButton() {
  return (
    <div
      className="bg-[#e1ff00] h-[46px] relative rounded-xl shrink-0 w-[62px]"
      data-name="Small button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[46px] items-center justify-center px-[126px] py-[15px] relative w-[62px]">
          <div className="font-['PT_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424040] text-[15px] text-center text-nowrap tracking-[-0.43px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">{`<`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonNext() {
  return (
    <div
      className="bg-[#e1ff00] box-border content-stretch flex flex-row gap-2.5 h-[46px] items-center justify-center px-[126px] py-[15px] relative rounded-xl shrink-0 w-[268px]"
      data-name="Button (Next)"
    >
      <div className="font-['PT_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424040] text-[15px] text-center text-nowrap tracking-[-0.43px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          Next
        </p>
      </div>
    </div>
  );
}

function BottomButtonGroup() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[21px] items-center justify-start left-[21px] p-0 top-[758px]"
      data-name="Bottom_button_group"
    >
      <SmallButton />
      <ButtonNext />
    </div>
  );
}

function RadioOff() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #8E8E8E)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Stress</p>
      </div>
    </div>
  );
}

function RadioOff1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #8E8E8E)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff1 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Depression</p>
      </div>
    </div>
  );
}

function RadioOff2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #E1FF00)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff2 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1ff00] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Anger</p>
      </div>
    </div>
  );
}

function RadioOff3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #E1FF00)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff3 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1ff00] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Sadness and apathy</p>
      </div>
    </div>
  );
}

function RadioOff4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #8E8E8E)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff4 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Anxiety</p>
      </div>
    </div>
  );
}

function RadioOff5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Radio_off">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Radio_off">
          <circle
            cx="7"
            cy="7"
            id="Ellipse 5"
            r="6"
            stroke="var(--stroke-0, #E1FF00)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function SurveyItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-[331px]"
      data-name="Survey_item"
    >
      <RadioOff5 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e1ff00] text-[20px] text-left w-[307px]">
        <p className="block leading-none">Relationships</p>
      </div>
    </div>
  );
}

function ServeyBlock() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[41px] p-0 top-[367px] w-[331px]"
      data-name="Servey_block"
    >
      <SurveyItem />
      <SurveyItem1 />
      <SurveyItem2 />
      <SurveyItem3 />
      <SurveyItem4 />
      <SurveyItem5 />
    </div>
  );
}

function SepaprationLine() {
  return (
    <div
      className="absolute h-0 left-[21px] top-[307px] w-[351px]"
      data-name="Sepapration line"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 351 1"
        >
          <g id="Sepapration line">
            <line
              id="Sepapration line_2"
              stroke="var(--stroke-0, #303030)"
              x1="4.37114e-08"
              x2="351"
              y1="0.5"
              y2="0.500031"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeroBlockAnswer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] left-5 p-0 text-center top-[189px] w-[352px]"
      data-name="Hero_block_answer"
    >
      <div className="font-['Kreon:Regular',_sans-serif] font-normal leading-[0.8] relative shrink-0 text-[#e1ff00] text-[36px] w-full">
        <p className="block mb-0">{`What worries you `}</p>
        <p className="block">the most?</p>
      </div>
      <div className="font-['PT_Sans:Regular',_sans-serif] not-italic relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-none">You can choose several options</p>
      </div>
    </div>
  );
}

function Progress() {
  return (
    <div
      className="absolute h-0 left-[21px] top-[129px] w-[351px]"
      data-name="Progress"
    >
      <div className="absolute bottom-[-3px] left-0 right-0 top-[-3px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 351 6"
        >
          <g id="Progress">
            <path
              d="M0 3H351"
              id="Line 1"
              stroke="var(--stroke-0, #303030)"
              strokeWidth="6"
            />
            <path
              d="M0 3H131.501"
              id="Line 2"
              stroke="var(--stroke-0, #E1FF00)"
              strokeWidth="6"
            />
          </g>
        </svg>
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

export default function Component003SurveyPageTemplate() {
  return (
    <div
      className="bg-[#111111] relative size-full"
      data-name="003_Survey_page_template"
    >
      <Light />
      <BottomButtonGroup />
      <ServeyBlock />
      <SepaprationLine />
      <HeroBlockAnswer />
      <Progress />
      <MiniStripeLogo />
    </div>
  );
}