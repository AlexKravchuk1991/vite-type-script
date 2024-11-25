import React, { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";


export default function FetchDog(): JSX.Element {
  const [dogImg, SetDogImg] = useState<string>(" ");

  const fetchDog = (): void => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => {
        SetDogImg(data.message);
      });
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="lesson-container">
      <h3>Fetch Dog</h3>
      <img width={200} src={dogImg} alt="" />
      <MyButton text="Update dog"
      func={fetchDog}/>
    </div>
  );
}
