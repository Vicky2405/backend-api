const express=require('express')
const body=require('body-parser')
const app=express()
const port=5001

app.use(body.json())

app.get('/',(req,res)=>{
	res.send("Welcome to express server")
})

app.get('/test',(req,res)=>{
	let num1=Number(req.query.temp1)
	let num2=Number(req.query.temp2)
	let sum=num1+num2

	res.json({message:sum})
})


app.post('/save', (req,res)=>{
	const test=req.body.test
	res.json({message:`your text ${test}`})

})

app.listen(port,()=>{
	console.log("server is up and running")
})