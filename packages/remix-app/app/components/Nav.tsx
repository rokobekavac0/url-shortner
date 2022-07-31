import { GitHub, Twitter } from 'iconoir-react';
import { Layout } from './Layout';

interface NavProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Nav = ({}: NavProps) => {
  return (
    <nav
      className={`h-16 bg-[#2B2B2B] bg-opacity-[0.15]  text-white text-opacity-70  backdrop-blur-2xl`}
    >
      <Layout.Content
        className={`flex h-full w-full items-center justify-between`}
      >
        <div className={`text-lg font-semibold  tracking-tight`}>rkbk.gq</div>

        <div className={`flex gap-6 md:gap-9 `}>
          <Twitter strokeWidth={2} className={`h-6 w-6`} />
          <GitHub strokeWidth={2} className={`h-6 w-6`} />
        </div>
      </Layout.Content>
    </nav>
  );
};
