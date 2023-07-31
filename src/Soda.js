import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.png";

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImg}/>
      <Message>
        <h1>YUM</h1>
        <h2><Link to='/'>Go Back</Link></h2>
      </Message>
    </div>
  )
}

export default Soda;