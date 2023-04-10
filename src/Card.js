import React, { useState } from "react";

export default function Card(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
        props.onNotInterested(props.id)
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card${expanded ? " expanded" : ""}`}>
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <span>{props.name}</span>
        <span>${props.price}</span>
      </div>
      <div className="card--info">
        <p>{props.info}</p>
        <span className="readMore" onClick={toggleExpanded}>
          {expanded ? "Read Less" : "Read More"}
        </span>
      </div>
      <button 
        className="notInterested" onClick={handleClick} >
            Not Interested
            </button>
    </div>
  );
}