// routes/teamMembers.js

const express = require("express");
const router = express.Router();
const TeamMember = require("../models/teamMember");

// GET all team members
router.get("/team_members", async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new team member
router.post("/team_members", async (req, res) => {
  try {
    const newTeamMember = new TeamMember(req.body);
    await newTeamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
