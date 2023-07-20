const express = require('express')
const app=express()
const port=5002

app.set('view engine','ejs')

const dataStore=[]

app.use(express.json())

app.get('/dummy', (req,res)=>{
	res.render('index',{message:"welcome"})
	//res.render('index',{data:dataStore.name})
})

app.post('/data', (req,res)=>{
	const {name,email} =req.body;
	dataStore.push({name,email})
	res.json({message:"data in array",data:{name,email}})
})

app.get('/display', (req,res)=>{
	res.json({data:dataStore})
})

app.listen(port,()=>{
	console.log(`server is up and running ${port}`)
})