// import components
import Pets from '../components/Partners';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import Partners from '../components/Partners';
import Cards from '../components/Cards';
import Testimonilas from '../components/Testimonilas';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Partners />
      <Services />
      <Cards />
      <Testimonilas />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
