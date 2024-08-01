"use strict";
import express from "express";
import accessController from "../../controllers/access.controller.js";
import { asyncHandler } from "../../auth/checkAuth.js";
const router = express.Router();

// sign up
router.post("/shop/signup", accessController.signUp);

export default router;
