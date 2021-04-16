const admin = require('firebase-admin')

// OBS! Private key ligger inte i repot - by design.
const privateKey = require('./private-key-animals.json')

admin.initializeApp({
	credential: admin.credential.cert(privateKey)
});


function getDatabase() {
	return admin.firestore()
}

module.exports = getDatabase
