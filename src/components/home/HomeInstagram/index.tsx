import cn from 'classnames';
import Image from 'next/image';
import SwipeScroll from '@/components/base/SwipeScroll';
import IconArrow from '@/components/icons/IconArrow';

const HomeInstagram = () => {
  const instagramList = [
    {
      id: 'instagram-1',
      image: '/image/instagram/instagram.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C3PyR3pvBK0/',
    },
    {
      id: 'instagram-2',
      image: '/image/instagram/instagram-2.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C29w2DAvFil/',
    },
    {
      id: 'instagram-3',
      image: '/image/instagram/instagram-3.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C22CT05vuxo/',
    },
    {
      id: 'instagram-4',
      image: '/image/instagram/instagram-4.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C2w38fNPLCC/',
    },
    {
      id: 'instagram-5',
      image: '/image/instagram/instagram-5.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C2w38fNPLCC/',
    },
    {
      id: 'instagram-6',
      image: '/image/instagram/instagram-6.jpg',
      url: 'https://www.instagram.com/sepatucompass/p/C2cSX-lP3p_/',
    },
    {
      id: 'instagram-7',
      image: '/image/placeholder/placeholder-120.png',
      url: '#',
    },
  ];
  return (
    <section
      id="home-instagram"
      className="container px-[20px] lg:px-[40px] pt-[40px] relative"
    >
      <div className="serif title title-italic mb-[24px]">
        Follow us on Instagram
      </div>
      <SwipeScroll>
        {instagramList.length > 0 ? (
          instagramList.map((instagram, index) => {
            return (
              <a
                key={instagram.id}
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn({
                  'w-[254px] h-[254px] shrink-0': true,
                  'mr-[40px]': index + 1 !== instagramList.length,
                })}
              >
                <Image
                  className={cn({
                    'object-cover h-full w-full': true,
                  })}
                  src={instagram.image || ''}
                  alt="InstagramImage"
                  width={254}
                  height={254}
                />
              </a>
            );
          })
        ) : (
          <></>
        )}
      </SwipeScroll>
      <div className="flex items-center justify-end -mt-[20px]">
        <a
          href="https://www.instagram.com/sepatucompass/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-oval text-[24px] !px-[48px] !py-[4px] !flex items-center w-fit cursor-pointer !border-black"
        >
          <div className="serif text-button-oval whitespace-nowrap mr-[4px]">
            @sepatucompass
          </div>
          <IconArrow fill="black" />
        </a>
      </div>
    </section>
  );
};

export default HomeInstagram;
