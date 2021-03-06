import React from "react";
// import Box from "@mui/material/Box";
// import { Container } from "@mui/material";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Grid } from "@mui/material";
import demo1 from '../images/demo1.png'
import demo4 from '../images/demo4.png'
import "./About.css"


function Lastsecond() {

  const [indoor, setIndoor] = React.useState(false);
  return (
    <>
      <div className="abt-cont">


        <div className="footer-info" id="about">
          <div className="title">
            running is
            our Passion. That's really about us!
          </div>
          <div className="foot-para">
            As life long runners and athletes - we know running's impact on our physical health and fitness is only a miniscule or just a nice side-effect. The real prize is the runner's high - the feeling of joy and accomplishment that leads to a better quality-of-life. The happiness that lingers on far beyond the finishing mile.
            <br />
            If you are a regular runner - you know this already. And we want to partner with you as fellow runners to ensure you get more out of your runs. That your runs are not dependent on outdoor conditions such as weather, pollution, traffic conditions and at the same time - they are not boring or monotonous.
            <span>
              <br />At Zippy- <br />
              Our vision is to make running as immersive and entertaining as playing a console game; yet at the same time as scientific and effective as an Olympians' prep work.

            </span>
          </div>


        </div>
        <div className="profiles-cont">
          <div className="profile-card">
            <div className="profile-img">
              <span>
                Dr. Rath is an astute investor, Physician-Scientist, Behavioral Expert. He specializes in building innovative health solutions at the intersection of modern technology and the deep domain of medical sciences. Dr. Rath brings his deep expertise as well as innovation expertise to build great products with deeper consumer insights at Zippy
                Dr. Satish Rath
                Advisor
              </span>
              <img src="RaviReddy.png"></img>

            </div>
            <div className="profile-info" >
              <div >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}> Dr. Satish Rath</span>
                <br />
                <span> Advisor</span>
              </div>
              <img height={30} src="linkedin.png"></img>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-img">
              <span>
                Dr. Rath is an astute investor, Physician-Scientist, Behavioral Expert. He specializes in building innovative health solutions at the intersection of modern technology and the deep domain of medical sciences. Dr. Rath brings his deep expertise as well as innovation expertise to build great products with deeper consumer insights at Zippy
                Dr. Satish Rath
                Advisor
              </span>
              <img src="RaviReddy.png"></img>

            </div>
            <div className="profile-info" >
              <div >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}> Dr. Satish Rath</span>
                <br />
                <span> Advisor</span>
              </div>
              <img height={30} src="linkedin.png"></img>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Lastsecond;
