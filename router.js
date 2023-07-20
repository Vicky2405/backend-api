const express = require('express')
const router = express.Router()
const fs = require('fs')

const dataPath = './testData.json'

const {displayData, saveData, singleData, update, deleteData} = require('./controller/control')

router.get('/display', displayData)
router.post('/save', saveData)
router.get('/single/:postId',singleData)
router.patch('/update/:postId',update)
router.delete('/delete/:postId',deleteData)

const getData = () => {
	const jsonData = fs.readFileSync(dataPath)
	return JSON.parse(jsonData)
}

const saveJsonData = (data) =>{
	const stringifyData = JSON.stringify(data)
	fs.writeFileSync(dataPath, stringifyData)
}

router.get('/jsondisplay', (req,res) => {
	fs.readFile(dataPath, 'utf-8', (err, data)=> {
		if(err)
		{
			throw err
		}
		res.send(JSON.parse(data))
	})
})

router.post('/jsonsave', (req, res) => {
	var currentData = getData()
	const newDataId = Math.floor(100000 + Math.random() * 900000)
	console.log(newDataId)

	currentData[newDataId] = req.body

	saveJsonData(currentData)
	res.send({'data saved': true})
})

router.put('/jsonupdate/:id', (req,res) => {
	var currentData = getData()

	const DataId = req.params['id']
	currentData[DataId] = req.body

	saveJsonData(currentData)
	res.send({'data updated':true})
})

router.delete('/jsondelete/:id', (req,res) => {
	var currentData = getData()

	const DataId = req.params['id']
	delete currentData[DataId]

	saveJsonData(currentData)
	res.send({'data deleted':true})
})

module.exports = router