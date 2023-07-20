const express = require('express')
const Post = require('../model/Post')


exports.displayData = async (req,res) => {
	try{
		const data= await Post.find()
		res.json(data)
	}
	catch(err)
	{
		message: err
	}
}

exports.saveData = async (req,res) => {
	const data = new Post ({
		name: req.body.name,
		phone: req.body.phone
	})

	try{
		const save= await data.save()
		res.json(save)
	}
	catch(err)
	{
		message: err
	}
}

exports.singleData = async (req,res) => {
	try{
		const data= await Post.findById(req.params.postId)
		res.json(data)
	}
	catch(err)
	{
		message: err
	}
}

exports.update = async (req,res) => {
	try {
		const data = await Post.updateOne(
			{_id:req.params.postId},
			{ $set: {name:req.body.name, phone:req.body.phone}
			}
		);

		res.json(data)
	}
	catch(err)
	{
		message: err
	}
}

exports.deleteData = async (req,res) => {
	try{
		const data = await Post.findByIdAndRemove(req.params.postId);
		res.json(data)
	}
	catch(err)
	{
		message:err
	}
}
