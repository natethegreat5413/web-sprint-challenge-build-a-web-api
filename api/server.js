const express = require('express')
const projectRouter = require('../routers/project-router')
const actionRouter = require('../routers/action-router')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/action', actionRouter)
server.use('/api/project', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h2>node-API-Sprint</h2>`)
})

module.exports = server