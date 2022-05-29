import express from "express";
import api_n from '../mockups/api_n.js';

const user_router = express.Router();
// const bisection = ('../mockups/bisection.json')

// user_router.post('/newtons', (req,res) => NewtonsDividedDifferences(req,res));

user_router.get('/api_n', (req, res) => res.json(api_n))

export default user_router