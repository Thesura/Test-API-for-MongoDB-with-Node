import users from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();

router.get('/users/get', users.getAll);

router.post('/users/post', users.post);

export default router;