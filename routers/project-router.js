const express = require('express')
const projects = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', (req, res) => {
    projects.get()
    .then(prj => {
        res.status(200).json({prj})
    })
    .catch(error => {
        res.status(500).json({error})
    })
})

router.get('/:id', (req, res) => {
    projects.get(req.params.id)
    .then(ids => {
        res.status(200).json({ids})
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

// GET PROJECT ACTIONS
router.get('/:id', (req, res) => {
    projects.getProjectActions(req.params.id)
    .then(ids => {
        res.status(200).json({ids})
    })
    .catch(error => {
        res.status(500).json({error})
    })
})

router.post('/', (req, res) => {
    projects.insert(req.body)
    .then(add => {
        res.status(201).json({add})
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.put('/:id', (req, res) => {
    projects.update(req.params.id, req.body)
    .then(change => {
        res.status(200).json({ change })
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.delete('/:id', (req, res) => {
    projects.remove(req.params.id)
    .then(del => {
        res.status(200).json({ message: `Project ${req.params.id} has been removed!` })
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


module.exports = router