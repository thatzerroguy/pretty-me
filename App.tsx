
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CuratedCollections from './components/CuratedCollections';
import LatestArrivals from './components/LatestArrivals';
import SpotlightSection from './components/SpotlightSection';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#sales':
        return <ProductList title="Sales & Offers" filter="sale" />;
      case '#dresses':
        return <ProductList title="Exclusive Dresses" filter="dresses" />;
      case '#office':
        return <ProductList title="Office & Professional" filter="office" />;
      case '#others':
        return <ProductList title="Others & Accessories" filter="others" />;
      case '#home':
      default:
        return (
          <>
            <Hero />
            <CuratedCollections />
            <SpotlightSection />
            <LatestArrivals />
            <BrandStory />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 bg-white">
      <div className="bg-primary text-white text-[10px] md:text-xs text-center py-2 tracking-widest font-medium uppercase relative z-[60]">
        Complimentary shipping on all orders over $200
      </div>
      <Navbar currentHash={currentHash} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
