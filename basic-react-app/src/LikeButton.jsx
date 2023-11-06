import { useState } from "react";
export default function LikeButton(){

    let [count, setCount] = useState(0);
      function likeCount(){
        setCount(count +1);
      }
    
    return(
       <div>
         <h2>{count}</h2>
         <h1>Like Button</h1>
         <h1 onClick={likeCount} ><i className="fa-solid fa-heart" ></i></h1>
      
       </div>
    );

}


