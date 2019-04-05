/**
*
* @API RESTFUL
* @copyright Erick Eduardo
* @private - Router default
*/

module.exports = function(app){
    app.use(require('../modules/albums/routes'))
}
