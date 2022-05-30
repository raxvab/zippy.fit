import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <div className='d1 cardcontainer' style={{ color: 'white' }}>
      <span className='title card-title' >
        enlist your<br /> running clubs
      </span>
      <div>
      
      </div>
      {/* <svg id='slide' width="50" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.5 107C83.0472 107 107 83.0472 107 53.5C107 23.9528 83.0472 0 53.5 0C23.9528 0 0 23.9528 0 53.5C0 83.0472 23.9528 107 53.5 107ZM52.3954 28.4371C50.0523 26.0939 46.2533 26.0939 43.9101 28.4371C41.567 30.7802 41.567 34.5792 43.9101 36.9224L60.9386 53.9508L43.9101 70.9793C41.567 73.3224 41.567 77.1214 43.9101 79.4646C46.2533 81.8077 50.0523 81.8077 52.3954 79.4646L73.6665 58.1935C76.0097 55.8503 76.0097 52.0513 73.6665 49.7082L52.3954 28.4371Z" fill="#D1D1D1"/>
</svg> */}
      <div className='cards'>
        <div className='card-child' >
          <img className='card-img' src='card-one.png'>
          </img>
          <div className='card-info'>
            <span>Bangalore Runners club
            </span>
            <span>
              Bangalore Runners club is a group of self motivated runners aiming to excel in the area of personal fitness

            </span>
            <div className='profiles'>
              <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>
              <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>  <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>  <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>
              {/* <img  src='card-one.png'></img> */}


            </div>
            <button className='btn card'> View Club</button>

          </div>

        </div>
        <div className='card-child' >
          <img className='card-img' src='card-one.png'>
          </img>
          <div className='card-info'>
            <span>Bangalore Runners club
            </span>
            <span>
              Bangalore Runners club is a group of self motivated runners aiming to excel in the area of personal fitness

            </span>
            <div className='profiles'>
              <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>
              <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>  <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>  <div className='card-profile'>
                <img src='card-one.png'></img>
              </div>
              {/* <img  src='card-one.png'></img> */}


            </div>

          </div>

        </div> 
        <div className='card-child new-card' >
          <img className='card-img new-img' src='new_Club1.svg'>
          </img>
          <div className='card-info new'>
           
              Bangalore Runners club is a group of self motivated runners aiming to excel in the area of personal fitness

            
              <button className='btn add'> Enlist Club</button>
            
          </div>

        </div>


      </div>
    </div>
  )
}

export default Cards