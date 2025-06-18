const { log } = require('console');
const fs = require('fs');
const prompt = require('prompt-sync')()

function addNumbersInFile(){
let sum =0; 
const filePath = prompt('Enter Path of file: ')
if (!fs.existsSync(filePath))
    console.log("file doesn't exist");
    
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return   
    }
    const lines = data.split(/\n/)
    lines.forEach(line=> {
        const lineValue = Number(line)
        if (!isNaN(lineValue))
            sum+= lineValue
    });
   log(sum) 
})



}
addNumbersInFile();
