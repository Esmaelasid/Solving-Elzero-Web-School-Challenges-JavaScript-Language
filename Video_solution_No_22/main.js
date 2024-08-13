// =================================    1


 let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

                // 1 
// [1 + 10] +  [20] + [80] - [11]

// [a = 12] 
// [b = 21] 
// [c = 81] 

console.log(++a + -b + +c++ - -a++ + +a);


//  [13 ] + [-21] + [81] - [-13] + [14]
// [a = 14] 
// [b = 21] 
// [c = 82] 


console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
                 3
// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - true)
//         [81] + [21] + [13] * [21] - [22] * [13] + [12]

// [a = 12] 
// [b = 22] 
// [c = 81] 

 


// =================================    2



let d = "-100";      let e = "20";   let f = 30;      let g = true;
// console.log( 2000                    ONE

console.log(f % e * -d * ++g) ;   console.log(30 % 20 * -100 * -2)      // 2000

console.log(f % e) ;              console.log(30 % 20)                  // 10 

console.log(-d * g) ;             console.log(-100 * -2)          // 200



// console.log( 2000                    TWO

d = -100;        e = 20;            f = 30;          g = 2;
console.log(++e * g + -d + ++f) ;   console.log(21 * 2 + 100 + 31 ); // 137

console.log(e * g ) ;                      console.log(21 * 2);          // 42

console.log( -d + f) ;                    console.log(100 + 31 )        //  131
// 
console.log( -d ) ;                                                     //  100
