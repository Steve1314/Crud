const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel =require('./models/Userss')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://vivek:vivek@crud.1rbq2ut.mongodb.net/?retryWrites=true&w=majority&appName=Crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.post("/createuser",(req,res)=>{
UserModel.create(req.body)
.then(user => res.status(201).json(user)) 
    .catch(err => res.status(500).json({ error: err.message })); 
})

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>{console.log(err)
    })
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))


})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate(
        {_id:id},{
            name:req.body.name,
            email:req.body.email,
            age:req.body.age}
    )
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))


})
app.listen(3001,()=>{
    console.log('srever is running')
})