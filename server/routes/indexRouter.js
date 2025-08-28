import express from 'express';
import { getAllMessages } from '../controllers/indexController.js';

// Initialize Router
export const indexRouter = express.Router();

indexRouter.get("/{index.html}", getAllMessages);
