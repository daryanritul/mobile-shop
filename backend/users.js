import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Ritul',
    email: 'ritul@gmail.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Suraj',
    email: 'suraj@gmail.com',
    password: bcrypt.hashSync('123456'),
  },
];

export default users;
