export const imageNewUrl = (query: number | string): string => {
  if (typeof query === 'number') {
    return new URL(`/src/assets/logo/${query}.png`, import.meta.url).href;
  }

  return new URL(`/${query}`, import.meta.url).href;
};
