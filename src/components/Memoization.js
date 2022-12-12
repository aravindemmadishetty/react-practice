import React, { useState, memo, useCallback } from "react";

export default function MemoComponent(){
    console.log('counter rendered')
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const handleClick1 = useCallback(()=>{
        setCounter1( counter1 + 1)
    }, []);
    console.log(handleClick1);
    const handleClick2 = useCallback(() => setCounter2(counter2 + 1), [counter2])
    return (
        <div className="counter">
            <p>{counter1}</p>
            <p>{counter2}</p>
            <Button handleClick={handleClick1} name="counter1"/>
            <Button handleClick={handleClick2} name = "counter2"/>
        </div>
    )
}

const Button = memo(({name, handleClick})=>{
    console.log(name + 'rendered');
    return (
        <button onClick={handleClick}>{name}</button>
    )
})