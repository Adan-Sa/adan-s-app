const express = require("express");
const router = express.Router();
const login = require("./handlers/login");
const register = require("./handlers/register");

router.get("/", (req, res) => {
    res.send("Hi all");
});

router.get("/login", login.get);
router.post("/login", login.login);

router.get("/register", register.get);
router.post("/register", register.register);



module.exports = router;