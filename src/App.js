
import React from 'react';
import First from './sections/first';
import Second from './sections/second';
import Third from './sections/third';
import Fourth from './sections/fourth';
import Fifth from './sections/fifth';
import Sixth from './sections/sixth';
import Seventh from './sections/seventh';
import Firstwhite from './sections/firstwhite';
import "./App.css";
import Lastsecond from './sections/lastsecond';
import Lastthird from './sections/lastthird';
import Footer from './sections/footer';
import Cards from './sections/Cards';
import HeroSection from './sections/HeroSection';
import Navbar from './sections/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* <First/> */}
      <HeroSection/>
    <Second/>
      <Firstwhite/>

    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    <Cards/>
    {/* <Seventh/> */}
 <Lastthird/>

    <Lastsecond />
    <Footer/>
    </div>
  );
}

export default App;
