import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from 'react';
import cx from 'classnames';
import { goTo } from '../../utils/helpers';
import spinner from '../LoadingSpinner/spinner.svg';
import s from './style.module.css';

export type ImageProps = {
  img: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  style?: CSSProperties;
  imgClassname?: string;
  linkClassname?: string;
  href?: string;
};

export const Image = ({
  img,
  style,
  imgClassname,
  linkClassname,
  href,
}: ImageProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const {
    width,
    height,
    alt,
    url,
  } = img;
  const [src, setSrc] = useState(spinner);

  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef.current.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  }, []);

  useEffect(() => {
    setSrc(url);
  }, [url]);

  const onClickHandler = () => {
    if (href) {
      goTo(href);
    }
  };

  const image = (
    <img
      className={cx(
        s.image, {
          [s.cursor]: href,
        },
        imgClassname,
      )}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: width,
        maxHeight: height,
        ...style,
      }}
    />
  );

  return (
    <>
      {href
        ? (
          <a
            ref={linkRef}
            href={href}
            onClick={onClickHandler}
            className={linkClassname}
          >
            {image}
          </a>
        )
        : image}
    </>
  );
};
