export const Background = () => {
  return (
    <>
      <div className={`noise z-20 will-change-auto`}></div>
      <div
        className={`absolute z-10 h-[300px] w-[300px]  rounded-full bg-[#5579F7] bg-opacity-60 blur-[110px] duration-500 md:top-[13vh] md:left-[24vw]`}
      />
      <div
        className={`absolute top-[30vh] left-[10vw] z-10 h-[300px] w-[300px]  rounded-full bg-[#F755AC] bg-opacity-60 blur-[100px] duration-500 md:top-[32vh] md:left-[33vw]`}
      />
      <div
        className={`absolute top-[20vh]  left-[-10vw] z-10 h-[200px] w-[200px] translate-x-1  rounded-full bg-[#A855F7] bg-opacity-70 blur-[110px] duration-500 md:top-[46vh] md:left-[22vw]`}
      />
      <div
        className={`absolute bottom-[4vh] right-[10vw]  z-10 h-[200px] w-[200px] translate-x-1  rounded-full bg-[#5579F7] bg-opacity-70 blur-[110px] duration-500 lg:right-[4vw] lg:top-[22vh]`}
      />
    </>
  );
};
