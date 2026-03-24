

const add = (a, b , callback) =>{
const all = a + b
console.log(all);
callback();
}
add(34 , 345 , function callback(){
     console.log("This is a callback function");
})
