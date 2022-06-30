import React from 'react';

interface IPropsMediaQuery {
  query: string;
  children: JSX.Element;
}
const MediaQuery = (props: IPropsMediaQuery) => {
  const { query, children } = props;

  const [point, setPoint] = React.useState<boolean>(false);

  const breakpoint = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia(query).matches) {
        setPoint(true);
      } else {
        setPoint(false);
      }
    }
  }, [query]);

  React.useEffect(() => {
    breakpoint();
    window.addEventListener('resize', breakpoint);
    return () => window.removeEventListener('resize', breakpoint);
  }, [breakpoint]);

  if (!point) return null;

  return <>{children}</>;
};

export default MediaQuery;
