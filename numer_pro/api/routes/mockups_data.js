import express from "express";
import bisection from '../mockups/bisection.js';

const user_router = express.Router();
// const bisection = ('../mockups/bisection.json')

// user_router.post('/newtons', (req,res) => NewtonsDividedDifferences(req,res));

user_router.get('/bisection', (req, res) => res.json(bisection))

export default user_router