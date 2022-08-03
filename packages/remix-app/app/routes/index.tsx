import type { ActionArgs, MetaFunction } from '@remix-run/cloudflare';
import type { ZodIssue } from 'zod';
import { Footer } from '~/components/Footer';
import { Form } from '~/components/Form';
import { Hero } from '~/components/Hero';

import { Layout } from '~/components/Layout';
import { Nav } from '~/components/Nav';
import {
  actionReturnError,
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

export type ActionReturnType = ReturnType<typeof action>;

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
      <Layout.Content>
        <Hero />
        <Form />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Index;
