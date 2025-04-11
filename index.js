

const person={
    name:"Harendra",
    age:25,
    address:{
        city:"Bharatpur",
        state:"Rajasthan",
    },
    Hobbies:{
            game:{
            indoor_game:{
                boardGame:["LUDO","CHESS",]
            },
            outdoor_game:["CRICKET","FOOTBALL","HOCKEY"]

            
            }
    },
    skills:{
        frontent:["HTML","CSS","JS"],
        backend:["NODE","PHP"]
    }
}

// for (let i in person) {
//     if (typeof person[i] === "object") {
//         if(Array.isArray(person[i])){

//         }else{
//             for (let j in person[i]) {
//               document.writeln(i+"_" + j + ": " + person[i][j] + "<br/>");
//             }
//         }
//     } else {
//        document.writeln(i + ": " + person[i] + "<br/>");
//     }
//   }

//   function flattenObject(obj, nesting=false,key=null){
//     if(Array.isArray(obj[key])){
      
//     }
// else{
//         for(let i in obj){
//             if(typeof obj[i]==="object"){
//                 flattenObject(obj[i],true,i)
//             }else {

//                 if(nesting){
//                     document.writeln(`${key}_${i}:${obj[i]}<br/>`)
//                 }
//                else{
//                 document.writeln(`${i}:${obj[i]}<br/>`)
//                }
//             }
//         }
//     }
//   }

//   flattenObject(person)


function flattenObject(obj, prefix = '') {
    for (let key in obj) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}_${key}` : key;

        if (typeof value === 'object' && !Array.isArray(value)) {
            // Recursive call for nested objects
            flattenObject(value, newKey);
        } else if (Array.isArray(value)) {
            // Join array values into a string
            document.writeln(`${newKey}:${value.join(',')}<br/>`);
        } else {
            // Primitive value
            document.writeln(`${newKey}:${value}<br/>`);
        }
    }
}
flattenObject(person)