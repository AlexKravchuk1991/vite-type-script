import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.css'

export default function Header() {
  return (
    
       <header className={style.header}>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={"/"}>Lessons</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'homeworkpage'}>Homeworks</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'kons01'}>Консультация</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'products'}>Products</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'cart'}>Cart</NavLink>
            <NavLink to='lesson16'>Store</NavLink>
            
        </header>
    
  )
}

