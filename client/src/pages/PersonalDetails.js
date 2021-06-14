import React, { useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  Button,
  RadioGroup,
  Radio,
  FormLabel,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { database, app } from "../mockfirebase";
import axios from "axios";
function PersonalDetails() {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dateOfBirth: "",
    gender: "male",
    qualification: "",
    dateOfJoining: "",
    mobile: "",
    address: "",
  });
  const handleOnChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    const uid = app.auth().currentUser.uid;
    await axios
      .post(`http://localhost:5000/details/PersonalDetails/${uid}`, details)
      .then((res) => {
        console.log(res);
        alert("Details submitted!");
      })
      .catch((e) => console.log(e));
    document.getElementById("form").reset();
  };

  return (
    <Container size="sm">
      <Typography variant="h5" align="center">
        Personal Details
      </Typography>
      <form Validate onSubmit={handleSubmit} id="form">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="firstname"
                value={details.firstname}
                type="text"
                label="First Name"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="lastname"
                value={details.lastname}
                type="text"
                label="Last Name"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="email"
                fullWidth
                required
                value={details.email}
                type="email"
                label="Email"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="dateOfBirth"
                value={details.dateOfBirth}
                label="Date of Birth"
                onChange={handleOnChange}
                required
                type="date"
                format="MM/dd/yyyy"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl required>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  required
                  name="gender"
                  value={details.gender}
                  onChange={handleOnChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="qualification"
                fullWidth
                required
                value={details.qualification}
                label="Higher Eduactional Qualification"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="dateOfJoining"
                value={details.dateOfJoining}
                label="Date of Joining"
                onChange={handleOnChange}
                required
                type="date"
                format="MM/dd/yyyy"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="mobile"
                value={details.mobile}
                label="Mobile"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="address"
                fullWidth
                required
                label="Address"
                value={details.address}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Container>
  );
}
export default PersonalDetails;
