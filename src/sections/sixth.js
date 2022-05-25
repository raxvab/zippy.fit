import React, { useState } from 'react';
import "./sixth.css";
function Sixth() {
  const [indoor, setindoor] = useState(true)
  const inorout = indoor ? (<>
   <div className='ph-child'>
            <img height={50} src="mobile.png"></img>
            <span>
              Download Zippy App on your iOS or Android phone
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="octicon_sign.png"></img>
            <span>
              Setup your account with easy crypto and fiat on ramps

            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="nftimage.png"></img>
            <span>
              Get NFT elements
              (Lucky few get Airdrops)
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="tabler_run.png"></img>
            <span>
              Run, have fun, meet friends and earn cool bucks (in this order)
            </span>

          </div>
          </>) : (<>
   <div className='ph-child'>
            <img height={50} src="treadmill_icon.png"></img>
            <span>
            Step on any treadmill.
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="bluetooth_icon.png"></img>
            <span>
              Treadmill not Bluetooth enabled.
Don't have compatible hardware.
Don't worry, we got you covered
            </span>

          </div>
        
          <div className='ph-child'>
            <img height={50} src="mobile.png"></img>
            <span>
              Fire up Zippy on any iOS or Android device and stream the app on your Smart TV, Laptop, iPad, Andoid Tablet or Smartphone.
            </span>

          </div>
          </>);
  return (
    <>
      <div className='main'>

        How it works
        <div className='.btn-cont'>

          <button className='btn' id={indoor ? "" : "outline"} onClick={() => setindoor(true)} href="#">Outdoor running</button>
          <button className='btn' id={!indoor ? "" : "outline"} onClick={() => setindoor(false)} href="#">Indoor running</button>
        </div>
        <div className='ph'>

          {inorout}

          <img style={{ width: '80vw' }} src={indoor?"sixth.png":"devices.png"}></img>

{!indoor?(<>
<span className='title' style={{textAlign:'center',textTransform:'uppercase'}}>
<br/>Zippy gets you running on all devices
</span>
<button className='btn dev'> Refer a friend</button>
</>):""}
        </div>


      </div>
      <div>

      </div>
      <div className="photo">


      </div>
    </>
  )
}

export default Sixth;