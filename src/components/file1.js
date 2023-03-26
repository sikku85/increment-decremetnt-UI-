import "./file1.css";
import { useState } from "react";

function Container() {
  const [count, setCount] = useState(0);

  function decrementHandler(){
    console.log("decrementHandler")
    setCount(count - 1);

  }
  function incrementHandler(){
    console.log("incrementHandler")
    setCount(count + 1);

  }
  function resetHandler(){ 
    console.log("resetHandler")
    setCount(0);
   }


  return (
    <div className="wrapper">
      <div className="tittle">Increment & Decrement</div>

      <div className="buttons">
        <div>
          <button onClick={decrementHandler}  className="btn">-</button>
        </div>
        <div>
          <button className="btn">{count}</button>
        </div>
        <div>
          <button onClick={incrementHandler} className="btn">+</button>
        </div>
      </div>

      <div className="reset">
        <button onClick={resetHandler} >Reset</button>
      </div>
    </div>
  );
}

export default Container;
