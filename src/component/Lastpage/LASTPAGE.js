import React from 'react'



const  Republic = [{
    imgUrl: "http://www.fixngo-training.tn/images/footlogo.png",
    name: "Fix&Go",
  
  
  }]

  function Countries(props) {
    return(
        < div className="countries-city">
            
            {props.citilist.map((el,i) =><div key={i}>
                <div className="town">
                  <div className='image'>
            <img src={el.imgUrl} />
            </div>
            <h3>{el.name}</h3>
            <button class="see"><a href="#">see openings </a></button>
            </div>
        </div>)} 
       
            </div>

    )

    
}  

function Formation () {
  return (
    
      <div>
  <Countries citilist={Republic} />
  </div>
  
  )
}


  export default Formation