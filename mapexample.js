//map() is a function that goes through every item in an array and creates a new array with the results of applying some logic to each item.
//map() doesn't change the original array
//It returns a new array.

let numberss =[1,2,3];
let doubled = numberss.map(num=> num*2);
console.log(doubled);


let users= ["user1", "user2"];// Take each u from the users array,
let test = users.map(u => ({users: u, passsword :"test123"})); //Return an object like {user: "user1", passsword: "test123"}
console.log(test);

/* filter - You use filter() when you want to keep only some values.
Pick Only What You Want,filter() goes item by item.
If your function returns true, the item is kept.
If false, it is removed, Returns a new array.
syntax = array.filter(variableName => condition)*/


let num =[1,2,3,4,5];
let evennum = num.filter (n=> n%2==0);
console.log(evennum);


let fruits = ["apple","banana","kiwi","apple"];
let onlyapple = fruits.filter(fruit=> fruit==="apple");
console.log (onlyapple);



let results= [{testcaseid:1, status:'pass'},{testcaseid:2, status:'fail'}]
let failedcase = results.filter(h=> h.status=='fail');
console.log(failedcase);


/*reduce(): Collapse Everything into One
accumulator (keeps the running result)
current item in the array*/

let numbers =[1,2,3,4]
let sum = numbers.reduce((acc,num)=> acc+ num,0);
console.log(sum);

let numbb =["pass","fail","pass","pass"]
let redunum = numbb.reduce((acc,r) => r==='pass'? acc+1 : acc,0); // ternary operator = condition? exp if true : expif false
console.log(redunum);



