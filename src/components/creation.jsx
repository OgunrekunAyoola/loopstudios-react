import React from 'react'
import Deep__earth from  "../assets/Mobile/image-deep-earth.jpg"
import Night__arcade from "../assets/Mobile/image-night-arcade.jpg"
import Soccer__team from "../assets/Mobile/image-soccer-team.jpg"
import The__grid from "../assets/Mobile/image-grid.jpg"
import Above__vr from "../assets/Mobile/image-from-above.jpg"
import Pocket__borealis from "../assets/Mobile/image-pocket-borealis.jpg"
import The__curiosity from "../assets/Mobile/image-curiosity.jpg"
import Make__it__fisheye from "../assets/Mobile/image-fisheye.jpg"


const Creations = () => {

     return (
        <div className="creation-mobile">
            <h2>OUR CREATIONS</h2>
            <article className='grid-section'>
                <div className='grid'>
                    <img src={ Deep__earth } alt="" />
                
                    <h3>DEEP EARTH</h3>
                </div>
                <div className='grid'>
                    <img src={ Night__arcade } alt="" />
                
                    <h3>NIGHT ARCADE</h3>
                </div>
                <div className='grid'>
                    <img src={ Soccer__team } alt="" />
                
                    <h3>SOCCER TEAM</h3>
                </div>
                <div className='grid'>
                    <img src={The__grid } alt="" />
                
                    <h3>THE GRID</h3>
                </div>
                <div className='grid'>
                    <img src={ Above__vr } alt="" />
                    
                    <h3>ABOVE VR</h3>
                </div>
                <div className='grid'>
                    <img src={ Pocket__borealis } alt="" />
                
                    <h3>POCKET BOREALIS</h3>
                </div>
                <div className='grid'>
                    <img src={ The__curiosity } alt="" />
                
                    <h3>THE CURIOSITY</h3>
                </div> 
                <div className='grid'>
                    <img src={ Make__it__fisheye } alt="" />
               
                    <h3>MAKE IT FISHEYE</h3>
                 </div>
            </article>
            <div className='btn-container'><button className='btn'>SEE ALL</button></div>
        </div>
     )
}

export default Creations
