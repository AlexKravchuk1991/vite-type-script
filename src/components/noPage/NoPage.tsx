import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div className='lesson-container'>
        <h2>No such page 404</h2>
        <Link to={'../'}>back to main page</Link>
    </div>
  )
}
