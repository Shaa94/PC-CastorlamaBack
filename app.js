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
require('./src/routes/findAllFurnitures')(app)
require('./src/routes/findFurnituresbyPK')(app)
require('./src/routes/updateFurniture')(app)
require('./src/routes/createFurniture')(app)
require('./src/routes/deleteFurniture')(app)

app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))