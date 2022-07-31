import type { ActionArgs, MetaFunction } from '@remix-run/cloudflare';
import { Form, useActionData, useTransition } from '@remix-run/react';
import classNames from 'classnames';
import type { ZodIssue } from 'zod';

import { Layout } from '~/components/Layout';
import { Nav } from '~/components/Nav';
import {
  actionReturnError,
  extractFormError,
  formToObject,
  slugExistsError,
} from '~/lib/helpers';
import { urlEntityShema } from '~/lib/validators';

export const action = async ({ request, context }: ActionArgs) => {
  try {
    const res = await urlEntityShema.parseAsync(await formToObject(request));
    const urlExists = await context.env.URLS.get(res.slug);
    if (urlExists) {
      throw slugExistsError();
    }
    await context.env.URLS.put(res.slug, res.url);

    return {
      data: {
        ...res,
        fullUrl: `${env.APP_URL}/${res.slug}`,
      },
      errors: [],
      inputErrorsFormatted: {},
      inputErrors: [] as ZodIssue[],
    };
  } catch (error: any) {
    return actionReturnError(error);
  }
};

type ActionReturnType = ReturnType<typeof action>;

interface HeroProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <div
      className={`my-48 flex max-w-xl flex-grow-0 flex-col items-center justify-center gap-3 lg:my-0 lg:items-start`}
    >
      <div
        className={`lg:text-start -mx-3 text-center text-[46px] font-semibold leading-[52px] tracking-[-0.015em] text-white text-opacity-[0.85] md:mx-0 lg:text-[64px] lg:leading-[76px] `}
      >
        rkbk.gq — tiny url shortner
      </div>
      <div
        className={`lg:text-start max-w-xs text-center text-lg text-white text-opacity-50 md:max-w-lg lg:max-w-none`}
      >
        Built with Cloudflare Workers and KV storage for {'sub 50 ms'} redirect
        time across the globe.
      </div>
    </div>
  );
};

interface FormProps {
  children?: React.ReactNode | React.ReactNode[];
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  description?: string;
}

export const Input = ({
  label,
  name,
  description,
  error,
  ...props
}: InputProps) => {
  const desStyle = classNames(
    {
      'text-[#737373]': !error,
      'text-[#EF4444]': error,
    },
    'text-sm leading-4',
  );

  const inputStyle = classNames({
    'border-[#404040]': !error,
    'border-[#DC2626]': error,
  });

  return (
    <div className={`flex w-full flex-col gap-2`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-base font-medium leading-5 text-white text-opacity-80`}
        >
          {label}
        </label>
      )}
      <input
        className={`${inputStyle} h-10 w-full rounded-2xl border bg-[#171717] bg-opacity-10 px-3 text-sm placeholder-[#525252] shadow-[0px_0px_1px_2px_rgba(255,255,255,0)] backdrop-blur-sm transition-all  focus:shadow-[0px_0px_1px_2px_rgba(255,255,255,0.69)]  focus:outline-none`}
        name={name}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        {...props}
      />
      {description && error && <div className={desStyle}>{error}</div>}
      {description && !error && <div className={desStyle}>{description}</div>}
    </div>
  );
};

export const Form1 = ({ children }: FormProps) => {
  const transition = useTransition();
  const actionData = useActionData<ActionReturnType>();
  return (
    <div
      className={`-mt-7 flex flex-col items-center justify-center lg:max-w-sm`}
    >
      <Form method='post'>
        <fieldset disabled={transition.state === 'submitting'}>
          <div className={`flex flex-col gap-6`}>
            <div
              className={`text-2xl font-semibold leading-8 text-white text-opacity-80`}
            >
              Create new link
            </div>
            <Input
              description='Url you want to shorten'
              name='url'
              placeholder='example.com'
              label='URL'
              error={extractFormError('url', actionData?.inputErrorsFormatted)}
            ></Input>
            <div className={`flex gap-5`}>
              <div className={`flex flex-[50%]`}>
                <Input
                  description='If not provided, random string will be used'
                  name='slug'
                  label='Slug*'
                  placeholder='ytv'
                  error={extractFormError(
                    'slug',
                    actionData?.inputErrorsFormatted,
                  )}
                ></Input>
              </div>
              <div className={`flex flex-[50%]`}>
                <Input
                  description='Private shortners require a key'
                  name='key'
                  type='password'
                  placeholder='Password'
                  label='Key'
                  error={extractFormError(
                    'key',
                    actionData?.inputErrorsFormatted,
                  )}
                ></Input>
              </div>
            </div>

            <button
              disabled={transition.state === 'submitting'}
              className={`h-9 w-full rounded-2xl bg-white text-center font-medium text-black outline-black`}
              type='submit'
            >
              {transition.state === 'submitting' ? 'Creating...' : 'Create'}
            </button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
};

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={`text-lg leading-6 text-white text-opacity-50`}>
      Made by <b>@rokobekavac</b>
    </div>
  );
};

export let meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'rkbk.gq - URL Shortener',
  viewport: 'width=device-width,initial-scale=1',
  'color-scheme': 'dark light',
});

const Index = () => {
  return (
    <Layout>
      <Nav />
      <div className={`relative flex grow flex-col justify-center`}>
        <div
          className={`mx-auto flex w-full max-w-8xl shrink-0 flex-col items-center justify-around px-6 lg:flex-row lg:items-start`}
        >
          <Hero />
          <Form1 />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
