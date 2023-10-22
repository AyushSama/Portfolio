const Schedule = require("../Models/Schedule.js");
const User = require("../Models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const fetchuser = require("../Middleware/fetchUser.js");
const { body, validationResult } = require("express-validator");

router.post(
    "/addadmin",
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
                console.log("User Already Exists");
                return res.status(400).send({ message: "User Already Exists" });
            }
            // Hashing
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });

            //Signing the data with jsonwebtoken
            const data = {
                user: {
                    id: user.id,
                    admin: true,
                },
            };
            var authToken = jwt.sign(data, "^$&%*^(&)&(^%^%&%@^$#&%*$%*");
            res.send({ authToken });
        } catch (error) {
            res.status(400).send({ message: "INTERNAL SERVER ERROR" });
            console.log(error);
        }
    }
);

router.post(
    "/addschedule",
    fetchuser,
    //Valid Checks
    [
        body("title").isLength({ min: 2 }),
        body("description").isLength({ min: 2 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const schedule = await Schedule.create({
                user: req.user.id,
                title: req.body.title,
                description: req.body.description,
                venue: req.body.venue,
                date: req.body.date,
            });
            res.send({ message: "Schedule Updated!!!", schedule });
        } catch (error) {
            res.status(400).send({ message: "INTERNAL SERVER ERROR" });
            console.log(error);
        }
    }
);

router.post("/updateschedule/:id", fetchuser, async (req, res) => {
    try {
        const {title,description,venue,date} = req.body;
        let newSchedule = {}
        if(title){
            newSchedule.title  = title;
        }
        if(description){
            newSchedule.description  = description;
        }
        if(venue){
            newSchedule.venue  = venue;
        }
        if(date){
            newSchedule.date  = date;
        }
        let schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).send({ message: "Schedule Does Not Exist!" });
        }
        if (schedule.user.toString() != req.user.id) {
            return res.status(407).send({ message: "Access Denied!!" });
        }
        schedule = await Schedule.findByIdAndUpdate(req.params.id,
            { $set: newSchedule },
            { new: true })
        res.json({message:"Schedule Updated!!",schedule});
    } catch (error) {
        res.status(400).send({ message: "INTERNAL SERVER ERROR" });
        console.log(error);
    }
});

router.get("/deleteschedule/:id", fetchuser, async (req, res) => {
    try {
        let schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res
                .status(404)
                .send({ message: "Schedule Does Not Exist!" });
        }
        if (schedule.user.toString() != req.user.id) {
            return res.status(407).send({ message: "Access Denied!!" });
        }
        schedule = await Schedule.findByIdAndDelete(req.params.id);
        res.json({ message: "Note has been deleted", schedule });
    } catch (error) {
        res.status(400).send({ message: "INTERNAL SERVER ERROR" });
        console.log(error);
    }
});

router.get("/schedule", fetchuser, async (req, res) => {
    try {
        const schedules = await Schedule.find({ user: req.user.id });
        res.send(schedules);
    } catch (error) {
        res.status(400).send({ message: "INTERNAL SERVER ERROR" });
        console.log(error);
    }
});

module.exports = router;
