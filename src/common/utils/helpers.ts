export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

export const goTo = (pathname: string): void | undefined => {
  window.history.pushState({}, '', pathname);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};
