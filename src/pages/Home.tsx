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
        <title>Skewer POS | Best POS & Website Maker for Restaurants</title>
        <meta name="description" content="Skewer POS is the ultimate restaurant business management system. All-in-one POS, online ordering, and website maker designed specifically for restaurant operators to eliminate hidden fees." />
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
