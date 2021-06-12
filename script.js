

class Cat {
  constructor(name){
    this.name = name;
    this.age = 0;
  }
  log(name){
    console.log(this.name + " is a good cat.")
  }
}


const tabby = new Cat("Boots")
const tux = new Cat("Lenard")

tabby.log()
tux.log()

console.log(tabby)
console.log(tux)

function moreCats(Cat){
  Cat.age++
}

addEventListener('click', (e)=>{
  moreCats(tux)
  console.log(tux.age)
})

const catPerson = {
  catFarm: []
}

function buyCat(num){
  for(let i = 0; i < num; i++)
  catPerson.catFarm.push(new Cat())
}

buyCat(6)

class Pirate {
  constructor(name, leg, hook){
    this.name = name,
    this.leg = leg,
    this.hook = hook
  }
  drink(){
    console.log("glug glug")
  }
  scope(){
    console.log("Land HOOOO!")
  }
  bury(){
    console.log("no one will find me treasure")
  }
}



const bestShip = ["Bob the Best", "Billy from the West", "Beck from the Block"]
const friendShip = ["Brian", "Richie", "Skylar"]

function quirky(){
  for(let i = 0; i < bestShip.length; i++)
  for(let j = 0; j < friendShip.length; j++)
    if(bestShip[i] !== friendShip[j]){
      console.log(bestShip[i])
      console.log(friendShip[j])
      console.log("good to go")
    }
}

quirky()
