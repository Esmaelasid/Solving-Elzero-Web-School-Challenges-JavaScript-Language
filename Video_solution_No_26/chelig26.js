// ========================
// =         1            =
// ========================

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
/* ==============1================ */
console.log(Math.min(a, b, c, d))   // 2.4
/* ==============2================ */
console.log(a ** Math.floor(d)) //  10000
/* ==============3=============== */
console.log(Math.floor(d))  // 2
console.log(Math.round(d))  // 2
console.log(Math.trunc(d))  // 2
console.log(Math.pow(Math.floor(d), Math.round(d)) / Math.trunc(d) )    // 2
/* ==============4=============== */
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2))  //66.67 

console.log(Math.ceil(Math.floor(b) / Math.ceil(d)))       //67
