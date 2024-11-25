import React from 'react'
import { Link } from 'react-router-dom'
import style from './homepage.module.css'

export default function Homepage() {
  return (
    <div className={style.homePageCont}>
        <h2>Lessons</h2>
        <div className={style.homePageCont}>
         <Link to='lesson02'>Lesson 2</Link>
        <Link to='lesson03'>Lesson 3</Link>
        <Link to='lesson04'>Lesson 4</Link>
        <Link to='lesson05'>Lesson 5</Link>
        <Link to='lesson06'>Lesson 6</Link>
        <Link to='lesson07'>Lesson 7</Link>
        <Link to='lesson08'>Lesson 8</Link>
        <Link to='lesson09'>Lesson 9</Link>
        <Link to='lesson10'>Lesson 10</Link>
        <Link to='lesson12'>Lesson 12</Link>
        <Link to='lesson13'>Lesson 13</Link>
        <Link to='lesson14'>Lesson 14</Link>
        <Link to='Lesson16'>Lesson 16</Link>
        </div>
        <div>

        </div>
        
    </div>
  )
}
