import React from 'react';
import Logo from "../assets/shared/logo.svg"
import Facebook from "../assets/shared/icon-facebook.svg"
import twitter from "../assets/shared/icon-twitter.svg"
import instagram from "../assets/shared/icon-instagram.svg"
import pinterest from "../assets/shared/icon-pinterest.svg"


const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <li><button>About</button></li>
                    <li><button>Events</button></li>
                    <li><button>Products</button></li>
                    <li><button>Support</button></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><img src={Facebook} alt="" /></li>
                     <li><img src={twitter} alt="" /></li>
                      <li><img src={pinterest} alt="" /></li>
                       <li><img src={instagram} alt="" /></li>
                </ul>
                <div className='copy-right'>
                    2021 Loopstudios. All right reserved.
                </div>
            </div>

        </footer>
    )
}

export default Footer