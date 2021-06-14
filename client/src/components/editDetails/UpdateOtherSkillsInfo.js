import React, { useState } from "react";
import { database, app } from "../../mockfirebase";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Favorite from "@material-ui/icons/Favorite";
import axios from "axios";
function UpdateOtherSkillsInfo(props) {
  console.log("opened update dialog");
  const t = props.t; //line 1
  console.log(props.open);
  console.log("in update", t);
  const [updateotherskillsinfo, setUpdateOtherSkillsInfo] = useState(t);

  const handleOnChange = (e) => {
    setUpdateOtherSkillsInfo({
      ...updateotherskillsinfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    //setOpen(false);
    props.onChange(false);
  };
  const update = async () => {
    // database
    //   .collection("Skillsets")
    //   .doc(app.auth().currentUser.uid)
    //   .collection("OtherSkills")
    //   .doc(t.id)
    //   .update({
    //     skill_name: updateotherskillsinfo.skill_name,
    //     rate: updateotherskillsinfo.rate,
    //     fav: updateotherskillsinfo.fav,
    //   })
    //   .then(() => {
    //     //setOpen(false);
    //     props.onChange(false);
    //     alert("updated");
    //     props.getothernicalinfo();
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    const details = {
      skill_name: updateotherskillsinfo.skill_name,
      rate: updateotherskillsinfo.rate,
      fav: updateotherskillsinfo.fav,
      idd: t.id,
    };
    const uid = app.auth().currentUser.uid;
    await axios
      .put(`http://localhost:5000/details/OtherSkills/${uid}`, details)
      .then((res) => {
        //window.location.reload(false);
        props.onChange(false);
        alert("updated");
        window.location.reload(false);
        props.getsoftskillinfo();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {/* {open && (<>)} */}

      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update OtherSkillsInfo</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter the update values</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="skill_name"
            fullWidth
            value={updateotherskillsinfo.skill_name}
            onChange={handleOnChange}
          />
          <Rating
            name="half-rating-read"
            precision={0.5}
            value={updateotherskillsinfo.rate}
            // className={classes.corner}
            name="rate"
            onChange={handleOnChange}
          />
          <Favorite
            color="secondary"
            value={updateotherskillsinfo.fav}
            name="fav"
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={update} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateOtherSkillsInfo;
