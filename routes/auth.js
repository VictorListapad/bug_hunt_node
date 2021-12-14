const express = require("express");
const router = express.Router();

const { loginUser, signUpUser } = require("../controllers/userController");
const { validateJwt, revalidateJwt } = require("../helpers/processJwt");

router.post("/login", loginUser);
router.post("/signup", signUpUser)
router.post("/renew", validateJwt, revalidateJwt);

module.exports = router;