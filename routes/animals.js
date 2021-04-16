const express = require('express')
const router = express.Router()

const dbFunction = require('../database.js')
const db = dbFunction()

//  GET  /animals/
router.get('/', async (req, res) => {
	const animalsRef = db.collection('animals')
	const snapshot = await animalsRef.get()

	let items = []
	snapshot.forEach(docRef => {
		const data = docRef.data()
		items.push(data)
	})

	res.send(items)
})

//  GET  /animals/:id
//  POST  /animals   (objektet skickas i request body)
//  PUT  /animals/:id
//  DELETE  /animals/:id


module.exports = router
