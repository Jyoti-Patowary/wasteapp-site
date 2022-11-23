const express = require('express')
const Notification = require('../models/notification.model')
const router = new express.Router()

router.post('/notification', async (req, res) => {
    const notification = new Notification(req.body)

    try {
        await notification.save()
        res.status(201).send(notification)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/notification', async (req, res) => {
    try {
        const notification = await Notification.find({})
        res.send(notification)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/notification/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const notification = await Notification.findById(_id)

        if (!notification) {
            return res.status(404).send()
        }

        res.send(notification)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/notification/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstname', 'lastname', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!notification) {
            return res.status(404).send()
        }

        res.send(notification)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/notification/:id', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id)

        if (!notification) {
            return res.status(404).send()
        }

        res.send(notification)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router