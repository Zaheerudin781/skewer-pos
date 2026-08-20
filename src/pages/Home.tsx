import Hero from '../components/Hero';
import ProblemAgitation from '../components/ProblemAgitation';
import RestaurantTypes from '../components/RestaurantTypes';
import ProductCarousel from '../components/ProductCarousel';
import Features from '../components/Features';
import WebsiteBuilder from '../components/WebsiteBuilder';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant POS System | Cloud POS Software for Restaurants</title>
        <meta name="description" content="All-in-one cloud Restaurant POS System with KOT, KDS, free website builder, online food ordering, and automated restaurant accounting for just $8/month." />
      </Helmet>
      <Hero />
      <ProblemAgitation />
      <RestaurantTypes />
      <ProductCarousel />
      <Features />
      <WebsiteBuilder />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;
