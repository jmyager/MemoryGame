import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
//   <div 
//   onClick={() => props.selectCard(props.id)} className="card img-thumbnail">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );

const FriendCard = props => (
  
  <div
    onClick={() => props.selectCard(props.id)}
  className="hover">
  <figure>
    <img alt={props.name} src={props.image} />
    </figure>
    </div>
);

export default FriendCard;
