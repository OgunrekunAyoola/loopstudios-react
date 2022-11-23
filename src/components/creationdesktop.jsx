import React from 'react'
import Deep__earth from  "../assets/DESKTOP/image-deep-earth.jpg"
import Night__arcade from "../assets/DESKTOP/image-night-arcade.jpg"
import Soccer__team from "../assets/DESKTOP/image-soccer-team.jpg"
import The__grid from "../assets/DESKTOP/image-grid.jpg"
import Above__vr from "../assets/DESKTOP/image-from-above.jpg"
import Pocket__borealis from "../assets/DESKTOP/image-pocket-borealis.jpg"
import The__curiosity from "../assets/DESKTOP/image-curiosity.jpg"
import Make__it__fisheye from "../assets/DESKTOP/image-fisheye.jpg"


const Creationsdesktop = () => {

     return (
        <div className="creation-desktop">
            <div className='title'>
                <h2>OUR CREATION</h2>
                <div className='btn-container'><button className='btn'>SEE ALL</button></div>
            </div>
            <article className='grid-section'>
                <div>
                    <img src={ Deep__earth } alt="" />
                    <h3>DEEP EARTH</h3>
                </div>
                <div>
                    <img src={ Night__arcade } alt="" />
                    <h3>NIGHT ARCADE</h3>
                </div>
                <div>
                    <img src={ Soccer__team } alt="" />
                    <h3>SOCCER TEAM</h3>
                </div>
                <div>
                    <img src={The__grid } alt="" />
                    <h3>THE GRID</h3>
                </div>
                <div>
                    <img src={ Above__vr } alt="" />
                    <h3>ABOVE VR</h3>
                </div>
                <div>
                    <img src={ Pocket__borealis } alt="" />
                    <h3>POCKET BOREALIS</h3>
                </div>
                <div>
                    <img src={ The__curiosity } alt="" />
                    <h3>THE CURIOSITY</h3>
                </div>
                <div>
                    <img src={ Make__it__fisheye } alt="" />
                    <h3>MAKE IT FISHEYE</h3>
                </div>
            </article>
        </div>
     )
}

export default Creationsdesktop
