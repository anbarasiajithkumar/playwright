//map() is a function that goes through every item in an array and creates a new array with the results of applying some logic to each item.
let numbers =[1,2,3];
let doubled = numbers.map(num=> num*2);
console.log(doubled);

//-------------
let users= ["user1", "user2"];// Take each u from the users array,
let test = users.map(u => ({users: u, passsword :"test123"})); //Return an object like {user: "user1", passsword: "test123"}
console.log(test);

// filter - You use filter() when you want to keep only some values.
let num =[1,2,3,4,5];
let evennum = num.filter (n=> n%2==0);
console.log(evennum);

// using both filter and map

let nummm= [3,4,5,6,7,8];
let vall= nummm.filter( n=> n>2).map(n => n*10);
console.log(vall);