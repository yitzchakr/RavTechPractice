const fs = require("node:fs").promises;
const api = require('axios')

function delay(ms) {
  return new Promise((resolve) => {
    const result = setTimeout(() => console.log("Done"), ms);
    resolve(result);
  });
}
async function readFile() {
  try {
    const data = await fs.readFile("data.txt", { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    console.log(err?.message);
  }
}
function getRandom(){
    return new Promise (resolve=>{
        setTimeout(()=>resolve(Math.ceil(Math.random())*10),500)
    }
    )
       
}
function multiplyByThree(num){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(num*3,3000))
    })
}
// getRandom().
// then(num=>multiplyByThree(num)).
// then(result=>console.log(result))

function checkEven(num){
    return new Promise((resolve, reject) => {
        const result = num%2===0;
        if (result)resolve();
        else reject();
    })
}
// checkEven(5).
// then(()=>console.log('number is even')).
// catch(()=>console.log('number is odd'))

function printRequests(){
    Promise.all([api.get('https://jsonplaceholder.typicode.com/users/1 '),api.get('https://jsonplaceholder.typicode.com/posts?userId=1')]).
    then(([user1,user2])=>{
        
        console.log(`user 1 :${JSON.stringify(user1.data)}\n user2: ${JSON.stringify(user2.data)}`)
    })
}
 
function printFile(filename) { 
  fs.readFile(filename, 'utf8') 
    .then(data => console.log(data.toUpperCase())) 
    .catch(()=>console.log('An error occurred')); 
} 
printFile('test.txt')


