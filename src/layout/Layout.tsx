import React from 'react'
import style from './layout.module.css'
import Lesson11 from '../lessons/lesson11/Lesson11'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
           
        </main>

        <Footer/>


    </>
  )
}
