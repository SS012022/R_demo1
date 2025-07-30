import express from 'express'
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to my page")
})
app.listen(8080,()=>{
    console.log("connected")
})