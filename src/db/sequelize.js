const { Sequelize, DataTypes } = require('sequelize')
const FurnitureModel = require('../models/furniture')
const furnitures = require('./mock-furniture')
const users = require('./mock-users')
const UserModel = require('../models/user')


const sequelize = new Sequelize('vente_de_meubles', 'root', 'root',
  {
    host: 'localhost', // Mettre localhost ou préciser en fonction de la configuration de votre pc '172.29.16.1'
    port: 8889, //Voir n° de port de votre bdd en local. 3306 LN 8889
    dialect: 'mariadb',
    dialectOptions: {
      allowPublicKeyRetrieval: true,
      // timezone: 'Etc/’GMT-2',
    },
    logging: false
  })

sequelize.authenticate()
  .then(_ => console.log('La connexion à la base de données a bien été établie.'))
  .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))


const Furniture = FurnitureModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

// User.hasMany(Furniture, {foreignKey: 'userId'})
// User.belongsTo(Furniture, {foreignKey: 'id'})

// const [results, metadata] = await sequelize.query(
//   "SELECT * FROM furnitures JOIN users ON `furnitures`.`userId` = `users`.`id`"
// );

console.log(JSON.stringify(results, null, 2));

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
        image_url: furniture.image_url,
        userId: furniture.userId

      }).then(furniture => console.log(furniture.toJSON()))
    })
    users.map(user => {
      User.create({
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        preference: user.preference,
        admin: user.admin,
      }).then(user => console.log(user.toJSON()))
    })
    
    console.log('La base de donnée a bien été initialisée !')
  })
}


module.exports = {
  initDb, Furniture, User
}
