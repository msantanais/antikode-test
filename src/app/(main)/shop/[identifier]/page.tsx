import HomeProductSection from '@/components/home/HomeProductSection';
import ProductDetail from '@/components/product/ProductDetail';
import { productList, otherProductList, allProductList } from '@/utils/variable';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { identifier: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams: query }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const index = allProductList.findIndex(
    (datum) => datum.slug === params.identifier
  );
  const detailProduct = allProductList[index];
  return {
    title: `Compass | ${detailProduct.name}`,
    // openGraph: {},
    // twitter: {},
  };
}

const ProductDetailPage = () => {
  return (
    <div className="pt-[64px]">
      <ProductDetail />
      <HomeProductSection title='Best paired with' list={otherProductList}  />
      <HomeProductSection title='You might also like' list={productList}  />
    </div>
  );
};

export default ProductDetailPage;
