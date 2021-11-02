import React from "react";
import { Typography } from "@material-ui/core";

import "./Profile.css";
import PersonIcon, { CustomSeperator } from "@mui/icons-material/Person";

import resumeData from "../../utils/resumeData";

import images from "../../assets/images/images.jpeg";
import CustomTimeline from "../Timeline/Timeline";
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineItem } from "@material-ui/lab";


const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_pic">
        <img src={images} alt=""></img>
      </figure>
      <div className="profile_infos">
        <CustomTimeline icon={<PersonIcon />} >
          
        </CustomTimeline>
        <br />
        <button>button</button>
      </div>
    </div>
  );
};
const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomSeperator />
      <TimelineContent>
        {link ? (
        <Typography>
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
        ) : (
        <Typography>
          <span>{title} : </span>
          {text}
        </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );

export default Profile;
