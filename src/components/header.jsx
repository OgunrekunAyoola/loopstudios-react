import React, {Component } from 'react'
import Logo from "../assets/shared/logo.svg"

function Header () {
    const showNav = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const navbar = document.querySelector('nav');

        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('open')
            navbar.classList.toggle('active')
        })
    }
return(
    <div>
       <header className='header'>
           <div className='logo'>
            <img src={Logo} alt="Loopstudios" />
           </div>
           <nav>
            <div className='nav-logo'>
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
           <div className="menu-btn" onClick={() => showNav()}></div>
       </header>
    </div>   
)

}
export default Header