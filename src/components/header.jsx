import React from 'react';
import Logo from './logo.svg';

function Header (){

return(
    <>
       <header className='header'>
           <div>
            <img src={Logo} alt="Loopstudios" />
           </div>
           <nav>
            <div>
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
    </>

    
)
}
export default Header