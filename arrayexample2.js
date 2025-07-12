let fruits =["apple", "banana", "kiwi"];
fruits.push("orange"); // add a value to the end of the array
console.log("after push:" +fruits);

fruits.pop("orange");
console.log("after pop:" +fruits);

fruits.shift();
console.log("after shift:" +fruits);

fruits.unshift("orangess");
console.log("after unshift:" +fruits);

//object destructuring
const person= {
    name: "test1",
    age: '25',
    place: "uk"
}
const {name, age} = person
console.log(name);

//array destructuring
const colours = ["blue","greeen","yellow"]
const[first, second,third] = colours;

console.log(first);