
/**
*
* @Router Albums
* @author Erick Eduardo - __@erick
* @private
*/


const express = require('express')
    , router = express.Router()
    , AlbumController = require('./')
    , moduleRoute = '/albums'

  

router.get(`${moduleRoute}/dump`,  (req, res) => {
    AlbumController.dumpApi(req, (response) => {
        res.send(response)
    })
})
router.get(`${moduleRoute}/one/:_id`, (req, res) => {
    AlbumController.getOne(req, (response) => {
        res.send(response)
    })
})
router.get(`${moduleRoute}/all`,  (req, res) => {
    AlbumController.all(req, (response) => {
        res.send(response)
    })
})
router.post(`${moduleRoute}`, (req, res) => {
    AlbumController.post(req, res, (response) => {
        res.send(response)
    })
})
router.put(`${moduleRoute}`, (req, res) => {
    AlbumController.put(req, res, (response) => {
        res.send(response)
    })
})
router.delete(`${moduleRoute}/:_id`, (req, res) => {
    AlbumController.delete(req, res, (response) => {
        res.send(response)
    })
}) 
    module.exports = router

