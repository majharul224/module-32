// declare variable based on the name of an object property

//     i

/* const myObject={x:20, y:30, z:50, m:60, a:30, b:35,}
const {a,m}= myObject;
console.log(a,m); */

// object properti string

//    ii
/* const {sky, color, money, soil} = {sky:'blue', soil:'matti',color:'red', money:500,};
console.log(soil);
console.log(soil, money); */

// destructuring array 

//        i
/* const [x, y, z, m, n]= [1,5,8,7,3];
console.log(x,m); */
  
//    ii
/* const [ best, faltu]=['majharul', 'hridoy']
console.log(best);
console.log(best,faltu); */


//chaining

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
//console.log(company.web.tech.second);
//console.log(company.web.back.second); //undefind because no (back) properti
