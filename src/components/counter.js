import { useState } from "react";



function Counter(){
    const [number, setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
           setNumber(number => number + 1);
    
     
            // console.log(number)
    }
    return (
        <>
        <h2 style={{color: 'white'}}>{number}</h2>
        <button onClick={handleClick}>add</button>
        </>
    )
}

export default Counter