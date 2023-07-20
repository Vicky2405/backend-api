const http=require('http')
const url=require('url')

http.createServer(function (req,res){

if(req.url === "/test" && req.method === "GET"){
	res.write("Welcome to Backend")
	res.end()
}
else if(req.url === "/profile" && req.method === "GET")
{
	

	res.writeHead("Welcome to Profile")
	res.end()
}
else{
	const queryObject=url.parse(req.url,true).query

	var num1=Number(queryObject.temp1)
	var num2=Number(queryObject.temp2)

	var sum= num1 + num2

	res.writeHead(200,{'Content-type':'text/html'})
	res.end(JSON.stringify({sum}))
}


})
.listen(5000, ()=>{
	console.log("server is running")
})