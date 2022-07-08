const { User } = require('../../db/sequelize')

module.exports = (app) => {
  app.put('/api/users/:id', (req, res) => {
    const id = req.params.id
    User.update(req.body, {
      where: { id: id }
    })
      .then(_ => {
        User.findByPk(id).then(furniture => {
          const message = `Le pokémon ${user.name} a bien été modifié.`
          res.json({ message, data: user })
        })
      })
  })
}
