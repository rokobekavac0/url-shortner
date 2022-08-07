import type { LoaderFunction } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';

export const loader: LoaderFunction = async ({ context, params }) => {
  const slug = params.slug ?? '';

  const url = await context.env.URLS.get(slug);

  return redirect(url ?? '/');
};
