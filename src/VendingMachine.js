import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
  return (
    <div 
    style={{ backgroundImage: `url(${vendingMachineImg})`}}
    className="VendingMachine">
      <Message>
        <h1>Hello, I am Mr. Vending Machine. What do you want?</h1>
      </Message>
      <Message>
        <h2><Link to="/soda">Soda</Link></h2>
        <h2><Link to="/chips">Chips</Link></h2>
        <h2><Link to="/sardines">Sardines</Link></h2>
      </Message>
    </div>
  )
}

export default VendingMachine;