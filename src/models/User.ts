import mongoose, { Schema } from 'mongoose';

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
});

export default mongoose.model('User', User, 'users');