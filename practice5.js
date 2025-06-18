const express= require('express')
const PORT =3500;
const app = express();
function calculate(a,b,operator){
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/': 
            return a/b            
    }
}
app.get('/calculate',(req,res)=>{
    const{num1,num2,op}= req.query
    const result = calculate(num1,num2,op)
    res.status(200).send(result)
})

app.listen(PORT,()=>{
console.log('port is running on ',PORT);

})