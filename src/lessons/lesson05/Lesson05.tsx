import HeroGalery from '../../components/herogalery/HeroGalery';
import {heroes} from './data'
import './lesson05.css'



function Lesson05(){
    console.log({heroes});
    
    return <div className="lesson-container">
        <h2>Lesson 05</h2>
        <p>React MAP components</p>
       <HeroGalery data={heroes}/>
            
        
       
        
    </div>
}

export default Lesson05