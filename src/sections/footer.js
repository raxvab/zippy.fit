import React from 'react'
import './footer.css';

function Footer() {
    return (
        <>
            <div className='f1'>
                <h4>keep an eye on what we do and how we do it!</h4>


                <div className='footer'>
                    <div className='footerLeft'>
                        <div className='icons' >
                            <img src='mediumicon.png' style={{ marginRight: "1vw" }}></img>
                            <img src='twittericon.png' style={{ marginRight: "1vw" }}></img>
                            <img src='discordicon.png' style={{ marginRight: "1vw" }}></img>
                            <img src='telegramicon.png' style={{ marginRight: "1vw" }}></img>
                            <img src='whitepapericon.png' style={{ marginRight: "1vw" }}></img>

                        </div>
                        <div className='icons'>
<div>
                            <img src='emailicon.png'>

                            </img>
                            <h4 >hello@zippy.fit</h4>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div >

<img src='googleplayicon.png'>

</img>
<h4>Google Play</h4>


</div>
                        </div>
                       
                    </div>
                    <div className='footerRight'>
                        <div className='links'>
                            <ul style={{ color: "white" }}>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default Footer