import React from "react";
import { Typography } from "@material-ui/core";

import "./Profile.css";
import PersonIcon from "@mui/icons-material/Person";

import resumeData from "../../utils/resumeData";

import images from "../../assets/images/images.jpeg";
import CustomTimeline , { CustomSeperator } from "../Timeline/Timeline";
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineItem } from "@material-ui/lab";
import CustomButton from "../Button/Button"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

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
          <CustomTimelineItem title='Name' text={resumeData.name}/>
          <CustomTimelineItem title='Title' text={resumeData.title}/>
          <CustomTimelineItem title='Birthday' text={resumeData.birthday}/>
          

        </CustomTimeline>
        <br />
        <div className="btn_container" style={{display :'flex'}}>
          <CustomButton text={"Download CV"} icon={<DownloadOutlinedIcon />}/>
        </div>
        
      </div>
    </div>
  );
};
const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomSeperator />
      <TimelineContent className="timeline_content">
        {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
        ) : (
        <Typography className="timelineItem_text">
          <span>{title} : </span>
          {text}
        </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );

export default Profile;
