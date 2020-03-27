const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const validator = require('email-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt')


const generateToken = (payload, secret, cb) => {
    jwt.sign(payload, secret, (err, token) => {
        if(err){
            console.log(err)
            return 0
        }
        cb(token);
    })
}

const verifyToken = (req, res, next) => {
    // No cookie
    console.log("hello")
    // if(req.cookies.token === undefined) return res.status(403).send({error: "Cookie not found"});
    if(req.cookies.token === undefined) return next(0);
    // Verify token
    jwt.verify(req.cookies.token, process.env.JWT_USER_KEY, (err, doc) => {
        if(err){
            console.log(err)
            // return res.status(500).send(err)
            return next(0);
        }
        res.locals.id = doc.id
        return next()
    })
}

// new user
router.post('/new', (req, res) => {
    if(req.body.firstname && req.body.lastname && req.body.email && req.body.password){
        const emailIsValid = validator.validate(req.body.email)
        if(emailIsValid){
            User.findOne({email:req.body.email}, (err, doc) => {
                // Internal server error
                if(err) return res.status(500).send({error: "database error"})
                // User with email already exists
                if(doc) return res.status(409).send({error: "email already exists"})
                // Create new User
                const user = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email
                })
                // Password Hash
                const saltRounds = 10;
                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    if(err) return res.status(500).send({error: "password hash error"})
                    user.password = hash
                    // store user in database
                    user.save((err, doc) => {
                        if(err){
                            return res.status(502)
                        }
                        const token = generateToken({id:doc._id, email:doc.email}, process.env.JWT_USER_KEY, (token) => {
                            res.status(200)
                            return res.cookie('token', token, {
                                secure: false,
                                httpOnly: true
                            }).end()
                        });
                        
                    })
                })
            })  
        }     
    }
})

router.post('/login', (req, res) => {
    // Missing field
    if (!req.body.email || !req.body.password) return res.statusStatus(422)
    // Query DB
    User.findOne({email: req.body.email}, (err, doc) => {
        if(!doc) return res.sendStatus(404)
        bcrypt.compare(req.body.password, doc.password, (err, same) => {
            if(err) return res.sendStatus(500)
            if(!same) return res.sendStatus(401)
            const payload = {id: doc._id}
            generateToken(payload, process.env.JWT_USER_KEY, (token) => {
                return res.cookie('token', token, {
                    secure: false, 
                    httpOnly: true
                }).sendStatus(200)
            })
        })
    })
})

router.get('/isauth', verifyToken, (req, res) => {
    if(res.locals.id !== undefined) return res.status(200).send({success: true});
    return res.sendStatus(500); 
    
})

router.get('/logout', (req, res) => {
    return res.clearCookie('token').status(200).send({success: true})
})

module.exports = router