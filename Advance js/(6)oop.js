// oop and functional programming are programming paradiagm by using these paradiagm we are able to write code in more orgainised manner
// for clear and more understandable code
// easy to extend
//easy to maintain
// memory efficient
// making code dry : don't repeat yourself are easy

// in all programs there are two primary components the data also called states and the behaviour the functions
// functions are first class citizens and obects allow us to do prototyple inheritence

// oop in js says bringing together the data and its behaviour in one location called objects and containg all that in a box makesd it easier to understand how our pgm works

// in fp data and behaviour are distinct things and keep them in different location for more clearity, so here instead of having one large giant box to describe everything as in oop, we have multiple small no. of boxes

// closures are big part of functions and without closures we dont able to learn functional programming ||y prototypes for object oriented programming

// objectives to learn

// this keyword
// new keyword
// prototype
// ES6 classes
// java
// inheritance
// Object.create()
// Private vs Public
// 4 principles of oop

// note oop is all about modellling real world objects and relationships

// lets get started to move from procedural code to oop

// the fairy tail game where different character communicate one and other and using oop to orgainise that code
// codes written in this file please execute on repl.it
// creating elf character object

//naive approach
const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + elf.weapon
  },
}
console.log(elf.name)
console.log(elf.attack())
// so this is one elf what if we want to create an army of elf, we can copy and paste above code for elf no. of times and change their data uum... not efficient we copy and paste same code over and over and we cant keep our code dry anymore

// what else we can do
// use encapsulation there and tied up all the functionality together in a container and state data within the object

// factory function to create multiple objects with same functionality
function createElf(name, weapon) {
  // we have to return an elf object everytime to create
  return {
    // name: name,
    // weapon: weapon,
    // with ES6 js we have a sementic previllage here umm... if property and value are same we can also write above data as
    name,
    weapon,
    attack() {
      return "attack with " + weapon
    },
  }
}
// now creating object by use of factory function
const peter = createElf("peter", "stones")
console.log(peter.attack)
// creating another elf
const sam = createElf("sam", "fire")
console.log(sam.attack)
// so here factory func help us to keep this code dry to some extent what if we have 1000 elf this factory function fails to do that efficiently, here if you notice attack() id generic to all the elf so why we define or store same thing in memory again and again for different elf
// prototyple inheritence is saviour here for us where we can share generic information throughout the multiple objects

// here an object we are now created and they carry generic functionality for elf stored once in a memory for all elf it would works
const elfHitsBy = {
  attack() {
    return "attack with " + this.weapon
    // this method elfHitsBy does not knows what the weapon is because there is no link in b/w elfHitsBy and createElf objects to share or read one and another properties
    //by using this we understand weapon belongs with the object who called elfHitsBy object
  },
}
function createElf(name, weapon) {
  return {
    name,
    weapon,
  }
}
// now creating object by use of factory function
peter = createElf("peter", "stones")
peter.attack = elfHitsBy.attack()
console.log(peter.attack())
// creating another elf
sam = createElf("sam", "fire")
sam.attack = elfHitsBy.attack()
console.log(sam.attack())

// again here we have to manually define what is peter.attack() is for 1000 of elf it piles up
// so what we can do now we use Object.create()

//below code works on repl it here it give error
// const elfHitsBy = {
//   attack() {
//     return "attack with " + this.weapon
//   },
// }
// function createElf(name, weapon) {
//   let newElf = Object.create(elfHitsBy)
//   // what the above line do here, it creates a link from elfHitsBy to newElf
//   newElf.name = name
//   newElf.weapon = weapon
//   return newElf
// }
// // now creating object by use of factory function
// const peter = createElf("peter", "stones")
// console.log(peter.attack())
// // creating another elf
// const sam = createElf("sam", "fire")
// console.log(sam.attack())

// instead of using Object.create() , in oop we have constructor functions
// to create elf

