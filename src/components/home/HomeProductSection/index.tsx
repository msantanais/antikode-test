import cn from 'classnames';
import ProductCard from '@/components/base/Card/ProductCard';
import SwipeScroll from '@/components/base/SwipeScroll';

const HomeProductSection = ({
  id = 'home-product-section',
  title = 'Timeless Choice',
  list = [],
}: {
  id?: string;
  title?: string;
  list?: any[];
}) => {
  return list.length ? (
    <section id={id} className="container px-[20px] lg:px-[40px] pt-[40px]">
      <div className="serif title title-italic">{title}</div>
      <SwipeScroll>
        {list.length &&
          list.map((product) => {
            return (
              <ProductCard
                key={product.id}
                data={product}
                className={cn({ 'mr-[24px]': true })}
              />
            );
          })}
      </SwipeScroll>
    </section>
  ) : (
    <></>
  );
};

export default HomeProductSection;
