import React from 'react'
import  style from './lesson09.module.css'
import cn from 'classnames'
import MyButton from '../../components/myButton/MyButton'

export default function Lesson09() {
  return (
    <div className='lesson-container'>
        <h2 className={style.heading}>Lesson 09</h2>
        <p className={`${style.desc} ${style.boldText}`}>CSS modules - это способ как мы можем работать со стилями CSS</p>
        <p className={style.boldText}>Задачу добавления нескольких классов можно сделать несколькими способами</p>

        <p className={cn(style.heading, style.boldText)} >Библеотеку Classnames мы устанавливаем через команду 'npm i classnames' и импортируем в нужный компонент</p>
        <MyButton text='кнопка' isDanger={false}/>
    </div>

    
  )
}