//using constructor function
function Elf(name, weapon) {
  console.log("this", this) // this holds empty object i.e, Elf{}
  this.name = name
  this.weapon = weapon
  var a = 5 // not add with the object since here we have to use this keyword
  console.log("this", this)
  // nothing is returned by constructor function
} // here in case of constructor functions this pointing or reference to object peter and sam correspondingly bucause of new keyword but in case if we not use new here then this pointing to nothing bcz nobody called Elf and it gives type error beacuse in that case no object is created nothing is returned and this keyword not poniting to object
// to use constructor function we always have to use new keyword with object else we get typescript error
peter = new Elf("peter", "stones") // constructor function Elf is running by new keyword
// console.log(peter.attack())
// creating another elf
sam = new Elf("sam", "fire")
// console.log(sam.attack())
console.log(sam.name)
// implement attack function here
console.log(Elf.prototype) // Elf{}, Elf with empty object before adding attack to the Elf prototype Elf{}, every function that we have created out has access to itspe but only constructor functiona has their application
Elf.prototype.attack = function () {
  return "attack with " + this.weapon
} // here we use attack up from the prototype chain which is written once in a memory and since Elf is Constructor function which is special type objects it has access to properties like __proto__ , prototype to go up in prototype chain and thats why bcz of the application of prototyple inheritence all the objects that is created from Elf Constructor func has access to the attack method
console.log(peter.attack())
console.log(sam.attack())
console.log(Elf.__proto__) // Elf{ attack: [Function] } == console.log(peter.prototype) , but if we commented out Elf.prototype.attack function for a sec and run this we get Elf{} as our prototype created automatically for all objects by new keyword and then we again uncommented out by this we add attack property to Elf{}, only func have access to its prototype and not objects so if we
console.log(peter.__proto__) // undefined
// the new keyword automatically returned the object for us and it creates the elf constructor
// any func that is invoked by new i.e, constructor functions must have to starts its name with CAP letters e.g, Object(), Number() and Function() are constructor functions you can invoke them by new keyword

// also we can create or modify another generic properties/ functionalities like attack e.g,

// Elf.prototype.build = function () {
//   return "build with " + this.weapon
//   // here we always  have to use regular func which is dynamically scoped and not the arrow func which is lexically scoped
// }
// console.log(peter.build())
// console.log(sam.build())

// how to make a constructor function and creates multiple objects

const Elf1 = new Function(
  "name",
  "weapon",
  `this.name = name;
this.weapon = weapon;`
)
// now making objects
const sarah = new Elf1("Sarah", "fireworks")
console.log(sarah)
// note : this keyword is simply point or having reference to the function or object whoever calling the same function or object

// with constructor function the only way by which we can add properties to object is by using this keyword
//constructor function automatically created prototype  chain for us. how

var a = new Number(5)
console.log(typeof a) // object bcz we use constructor function to create a
var b = 5
console.log(a === b) // false
console.log(a == b) // true

// note with an exception of null  and undefined all the other things are objects , everything has a constructor functions for it thats why everything has methods to use defined in their built in prototype

// TODO: 8/ 19 lectures completed

// with new ES6 we have class in oop
//All the property function states methods action reside in an nice contained environment called class or blueprint of real world instance
class Elfe {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return "atack with " + this.weapon
  }
}

const fiona = new Elfe("Fiona", "ninja stars")
console.log(fiona instanceof Elfe) //
const ben = new Elfe("Ben", "bow")
fiona.attack()

//ways to manipulate this keyword
// new binding
function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this)
}

const person1 = new Person("Xavier", 55)

//implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi" + this.name)
  },
}

person.hi()

//explicit binding
const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("hi" + this.setTimeout)
  }.bind(window),
}

person3.hi()

// arrow functions
const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log("hi " + this.name)
    }
    return inner()
  },
}

person4.hi()

// cloned obj is not holding the feature that base class provide to obj
// class Elfe {
//   constructor(name, weapon) {
//     this.name = name
//     this.weapon = weapon
//   }
//   attack() {
//     return "atack with " + this.weapon
//   }
// }
// const fiona = new Elf('Fiona','ninja stars')
//  by copy a class and then extend it
// to clone fiona we can
const ogre = { ...fiona }
console.log(ogre) // == fiona
ogre.__proto__ // we get {}
fiona.__proto__ // Elfe{}
// we lost prototype chain here with ogre
// means we copied fiona obj into ogre but ogre is not having Elf{} but fiona is always be an Elfe in short ogre is an obj that has not have Elf base class as fiona have.
console.log(fiona === ogre) // false
// I don't have attack func either for ogre
// ogre.attack() // type error
//  it means by extends a class you are not only making just copies of base class but also it simply links up the prototyppe chain from sub class to base class it means when we does not find something in the sub class control is going to looks up in the prototype chain in the super class
// Inheritance
// passing knowledge down
// how we actaully inherit base class knowledge into a sub class
// Character is base class or we say super class
class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return "atack with " + this.weapon
  }
}
//  Elf is subclass of Character

