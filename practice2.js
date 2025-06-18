const express = require('express')
const app = express();
const PORT= 3500;


const users =[];
const handleRequest =(req)=>{
 const {username,password}=req.body; 
 if(!username || !password)
    throw new Error("username and password required")  
 const userExists = users.some(user=>user?.username===username)
 if (userExists)
    throw new Error("username already taken")
 users.push({username,password})
}
const getAllUsers =()=>users.map(user=>user.username)


app.use(express.json())
app.post('/register',(req,res)=>{
    try{
        handleRequest(req)
        res.status(201).send('user added successfully')
    }catch(err){
        res.status(400).send(err.message)
    }
})
app.get('/users',(req,res)=>{
    const allUsers = getAllUsers();
    res.status(200).json({allUsers})
  }
)


app.listen(PORT,()=>{
console.log('app is running on port',PORT);

})