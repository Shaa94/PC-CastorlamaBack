const { Furniture } = require('../../db/sequelize')

module.exports = (app) => {
  app.post('/api/furnitures', (req, res) => {
    Furniture.create(req.body)
      .then(furniture => {
        const message = `L'annonce ${req.body.name} a bien été crée.`
        res.json({ message, data: furniture })
      })
  })
}