// when we create a class for here Elfie and use extends keyword it means hey extend and set the prototype that is the __proto__ to point to Character so Elfie now has a prototype chain up to the character and constructor in Elfie is our own constructor just for the Elfie class this is only gets run on an Elfie not with a character
class Elfie extends Character {
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error we can use this after super class called and super() class invoked in sun class
    super(name, weapon) // in order for us to have our constructor and be able to use this and know what this reffering to which is Elfie and not the Character, we have a special keyword called super for super class and to call super class inside constructor use super(). and for here super class of Elfie is Character so by super() control goes up and calls the constructor and we can create name and weapon with Elfie and have avaiilable to us in Elfie class and can use Character properties with instances of Elfie and also it is important to pass the properties name that you need in the sub class from base class like here name and weapon here super class is refering to Character
    console.log("what am i?", this)
    this.type = type
  }
}
const dolby = new Elfie("Dolby", "cloth", "house")
console.log(dolby) // print dolby obj{}
dolby.attack()
//  Ogre is subclass of Character
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    // this is like extending our prototype.
    return "strongest fort in the world made"
  }
}
// houseElf is the obj {} which is an Elf
const houseElf = new Elf("Dolby", "cloth", "house")
//houseElf.makeFort() // error

//  shrek is an Ogre
const shrek = new Ogre("Shrek", "club", "green")
shrek.makeFort()
//  Note : class is not have acual existence in memory its like blueprint and obj are real world entities that has physical significance and we can perform operation on Obj only and obj is occuping memory

// Inheritance 2
// when we create our own makeFort() method for Ogre class what JS did under the hood was we extended the prototype its like
Ogre.prototype.makeFort() // this is done because of using class keyword
console.log(Ogre.isPrototypeOf(shrek)) // false bcz Ogre is constructor function
// we should check it by using
console.log(Ogre.prototype.isPrototypeOf(shrek)) // true

// or
console.log(Character.prototype.isPrototypeOf(Ogre)) // false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)) // true
// this is little bit confusing to check this prototypal connection and you can do this check with instanceOf
console.log(dolby instanceof Elfie) // true
console.log(dolby instanceof Ogre) // false
console.log(dolby instanceof Character) // true (bcz Character is in prototype chain of Elfie and dolby is an Elfie)

// Note : unlike other class based languages JS has just obj, it means just one obj inherits properties from other objects there are no technically classes we have. In other l/g like Java or c++ where classes inherits form classes and coping obj when we do something like extend but in JS extends link the obj our reference
// Public vs Private class fields
// this idea of making classfields private so that no one instances can called it. acc to it whatever property or method that you want to make private just prefixed a pound or hash symbol in their name like below age is private and there is no instance of class can able to invoke it from outside of class
class Ramayana_Characters {
  #age = 44 // private
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  #attack() {
    return "atack with " + this.#age
  } // private method
}
const Rama = new Ramayana_Characters("rama", "bow")
Rama.attack() // we get type error
//  now lets cheack can we access attack() if we remove pound from attack() from class Characters on the browser console

// Pillars of OOP
Encapsulation
Abstraction
Inheritance
// Polymorphism means  using a same function in multiple classes that are subclasses of a base class but each class use that function in a different way or evaluate that function with different value for different class like for here attack() method used here with Character class and each instances of Character has different way of using it or evaluate it differently, means each instance of character has method attack but everyone has different way to atatck

// static keyword
// static method or property for a class
// Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
//
// Exrecises :
// class Character {
//   constructor(name, weapon) {
//     this.name = name
//     this.weapon = weapon
//   }
//   attack() {
//     return "atack with " + this.weapon
//   }
// }
class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon)
    this.kind = kind
  }
  attack() {
    console.log(super.attack()) // super means Character class or we say super class or base class of Queen
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `
  }
}

const victoria = new Queen("Victoria", "army", "hearts")
victoria.attack()
// Guess the O/p
// attack with army
// I am the Victoria of hearts, now bow down to me!
