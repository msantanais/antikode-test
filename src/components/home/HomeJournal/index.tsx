'use client';
import cn from 'classnames';
import homeJournalClass from '@/components/home/HomeJournal/home-journal.module.scss';
import IconArrow from '@/components/icons/IconArrow';

const HomeJournal = () => {
  return (
    <section id="journal" className="banner-wrapper h-screen relative mt-[40px]">
      <div
        className={cn({
          [`${homeJournalClass['banner']}`]: true,
          'w-full h-full': true,
        })}
      />
      <div
        className={cn({
          [`${homeJournalClass['banner-overlay']}`]: true,
          'w-full h-full absolute': true,
        })}
      />
      <div className="absolute bottom-[48px] left-0 text-white w-full">
        <div className="container px-[20px] lg:px-[40px]">
          <div className="lg:flex items-center">
            <div>
              <div className="serif title title-italic text-white mb-[4px] lg:mb-[16px]">
                Artificial Vibration
              </div>
              <div className="sans allcaps-14 mb-[16px] lg:mb-0">THE SYNTHESIS BETWEEN DIGITAL AND ENERGY</div>
            </div>
            <div className="ml-auto">
              <a href="#collaborations" className="btn btn-oval text-[24px] !px-[48px] !py-[4px] !flex items-center w-fit cursor-pointer">
                <div className="serif text-button-oval whitespace-nowrap mr-[4px]">Read more</div>
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeJournal;
