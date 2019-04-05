	/**
		*
		* @Router Config Server
		* @author Erick Eduardo - __@erick
		* @private  CONFIGURATION SERVER
		*/

			// Main starting point of the application
			const express = require('express')
				, http 		= require('http')
				, bodyParser  = require('body-parser')
				, app         = express()
				, cors        = require('cors');

			// App Setup
			app.use(cors())
			app.use(bodyParser.urlencoded({ extended: false }))
			app.use(bodyParser.json())

			// Server Setup
			const port = process.env.PORT || 8000
			const server = http.createServer(app)
			server.listen(port)
			console.log('Server listening on:', port)
			module.exports = app
