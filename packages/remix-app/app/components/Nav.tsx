import { GitHub, Twitter } from 'iconoir-react';

export const Nav = () => {
  return (
    <nav
      className={`h-16 bg-[#2B2B2B] bg-opacity-[0.15]  text-white text-opacity-70  backdrop-blur-2xl`}
    >
      <div
        className={`mx-auto flex h-full w-full max-w-8xl items-center justify-between px-6`}
      >
        <div className={`text-lg font-semibold  tracking-tight`}>rkbk.gq</div>

        <div className={`flex gap-6 md:gap-9 `}>
          <Twitter strokeWidth={2} className={`h-6 w-6`} />
          <GitHub strokeWidth={2} className={`h-6 w-6`} />
        </div>
      </div>
    </nav>
  );
};
