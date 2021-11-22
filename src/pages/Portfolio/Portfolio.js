import {
  Grid,
  Tabs,
  Tab,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "../Portfolio/Portfolio.css";

import portfolioData from "../../utils/portfolioData";
import { Card, Dialog, DialogActions, DialogContent, DialogTitle, Grow } from "@material-ui/core";

const Portfolio = () => {
  const [tabvalue, setTabvalue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);
  

  return (
    <Grid container className="section pb_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>

        <h6 className="title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabvalue}
          indicatorColor="white"
          className="costum_Tab"
          onChange={(event, newValue) => setTabvalue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabvalue == "All" ? "customtab_item active" : "customtab_item"
            }
          ></Tab>
          {[...new Set(portfolioData.portfolio.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabvalue === tag ? "customtab_item active" : "customtab_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Project */}
      <Grid item xs={12}> 
        <Grid container spacing={6}>
          {portfolioData.portfolio.map((projects) => (
            <>
              {tabvalue == projects.tag || tabvalue == "All" ? (
                <Grid item xs={12} sm={6} md={4} >
                  <Grow in timeout={1000}>
                    <Card className="project_card" onClick={() => setProjectDialog(projects)}>
                      <CardActionArea>
                        <CardMedia className="project_card_image" image={projects.image}  title={projects.title}/>
                        <CardContent className="cardContent">
                          <Typography className="cardTitle">{projects.title}</Typography>
                          <Typography variant="body2" className="cardDesc" >{projects.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className="projectDialog" fullWidth>
          <DialogTitle onClose={() => setProjectDialog(false)}> {projectDialog.title}</DialogTitle>
          <img src={projectDialog.image} alt="" className="projectDialog_image"/>
          <DialogContent>
              <Typography className="projectDialog_description"> {projectDialog.description} </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_actions">
              {projectDialog?.links?.map(link=> (
                  <a href={link.link} target='_blank' className="projectDialog_icon"> {link.icon}</a>
              )

              )}
          </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
