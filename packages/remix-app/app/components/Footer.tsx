import { appText } from '~/lib/const';

export const Footer = () => {
  return (
    <div
      className={`mt-10 mb-5 w-full  text-center leading-6 text-white text-opacity-50 md:my-5`}
    >
      <a
        href={appText.socials.twitterLink}
        rel='noreferrer'
        target='_blank'
        className={``}
      >
        Made by <span>{appText.socials.twitterName}</span>
      </a>
      ・
      <a rel='noreferrer' href={appText.socials.githubLink} target='_blank'>
        GitHub
      </a>
    </div>
  );
};
