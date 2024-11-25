import React from "react";
import MyButton from "../../components/myButton/MyButton";

export default function Lesson07() {
  // const showMessage =(message: string):string=>{
  //     console.log(`message: ${message} `);
  //     return `message: ${message} `;

  // }

  // showMessage('hello')
  const showMessage = (message: string): void => {
    console.log(`message: ${message} `);
  };
  showMessage("hello");

  const sum = (a: number, b: number): number => a + b;
  const res = sum(4, 6);
  console.log(res);

  type ButtonType = "button" | "reset" | "submit";
  let buttonType: ButtonType = "submit";

  type Animal = { name: string; sound(): void; hasOwner?: boolean };

  const dog: Dog = {
    name: "Johny",
    sound() {
      console.log("Gav");
    },
    hasOwner: true,
    breed: "Labrador",
  };

  type Dog = Animal & { breed: string };

  dog.sound();


//! generics type
function makeArr<T> (first:T,second:T):T[]{
    return[first,second]
}

makeArr<number>(42,58);




  return (
    <div className="lesson-container">
      <h2> Lesson07</h2>
      <p>React TypeScript part 2</p>
      <MyButton text="Кнопка"/>
    </div>
  );
}
