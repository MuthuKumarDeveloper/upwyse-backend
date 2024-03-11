// models/teamMember.js

const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  jobTitle: String,
  totalExperience: Number,
  linkedinProfile: String,
  resume: String,
  employmentType: String,
});

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;
