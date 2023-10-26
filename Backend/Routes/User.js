const User = require("../Models/User.js");
const Schedule = require("../Models/Schedule.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Route 1 : Endpoint to Create a User '/api/createuser'
router.post(
    "/createuser",
    //Valid Checks
    [body("email").isEmail(), body("password").isLength({ min: 8 })],
    async (req, res) => {
        try {
            //Return is Errors Found
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            //Check if User Already Exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                console.log("User Already Exists!!");
                return res.status(400).json({message:"User Already Exists!!"});
            }
            // Hashing
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            res.json({ message:"User Created , Now please Login!"});
        } catch (error) {
            res.status(400).send({message:"INTERNAL SERVER ERROR"});
            console.log(error);
        }
    }
);

//Route 2 : Endpoint to validate the login of a User 'api/login'
router.post(
    "/login",
    //Valid Checks
    [body("email").isEmail(), body("password").isLength({ min: 8 })],
    async (req, res) => {
        try {
            //Return if Invalid
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({message:"INVALID CREDENTIALS!!", errors: errors.array() });
            }
            //Check if the credentials are Right
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                console.log("INVALID CREDENTIALS");
                return res.status(400).send({message:"INVALID CREDENTIALS"});
            }

            //Compare the password with the user password and db password
            const passCompare = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!passCompare) {
                return res.status(400).json({
                    message: "Enter Valid Credentials!",
                });
            }
            //Signing the data with jsonwebtoken
            const data = {
                user: {
                    id: user.id,
                },
            };
            var authToken = jwt.sign(data, "^$&%*^(&)&(^%^%&%@^$#&%*$%*");
            res.send({ message:"Login Success!!" , authToken });
        } catch (error) {
            res.status(400).send({message:"INTERNAL SERVER ERROR"});
            console.log(error);
        }
    }
);

module.exports = router;
