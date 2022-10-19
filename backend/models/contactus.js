import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
  subject: { type: String, unique: true },
  body: { type: String, unique: true, require: true },
});

const Contact = mongoose.model('Contact', contactUsSchema);
export default Contact;
