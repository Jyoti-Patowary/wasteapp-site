const express = require('express')
const Worker = require('../models/worker.model')
const router = new express.Router()

router.post('/worker', async (req, res) => {
    const worker = new Worker(req.body)

    try {
        await worker.save()
        res.status(201).send(worker)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/worker', async (req, res) => {
    try {
        const worker = await Worker.find({})
        res.send(worker)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/worker/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const worker = await Worker.findById(_id)

        if (!worker) {
            return res.status(404).send()
        }

        res.send(worker)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/worker/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstname', 'lastname', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!worker) {
            return res.status(404).send()
        }

        res.send(worker)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/worker/:id', async (req, res) => {
    try {
        const worker = await Worker.findByIdAndDelete(req.params.id)

        if (!worker) {
            return res.status(404).send()
        }

        res.send(worker)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router