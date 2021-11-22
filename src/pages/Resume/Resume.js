import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomSeperator,
} from "../../components/Timeline/Timeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkIcon from "@mui/icons-material/Work";
import { TimelineItem } from "@mui/lab";
import { Avatar } from "@mui/material";
import nodeExternals from 'webpack-node-externals';



import {
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "@material-ui/lab";

import { Paper } from "@material-ui/core";

const Resume = () => {
  return (
    <>
      {/* About me  */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>

          <h6 className="title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_me_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Timeline */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span style={{ width: 72 }}></span>
          <h6 className="title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolRoundedIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>

      {/* services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>

          <h6 className="title_text">Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8} className="services_content">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <svgIcon className="service_icon">{service.icon}</svgIcon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span style={{ width: 72 }}></span>
          <h6 className="title_text">skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={8} className="skills-content">
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={6} className="skill_grid" >
                <Grid conatainer>
                <Paper elevation={2} className="skill">
                  <Typography variant="h6" className="skill_name">
                    {skill.title}
                  </Typography>

                  {skill.description.map((desc) => (
                    // <Chip label={desc.name} className="chip"/>
                    <>
                    <Chip
                      
                      label={desc.name}
                      variant="outlined"
                      className="chip"
                    />
                    
                    
                
                    </>
                  ))}
                 
                  
                  
                    
                </Paper>
                {/* <Grid container className="skill_style">
                  <Grid item>{skill.title}</Grid>
                  <Grid item >
                    {skill.description.map((desc) => (
                      <Chip label={desc.name} className="chip"/>
                    ))}
                  </Grid>
                </Grid> */}
              </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* <Grid item>
          {resumeData.skills.map((skill) => (
            <Grid item className="section_title mb_30">
              <h6 className="title_text">{skill.title}</h6>

              {skill.description.map((desc) => (
                <Grid item>
                  <Chip label="aaaaa" />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid> */}
      </Grid>
    </>
  );
};

export default Resume;
