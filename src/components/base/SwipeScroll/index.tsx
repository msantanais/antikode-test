"use client";

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import classSwipeScroll from '@/components/base/SwipeScroll/swipe-scroll.module.scss';

const SwipeScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchStartX - touchCurrentX;

    if (containerRef.current) {
      containerRef.current.scrollLeft += deltaX;
    }

    setTouchStartX(touchCurrentX);
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div
      ref={containerRef}
      className={classNames({[`${classSwipeScroll.container}`]: true, 'overflow-x-auto flex': true})}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default SwipeScroll;
