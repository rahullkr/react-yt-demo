function Counter(){
    let number =0 ; 
    function handleClick(){
            number++;
            console.log(number)
    }
    return (
        <>
        <h2 style={{color: 'white'}}>{number}</h2>
        <button onClick={handleClick}>add</button>
        </>
    )
}

export default Counter