import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import chipsImg from "./Chips.png";

function Chips() {
  return (
    <div className="Chips">
      <img src={chipsImg}/>
      <Message>
        <h1>YUM</h1>
        <h2><Link to='/'>Go Back</Link></h2>
      </Message>
    </div>
  )
}

export default Chips;