export const Background = () => {
  return (
    <div className={`hidden sm:block`}>
      <div className={`noise z-20 will-change-auto`}></div>
      <div
        className={`absolute z-10 aspect-square w-[220px] translate-y-[100px] translate-x-[0px] rounded-full bg-[#5579F7] bg-opacity-60 blur-[70px]  duration-[0ms] sm:translate-x-[70px] md:w-[300px] md:translate-y-[13vh] md:translate-x-[24vw] md:blur-[100px]`}
      />
      <div
        className={`absolute z-10 aspect-square w-[190px] translate-y-[220px] translate-x-[90px] rounded-full bg-[#F755AC] bg-opacity-60 blur-[80px]  duration-[0ms] md:w-[300px] md:translate-y-[32vh] md:translate-x-[33vw] md:blur-[90px]`}
      />
      <div
        className={`absolute z-10 aspect-square w-[160px] translate-y-[250px] -translate-x-[20px] rounded-full bg-[#A855F7] bg-opacity-70 blur-[55px]  duration-[0ms] md:h-[200px] md:translate-y-[46vh] md:translate-x-[22vw] md:blur-[100px]`}
      />
      <div
        className={`absolute bottom-[50px] right-[40px] z-10 aspect-square w-[200px] rounded-full bg-[#5579F7] bg-opacity-70 blur-[110px]  duration-[0ms] lg:right-auto lg:bottom-auto lg:translate-x-[90vw] lg:translate-y-[22vh]`}
      />
    </div>
  );
};
