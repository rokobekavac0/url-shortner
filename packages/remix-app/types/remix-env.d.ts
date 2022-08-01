/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare/globals" />

interface LoadContext {
  env: Env;
}

declare var process: {
  env: { NODE_ENV: 'development' | 'production' };
};

declare module '@remix-run/cloudflare' {
  import type { DataFunctionArgs as RemixDataFunctionArgs } from '@remix-run/cloudflare';
  export * from '@remix-run/cloudflare/dist';

  interface DataFunctionArgs extends Omit<RemixDataFunctionArgs, 'context'> {
    context: LoadContext;
  }

  export type ActionArgs = DataFunctionArgs;
  export type LoaderArgs = DataFunctionArgs;

  export interface ActionFunction {
    (args: DataFunctionArgs):
      | Promise<Response>
      | Response
      | Promise<AppData>
      | AppData;
  }

  export interface LoaderFunction {
    (args: DataFunctionArgs):
      | Promise<Response>
      | Response
      | Promise<AppData>
      | AppData;
  }
}
