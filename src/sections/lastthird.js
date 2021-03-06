import * as React from 'react';
import './lastthird.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import "./stats.css"


function Lastthird() {


    return (
        <>
            <div className='stats'>

               <h4 style={{marginTop:"5%",marginLeft:"10%"}}>We've completed</h4> 
                <div className='stat-child'>
                <div className='stat-info'>
                        <span >1024</span>
                        <span>white
                        <br/>listed</span>
                    </div>
                    <div className='stat-info'>
                        <span>1.2k</span>
                    
                        <span>down<br/>loads</span>
                    </div>
                </div>
                <div className='stat-child'>
                <div className='stat-info'>
                        <span>324</span>
                        <span>on <br/>twitter</span>
                    </div>
                    <div className='stat-info'>
                        <span>562</span>
                        <span>on <br/>discord</span>
                    </div>
                </div>
                <div className='stat-star'>
                &#9733;
                &#9733;
                &#9733;
                &#9733;
                &#9733;
<br/>
<span>
“zippy is a great app for tracking & mapping all your runs & makeit easy to track distance, time, speed, elevations & calories burned- all the stats that matter. The right app which acts as a virtual trainer or training partner to keep you motivated & accountable.”
</span>
<button className='btn'>
    Whitelist Me
</button>

    </div>
            </div>

       

        </>
    );
}


export default Lastthird;
