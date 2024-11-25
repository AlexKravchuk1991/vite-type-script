import { log } from 'console'
import React, { useEffect, useState } from 'react'
import MyButton from '../../components/myButton/MyButton';
import Counter from '../../components/counter/Counter';
import FetchDog from '../../components/fetchdog/FetchDog';

export default function Lesson08():JSX.Element {

    console.log('render!');
    const[toogle,setToogle]= useState(false)
    

    const handleToogle = ():void =>{
        setToogle(!toogle)
    }

    useEffect(()=>{
        console.log('render useEfect()');
        
    },[])

  return (
    <div className='lesson-container'>
        <h2>Lesson 08</h2>
        <p>use effect[] hook</p> 
        <span> State: {`${toogle}`}</span>
        <MyButton func={handleToogle} isDanger={false} text='change state'/>
        {toogle &&(<Counter/>)}

        <FetchDog/>
        

    </div>
  )
}
