import { libB, okLibB } from '@my-app/lib-b';

export const libA = (): string => {
  // Does not trigger an error when called in a function
  const inFunctionLibB = libB();
  void inFunctionLibB;

  return 'ok!';
};

// Does not trigger an error when not exported
const notExportedLibB = libB();
void notExportedLibB;

// Triggers an error when exported
export const exportedLibB = libB();

// Does not trigger an error when exported
export const exportedOkLibB = okLibB();
