import { Schema, model } from "mongoose";
import { iUser } from "./user.interface";

const schema = new Schema<iUser>({
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

const User = model<iUser>('User', schema);

export default User;