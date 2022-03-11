const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a user using :POST '/api/auth/createuser'  no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 1 }),
    body("password", "password must be atleast 8 characters long ").isLength({
      min: 8,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //if errors exist,return bad request and erros too
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry,a user with this email already exist" });
      }

      //create a user
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
  }
); 

module.exports = router;
