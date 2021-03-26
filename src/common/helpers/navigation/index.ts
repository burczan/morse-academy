export const goTo = (pathname: string): void | undefined => {
  window.history.pushState({}, '', pathname);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};
