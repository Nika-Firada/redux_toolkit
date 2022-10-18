import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset} from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(0)
    const addValue = Number(amount) || 0;
    const resetAll = () => {
      setAmount(0)
      dispatch(reset())
    }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>amount</button>
      </div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  )
}

export default Counter