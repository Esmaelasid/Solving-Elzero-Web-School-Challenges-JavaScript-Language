
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop",  "Samera", "Ameer"]
let myEmployees = ["Ahmed",  "Samah", "Ameer", "Omar", "Othman", "Amany", "Samai"]



document.write("<div>We Hava ")
document.write(myAdmins.indexOf("Stop"))
document.write(" Admins </div>")
document.write("<hr>")

let help = [];

for(let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break
    document.write("<div>The Admins For Tema ")
    document.write( i + 1 ," Is ", myAdmins[i], "</div>")

document.write("<h3> Tema Members </h3>")

for(let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
        help.unshift(myEmployees[j])
    }
}
for(let c = 0; c < help.length; c++) {
    document.write("<p> - ", c + 1, " ",  help[c], "</p>")

}

document.write("<hr>")
help = []
}



// challengeNo56