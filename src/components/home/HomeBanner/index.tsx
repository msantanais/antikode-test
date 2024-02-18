'use client';
import cn from 'classnames';
import homeBannerClass from '@/components/home/HomeBanner/home-banner.module.scss';
import IconArrow from '@/components/icons/IconArrow';

const HomeBanner = () => {
  return (
    <section id="home-banner" className="banner-wrapper h-screen relative">
      <div
        className={cn({
          [`${homeBannerClass['banner']}`]: true,
          'w-full h-full': true,
        })}
      />
      <div
        className={cn({
          [`${homeBannerClass['banner-overlay']}`]: true,
          'w-full h-full absolute': true,
        })}
      />
      <div className="absolute bottom-[48px] left-0 text-white w-full">
        <div className="container px-[20px] lg:px-[40px]">
          <div className="block lg:flex items-center">
            <div>
              <div className="mb-[4px] lg:mb-0 sans allcaps-14">
                #FXXKINGCOMPASS “YEAR OF THE RABBIT”
              </div>
              <div className="sans allcaps-14 mb-[16px] lg:mb-0">COMPASS® / #FR2</div>
            </div>
            <div className="ml-auto">
              <a className="btn btn-oval text-[24px] !px-[48px] !py-[4px] !flex items-center cursor-pointer w-fit">
                <div className="serif text-button-oval whitespace-nowrap mr-[4px]">Shop Now</div>
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
