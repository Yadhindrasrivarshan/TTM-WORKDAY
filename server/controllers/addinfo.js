const firebase = require("../db");

const database = firebase.firestore();

const addPersonalInfo = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("PersonalDetails")
      .doc(id)
      .set(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const addTeamDetails = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("TeamDetails")
      .doc(id)
      .set(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const addTechSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("TechSkills")
      .add(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const addOtherSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("otherSkills")
      .add(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

const addSoftSkills = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  try {
    await database
      .collection("Skillsets")
      .doc(id)
      .collection("softSkills")
      .add(data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    res.status(200).json({ message: "Great Response dude" });
  } catch (e) {
    res.status(400).json({ message: "can't receive the data from client" });
  }
};

module.exports = {
  addPersonalInfo,
  addOtherSkills,
  addTeamDetails,
  addTechSkills,
  addSoftSkills,
};
