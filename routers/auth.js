const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    var token = req.get('Authorization')
    jwt.verify(token, process.env.JWT_KEY, (err, doc) => {
        if(err){
            return res.sendStatus(403)
        }else{
            next()
        }
    })
}

module.exports = auth