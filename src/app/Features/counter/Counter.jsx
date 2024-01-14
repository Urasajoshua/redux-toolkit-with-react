import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset,incrementByamount } from './CounterSlice'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount,setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
  return (
    <div className='text-center'>
      <section>
      
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
        <p>enter amount </p>
        <input type='text' value={incrementAmount} placeholder='amount' onChange={(e)=>setIncrementAmount(e.target.value)} className='border'/>
        <div>
          <button onClick={()=>dispatch(incrementByamount(addValue))}>Add amount</button>
        </div>
      </section>
    </div>
  )
}

export default Counter
