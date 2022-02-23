/* const numbers=[4,6,8,10,12];
const output = [];
for (const number of numbers){
    const result = number *2;
    output.push(result);
}
console.log(output); */


/* 
const numbers = [4,6,8,10,12]
const output = [];
function doubleIt(number){
    return number*2;
}
for( const number of numbers){
    const result =doubleIt(number);
    output.push(result);
}
console.log(output); */
/* 

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array


const numbers = [4,6,8,10,12]
const output = [];
const doubleIt = number => number *2; 
for( const number of numbers){
    const result =doubleIt(number); // number*2;
    output.push(result);
}
console.log(output);  */
/* 
const numbers = [4,6,8,10,12];
const doubleIt = number => number *2; 
const output = numbers.map(doubleIt); // numbers.map(number => number *2); // numbers.map(x => x * 2);
console.log(output);
 */

const numbers=[4,6,8,10];
const output = numbers.map(x => x*2);
console.log(output);