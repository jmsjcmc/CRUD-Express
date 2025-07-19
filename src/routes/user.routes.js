const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller");

router.post("/", usersController.user);
router.get("/", usersController.users);
router.get("/:id", usersController.getuser);
router.put("/:id", usersController.updateuser);
router.delete("/:id", usersController.deleteuser);

module.exports = router;