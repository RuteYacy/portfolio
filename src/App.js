import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <div className='bg-black/40'>
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      <Footer />
      </div>
    </div>
    
  );
};

export default App;
