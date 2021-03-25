export type Route = {
  pathname: string;
  name: string;
  render: () => JSX.Element;
  hideInNavbarStart: boolean,
  hideInNavbarEnd: boolean,
};
