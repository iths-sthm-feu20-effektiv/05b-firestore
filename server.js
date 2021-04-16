// importera npm-paket
// konfigurera servern
const express = require('express')
const app = express()
const PORT = 1341
const cors = require('cors')
const path = require('path')
const animals = require('./routes/animals.js')

// middleware
app.use( cors() )
app.use( express.json() )

app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.params);
	next()
})
app.use( express.static(path.join(__dirname, 'frontend')) )


// routes
app.use('/animals', animals)


// starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
})
