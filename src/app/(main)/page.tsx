import HomeBanner from '@/components/home/HomeBanner';
import HomeCollaboration from '@/components/home/HomeCollaboration';
import HomeInspirationSpotlight from '@/components/home/HomeInspirationSpotlight';
import HomeInstagram from '@/components/home/HomeInstagram';
import HomeJournal from '@/components/home/HomeJournal';
import HomeProductSection from '@/components/home/HomeProductSection';

const Home = () => {
  const productList = [
    {
      id: 'product-1',
      name: 'Gazelle® Hi Black Gum',
      price: '398.000',
      image: '/image/product/product.png',
      slug: 'gazelle-hi-black-gum'
    },
    {
      id: 'product-2',
      name: 'Gazelle® Low Black',
      price: '398.000',
      image: '/image/product/product-2.png',
      slug: 'gazelle-low-black'
    },
    {
      id: 'product-3',
      name: 'Gazelle® Hi Red Gum',
      price: '398.000',
      image: '/image/product/product-3.png',
      slug: 'gazelle-hi-red-gum'
    },
    {
      id: 'product-4',
      name: 'Gazelle® Low Green',
      price: '398.000',
      image: '/image/product/product-4.png',
      slug: 'gazelle-low-green'
    },
    {
      id: 'product-5',
      name: 'Gazelle® Low Blue',
      price: '398.000',
      image: '/image/product/product-5.png',
      slug: 'gazelle-low-blue'
    },
    {
      id: 'product-6',
      name: 'Gazelle® Low Red',
      price: '398.000',
      image: '/image/product/product-6.png',
      slug: 'gazelle-low-red'
    },
  ];
  return (
    <>
      <HomeBanner />
      <HomeCollaboration />
      <HomeProductSection list={productList} />
      <HomeJournal />
      <HomeInspirationSpotlight />
      <HomeInstagram />
    </>
  );
};

export default Home;
