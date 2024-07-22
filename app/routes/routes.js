import users from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();

router.get('/users/get', users.getAll);

router.post('/users/post', users.post);

router.post('/users/getbyid', users.getById);

router.post('/users/getbyname', users.getByName);

router.post('/users/getbyemail', users.getByEmail);

export default router;