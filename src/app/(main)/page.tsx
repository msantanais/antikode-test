import HomeBanner from '@/components/home/HomeBanner';
import HomeCollaboration from '@/components/home/HomeCollaboration';
import HomeInspirationSpotlight from '@/components/home/HomeInspirationSpotlight';
import HomeInstagram from '@/components/home/HomeInstagram';
import HomeJournal from '@/components/home/HomeJournal';
import HomeProductSection from '@/components/home/HomeProductSection';
import { productList } from '@/utils/variable';

const Home = () => {
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
