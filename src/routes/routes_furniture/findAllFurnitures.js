const { Furniture } = require('../../db/sequelize')

module.exports = (app) => {
  app.get('/api/furnitures', (req, res) => {
    Furniture.findAll()
      .then(furnitures => {
        const message = 'La liste des annonces a bien été récupérée.'
        res.json({ message, data: furnitures })
      })
  })
}
