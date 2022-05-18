import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import demo1 from '../images/demo1.png'
import demo4 from '../images/demo4.png'
// import I


function Lastsecond() {

const [indoor , setIndoor] = React.useState(false);
  
const styles = {
  paperContainer: {
backgroundColor:'#715948',
    height: "110vh",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    //  transitionDuration: "0.4s"
      // width : "100%"
  }
};
  return (
    <div maxwidth="sm" style={styles.paperContainer} >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{padding : "40px 0px 30px 40px", marginTop : "15%"}}>
        <Typography variant="h1" component="div"  style={{color:"white", fontWeight : "bolder" , fontFamily : "poppins"}}>
        
        running is
our Passion. 
That's really about us!

        
        </Typography>
       
          
        </Grid>
        <Grid item xs={12} sm={6} style={{padding : "40px 30px 30px 40px", marginTop : "10%"}} >
        <Typography variant="h6" component="div"  style={{color:"white" , fontFamily : "poppins"}}>
        
        As life long runners and athletes - we know running's impact on our physical health and fitness is only a miniscule or just a nice side-effect. The real prize is the runner's high - the feeling of joy and accomplishment that leads to a better quality-of-life. The happiness that lingers on far beyond the finishing mile.
<br/><br/>
If you are a regular runner - you know this already. And we want to partner with you as fellow runners to ensure you get more out of your runs. That your runs are not dependent on outdoor conditions such as weather, pollution, traffic conditions and at the same time - they are not boring or monotonous.
<br/><br/>
<b>
At Zippy- <br/>
Our vision is to make running as immersive and entertaining as playing a console game; yet at the same time as scientific and effective as an Olympians' prep work.
</b>
        
        </Typography>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Lastsecond;
