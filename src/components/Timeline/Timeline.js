import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import PersonIcon from "@mui/icons-material/Person";

import "./Timeline.css";
import { Typography } from "@mui/material";
const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      {/* header */}
      <TimelineItem className={"timeline_header"}>
        <TimelineSeparator>
          <TimelineDot className={"dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"title_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
      {/* Other items */}
    </Timeline>
  );
};

export const CustomSeperator = () => (
  <TimelineSeparator className={"seperator_items"}>
    <TimelineDot variant={"outlined"} className={"dot_other"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
