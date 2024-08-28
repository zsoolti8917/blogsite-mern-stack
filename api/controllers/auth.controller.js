import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || !username.trim() || !email.trim() || !password.trim()) {
        return res.status(400).json({message: 'Please fill in all fields'});
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword
    });
    try {
        await newUser.save();
        res.json({message: 'User created successfully'});

    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }


    
};