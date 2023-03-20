import React, { useState } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Sections/Timeline.module.scss";

// Material UI Timeline Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// Material UI Timeline Imports End

import LaunchIcon from "@mui/icons-material/Launch";

import ProjectData from "../Data/Projects.json";

const ProjectsList = () => {
  const [data, setData] = useState(ProjectData);
  return (
    <div className={"Section"}>
      <p className={"Title"}>Projects</p>
      <>
        {data?.slice(0, 3).map((value) => {
          return (
            <Timeline
              className={`${Styles.Timeline}`}
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
              key={value.id}
            >
              <TimelineItem className={Styles.Timeline_Item}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={Styles.Time_Card}>
                  <span>
                    <p className={Styles.Year}>{value.year}</p>
                    <p className={Styles.Title}>{value.title}</p>
                    <a href={value.link} target={"_blank"} re={"noreferrer"}>
                      <LaunchIcon sx={{ color: "red" }} />
                    </a>
                  </span>
                  <p className={Styles.Description}>{value.description}</p>
                  <p className={Styles.Type}>{value.type}</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </>
    </div>
  );
};

export default ProjectsList;
