import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Sardines() {
  return (
    <div className="Sardines">
      <img src='https://images.unsplash.com/photo-1535424921017-85119f91e5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'/>
      <Message>
        <h1>Ew.</h1>
        <h2><Link to='/'>Go Back</Link></h2>
      </Message>
    </div>
  )
}

export default Sardines;