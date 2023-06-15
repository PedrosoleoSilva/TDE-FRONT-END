import React, { useState } from "react";
import { ReactDOM } from "react";

const Exemplo = () => {
    const [name,SetName] = useState("");

    const handleSubmit = (event) =>{
      event.preventDefault();
      alert(`Foi enviado ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
        type="text" 
        value={name}
        onChange={(e)=> SetName(e.target.value)}
        />
      </label>
      <input type="submit"/>
      <h4>{name}</h4>
    </form>
    );
}

export default Exemplo;