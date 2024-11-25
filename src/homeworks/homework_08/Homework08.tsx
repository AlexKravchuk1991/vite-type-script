import React, { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import FetchDog from "../../components/fetchdog/FetchDog";
import Loader from "../../components/loader/Loader";

export default function Homework08() {
  const [foxImg, setFoxImg] = useState(" ");

  const fetchFox = () => {
    fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => {
        setFoxImg(data.image);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchFox();
  }, []);
  console.log(fetchFox);

  const [loading, setLoading] = useState<boolean>(true)
  const handleGetFox=()=>{
    setLoading(true)
    setTimeout(()=>{fetchFox()},500) 
  }

  return (
    <div className="lesson-container">
      <h3>Fetch Fox</h3>
      <MyButton text="Update fox" func={handleGetFox}/>
      {loading? <Loader/>:(<img width={400} src={foxImg} alt="" />)}
       
     
     
      
    </div>
  );
}
