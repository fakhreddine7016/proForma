import React from'react'


class Rate extends React.Component {
 constructor(props){
   super(props)

 }
 render(){
 let rate = [];
 for (let i = 0; i < 5; i++) {
   if (i<this.props.rating)
   rate.push(<span onClick={()=>this.props.handleClick(i!=0?i+1:i)}>★</span>);
   else
   rate.push(<span onClick={()=>this.props.handleClick(i+1)}>☆</span>) ;
 }
 return <div className='rate'>{rate}</div>}
}
 export default Rate