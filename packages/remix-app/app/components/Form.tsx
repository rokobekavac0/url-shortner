import {
  Form as RemixFrom,
  useActionData,
  useTransition,
} from '@remix-run/react';

import { extractFormError } from '~/lib/helpers';
import type { ActionReturnType } from '~/routes';
import { Button } from './Button';
import { Input } from './Input';

export const Form = () => {
  const transition = useTransition();
  const actionData = useActionData<ActionReturnType>();
  return (
    <div
      className={`-mt-7 flex flex-col items-center justify-center lg:max-w-sm`}
    >
      <RemixFrom method='post'>
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

            <Button disabled={transition.state === 'submitting'} type='submit'>
              {transition.state === 'submitting' ? 'Creating...' : 'Create'}
            </Button>
          </div>
        </fieldset>
      </RemixFrom>
    </div>
  );
};
