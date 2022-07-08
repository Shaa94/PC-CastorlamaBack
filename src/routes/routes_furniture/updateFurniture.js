const { Furniture } = require('../../db/sequelize')

module.exports = (app) => {
  app.put('/api/furnitures/:id', (req, res) => {
    const id = req.params.id
    Furniture.update(req.body, {
      where: { id: id }
    })
      .then(_ => {
        Furniture.findByPk(id).then(furniture => {
          const message = `Le pokémon ${furniture.name} a bien été modifié.`
          res.json({ message, data: furniture })
        })
      })
  })
}
