import cn from 'classnames';
import Image from 'next/image';

const ProductCard = ({
  data = { slug: 'test' },
  className,
}: {
  data?: { name?: string; price?: string; image?: string; slug?: string };
  className?: string;
}) => {
  return (
    <a
      href={`/shop/${data.slug}`}
      className={cn({ [`${className}`]: true, 'w-[250px] shrink-0': true })}
    >
      <Image
        src={data.image || ''}
        alt={data.name || 'ProductImage'}
        width={250}
        height={250}
      />
      <div className="text-center sans allcaps-12 text-darkCharcoal">
        {data.name}
      </div>
      <div className="text-center sans allcaps-12 font-bold">
        IDR {data.price}
      </div>
    </a>
  );
};

export default ProductCard;
