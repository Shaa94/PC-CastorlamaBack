const express = require('express')

const { Sequelize } = require('sequelize');

let furnitures = require('./mocks/mock-furnitures.js')
let users = require('./mocks/mock-users.js')
let commands = require('./mocks/mock-commands.js')
let favoris = require('./mocks/mock-favoris.js')

const { success } = require('./helper.js')
const { getUniqueId } = require('./helper.js')
var bodyParser = require('body-parser') // Middleware pour transformer les requêtes reçues via Express

const app = express()
const port = 3000


const sequelize = new Sequelize('vente-de-meubles', 'root', 'root',
 {
  host: 'localhost',
  port: 8889,
  dialect: 'mariadb',
  dialectOptions: {
    allowPublicKeyRetrieval: true,
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

sequelize.authenticate()
  .then(_ => console.log('La connexion à la base de données a bien été établie.'))
  .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

app.use(bodyParser.json()) //Appel bodyParser pour transformer les requêtes reçues par Express en json


app.get('/', (req, res) => res.send('Hello, Express ! 👋'))

//list of  all furnitures
app.get('/api/furnitures', (req, res) => {
  const message = "Voici la liste des meubles enregistrés"
  res.json(success(message, furnitures))
})

//Detail of furniture.
app.get('/api/furnitures/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const furniture = furnitures.find(furniture => furniture.id === id)
  const message = "Un meuble a bien été trouvé."
  res.json(success(message, furniture))
})

//Create new furniture.
app.post('/api/furnitures', (req, res) => {
  const id = getUniqueId(furnitures)
  const furnitureCreated = {...{ id: id, ...req.body, created_at: new Date(), edited_at: new Date() } }
  furnitures.push(furnitureCreated)
  const message = `L'annonce de ${furnitureCreated.name} a bien été crée.`
  res.json(success(message, furnitureCreated))
})

//Edited a furniture.
app.put('/api/furnitures/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let createdAt
  furnitures.forEach(furniture => {
    if (furniture.id === id ) {
      createdAt = furniture.created_at
    }
  });
  const furnitureUpdated = { id: id, ...req.body, created_at: createdAt, edited_at: new Date() }
  furnitures = furnitures.map(furniture => {
    return furniture.id === id ? furnitureUpdated : furniture
  })
  const message = `L'annonce ${furnitureUpdated.name} a bien été modifiée`
  res.json(success(message, furnitureUpdated))
})

//Delete a furniture
app.delete('/api/furnitures/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const furnitureDeleted = furnitures.find(furniture => furniture.id === id)
  furnitures = furnitures.filter(furniture => furniture.id !== id)
  const message = `L'annonce'${furnitureDeleted.name} a bien été supprimée`
  res.json(success(message, furnitureDeleted))
})

app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))
