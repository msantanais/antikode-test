import classDrawer from '@/components/base/Drawer/drawer.module.scss';
import { setShowDrawer } from '@/store/drawer';
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks';
import cn from 'classnames';

const Drawer = () => {
  const { showDrawer } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();
  const navbarList = [
    {
      label: 'Shop',
      url: '#shop',
    },
    {
      label: 'Our Story',
      url: '#our-story',
    },
    {
      label: 'Collaborations',
      url: '#collaborations',
    },
    {
      label: 'Journal',
      url: '#journal',
    },
  ];
  return (
    <div
      className={cn({
        [`${classDrawer.drawer}`]: true,
        [`${classDrawer.show}`]: showDrawer,
        'p-[40px]': true,
      })}
    >
      {navbarList.map((datum: { url: string; label: string }, index) => {
        return (
          <div
            key={datum.url}
            className={cn({
              'text-[32px] font-bold': true,
              'pb-[16px]': index + 1 !== navbarList.length,
            })}
          >
            <a href={datum.url} onClick={() => dispatch(setShowDrawer(false))}>
              {datum.label}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Drawer;
