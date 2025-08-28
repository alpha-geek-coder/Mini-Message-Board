import express from 'express';
import { createMessage, getNewMessage, getMessage } from '../controllers/messageController.js';
// Initialize Router
export const messageRouter = express.Router();

messageRouter.get('/new', getNewMessage);
messageRouter.post("/new", createMessage);
messageRouter.get('/:index', getMessage);