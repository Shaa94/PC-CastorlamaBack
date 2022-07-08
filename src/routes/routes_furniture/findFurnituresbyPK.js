const { Furniture } = require('../../db/sequelize')

module.exports = (app) => {
  app.get('/api/furnitures/:id', (req, res) => {
    Furniture.findByPk(req.params.id)
      .then(furniture => {
        const message = 'Une annonce a bien été trouvé.'
        res.json({ message, data: furniture })
      })
  })
}
