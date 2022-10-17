const express = require('express');
const HelloController = require("../controllers/HelloController")
const router = express.Router();


router.get("/hello-get", HelloController.helloget)
router.post("/hello-post", HelloController.hellopost)

module.exports = router;