'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import IconCompass from '@/components/icons/header/IconCompass';
import headerClass from '@/components/layout/Header/header.module.scss';
import IconSearch from '@/components/icons/header/IconSearch';
import IconProfile from '@/components/icons/header/IconProfile';
import IconEmptyBag from '@/components/icons/header/IconEmptyBag';
import Drawer from '@/components/base/Drawer';
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks';
import { setShowDrawer } from '@/store/drawer';
import IconHamburgerToX from '@/components/icons/IconHamburgerToX';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [forceScrolled, setForceScrolled] = useState(false);
  const { showDrawer } = useAppSelector((state) => state.drawer);
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const navbarList = {
    left: [
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
    ],
    right: [
      {
        key: 'search',
        icon: <IconSearch fill={isScrolled || pathname !== '/' ? 'black' : 'white'} />,
        className: 'cursor-pointer',
        onClick: () => {},
      },
      {
        key: 'profile',
        icon: <IconProfile fill={isScrolled || pathname !== '/' ? 'black' : 'white'} />,
        className: 'cursor-pointer',
        onClick: () => {},
      },
      {
        key: 'empty-bag',
        icon: <IconEmptyBag fill={isScrolled || pathname !== '/' ? 'black' : 'white'} />,
        className: 'hidden lg:block cursor-pointer',
        onClick: () => {},
      },
      {
        key: 'empty-bag-test',
        icon: (
          <IconHamburgerToX
            fill={isScrolled || showDrawer || pathname !== '/' ? 'bg-black' : 'bg-white'}
          />
        ),
        className: `flex items-center lg:hidden relative z-30 cursor-pointer`,
        onClick: () => dispatch(setShowDrawer(!showDrawer)),
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY !== 0;
      if (scrolled) {
        setIsScrolled(true);
      } else if (!scrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const scrolled = window.scrollY !== 0;
    if (scrolled) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (pathname !== '/') {
      setForceScrolled(true);
      setIsScrolled(true);
    }
  }, [pathname]);

  return (
    <nav
      className={cn({
        'w-full fixed transition-colors h-[64px] z-10': true,
        'bg-transparent': !isScrolled,
        'bg-white': isScrolled,
      })}
    >
      <div className="container px-[20px] lg:px-[40px] py-[20px]">
        <ul className={cn({ [headerClass.navbar]: true, flex: true })}>
          <li className="flex items-center lg:pr-[60px]">
            <a href="/">
              <IconCompass fill={isScrolled || pathname !== '/' ? 'black' : 'white'} />
            </a>
          </li>
          {navbarList.left.map(
            (datum: { url: string; label: string }, index) => {
              return (
                <li
                  key={datum.url}
                  className={cn({
                    'pr-[24px]': index + 1 !== navbarList.left.length,
                    'text-black': isScrolled || pathname !== '/',
                    'text-white': !isScrolled && pathname === '/' ,
                    'hidden lg:block': true,
                  })}
                >
                  <a href={datum.url}>{datum.label}</a>
                </li>
              );
            }
          )}
          {navbarList.right.map((datum, index) => {
            return (
              <li
                key={datum.key}
                className={cn({
                  'ml-auto': index === 0,
                  'pr-[16px]': index + 1 < navbarList.right.length - 1,
                  [`${datum.className}`]: true,
                })}
                onClick={datum.onClick}
              >
                <div className="relative">
                  <div
                    className={cn({
                      'underline-animation':
                        index + 1 !== navbarList.right.length,
                    })}
                  >
                    {datum.icon}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Drawer />
    </nav>
  );
};

export default Header;
