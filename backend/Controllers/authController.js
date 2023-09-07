import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';

// register controller
export const register = async(req, res) => {

    const {
        email,
        password,
        name,
        role,
        photo,
        gender
    } = req.body

    try {
        let user = null

        // check the user role
        if (role === 'patient'){
            user = await User.findOne({email})
        }
        else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }

        // check if user exist
        if (user){
            return res.status(400).json({message: 'User already exist'})
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient'){
            user = new User ({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        if (role === 'doctor'){
            user = new Doctor ({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        await user.save()
        res.status(200).json({success:true, message:'User successfully created'});

    } catch (error) {
        res.status(500).json({success:false, message:'You Got Error, Try Again'});
    }
}

// login controller
export const login = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}