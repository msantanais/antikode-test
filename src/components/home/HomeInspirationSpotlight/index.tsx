import SwipeScroll from '@/components/base/SwipeScroll';
import JournalCard from '@/components/base/Card/JournalCard';

const HomeInspirationSpotlight = () => {
  const journalList: any[] = [
    {
      id: 'journal-1',
      image: '/image/placeholder/placeholder-120.png',
      title: 'COMPASS® FOR JAKARTA SNEAKERS DAY 2023!',
      date: 'MAY 21, 2023',
    },
    {
      id: 'journal-2',
      image: '/image/placeholder/placeholder-120.png',
      title: 'COMPASS® FOR SURABAYA SNEAKERS DAY 2024!',
      date: 'MARCH 22, 2023',
    },
    {
      id: 'journal-3',
      image: '/image/placeholder/placeholder-120.png',
      title: 'COMPASS® FOR BANDUNG SNEAKERS DAY 2023!',
      date: 'APRIL 23, 2023',
    },
    {
      id: 'journal-4',
      image: '/image/placeholder/placeholder-120.png',
      title: 'COMPASS® FOR MEDAN SNEAKERS DAY 2023!',
      date: 'JUNE 24, 2023',
    },
    {
      id: 'journal-5',
      image: '/image/placeholder/placeholder-120.png',
      title: 'COMPASS® FOR MAKASAR SNEAKERS DAY 2023!',
      date: 'JULY 25, 2023',
    },
  ];

  return (
    <section
      id="home-inspiration-spotlight"
      className="container px-[20px] lg:px-[40px] pt-[40px]"
    >
      <div className="grid lg:grid-cols-[220px,auto]">
        <div className="flex lg:block">
          <div className="serif title title-italic mb-[15px]">
            Inspiration spotlight
          </div>
          <div className="sans allcaps-12 ml-auto lg:ml-0 flex lg:block items-center">
            <a href="#home-inspiration-spotlight"> View All</a>
          </div>
        </div>
        <SwipeScroll>
          {journalList.length > 0 ? (
            journalList.map((journal, index) => {
              return (
                <JournalCard
                  key={journal.id}
                  data={journal}
                  className={
                    index + 1 !== journalList.length ? 'mr-[16px]' : ''
                  }
                />
              );
            })
          ) : (
            <></>
          )}
        </SwipeScroll>
      </div>
    </section>
  );
};

export default HomeInspirationSpotlight;
