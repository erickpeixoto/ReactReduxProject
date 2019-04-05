
/**
*
* @Router Config Db
* @author Erick Eduardo - __@erick
* @private
*/
	const
		  mongoose = require('mongoose')
		, dbString = 'mongodb://localhost:27017/skill';
		
		  mongoose.connect(dbString)
		
	let db = mongoose.connection;
  		db.on('error', console.error.bind(console, 'Falha na Conexão'));

			module.exports = mongoose;
