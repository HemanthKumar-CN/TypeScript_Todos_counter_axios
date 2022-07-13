import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = (val: number)=>{
        setCount(count + val)
    }

  return (
    <div>
        <Header label="Counter"/>
        <Header />
        <h1>{count}</h1>
        <Button label='Add' handleClick={()=> handleClick(1)}/>
        <Button label="Reduce" handleClick={()=> handleClick(-1)} />
        <hr />
        <Header label='Second'>
            <div>Child Counter</div>
            <div>Test Element</div>
        </Header>
    </div>
  )
}

export default Counter