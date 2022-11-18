import React from 'react'
import Logo from "../assets/shared/logo.svg"

function Header () {
    const showNav = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const navbar = document.querySelector('nav');

        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('open')
            menuBtn.classList.toggle('rotate')
        })
    }
return(
    <div>
       <header className='header'>
           <div className='mobile-logo'>
            <img src={Logo} alt="Loopstudios" />
           </div>
           <nav>
            <div className='desktop-logo'>
                <img src={Logo} alt="" />
            </div>
            <ul>
                <li><button>About</button></li>
                <li><button>Careers</button></li>
                <li><button>Events</button></li>
                <li><button>Products</button></li>
                <li><button>Support</button></li>
            </ul>
           </nav>
           <div>
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
           </div>
       </header>
    </div>   
)

}
export default Header