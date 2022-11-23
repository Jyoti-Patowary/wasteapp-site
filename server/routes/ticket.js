const express = require('express')
const Ticket = require('../models/ticket.model')
const router = new express.Router()

router.post('/ticket', async (req, res) => {
    const ticket = new Ticket(req.body)

    try {
        await ticket.save()
        res.status(201).send(ticket)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/ticket', async (req, res) => {
    try {
        const ticket = await Ticket.find({})
        res.send(ticket)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/ticket/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const ticket = await Ticket.findById(_id)

        if (!ticket) {
            return res.status(404).send()
        }

        res.send(ticket)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/ticket/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstname', 'lastname', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!ticket) {
            return res.status(404).send()
        }

        res.send(ticket)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/ticket/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id)

        if (!ticket) {
            return res.status(404).send()
        }

        res.send(ticket)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router