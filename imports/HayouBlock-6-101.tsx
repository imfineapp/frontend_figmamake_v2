import svgPaths from "./svg-w3gxba1tai";

function InfoIcon24() {
  return (
    <div className="relative shrink-0 size-6" data-name="Info_icon_24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Info_icon_24">
          <path
            d={svgPaths.pace200}
            id="Vector"
            stroke="var(--stroke-0, #2D2B2B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M12 16V12"
            id="Vector_2"
            stroke="var(--stroke-0, #2D2B2B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
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
    </div>
  );
}

function InfoGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Info_group"
    >
      <div className="font-['Kreon:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[24px] text-left text-nowrap">
        <p className="block leading-[0.8] whitespace-pre">How are you?</p>
      </div>
      <InfoIcon24 />
    </div>
  );
}

function ImFeelingDown() {
  return (
    <div
      className="h-[26px] relative shrink-0 w-full"
      data-name="I\'m feeling down..."
    >
      <div className="absolute font-['Kreon:Regular',_sans-serif] font-normal inset-0 leading-[0] text-[#313131] text-[32px] text-left">
        <p className="block leading-[0.8]">{`I'm neutral`}</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#2d2b2b] h-[30px] relative rounded-xl shrink-0 w-full">
      <div
        className="absolute bg-[#e1ff00] h-[30px] left-0 rounded-xl top-0 w-[186px]"
        data-name="Block"
      >
        <div className="absolute border-2 border-[#2d2b2b] border-solid inset-0 pointer-events-none rounded-xl" />
      </div>
    </div>
  );
}

function StartMining() {
  return (
    <div
      className="bg-[#2d2b2b] h-[46px] relative rounded-xl shrink-0 w-full"
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
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start left-4 p-0 top-3 w-80">
      <InfoGroup />
      <ImFeelingDown />
      <Frame40 />
      <div className="font-['PT_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333333] text-[20px] text-left w-full">
        <p className="block leading-none">{`Check in with yourself — it's the first step to self-care! Do it everyday.`}</p>
      </div>
      <StartMining />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-0 contents left-1/2 top-0 translate-x-[-50%]">
      <div
        className="absolute bg-[#e1ff00] inset-0 rounded-xl"
        data-name="Background"
      />
      <Frame21 />
    </div>
  );
}

export default function HayouBlock() {
  return (
    <div className="relative size-full" data-name="HAYOU_block">
      <Group17 />
    </div>
  );
}