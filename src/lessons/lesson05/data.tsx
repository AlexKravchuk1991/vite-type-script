export interface Ihero {name:string
  age:number
  isDark:boolean
  image:string
  weapons:string[]
}

export const heroes:Ihero[] = [
    {
      name: "Gendalf",
      age: 3000,
      isDark: false,
      image: "https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg",
      weapons: ["magic stick", "sword"]
    },
    {
      name: "Saruman",
      age: 2500,
      isDark: true,
      image:
        "https://cdn.unitycms.io/images/9OIk4VqVaM8B6nGkb-QHPP.jpg",
      weapons: ["magic stick", "palantir"]
    },
    {
      name: "Gimli",
      age: 50,
      isDark: false,
      image: "https://static.wikia.nocookie.net/lotr/images/4/43/Gimli.jpg",
      weapons: ["hammer", "axe"]
    },
    {
      name: "Witch-king",
      age: 1500,
      isDark: true,
      image: "https://www.blacksbricks.de/images/product_images/original_images/witchkingff5.jpg",
      weapons: ["sword", "dragon", "dark magic"]
    },
    {
      name: "Aragorn",
      age: 150,
      isDark: false,
      image: "https://static.wikia.nocookie.net/lotr/images/b/ba/Anduril.jpg",
      weapons: ["sword"]
    }
  ];

  