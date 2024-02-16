import { IconProps } from './types';

const IconUser = (props: IconProps) => {
  const { height = '24', width = '24' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
      enableBackground="new 0 0 192 192"
      width={width}
      height={height}
    >
      <path
        fill="#E0E0E0"
        d="M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"
      ></path>
      <path
        fill="#BDBDBD"
        d="M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"
      ></path>
      <path
        fill="#BDBDBD"
        d="M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"
      ></path>
      <rect fill="none" width="192" height="192"></rect>
    </svg>
  );
};

export default IconUser;
