import React from 'react'
import { Ihero } from '../../lessons/lesson05/data'
import './heroGalery.css'

interface HeroGaleryProps {
    data:Ihero[]
}

export default function HeroGalery({data}:HeroGaleryProps) {


  return (
    <div>
         <section className='grid-container'>

{data.map((hero,index)=>(
    //     <li key={index}>{hero.name} is {hero.age} year old</li>
    // ))}
 <article className={hero.isDark ? 'hero-dark':'hero-light' }key={index}>
    <h3>{hero.name}</h3>
    <p>{hero.name} is {hero.age} year old</p>
    <img src={hero.image} alt="hero photo" />
   <p>Hero weapons:
     {hero.weapons.map((weapon,index)=>(<span key={index}>
        |{weapon}  
    </span>))}

   </p>
   
 </article>   
 ))}
</section>
    </div>
  )
}
