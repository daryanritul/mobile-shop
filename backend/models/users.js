import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
});

const Users = mongoose.model('Users', userSchema);
export default Users;
