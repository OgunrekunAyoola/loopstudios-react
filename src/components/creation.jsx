import React, { useState } from 'react'
import data from "../data-mobile"
 

const Creations = () => {
     const[cards, setCards] = useState(data)

     return (
        <div>
            <h2>Our creations</h2>
        
          <section>
            {cards.map((card) => {
                const{id, image, title} = card
                return(
                    <article key={ id }>
                        <div>
                            <img src={ image } alt="creationcard" />
                        </div>
                        <h3>{ title }</h3> 
                    </article> 
                )
            })}
          </section>
          <div className='btn-container'>
            <button className='btn'>SEE ALL</button>
           </div>
        </div>
     )
}

export default Creations
