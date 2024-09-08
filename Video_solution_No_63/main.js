// #challenge Video No 63 For #Elzero #js 

function shwoDetails(...DataUsr) {
    let  Name, age, stus, eror;
    for (let i = 0; i < 3; i++) {
        typeof DataUsr[i] === "string" ?
        Name = DataUsr[i]: typeof DataUsr[i] === "number" ?
        age = DataUsr[i] : typeof DataUsr[i] === "boolean" ?
        stus = DataUsr[i] : eror = DataUsr[i];
    }
     return console.log(`Hello ${Name}, Yor Age Is ${age} ${stus === true ?
         "Yor Are Availabe For Hire" : "Yor Are Not Availabe For Hire"}`)
}

shwoDetails("MRIT", 23, true )
shwoDetails( 23, "MRIT", true )
shwoDetails( true ,23, "MRIT" )
shwoDetails(false, "MRIT", 23)
