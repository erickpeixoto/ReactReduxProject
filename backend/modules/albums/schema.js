
const mongoose = require('../../config/mongo')
     ,Schema = mongoose.Schema

const albumSchema = new Schema({
            userId:  { type: Number },
            id: { type: Number },
            title:  { type: String }
        })

const ModelClass = mongoose.model('album', albumSchema);
module.exports = ModelClass
