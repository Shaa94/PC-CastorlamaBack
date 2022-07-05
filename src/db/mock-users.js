const users= [
  {
    id: 1,
    email:'stephanie@gmail.com',
    password: 'stephanie75',
    firstname:'Stephanie',
    lastname:'Dupont',
    preference:["tabouret", "lit"],
    admin: false,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 2,
    email: 'gabriel@gmail.com',
    password: 'gabriel75',
    firstname: 'Gabriel',
    lastname: 'Valentino',
    preference: ["table", "lit"],
    admin: false,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 3,
    email: 'myriam@gmail.com',
    password: 'myriam75',
    firstname: 'Myriam',
    lastname: 'Naroun',
    preference: ["chaise", "table"],
    admin: false,
    created_at: new Date(),
    edited_at: new Date(),
  },



];


module.exports = users
