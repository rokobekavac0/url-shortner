import { appText } from '~/lib/const';

export const Hero = () => {
  return (
    <div
      className={`my-48 flex max-w-xl flex-grow-0 flex-col items-center justify-center gap-4 lg:my-0 lg:items-start lg:gap-3`}
    >
      <div
        className={`-mx-3 text-center text-[46px] font-semibold leading-[52px] tracking-[-0.015em] text-white text-opacity-[0.85] md:mx-0 md:text-[54px] md:leading-[60px] lg:text-start  xl:text-[64px] xl:leading-[76px] `}
      >
        {appText.hero.title}
      </div>
      <div
        className={`max-w-xs text-center text-lg text-white text-opacity-50 sm:max-w-sm md:max-w-lg lg:text-start xl:max-w-none`}
      >
        {appText.hero.subtitle}
      </div>
    </div>
  );
};
