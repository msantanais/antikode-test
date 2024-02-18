import { IconProps } from '../types';

const IconMastercard = (props: IconProps) => {
  const { height = '48', width = '88', fill = 'white' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 88 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.703 23.9984C39.7003 20.5009 41.303 17.1963 44.0495 15.0369C39.3837 11.3636 32.6833 11.8986 28.6573 16.266C24.6313 20.6333 24.6313 27.3666 28.6573 31.734C32.6833 36.1013 39.3837 36.6363 44.0495 32.9631C41.3022 30.803 39.6993 27.497 39.703 23.9984Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.4612 24.0016C62.4611 28.3658 59.9735 32.3468 56.0548 34.2539C52.1361 36.161 47.4744 35.6594 44.0495 32.9621C46.7945 30.8011 48.3973 27.4973 48.3973 24C48.3973 20.5026 46.7945 17.1989 44.0495 15.0378C47.4744 12.3405 52.1361 11.8389 56.0548 13.746C59.9735 15.6532 62.4611 19.6342 62.4612 23.9984V24.0016Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconMastercard;
