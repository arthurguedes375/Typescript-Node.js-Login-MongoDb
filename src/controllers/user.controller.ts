import { Request, Response } from 'express';
import User from '../models/User';

const userController = {
    create: async (req: Request, res: Response) => {
        try {
            const { name, email } = req.body;

            if (!name || !email) return res.status(400).json({ message: "Missing data" });

            const isUserExists = await User.findOne({ email }).exec();

            if (isUserExists) return res.status(401).json({ message: "User Already Exists" })

            const newUser = await new User({
                name,
                email,
            }).save();

            return res.status(201).json(newUser);

        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },

    select: async (req: Request, res: Response) => {
        try {
            const { id: _id } = req.params;
            if (_id) {
                const user = await User.findOne({ _id }).exec();
                return res.status(200).json(user);
            } else {
                const users = await User.find().exec();
                return res.status(200).json(users);
            }
        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

export default userController;