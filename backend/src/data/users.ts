import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'amit',
    email: 'amit@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

]

export default users
