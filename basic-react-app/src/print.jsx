import { useState } from "react";


function Counter(){
  let [count, setCount] = useState(0);

  let inCount=()=>{
    setCount(count + 1);

  }
  return(

<div>
  <h2>Count = {count}</h2>
  <button onClick={inCount}>click me</button>
</div>
  );
}
export default Counter;