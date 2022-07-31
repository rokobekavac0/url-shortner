import classNames from 'classnames';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-[#171717] will-change-auto`}
    >
      <div className={`noise z-20 will-change-auto`}></div>
      <div
        className={`absolute z-10 h-[300px] w-[300px] transform-gpu rounded-full bg-[#5579F7] bg-opacity-60 blur-[110px] duration-500 md:top-[13vh] md:left-[24vw]`}
      />
      <div
        className={`absolute top-[30vh] left-[10vw] z-10 h-[300px] w-[300px] transform-gpu rounded-full bg-[#F755AC] bg-opacity-60 blur-[100px] duration-500 md:top-[32vh] md:left-[33vw]`}
      />
      <div
        className={`absolute top-[20vh]  left-[-10vw] z-10 h-[200px] w-[200px] translate-x-1 transform-gpu rounded-full bg-[#A855F7] bg-opacity-70 blur-[110px] duration-500 md:top-[46vh] md:left-[22vw]`}
      />
      <div
        className={`absolute bottom-[4vh] right-[10vw]  z-10 h-[200px] w-[200px] translate-x-1 transform-gpu rounded-full bg-[#5579F7] bg-opacity-70 blur-[110px] duration-500 lg:right-[4vw] lg:top-[22vh]`}
      />
      <div className={`z-40 flex h-full grow flex-col`}>{children}</div>
    </div>
  );
};

interface LayoutContentProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const LayoutContent = ({ children, className }: LayoutContentProps) => {
  const c = classNames({
    'mx-auto h-full max-w-8xl px-6': true,
    [String(className)]: !!className,
  });
  return <div className={c}>{children}</div>;
};

Layout.Content = LayoutContent;
