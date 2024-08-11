                // =====================
                //          1
                // =====================

let a = 10;

a < 10 
? console.log(10) 
: a >= 10 && a <= 40
? console.log("10 To 40")
: a > 40 
? console.log("> 40")
: console.log("Unknown")  
    

                // =====================
                //          2
                // =====================

let st = "Elzero web School";

// =============================================

if (String(st.repeat(2).length) === "34") {
    console.log("Good")
} 

// =============================================

if (st.charAt(st.indexOf("W")).toLocaleLowerCase() 
    || st.charAt(st.indexOf("w"))  === "w") {
   
        console.log("Good")
}

// =============================================

if (typeof(st.length) !== "string") {
    console.log("Good")
}

// =============================================

if (String(typeof(st.length)) === ("number")) {
    console.log("Good")
}

// =============================================

if (st.slice("",6).repeat(2) === "ElzeroElzero") {
    console.log("Good")
}