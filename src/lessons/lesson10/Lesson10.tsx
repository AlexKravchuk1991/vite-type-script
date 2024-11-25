import React, { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import cn from "classnames";
import style from "./lesson.module.css";
import { link } from "fs";
import Loader from "../../components/loader/Loader";

export default function Lesson10() {
  const [data, setData] = useState<string[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  const fetchCatFacts = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((catFact) => {
        setData((prevData) => [catFact.fact, ...prevData]);
        setLoader(false);
      });

  };

  console.log(data);
  
  useEffect(() => {
    fetchCatFacts();
  }, []);

  const clearData = () => {
    setData([]);
  };
  const handleGetFact = () => {
    setLoader(true);
    setTimeout(() => {
      fetchCatFacts();
    }, 500);
  };

  return (
    <div className={style.lessonWrapper}>
      <div className={style.buttonWrapper}>
        <MyButton text="GET MORE INFO" func={handleGetFact} />
        {data.length > 0 && (
          <MyButton text="DELETE ALL DATA" isDanger={true} func={clearData} />
        )}
      </div>
      {data.length > 0 && (
        <div className={style.factsCard}>
         
            {loader ? <Loader/>:(
               <ul>  
                {data.map((catFact, index) => (
              <li key={index}>{catFact}</li>
            ))}
          </ul>
            )}
            
        </div>
      )}
    </div>
  );
}
