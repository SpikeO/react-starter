import mongoose, { Schema } from 'mongoose';

mongoose.connect('mongodb://localhost/test1');

const UserSchema = new Schema({
  name: String
});

export const UserModel = mongoose.model('User', UserSchema);
