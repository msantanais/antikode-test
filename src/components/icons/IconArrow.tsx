import { IconProps } from './types';

const IconArrow = (props: IconProps) => {
  const { height = '24', width = '24', fill = 'white' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.1622 7.5L19.1622 12.5L14.1622 17.5"
        stroke={fill}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M18.1622 12.5L4.16217 12.5"
        stroke={fill}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrow;
