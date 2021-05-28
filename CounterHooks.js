import react, { useState } from 'react'

function CounterHooks(){
    var [count , useCount] = useState(0);

   var Increment = () =>{
        useCount(count +1)
    }
   var Decrement = () =>{
        useCount(count +1)
    }
    return(
        <div className='main'>
            <h1>Counter App (Hooks)</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=> Increment()}>Increment</button>
            <button onClick={()=> Decrement()}>Decrement</button>
        </div>
    )
}
export default CounterHooks;