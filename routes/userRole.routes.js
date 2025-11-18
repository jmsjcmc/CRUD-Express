import express from "express";
import * as userRoleController from "../controllers/userRole.controller.js"

const router = express.Router();

router.post('/', userRoleController.assignRole);
router.get('/:userID', userRoleController.getUserRoles);

export default router;