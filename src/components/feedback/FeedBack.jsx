import './feedback.css'
import { useState } from "react";
import MyButton from "../myButton/MyButton";





function FeedBack(){

const [likes, setLikes]= useState(0)
const [dislikes, setDislikes] = useState(0)

const likePlus =()=>{
    setLikes(likes+1)
}

const dislikePlus =()=>{
    setDislikes(dislikes+1)
}

const resetLikes=()=>{
    setDislikes(dislikes===0)
    setLikes(likes===0)
}

    return(
        
        <div className = 'feedback-cont'>
        
        
        <div className='fb-like-dislike-btn'>
         <div className='feedback-btn-comt'>
            <span>{likes}</span>
            <MyButton func={likePlus} text="Like"/>
            </div>

            <div className='feedback-btn-comt'>
        <span>{dislikes}</span>
        <MyButton func={dislikePlus} text="Dislike"/>
            </div>
        </div>
        <div>
            <MyButton text='Reset' func={resetLikes}/>
        </div>
            

        </div>
    )
}

export default FeedBack