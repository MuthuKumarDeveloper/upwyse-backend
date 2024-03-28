// routes/contact.js

const express = require('express');
const router = express.Router();
const Contact = require('../models/connect');

// GET all contacts
router.get('/connects', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new contact
router.post('/connects', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// delete a contact
router.delete('/connects/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        await contact.remove();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
