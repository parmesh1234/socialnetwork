const express = require("express");

const router = express.Router();

// @route    GET api/user/test
// @desc     tests user route
// @access   Public
router.get("/test", (req, res) => {
  res.json({ message: "users works" });
});

module.exports = router;
