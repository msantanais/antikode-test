import classNames from 'classnames';
import { useAppSelector } from '@/utils/redux/hooks';
import classIconHamburgerToX from '@/components/icons/IconHamburgerToX/icon-hamburger.-to-x.module.scss';

const IconHamburgerToX = ({ fill = 'bg-black' }: { fill?: string }) => {
  const { showDrawer } = useAppSelector((state) => state.drawer);
  return (
    <a className={classNames({ [`${classIconHamburgerToX.hamburger}`]: true })}>
      <span
        className={classNames({
          [`${classIconHamburgerToX.bun}`]: true,
          [classIconHamburgerToX.x]: showDrawer,
          [`${fill}`]: true,
        })}
        ></span>
      <span
        className={classNames({
          [`${classIconHamburgerToX.patty}`]: true,
          [classIconHamburgerToX.x]: showDrawer,
          [`${fill}`]: true,
        })}
        ></span>
      <span
        className={classNames({
          [`${classIconHamburgerToX.bun}`]: true,
          [classIconHamburgerToX.x]: showDrawer,
          [`${fill}`]: true,
        })}
      ></span>
    </a>
  );
};

export default IconHamburgerToX;
