import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from '~/styles/app.css';
import { Toast } from './components/Toast';

export let meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '',
  viewport: 'width=device-width,initial-scale=1',
  'color-scheme': 'dark light',
});

export let links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Toast.Container>
          <Outlet />
        </Toast.Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
