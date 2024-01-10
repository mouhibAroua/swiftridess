const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'my_secret_key_2023$#@!';
const user =require('../models/users')


function generateToken(user) {
    const expire = 60 * 60 * 48;//two day
    return jwt.sign({ user }, secretKey, { expiresIn: expire });
}

const signUpUser = async (req, res) => {
    const { fullName,image_user,phoneNumber,longtitude,laltitude, email, passwordUser,role } = req.body;
    try {
        const hashedpasswordUser = await bcrypt.hash(passwordUser, 10);

        const newUser = {
            fullName,
            image_user,
            phoneNumber,
            longtitude,
            laltitude,
            email,
            role,
            passwordUser: hashedpasswordUser,
        };
        await user.create(newUser);
        const token = generateToken({ user: newUser });

        res.status(201).json({ message: 'user created successfully', token });
    } catch (error) {
        console.error('Error during user signup:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};