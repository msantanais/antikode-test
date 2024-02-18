import cn from 'classnames';
import Image from 'next/image';

const JournalCard = ({
  data = {},
  className,
}: {
  data?: { title?: string; date?: string; image?: string };
  className?: string;
}) => {
  return (
    <div className={cn({ [`${className}`]: true, 'w-[300px] shrink-0 mr-[16px]': true })}>
      <div className='grid grid-cols-[120px,180px] gap-[16px]'>
        <Image
          src={data.image || ''}
          alt={data.title || 'JournalImage'}
          width={120}
          height={120}
        />
        <div className='grid grid-rows-[min-content,auto]'>
          <div className='sans allcaps-18 font-bold line-clamp-4'>
            {data.title}
          </div>
          <div className='sans allcaps-12 text-darkCharcoal flex items-end'>
            {data.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
