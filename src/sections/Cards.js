import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <div className='d1 cardcontainer' style={{ color: 'white' }}>
      <span className='title card-title' >
        enlist your<br /> running clubs
      </span>
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

        </div> <div className='card-child' >
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


      </div>
    </div>
  )
}

export default Cards