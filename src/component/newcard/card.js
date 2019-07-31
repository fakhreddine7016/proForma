// import React from 'react'
// //import CardStyle from '../cardStyle/cardStyle';

// class Card extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isLoading: true,
//       imageUrl: null,
//       fullName: null,
//       job: null
//     };
//   }

//   clickEvent = () => {
//     this.setState({
//       fullName: 'Furkan',
//       job: 'Software engineer'
//     });
//   }

//   render() {
//     let {isLoading, imageUrl, fullName, job} = this.state;
//     return (
//       <div>
//         <CardStyle 
//               isLoading={isLoading}
//               imageUrl = {imageUrl}
//               fullName = {fullName}
//               job = {job}
//               clicked = {this.clickEvent}
//               />
//         <button onClick={this.clickEvent}>ADD PERSON</button>
//       </div>
//     )
//   }
// }

// export default Card;

import React from "react";

function NewCard({imgUrl
,name,rating,comment,content}) {
  return (
    <div className="movieCard">
      <img src={imgUrl} /> 
      <p>{name}</p>
      <p>{rating}</p>
      <p>{comment}</p>
      <p>{content}</p>
    </div>
  );
}

export default NewCard;
