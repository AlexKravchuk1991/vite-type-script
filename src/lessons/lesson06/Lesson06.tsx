export default function Lesson06(){
    // строки
    let username:string = 'Frodo'

    // числа

    let number:number = 42

    // boolean

    let isAdmin:boolean = true;

    //массивы
    const colors:string[] = ['blue','red','green']

    const numb:number[]= [1,1,2,3,5,8]

    const myArray:[string,number,string,number] = ['apple',42,'orange',212]

    //objeckts
      //interface

    interface Ihero{name:string,age:number,isDark:boolean}
    interface Imagician extends Ihero {magic():void}

    interface IVillian{name:string,isVillian:true}

    

    const aragorn:Ihero = {name:'Aragorn', age:150, isDark:false}

    const gimli:Ihero ={name:'Gimli',age:230,isDark:true}

    const gendalf:Imagician ={
        magic: function (): void {
           console.log('you will win Jack Pot');
           
        },
        name: "Gendalf",
        age: 3000,
        isDark: false
    }

    const saruman:IVillian = {name:'Saruman', isVillian:true}

  const heroes:(Ihero|IVillian)[] = [aragorn,gimli,saruman]

heroes.push(gendalf)


    return(
        <div className="lesson-container">
            <h2>Lesson 06</h2>
            <p>React TypeScript</p>
        </div>
    )
}