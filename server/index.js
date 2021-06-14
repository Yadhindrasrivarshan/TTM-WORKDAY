const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const firebase = require("./db");
const employeeDetails = require("./routes/Details");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const database = firebase.firestore();

app.get("/", async (req, res) => {
  const post = {
    name: "Srivarshan",
  };
  const data = await database
    .collection("PersonalDetails")
    .doc("I6lteP9RDUf1pavPz1aPijpR48I3")
    .get();
  //  .then((s) => console.log(s.data()));
  res.status(200).json(data.data());
});

app.use("/details", employeeDetails.routes);

app.listen(config.port, () => {
  console.log("Server is running");
});
