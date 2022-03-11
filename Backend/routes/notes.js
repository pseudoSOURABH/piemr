const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj={
      name:'object',
      work:'file handling',
  }
  res.json(obj);
});

module.exports = router;
