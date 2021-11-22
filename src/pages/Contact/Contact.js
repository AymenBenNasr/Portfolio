import { TextField } from "@material-ui/core";
import { Grid, Icon, Typography } from "@mui/material";

import React from "react";
import CustomButton from "../../components/Button/Button";
import "../Contact/Contact.css";
import resumeData from "../../utils/resumeData";
import { margin } from "@mui/system";


const Contact = () => {
  return (
    <>
      <Grid container className="contact" spacing={6}>
        <Grid item xs={12} lg={9}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <h6 className="title_text">Contact form</h6>
              <span style={{ width: 120}}></span>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={7}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="name" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="email" />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="message"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container> 
            <Grid item className="section_title mb_30">
              <h6 className="title_text">Contact informations</h6>
              <span style={{ width: 190}}></span>
            </Grid>
            <Grid item xs={12} className="infos">
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography className="contact_info">
                            <span>E-mail : </span> {resumeData.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="contact_info">
                            <span>Phone : </span> {resumeData.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="contact_info">
                            <span>Phone : </span> {resumeData.phone}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
