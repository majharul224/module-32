// single object
/* const fish={name:'King Hilsha', id: 58, price:900, phone:'0190000', address:'candpur', dress:'silver'};
console.log(fish.phone); */

// two ar basi object
/* const fish={name:'King Hilsha', id: 58, price:900, phone:'0190000', address:'candpur', dress:'silver'};

const phone= fish.phone;
const address = fish.address;
const price = fish.price;
console.log(address);
console.log(phone);
console.log(price); */

// short cut object
// i
/* const fish={name:'King Hilsha', id: 58, price:900, phone:'0190000', address:'candpur', dress:'silver'};
const {phone,price,id}= fish;
console.log(id);
console.log(fish); */

// object ar vitor object shortcut
//           i
/* const company = {
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

 const work = company.web.work;
 console.log(work);
 const framework = company.web.framework;
 console.log(framework); */

 // object ar vitor object shortcut
//           ii
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

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);