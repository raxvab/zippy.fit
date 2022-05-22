import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import demo1 from '../images/demo1.png'
import demo4 from '../images/demo4.png'
// import I


function First() {

const [indoor , setIndoor] = React.useState(false);
  
const styles = {
  paperContainer: {
      backgroundImage: indoor ? `url(${demo4})` :  `url(${demo1})`,
      height: "130vh",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transitionDuration: "0.4s"
      // width : "100%"
  }
};
  return (
    <div maxwidth="sm" style={styles.paperContainer} onClick={() => setIndoor(!indoor)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{padding : "40px 0px 30px 40px", marginTop : "15%"}}>
        <Typography variant="h1" component="div"  style={{color:"white", fontWeight : "bolder" , fontFamily : "poppins"}}>
        
        Revolutionizing 
running for
{indoor ? " indoor" : " outdoor"} runners.

        
        </Typography>
        <Typography variant="h6" gutterBottom  component="div" style={{color:"white" , fontFamily : "poppins"}}>
        
          Zippy is world’s first move to earn metaverse focussed on outdoor and indoor runners, joggers and walkers.
          
        </Typography>

        <Button variant="" size="large" style={{border:"2px solid white", backgroundColor : "white" , color : "black" , borderRadius : "25px" , padding : "15px 20px", marginTop:"30px", fontWeight:"bolder"}}>
         <b>How it works</b>
        </Button>
        </Grid>
        <Grid item xs={12} sm={6} >
          {/* <h1>jhde</h1> */}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default First;
