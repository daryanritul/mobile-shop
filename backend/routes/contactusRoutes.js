import express from 'express';
import Users from '../models/users.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import Contact from '../models/contactus.js';

const contactusRoutes = express.Router();

contactusRoutes.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newContact = new Contact({
      subject: req.body.subject,
      body: req.body.body,
    });
    await newContact.save();
  })
);

export default contactusRoutes;
