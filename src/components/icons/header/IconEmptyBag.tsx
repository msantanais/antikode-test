import { IconProps } from '../types';

const IconEmptyBag = (props: IconProps) => {
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
        d="M9.87868 4.62868C10.4413 4.06607 11.2044 3.75 12 3.75C12.7957 3.75 13.5587 4.06607 14.1213 4.62868C14.5035 5.01084 14.7719 5.48548 14.9047 6H9.09526C9.22812 5.48548 9.49653 5.01084 9.87868 4.62868ZM7.5 7.5V9.75C7.5 10.1642 7.83579 10.5 8.25 10.5C8.66422 10.5 9 10.1642 9 9.75V7.5H15V9.75C15 10.1642 15.3358 10.5 15.75 10.5C16.1642 10.5 16.5 10.1642 16.5 9.75V7.5H17.283L18.2489 19.9444C18.2504 19.9634 18.2503 19.9821 18.2489 20H5.75107C5.74968 19.9821 5.7496 19.9634 5.75107 19.9444L6.71705 7.5H7.5ZM7.56292 6C7.71762 5.08477 8.153 4.23304 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C15.847 4.23304 16.2824 5.08477 16.4371 6H17.4907C17.9047 6 18.2359 6.21978 18.4443 6.48676C18.6498 6.75006 18.7543 7.0734 18.7784 7.38384L19.7444 19.8283C19.7585 20.0097 19.746 20.1945 19.7061 20.3729C19.6663 20.5509 19.5981 20.7276 19.4974 20.8886C19.397 21.0492 19.2599 21.2006 19.0826 21.314C18.9027 21.4291 18.6883 21.5 18.4566 21.5H5.54336C5.31166 21.5 5.09731 21.4291 4.9174 21.314C4.7401 21.2006 4.60303 21.0492 4.50257 20.8886C4.40189 20.7276 4.3337 20.5509 4.29392 20.3729C4.25403 20.1945 4.24149 20.0097 4.25557 19.8283L5.22155 7.38384C5.24565 7.0734 5.35022 6.75006 5.55574 6.48676C5.76413 6.21978 6.09533 6 6.50934 6H7.56292Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconEmptyBag;