/*simple arrow
*/
let add =(a,b) => a+b;
console.log(add(3,5));
// arrow with single parameter

const greet = (name) => "hello," +name
console.log(greet("bob"));

// multiline 

const multiply = (a,b) =>
{
    let result = (a*b);
    return result;
}
console.log(multiply(3,4));