const firebase = require("../db");

const database = firebase.firestore();

const updatePersonalInfo = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("PersonalDetails")
      .doc(id)
      .update(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const updateTeamDetails = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("TeamDetails")
      .doc(id)
      .update(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const updateTechSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  // console.log(data);
  const idd = data.idd;
  const details = {
    skill_name: data.skill_name,
    rate: data.rate,
    fav: data.fav,
  };

  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("TechSkills")
      .doc(idd)
      .update(details)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
    console.log(details);

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const updateOtherSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  // console.log(data);
  const idd = data.idd;
  const details = {
    skill_name: data.skill_name,
    rate: data.rate,
    fav: data.fav,
  };

  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("otherSkills")
      .doc(idd)
      .update(details)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
    console.log(details);

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const updateSoftSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  // console.log(data);
  const idd = data.idd;
  const details = {
    skill_name: data.skill_name,
    rate: data.rate,
    fav: data.fav,
  };
  console.log(details);
  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("softSkills")
      .doc(idd)
      .update(details)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
    console.log(details);

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

module.exports = {
  updatePersonalInfo,
  updateSoftSkills,
  updateOtherSkills,
  updateTeamDetails,
  updateTechSkills,
};
