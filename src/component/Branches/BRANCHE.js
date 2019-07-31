import React from 'react'

const  Branches = [{
  imgUrl: "http://www.fixngo-training.tn/images/footlogo.png",
  name: "Fix&Go",


},
{
  imgUrl: "http://www.ift.tn/assets/images/logo.png",
  name: "Institue Formation Tunisie",
},
{
  imgUrl: "https://belloformation.com/wp-content/uploads/2018/03/logo.png",
  name: "Bello Formation",
},
{
  imgUrl: "http://www.institutgitas.com/images1/logogitas.gif",
  name: "Gitas",
},
{
  imgUrl: "http://www.smartdiagnosticauto.com/wp-content/uploads/2018/12/logo-smart.png",
  name: "Smart Diagnostic",

},
{
  imgUrl: "http://cetauf.com/onewebstatic/f55677a494-Logo%20Cetauf.png",
  name: "Cetauf",
},
]

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

function MenuFormation () {
  return (
    
      <div>
  <Countries citilist={Branches} />
  </div>
  
  )
}


  export default MenuFormation