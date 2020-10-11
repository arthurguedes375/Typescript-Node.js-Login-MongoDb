import mongoose, { Schema } from 'mongoose';

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
});

export default mongoose.model('User', User, 'users');