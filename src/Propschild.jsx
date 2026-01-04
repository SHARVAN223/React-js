import React from 'react'

let Propschild = ({ img, price, dress }) => {
         
  return (
    <div>
        
        {/* <div id='card'>
          <img src={img} alt="" width='100%' height='150px' />
        </div>


        <div id='card1'>
          <h1>price:{price} </h1> 
          <h2>dress:{dress}</h2>
          <button>Buy now</button>
        </div> */}


         
        <div class="card1">
            <img src={img} alt="Dress"/>
           
        </div>

        <div class="card2">
            <h3>price:{price} </h3> 
            <h3>dress:{dress}</h3>
            <button>Buy now</button>
        </div>
    </div>

      
   
   
  )
}

export default Propschild

