import { appText } from '~/lib/const';

export const Nav = () => {
  return (
    <nav
      className={`h-16 bg-[#2c2c2c] bg-opacity-10 text-white text-opacity-70 backdrop-blur-2xl`}
    >
      <div
        className={`mx-auto flex h-full w-full max-w-8xl items-center justify-between px-6`}
      >
        <div className={`text-lg font-semibold tracking-tight`}>
          {appText.appName}
        </div>

        <div className={`flex items-center gap-6 md:gap-6`}>
          <div
            className={` border-opacity-70 pr-4 text-base font-medium leading-6`}
          >
            {/* <Link to={'/directory'}>Directory</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
