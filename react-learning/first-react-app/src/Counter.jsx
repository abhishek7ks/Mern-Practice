import { useState, useEffect } from 'react'
function Counter(){

  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count: ${count}`
}, [count])
    return (
    <div>

        <h1>{count}</h1>
        <button onClick={() => {
            if(count < 10){
                setCount(count +1)
            }
        }}> increment</button>


        <button onClick={ () => {
            if(count > -10){
                setCount(count -1)
            }
        }}> decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>


    </div>

        
    )
}

export default Counter