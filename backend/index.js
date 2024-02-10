import express from 'express'
import mongodb, { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import { connectToDb, getDb } from './db.js'

const PORT = 5000
const app = express()
let db

app.use(express.json())

connectToDb(err => {
	try {
		app.listen(PORT, (err) => {
			err ? console.log(err, 'DB conecction') : console.log(`Server started on PORT: ${PORT}`)
		})
		db = getDb()
	} catch {
		console.log(`DB conecction: ${err}`)
	}
})


const handleError = (res, text) => res.status(500).json(text)

app.get('/relax/products', (req, res) => {
	const products =[]
	db
		.collection('products')
		.find()
		.forEach(product => products.push(product))
		.then(() => {
			res.status(200).json(products)
		})
		.catch(err => handleError(res, err))
})

app.get('/relax/products/:id', (req, res) => {
	if(new ObjectId(req.params.id)) {
		db
		.collection('products')
		.findOne( {_id: new ObjectId(req.params.id)})
		.then((doc) => {
			res.status(200).json(doc)
		})
		.catch(err => handleError(res, err))
	} else {
		handleError(res, 'Wrong id...')
	}
})

app.delete('/relax/products/:id', (req, res) => {
	if(new ObjectId(req.params.id)) {
		db
		.collection('products')
		.deleteOne( {_id: new ObjectId(req.params.id)})
		.then((result) => {
			res.status(200).json(result)
		})
		.catch(err => handleError(res, err))
	} else {
		handleError(res, 'Wrong id...')
	}
})

app.post('/relax/products', (req, res) => {
	if(new ObjectId(req.params.id)) {
		db
		.collection('products')
		.insertOne( req.body)
		.then((result) => {
			res.status(201).json(result)
		})
		.catch(err => handleError(res, err))
	} else {
		handleError(res, 'Wrong id...')
	}
})

app.patch('/relax/products/:id', (req, res) => {
	if(new ObjectId(req.params.id)) {
		db
		.collection('products')
		.updateOne( {_id: new ObjectId(req.params.id)}, {$set: req.body})
		.then((result) => {
			res.status(200).json(result)
		})
		.catch(() => handleError(res, 'Something wrong...'))
	} else {
		handleError(res, 'Wrong id...')
	}
})

app.get('/relax/categories', (req, res) => {
	const categories =[]
	db
		.collection('categories')
		.find()
		.forEach(category => categories.push(category))
		.then(() => {
			res.status(200).json(categories)
		})
		.catch(err => handleError(res, err))
})