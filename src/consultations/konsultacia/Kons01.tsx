import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./kons01.css";

export default function Kons01() {
const RANDOM_JOKE_URL:string = "https://official-joke-api.appspot.com/random_joke"

   const[joke, setJoke]= useState<string|undefined>(undefined)
   const[error, setError]= useState<string|undefined>(undefined)
   const[jokeAntw, setJokeAntw]= useState<string|undefined>(undefined)


  const getRandomJoke =async()=>{

    setJoke(undefined)
    setError(undefined)
    setJokeAntw(undefined)
    const response = await fetch(RANDOM_JOKE_URL,{//по умолчания используется метод GET, поэтому его можно не прописывать
      method:"GET"
      // GET, POST, PUT, DELETE - основные методы HTTP запросов
    })

    const result = await response.json()
    if(response.ok){
      //* тут пишем логику по УСПЕШНО пришедшим данным
      setJoke(`${result.setup} `)
      setTimeout(()=>{setJokeAntw(`${result.punchline}`)},3000)
    }else{
      //! тут пишем логигу если пришла ОШИБКА
      setError('Some Network Err')
    }

    console.log(result);
    
  }

  return (
    <div className="kons01Wrapper">
      <div className="card">
        <div className="jokesKontainer">
          {joke  &&  <p className="text">{joke}</p>}
          {jokeAntw && <p className="text">{jokeAntw}</p>}
          {error && <p className="text">{error}</p>}
        </div>
        <MyButton text="Get random Joke" type="button" func={getRandomJoke}/>
      </div>
    </div>
  );
}
