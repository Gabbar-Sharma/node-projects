

// const add = (a, b , callback) =>{
// const all = a + b
// console.log(all);
// callback();
// }
// add(34 , 345 , function callback(){
//      console.log("This is a callback function");
// })

const fs = require("fs")
const os = require("os")

const data = fs.appendFile("data.txt", "this is data file" , () => {
console.log("file is created");
})

const user = os.userInfo()
console.log(user);

const a = 34;
const b = 45
console.log(a-b)
if(a > b){
    console.log("a is greater than b");
}   else{
    console.log("b is greater than a");
}   

