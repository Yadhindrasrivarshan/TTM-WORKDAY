const firebase = require("../db");

const database = firebase.firestore();

const getPersonalInfo = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const data = await database.collection("PersonalDetails").doc(uid).get();
    //  .then((s) => console.log(s.data()));
    res.status(200).json(data.data());
  } catch (err) {
    res.status(400).json({ message: "Cant get ur request" });
  }
};

const getTeamDetails = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const data = await database.collection("TeamDetails").doc(uid).get();
    //  .then((s) => console.log(s.data()));
    res.status(200).json(data.data());
  } catch (err) {
    res.status(400).json({ message: "Cant get ur request" });
  }
};

const getTechSkills = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const ans = [];
    const data1 = await database
      .collection("Skillsets")
      .doc(uid)
      .collection("TechSkills")
      .get()
      .then((querySnapshot) => {
        const ans1 = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          ans1.push({ id: doc.id, ...data });
        });
        ans.push(ans1);
      });
    // console.log(ans);
    //console.log(ans[0]);
    res.status(200).json(ans[0]);
  } catch (err) {
    res.status(400).json({ message: "Cant get ur request" });
  }
};

const getOtherSkills = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const ans = [];
    const data = await database
      .collection("Skillsets")
      .doc(uid)
      .collection("otherSkills")
      .get()
      .then((querySnapshot) => {
        const ans1 = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          ans1.push({ id: doc.id, ...data });
        });
        ans.push(ans1);
      });
    // console.log(ans);

    res.status(200).json(ans[0]);
  } catch (err) {
    res.status(400).json({ message: "Cant get ur request" });
  }
};

const getSoftSkills = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const ans = [];
    const data = await database
      .collection("Skillsets")
      .doc(uid)
      .collection("softSkills")
      .get()
      .then((querySnapshot) => {
        const ans1 = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          ans1.push({ id: doc.id, ...data });
        });
        ans.push(ans1);
      });

    res.status(200).json(ans[0]);
  } catch (err) {
    res.status(400).json({ message: "Cant get ur request" });
  }
};

module.exports = {
  getPersonalInfo,
  getTeamDetails,
  getOtherSkills,
  getTechSkills,
  getSoftSkills,
};
