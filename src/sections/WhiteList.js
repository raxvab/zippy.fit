import React from 'react'
import "./Whitelist.css"
function WhiteList() {
    return (
        <div className='whitelist-cont'>

            <div className='whitelist-img'>
                <img src='whitelist.png'></img>

            </div>
            <div className='whitelist-info'>
                <div className='title'>
                    yay! <br />
                    Whitelist me.
                </div>
                <span>Hey there! so glad to have you part of our growing community.
                    Please click the link below so that we know you are, well, you!</span>
                <form>
                    <input type="text" placeholder='adam.smith@example.com' />
                    <button type='submit'> Get WhiteListed </button>
                </form>
                <div className='whitelist-icons'>
                    <span>
                        bump me up on the waitlist
                    </span>
                    <div className='icons'>
                        <div className='icon-child'>
                            <img height={10} src='discord.svg'></img>
                            <span>Join Our Discord </span>
                        </div>
                        <div className='icon-child'>
                            <img height={10} src='discord.svg'></img>
                            <span>Join Our Discord </span>
                        </div>                        <div className='icon-child'>
                            <img height={10} src='discord.svg'></img>
                            <span>Join Our Discord </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhiteList