
/**
*
* @module Company
* @author Erick Eduardo - __@erick
*/
const _request = require('request'),
       mongoose = require('../../config/mongo'),
       { ObjectId } = mongoose.Types,
       uriApi = 'https://jsonplaceholder.typicode.com/albums',
       Album =  require('./schema')



   
  module.exports = {
 
    dumpApi: (req, callback) => {

        _request(uriApi, function (error, response, body) {
          
          const returns = JSON.parse(body)
                Album.insertMany(returns, (error, response) => {
                callback(response)
            })       
        
        })
      },
    
    /**
      *
      * @function Get Request
      * @author Erick Eduardo - __@erickpeixoto
      */
       all: (req, callback) => {

        Album.find({})
               .exec( (err, albums) => {
                 callback({
                    albums
                })
            })

    },
    /**
    *
    * @function Get One Request
    * @author Erick Eduardo - __@erickpeixoto
    */
    getOne: (req, callback) => {
      const { _id } = req.params
        Album.find({ _id: Object(_id) })
          .exec((err, album) => {
            callback({
              album
            })
          })

      }
    ,
    /**
    *
    * @function Post Request
    * @author Erick Eduardo - __@erick
    */
    post: (req, res, callback) => {
     
        const album = req.body
        const newAlbum = new Album(album)

            newAlbum.save((error, album) => {
               callback({ album })
        })
    
    },

    /**
    *
    * @function Put Request
    * @author Erick Eduardo - __@erick
    */
      put: (req, res, callback) => {
          const { _id } = req.body
          Album.update({ _id: ObjectId(_id) }, req.body, (err, response) => {
            if (err) { return res.status(422).send({ error: 'Update fail' }) }
              callback(response)
          })
      },
    
      /**
      *
      * @function Delete Request
      * @author Erick Eduardo - __@erick
      */
      delete: (req, res, callback) => {

        const { _id } = req.params
        Album.findByIdAndRemove({ _id })
          .exec()
          .then(album => {
            callback({ album })
          })
          .catch(e => {
            return res.status(422).send({ error: e })
          })
      },

  }



