const { User } = require('../../db/sequelize')

module.exports = (app) => {
  app.get('/api/users/:id', (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        const message = 'Une annonce a bien été trouvé.'
        res.json({ message, data: furniture })
      })
  })
}