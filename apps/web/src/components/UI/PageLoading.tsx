import type { FC } from 'react';

import { Spinner } from './Spinner';

interface Props {
  message?: string;
}

export const PageLoading: FC<Props> = ({ message }) => {
  return (
    <div className="flex h-full flex-grow items-center justify-center">
      <div className="space-y-3">
        <Spinner className="mx-auto" />
        <div>{message}</div>
      </div>
    </div>
  );
};
