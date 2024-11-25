import React from 'react'
import MyButton from '../myButton/MyButton'
import { useState } from 'react'
import './counter.css'

export default function Counter() {
    let [count, setCount] = useState(0)

       const handlePlus= ()=>{
           setCount(prev=> prev+1)
        }
        const handleMinus=()=>{
             setCount(prev=>prev-1)
            }
  return (
    <div>
       <div className="counter">
            <MyButton func={handleMinus} text="-"/>
            <span>{count}</span>
           <MyButton func={handlePlus} text="+" isDanger={true}/>

            </div>  
    </div>
  )
}
