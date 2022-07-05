const { Sequelize, DataTypes } = require('sequelize')
const FurnitureModel = require('../models/furniture')
const furnitures = require('./mock-furniture')

const sequelize = new Sequelize('vente_de_meubles', 'root', '',
  {
    host: '172.29.16.1', // Mettre localhost ou préciser en fonction de la configuration de votre pc
    port: 3306, //Voir n° de port de votre bdd en local.
    dialect: 'mariadb',
    dialectOptions: {
      //allowPublicKeyRetrieval: true,
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })

sequelize.authenticate()
  .then(_ => console.log('La connexion à la base de données a bien été établie.'))
  .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))


const Furniture = FurnitureModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({ force: true }).then(_ => {
    furnitures.map(furniture => {
      Furniture.create({
        name: furniture.name,
        type: furniture.type,
        price: furniture.price,
        material: furniture.material,
        description: furniture.description,
        color: furniture.color,
        size: furniture.size,
        accepted: furniture.accepted,
        image_url: furniture.image_url
      }).then(furniture => console.log(furniture.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = {
  initDb, Furniture
}
