const express = require('express')
const actions = require('../data/helpers/actionModel')
const dbConfig = require('../data/dbConfig')

const router = express.Router()


// GET LIST OF ACTIONS
router.get('/', (req, res) => {
    actions.get()
    .then(action => {
        res.status(200).json({action})
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

// GET ACTION BY ID
router.get('/:id', (req, res) => {
    actions.get(req.params.id)
    .then(ids => {
        res.status(200).json({ids})
    })
    .catch(error => {
        res.status(500).json({error})
    })
})

// CREATE A NEW ACTION
router.post('/', (req, res) => {
    actions.insert(req.body)
    .then(action => {
        res.status(201).json({action})
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

// EDIT ACTIONS
router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    actions.update(id, changes)
    .then(change => {
        res.status(200).json({change})
    })
    .catch(error => {
        res.status(500).json({error})
    })
})

// REMOVE ACTIONS
router.delete('/:id', (req, res) => {
    actions.remove(req.params.id)
    .then(del => {
        res.status(200).json({ message: `action ${req.params.id} has been removed.` })
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


module.exports = router