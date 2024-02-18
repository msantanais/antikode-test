import cn from 'classnames';
import spinnerClass from '@/components/base/spinner/spinner.module.scss';

const Spinner = ({ customClass = 'border-[#0099ff]' }: { customClass?: string }) => {
  return (
    <span
      className={cn({
        [`${spinnerClass.loader} border-4 border-solid ${customClass}`]: true,
      })}
    ></span>
  );
};

export default Spinner;
