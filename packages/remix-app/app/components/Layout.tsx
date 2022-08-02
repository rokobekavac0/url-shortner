import { Background } from './Background';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-[#171717] will-change-auto`}
    >
      <Background />
      <div className={`fallback-background z-40 flex h-full grow flex-col`}>
        {children}
      </div>
    </div>
  );
};

interface LayoutContentProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const LayoutContent = ({ children }: LayoutContentProps) => {
  return (
    <div className={`relative flex grow flex-col justify-center`}>
      <div
        className={`mx-auto flex w-full max-w-8xl shrink-0 flex-col items-center justify-around px-6 lg:flex-row lg:items-start`}
      >
        {children}
      </div>
    </div>
  );
};

Layout.Content = LayoutContent;
