import { IconProps } from '../types';

const IconSearch = (props: IconProps) => {
  const { height = '24', width = '24', fill = 'white' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11ZM11 3.25C6.71979 3.25 3.25 6.71979 3.25 11C3.25 15.2802 6.71979 18.75 11 18.75C12.87 18.75 14.5853 18.0877 15.9242 16.9848L19.7123 20.773C20.0052 21.0659 20.4801 21.0659 20.773 20.773C21.0659 20.4801 21.0659 20.0052 20.773 19.7123L16.9848 15.9242C18.0877 14.5853 18.75 12.87 18.75 11C18.75 6.71979 15.2802 3.25 11 3.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconSearch
;
