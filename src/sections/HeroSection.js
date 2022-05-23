import React, { useState } from 'react'
import "./HeroSection.css"
function HeroSection() {
  const [version, setversion] = useState(true);
    return (
    <div className='hero-cont' style={{ backgroundImage: `url(${version?"./demo1.png":"demo4.png"})` }} onClick={()=>setversion(!version)}>
      <span className='hero-title'>
      revolutionizing <br/>
running for<br/>
{version?" indoor ":" outdoor "}
 runners.
      </span>
      <span>
      Zippy is world’s first move to earn metaverse focussed on outdoor and indoor runners, joggers and walkers.
      </span>
      <button className='btn'> How it works</button>
        </div>
  )
}

export default HeroSection