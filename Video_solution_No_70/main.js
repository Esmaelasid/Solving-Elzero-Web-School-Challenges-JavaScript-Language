// #challenge Video No 70 For #Elzero #js  No: 1

// ============== Normer Function ===================
let namesOld = function  (...Names) {
   return console.log("string [" + Names.join("], [") + "] => Done !");
}
namesOld("Osama", "Mohamed", "Ali", "Ibrahim")

// ============== Aroo Function & E6 =================
let namesE6 =  (...Names2) => console.log( `string [${Names2.join("], [")}] => Done !`);
namesE6("Osama", "Mohamed", "Ali", "Ibrahim")


// #challenge Video No 70 For #Elzero #js  No: 2

let myNumbers = [20, 50, 10, 60];

// // ============== Aroo Function & E6 =================
let calc = (one, two, ...nums) =>  one + two + nums.pop() - one ;   
console.log(calc(10, 60, 20))

// ============== Normer Function ===================
let calcOld = (one, two, ...nums) =>  one + two + nums.pop() - one ;   
console.log(calcOld(10, 60, 20))

