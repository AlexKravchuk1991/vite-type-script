import React from 'react'
import { Link } from 'react-router-dom'
import style from './homeworkpg.module.css'

export default function Homeworkpage() {
  return (
    <div className={style.homeworkMainCont}>
        <Link to='homework08'>Homework 08</Link>
        <Link to='homework10'>Homework 10</Link>
        <Link to='homework12'>Homework 12</Link>
        <Link to='homework14'>Homework 14</Link>
    </div>
  )
}
