import React, { useEffect, useState } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import ViewTechSkills from "./ViewTechSkills";
import ViewOtherSkills from "./ViewOtherSkills";
import ViewSoftSkills from "./ViewSoftSkills";

function ViewSkills() {
  return (
    <>
      <Paper
        elevation={10}
        style={{ marginTop: "40px", marginLeft: "257px", width: "60%" }}
      >
        <Typography
          style={{ paddingTop: "30px" }}
          align="center"
          variant="h4"
          color="primary"
        >
          SKILLSET
        </Typography>
        <Grid
          xs={12}
          container
          spacing={6}
          direction="row"
          wrap="wrap"
          style={{ marginLeft: "30px", marginTop: "10px" }}
        >
          <Grid item>
            <ViewTechSkills />
          </Grid>
          <Grid item>
            <ViewSoftSkills />
          </Grid>
          <Grid item>
            <ViewOtherSkills />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ViewSkills;
