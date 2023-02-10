import random, { Random } from 'random';

export { default as random } from 'random';

export const libB = (): Random => {
  return random;
};

export const okLibB = (): { ok: string } => {
  return { ok: 'ok' };
};
