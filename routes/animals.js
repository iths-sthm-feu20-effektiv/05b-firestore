const express = require('express')
const router = express.Router()


//  GET  /animals/
router.get('/', (req, res) => {
	res.send('GET /animals/')
})

//  GET  /animals/:id
//  POST  /animals   (objektet skickas i request body)
//  PUT  /animals/:id
//  DELETE  /animals/:id


module.exports = router
