import Banner from '../components/Banner';
import JobByCategories from '../components/JobByCategories';
import NewsLetter from '../components/NewsLetter';
import { Review } from '../components/Review';

const Home = () => {
  return (
    <div>
      <Banner />
      <JobByCategories></JobByCategories>
      <Review></Review>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Home;
