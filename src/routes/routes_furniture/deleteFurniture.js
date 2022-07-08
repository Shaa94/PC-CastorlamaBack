const { Furniture } = require('../../db/sequelize')

module.exports = (app) => {
  app.delete('/api/furnitures/:id', (req, res) => {
    Furniture.findByPk(req.params.id).then(furniture => {
      const furnitureDeleted = furniture;
      Furniture.destroy({
        where: { id: furniture.id }
      })
        .then(_ => {
          const message = `L'annonce avec l'identifiant n°${furnitureDeleted.id} a bien été supprimé.`
          res.json({ message, data: furnitureDeleted })
        })
    })
  })
}
