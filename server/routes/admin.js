const express = require('express')
const Admin = require('../models/admin.model')
const router = new express.Router()

router.post('/admin', async (req, res) => {
    const admin = new Admin(req.body)

    try {
        await admin.save()
        res.status(201).send(admin)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/admin', async (req, res) => {
    try {
        const admin = await Admin.find({})
        res.send(admin)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/admin/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const admin = await Admin.findById(_id)

        if (!admin) {
            return res.status(404).send()
        }

        res.send(admin)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/admin/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstname', 'lastname', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!admin) {
            return res.status(404).send()
        }

        res.send(admin)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/admin/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id)

        if (!admin) {
            return res.status(404).send()
        }

        res.send(admin)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router