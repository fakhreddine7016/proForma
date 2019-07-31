import React from "react";
import {Link} from "react-router-dom"
import TextFields from "../Blog/BLOG";
import Rate from "../Rating";
const Republic = [
  {
    imgUrl: "http://www.fixngo-training.tn/images/footlogo.png",
    name: "Fix&Go",
    id: 1
  },
  {
    imgUrl: "http://www.ift.tn/assets/images/logo.png",
    name: "Institue Formation Tunisie",
    id: 2
  },
  {
    imgUrl: "https://belloformation.com/wp-content/uploads/2018/03/logo.png",
    name: "Bello Formation",
    id: 3
  },
  {
    imgUrl: "http://www.institutgitas.com/images1/logogitas.gif",
    name: "Gitas",
    id: 4
  },
  {
    imgUrl:
      "http://www.smartdiagnosticauto.com/wp-content/uploads/2018/12/logo-smart.png",
    name: "Smart Diagnostic",
    id: 5
  },
  {
    imgUrl: "http://cetauf.com/onewebstatic/f55677a494-Logo%20Cetauf.png",
    name: "Cetauf",
    id: 6
  }


];
const found=[]

export function Countries(props) {
  const schoolFn = id => {
    found.splice(0, found.length)
   const i = Republic.find(e=> {return id==e.id})
   found.push(i)
   console.log(found)
  };
  return (
    <div className="countries-city">
      {Republic.map((el, i) => (
        <div key={i}>
          <Link to="/info"><div onClick={() => schoolFn(el.id)} className="town">
            <div className="image">
              <img src={el.imgUrl} />
            </div>
            <h3>{el.name}</h3>
            <link to="/" />
            <button className="see">
              <a href="#">see openings </a>
            </button>
          </div></Link>
        </div>
      ))}
    </div>
  );
}


 export function FindInformation(){
      return(
        <>
        <div className="emty-card">
          <div className="formy">
      {found.map((el, i) => (
        <div key={i}>
          <div className="town">
            <div className="image">
              <img src={el.imgUrl} />
            </div>
            <h3>{el.name}</h3>
            <link to="/" />
            
          </div>
    
        </div>
        
      ))}
       <Rate/>
    <TextFields/>
        </div>
    </div>
    </>
   
      )
}

