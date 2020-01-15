const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./api/authRoutes/authRouter')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
// server.use('/api/profile', authenticate, profileRouter);
// server.use('/api/recipes', recipeRouter);
// server.use('/api/steps', stepsRouter);
// server.use('/api/ingridents', ingredientRouter);
server.get('/', (req, res) => {
    console.log("its alive")
    res.status(200).json({api: "is alive"})
})
module.exports = server;
