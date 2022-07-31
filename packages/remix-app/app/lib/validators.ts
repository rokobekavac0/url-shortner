import { z } from 'zod';
import { randomString } from '~/lib/helpers';

const nonEmptyString = (name: string) =>
  z.string().min(1, { message: `${name} is required!` });

export const urlEntityShema = z.object({
  url: nonEmptyString('URL')
    .url({ message: 'Invalid URL!' })
    .refine(
      data => {
        try {
          const url = new URL(data);
          if (env.DISSALLOWED_DOMAINS.includes(url.hostname)) {
            return false;
          }
        } catch (error) {
          return false;
        }
        return true;
      },
      { message: 'Domain is not allowed!' },
    ),
  slug: z
    .string()
    .max(20)
    .transform(t => {
      if (t === '') {
        return randomString(6);
      }
      return t.toLowerCase();
    }),
  key: nonEmptyString('Key').refine(
    key => {
      if (key === env.ACCESS_KEY) {
        return true;
      }
      return false;
    },
    { message: 'Invalid key!' },
  ),
});

export const envVariableSchema = z.object({
  ACCESS_KEY: nonEmptyString('ACCESS_KEY'),
  DISSALLOWED_DOMAINS: nonEmptyString('DISSALLOWED_DOMAINS'),
});

export const redirectLoaderSchema = nonEmptyString('Slug');
