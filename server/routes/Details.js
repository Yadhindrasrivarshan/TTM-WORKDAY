const express = require("express");

const {
  getPersonalInfo,
  getTeamDetails,
  getOtherSkills,
  getTechSkills,
  getSoftSkills,
} = require("../controllers/getinfo");

const {
  addPersonalInfo,
  addOtherSkills,
  addTeamDetails,
  addTechSkills,
  addSoftSkills,
} = require("../controllers/addinfo");
const {
  updatePersonalInfo,
  updateSoftSkills,
  updateOtherSkills,
  updateTeamDetails,
  updateTechSkills,
} = require("../controllers/updateinfo");

const router = express.Router();

router.get("/PersonalDetails/:id", getPersonalInfo);

router.get("/TeamDetails/:id", getTeamDetails);

router.get("/TechnicalSkills/:id", getTechSkills);

router.get("/SoftSkills/:id", getSoftSkills);

router.get("/OtherSkills/:id", getOtherSkills);

router.post("/PersonalDetails/:id", addPersonalInfo);

router.post("/TeamDetails/:id", addTeamDetails);

router.post("/TechnicalSkills/:id", addTechSkills);

router.post("/SoftSkills/:id", addSoftSkills);

router.post("/OtherSkills/:id", addOtherSkills);

router.put("/PersonalDetails/:id", updatePersonalInfo);

router.put("/TeamDetails/:id", updateTeamDetails);

router.put("/TechnicalSkills/:id", updateTechSkills);

router.put("/SoftSkills/:id", updateSoftSkills);

router.put("/OtherSkills/:id", updateOtherSkills);

module.exports = {
  routes: router,
};
