const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async (req,res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id) },
        include: {playlists:true},
    });
    res.json(user);
});

module.exports =router;