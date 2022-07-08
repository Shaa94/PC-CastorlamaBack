const express = require('express')
var cors = require('cors')
 
var bodyParser = require('body-parser') // Middleware pour transformer les requêtes reçues via Express

const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3001

//Traitement des middleware
app.use(bodyParser.json()) //Appel bodyParser pour transformer les requêtes reçues par Express en json
app.use(cors())
// Initialisation de la BDD
sequelize.initDb()

//points de terminaisons.
require('./src/routes/routes_furniture/findAllFurnitures')(app)
require('./src/routes/routes_furniture/findFurnituresbyPK')(app)
require('./src/routes/routes_furniture/updateFurniture')(app)
require('./src/routes/routes_furniture/createFurniture')(app)
require('./src/routes/routes_furniture/deleteFurniture')(app)
require('./src/routes/routes_user/findAllUsers')(app)
require('./src/routes/routes_user/findUsersbyPK')(app)
require('./src/routes/routes_user/updateUser')(app)
require('./src/routes/routes_user/createUser')(app)
require('./src/routes/routes_user/deleteUser')(app)


app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))