import cn from 'classnames';
import Image from 'next/image';
import homeCollaborationClass from '@/components/home/HomeCollaboration/home-collaboration.module.scss';

const HomeCollaboration = () => {
  return (
    <section
      id="collaborations"
      className="container px-[20px] lg:px-[40px] pt-[40px]"
    >
      <div>
        <Image
          className={cn({
            [`${homeCollaborationClass['banner']}`]: true,
            'w-screen mb-[24px]': true,
          })}
          src="/image/home/home-collaboration.png"
          alt="HomeCollaboration"
          width={1200}
          height={675}
          quality={100}
        />
      </div>
      <div className="sans allcaps-14 mb-[8px]">#FR2</div>
      <div className="sans title-2 mb-[24px]">COMPASS® X 3.4.7 LIMITED EDITION</div>
      <div className={cn({ [`${homeCollaborationClass['divider']}`]: true })} />
    </section>
  );
};

export default HomeCollaboration;
