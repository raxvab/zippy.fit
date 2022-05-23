import * as React from 'react';
import './lastthird.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import "./stats.css"

// { <Box sx={{ width: '100%', height: '150vh', backgroundColor: 'black', alignContent: 'center' }}>
// <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//     <Grid item xs={6}>
//         <Item style={{ color: "white" }}>
//             <Typography variant="h1" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 1024
//             </Typography>

//         </Item>
//         <Item style={{ color: "white" }}>
//             <Typography variant="h4" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 whitelisted
//             </Typography>
//         </Item>
//     </Grid>
//     <Grid item xs={6}>
//         <Item>
//             <Typography variant="h1" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 1.2k
//             </Typography>
//         </Item>
//         <Item style={{ color: "white" }}>
//             <Typography variant="h4" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 downloads
//             </Typography>
//         </Item>
//     </Grid>
//     <Grid item xs={6}>
//         <Item>
//             <Typography variant="h1" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 324
//             </Typography>
//         </Item>
//         <Item style={{ color: "white" }}>
//             <Typography variant="h4" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 on twitter
//             </Typography>
//         </Item>
//     </Grid>
//     <Grid item xs={6}>
//         <Item>
//             <Typography variant="h1" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 1024
//             </Typography>
//         </Item>
//         <Item style={{ color: "white" }}>
//             <Typography variant="h4" component="div" style={{ color: "white", fontWeight: "bolder", fontFamily: "poppins" }}>
//                 on discord
//             </Typography>
//         </Item>
//     </Grid>
// </Grid>
// <div className="stars"  >
//     <img src='stars.png'  style={{marginLeft:'33vw'}}>

//     </img>
// </div>
// <div style={{ marginLeft: '28%', color: 'white', marginTop: '10vh', fontFamily: "poppins" }}>
//     “zippy is a great app for tracking & mapping all your runs & makeit easy to track distance,
//     <br />
//     time, speed, elevations & calories burned- all the stats that matter. The right app which acts
//     <br />
//     as a virtual trainer or training partner to keep you motivated & accountable.”
//     <br />
//     <br />
//     <h4 style={{ marginLeft: '25%' }}>shweta sharma</h4>
// </div>

// <button className='btn' href="#" style={{
//     marginLeft: '43%',
//     marginTop: '10vh'
// }}>Whitelist Me</button>

// </Box>}

function Lastthird() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'black',
        height: "20vh",
        width: "40vw",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <div className='stats'>
                <div className='stat-child'>
                <div className='stat-info'>
                        <span>1024</span>
                        <span>white
                        listed</span>
                    </div>
                    <div className='stat-info'>
                        <span>1.2k</span>
                    
                        <span>downloads</span>
                    </div>
                </div>
                <div className='stat-child'>
                <div className='stat-info'>
                        <span>324</span>
                        <span>on twitter</span>
                    </div>
                    <div className='stat-info'>
                        <span>562</span>
                        <span>on discord</span>
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
