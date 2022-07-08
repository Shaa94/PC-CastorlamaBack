const { User } = require('../../db/sequelize')

module.exports = (app) => {
  app.post('/api/users', (req, res) => {
    User.create(req.body)
      .then(user => {
        const message = `L'annonce ${req.body.name} a bien été crée.`
        res.json({ message, data: user })
      })
  })
}
