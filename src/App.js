
import React from 'react';
import Second from './sections/second';
import Third from './sections/third';
import Fourth from './sections/fourth';
import Fifth from './sections/fifth';
import Sixth from './sections/sixth';
import Firstwhite from './sections/firstwhite';
import "./App.css";
import Lastsecond from './sections/lastsecond';
import Lastthird from './sections/lastthird';
import Footer from './sections/footer';

import HeroSection from './sections/HeroSection';
import Navbar from './sections/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <HeroSection/>
      <Firstwhite/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    {/* <Seventh/> */}
 <Lastthird/>
    <Lastsecond />
    <Footer/>
    </div>
  );
}

export default App;
