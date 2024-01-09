const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const company = require('../models/company');
const secretKey = 'my_secret_key_2023$#@!';

function generateToken(company) {
    const expire = 60 * 60 * 48;//two day
    return jwt.sign({ company }, secretKey, { expiresIn: expire });
}

const signUpCompany = async (req, res) => {
    const { companyName,ownerName,phoneNumber,location,longtitude,laltitude, emailCompany, passwordCompany } = req.body;
    try {
        const hashedpasswordCompany = await bcrypt.hash(passwordCompany, 10);

        const newCompany = {
            companyName,
            ownerName,
            phoneNumber,
            location,
            verification,
            longtitude,
            laltitude,
            emailCompany,
            passwordCompany: hashedpasswordCompany,
        };
        await company.create(newCompany);
        const token = generateToken({ company: newCompany });

        res.status(201).json({ message: 'company created successfully', token });
    } catch (error) {
        console.error('Error during company signup:', error);
        res.status(500).json({ error: 'Failed to create company' });
    }
};

const loginCompany = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await company.findOne({ where: { emailCompany: email } });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.passwordCompany);
            if (isPasswordValid) {
                const token = generateToken({ user });
                return res.status(200).json({ message: 'Login successful', token,user });
            } else {
                return res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            return res.status(404).json({ error: 'company not found' });
        }
    } catch (err) {
        console.error('Internal error during login:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { signUpCompany, loginCompany };
