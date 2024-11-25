import React, { useEffect, useState } from "react";
import MyButton from "../../../components/myButton/MyButton";
import style from "../lesson.module.css";
import style2 from "./lesson101.module.css";

export interface ICatCard {
  catFact: string;
  catImg: string;
}

export default function Lesson101() {
  const [catData, setCatData] = useState<ICatCard[]>([]);

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        fetchCatImg(data.fact);
      });
  };

  const fetchCatImg = (fact: string) => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setCatData((prevData) => [
          ...prevData,
          {
            catFact: fact,
            catImg: data[0].url,
          },
        ]);
      });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  const handleAddNewCatFact = () => {
    fetchCatFact();
  };

  const cleanData = () => {
    setCatData([]);
  };

  return (
    <div className={style.lessonWrapper}>
      <div className={style.buttonWrapper}>
        <MyButton text="Add Cat Fact" func={handleAddNewCatFact} />
        {catData.length > 0 && (
          <MyButton func={cleanData} text="Clean All Facts" isDanger />
        )}
      </div>

      {catData.length > 0 && (
        <div className={style2.factsCard}>
          {catData.map((data, index) => (
            <div key={index} className={style2.catCard}>
              <img src={data.catImg} alt="Cat" className={style2.catImg} />
              <p className={style2.factText}>{data.catFact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
