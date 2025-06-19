const { error } = require('console');
const fs = require('fs/promises')

function divide(num1,num2){
    try{
        if(num2===0)
            throw new Error('cannot divide by zero')
        console.log(num1/num2)
    }catch(err){
       console.log(err.message);
       
    }
}

class ValidationError extends Error{
   
}
function isValidString(str){
    if (typeof str !=='string')
        throw new ValidationError('input is not a string')
    return true
}
function printStringValidation(str){
    try {
       if (isValidString(str))
        console.log("string");
        
    }catch(err){
        console.log(err.message);
        
    }
}
function calculateSquareRoot(num){
    return new Promise((resolve,reject)=>{
        if(num<0)
            reject(new Error('cannot calculate negative square root'))
        else resolve(Math.sqrt(num))
    })
}

// calculateSquareRoot(-57).
// then(result=>console.log(result)).
// catch(err=>console.log(err.message))
async function readFile() {
  try {
    const data = await fs.readFile("test.txt", 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err?.message);
  }
}
function parseJson(str){
    return new Promise((resolve,reject)=>{
        try {
            resolve(JSON.parse(str))
        } catch (error) {
            reject(error)
        }
    })
}
function getUserName(jsonStr){
    if (jsonStr.username)
        return jsonStr.username;
    throw new Error("missing username")
}
const jsonUser = '{"username": "yourUsername"}'
parseJson(jsonUser).
then(user=>getUserName(user)).
then(username=>console.log(username)).
catch(error=>console.log(error.message))