const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("get for users");
});

router.get("/:id", (req, res) => {
    res.send("get for user id");
});

module.exports = router;