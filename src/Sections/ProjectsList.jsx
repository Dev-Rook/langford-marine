import React from "react";
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

const ProjectsList = () => {
  return (
    <div className={"Section_One"}>
      <p className={Styles.Title}>Projects</p>
      <Timeline
        className={`${Styles.Timeline}`}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <span>
              <p className={Styles.Year}>1990</p>
              <p className={Styles.Title}>Title</p>
            </span>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <span>
              <p className={Styles.Year}>1990</p>
              <p className={Styles.Title}>Title</p>
            </span>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <span>
              <p className={Styles.Year}>1990</p>
              <p className={Styles.Title}>Title</p>
            </span>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <span>
              <p className={Styles.Year}>1990</p>
              <p className={Styles.Title}>Title</p>
            </span>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ProjectsList;
