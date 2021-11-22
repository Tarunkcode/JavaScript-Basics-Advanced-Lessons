// break and continue keywords with for loop
const myStates = ['Rajasthan', 'mumbai','Banglore' , 'Karnatka', 1947, 'sikkim' , 'Jammu&kashmir'];

for (let i = 0; i < myStates.length; i++) {
  if(typeof myStates [i] !== "string") continue;
    console.log(myStates[i])// print all value except 1947
}
   for (let i = 0; i < myStates.length; i++) {
     if(typeof myStates [i] !== "string") break;
     console.log(myStates[i])//first four values
}
   for (let i = 0; i < myStates.length; i++) {
     if(typeof myStates [i] === "string") break;
       console.log(myStates[i])// nothing print
}
   for (let i = 0; i < myStates.length; i++) {
     if(typeof myStates [i] === "string") continue;
       console.log(myStates[i])// print 1947
}

// while and do while
let i = 20;
do {
  console.log(i);
  i++
}while ( i < 10)

i = 1;
while(i < myStates.length){
  console.log(myStates[i]);
  i++
}
// forEach
myStates.forEach((s) => console.log(s));//print myStates

// forOf majorly used for array and forIn majorly used for objects
// forOf
const names = ["Tarun", "Arun", "Karan", "suman", "Ratan", "hero"]
for (const n of names){
  console.log(n);
}
// forIn
const symbols = {
  yt : "youtube",
  fb : "facebook",
  insta : "instagram",
  lco : "learnCodeOnline"
}
for (const n  in symbols){
  console.log(n);
}
