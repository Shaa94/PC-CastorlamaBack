const users= [
  {
    id: 1,
    email:'test@gmail.com',
    password: 'test',
    firstname:'Test',
    lastname:'Test',
    preference:["tabouret", "lit"],
    admin: false,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 2,
    email: 'test2@gmail.com',
    password: 'test2',
    firstname: 'Test2',
    lastname: 'Test2',
    preference: ["chaise", "lit"],
    admin: false,
    created_at: new Date(),
    edited_at: new Date(),
  },


];


module.exports = users
