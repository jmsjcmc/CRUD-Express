import express from "express";
import * as roleController from "../controllers/role.controller.js"

const router = express.Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getRoles);

export default router;