import React, { Component } from 'react'
//import classes from "./cardStyle.css";
import Wrap from "../../Wrap/Wrap";

class CardStyle extends Component {
  state = {
    image: null,
    fullName: null,
    job: null
  };

  createCard = () => {
    return(
      <div className={classes.Card}>      
        <div className={classes.Image}>{this.props.imageUrl}</div>
        <div className={classes.Title}>{this.props.fullName}</div>
        <div className={classes.Job}>{this.props.job}</div>
      </div>
    )
  };

  render() {
    return (
      <Wrap>
        {this.createCard()}
      </Wrap>
    ) 
  }
}

export default CardStyle;