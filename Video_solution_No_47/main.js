let zero = 0
let  counter = 3

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

console.log(my.slice(0 , ++counter).reverse())// ['Osama', 'Elham', 'Mazero', 'Ahmed']


console.log(my.slice(++zero, --counter).reverse()) // ['Elham', 'Mazero']


console.log(`${my[--counter].slice(--zero, counter++)}${my[++zero].slice(- ++counter)}`)// Elzero


console.log(`${my[++counter].slice(- zero)}${my[--counter - zero][--zero]}`)// rO

// ===== IM EsmaelAsid in Twiter