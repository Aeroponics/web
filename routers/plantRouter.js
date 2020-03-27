const router = require('express').Router()
const Plant = require('../models/Plant')
const auth = require('./auth')

// GET 
router.get('/:id', (req, res) => {
    Plant.findOne({_id: req.params.id}, (err, doc) => {
        if(err){
            res.send({error: true})
        }
        if(!doc){
            res.send({content:"none"})
        }
        res.send(doc)
    })
})
// POST
router.post('/add', auth, (req, res) => {
    const doc = new Plant({
        name: req.body.name,
        scientific: req.body.scientific,
        logs: []
    })
    doc.save((err, doc) => {
        if(err){
            res.send(new Error(err)).status(401)
        }
        res.send(doc).status(200)
    })
})
// DELETE
router.delete('/delete/:id', auth, (req, res) => {
    Plant.deleteOne({_id:req.params.id}, (err) => {
        if
            (err) res.sendStatus(401);
        else 
            res.sendStatus(200)
    })
})
    
module.exports = router