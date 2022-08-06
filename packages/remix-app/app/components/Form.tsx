import {
  Form as RemixFrom,
  useActionData,
  useTransition,
} from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';

import { extractFormError } from '~/lib/helpers';
import type { ActionReturnType } from '~/routes';
import { Button } from './Button';
import { Input } from './Input';
import { Toast } from './Toast';

export const Form = () => {
  const transition = useTransition();
  const actionData = useActionData<ActionReturnType>();

  const formRef = useRef<HTMLFormElement>(null);

  const [toastOpen, setToastOpen] = useState(false);

  const isAdding =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'create';

  useEffect(() => {
    if (!isAdding && !!actionData?.data) {
      formRef.current?.reset();
      setToastOpen(true);
    }
  }, [isAdding, actionData]);

  return (
    <>
      <div
        className={`-mt-7 flex max-w-md flex-col items-center justify-center lg:max-w-sm`}
      >
        <RemixFrom ref={formRef} method='post'>
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
                error={extractFormError(
                  'url',
                  actionData?.inputErrorsFormatted,
                )}
              ></Input>
              <div className={`flex gap-5`}>
                <div className={`flex w-1/2`}>
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
                <div className={`flex w-1/2`}>
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

              <Button
                name='_action'
                value='create'
                disabled={transition.state === 'submitting'}
                type='submit'
              >
                {transition.state === 'submitting' ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </fieldset>
        </RemixFrom>
      </div>
      <Toast open={toastOpen} onOpenChange={setToastOpen}>
        <Toast.Title>
          Link <b>{actionData?.data?.fullUrl} </b> added
        </Toast.Title>
      </Toast>
    </>
  );
};
