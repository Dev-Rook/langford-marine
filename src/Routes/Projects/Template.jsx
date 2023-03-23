import React from "react";
import { TabTitle } from "../../Utilities/TabTitle";

import "../../Styles/Global.scss";
import Styles from "../../Styles/Template.module.scss";

// Material UI Timeline Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// Material UI Timeline Imports End

import LaunchIcon from "@mui/icons-material/Launch";

import Crew from "../../Sections/Crew";
import Map from "../../Components/Map";

const Template = () => {
  return (
    <div className={"Page"}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Title}>Project Title</p>
        <p className={Styles.Text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          officia recusandae ea ipsa pariatur, nesciunt rerum repellendus
          delectus nulla blanditiis aspernatur, voluptas saepe distinctio
          molestias eius possimus asperiores ex. Temporibus, architecto deserunt
          vero explicabo suscipit aliquid non consequatur perspiciatis?
        </p>
        <div className={Styles.Image_Container}>
          <img src={""} alt="" className={Styles.Image} />
        </div>
        <p className={Styles.Title}>Location</p>
        <p className={Styles.Text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          officia recusandae ea ipsa pariatur, nesciunt rerum repellendus
          delectus nulla blanditiis aspernatur, voluptas saepe distinctio
          molestias eius possimus asperiores ex. Temporibus, architecto deserunt
          vero explicabo suscipit aliquid non consequatur perspiciatis?
        </p>
        <p className={Styles.Title}>Goals</p>
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
                <p className={Styles.Year}>1</p>
                <p className={Styles.Title}>First Goal</p>
              </span>
              <p className={Styles.Description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nulla dolorem molestiae corporis ipsum blanditiis?
              </p>
              {/* <p className={Styles.Type}>{value.type}</p> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className={Styles.Timeline_Item}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={Styles.Time_Card}>
              <span>
                <p className={Styles.Year}>2</p>
                <p className={Styles.Title}>Second Goal</p>
              </span>
              <p className={Styles.Description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nulla dolorem molestiae corporis ipsum blanditiis?
              </p>
              {/* <p className={Styles.Type}>{value.type}</p> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className={Styles.Timeline_Item}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={Styles.Time_Card}>
              <span>
                <p className={Styles.Year}>3</p>
                <p className={Styles.Title}>Third Goal</p>
              </span>
              <p className={Styles.Description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nulla dolorem molestiae corporis ipsum blanditiis?
              </p>
              {/* <p className={Styles.Type}>{value.type}</p> */}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <p className={Styles.Title}>Execution</p>
        <p className={Styles.Text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          officia recusandae ea ipsa pariatur, nesciunt rerum repellendus
          delectus nulla blanditiis aspernatur, voluptas saepe distinctio
          molestias eius possimus asperiores ex. Temporibus, architecto deserunt
          vero explicabo suscipit aliquid non consequatur perspiciatis?
        </p>
        <p className={Styles.Title}>Summary</p>
        <p className={Styles.Text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          officia recusandae ea ipsa pariatur, nesciunt rerum repellendus
          delectus nulla blanditiis aspernatur, voluptas saepe distinctio
          molestias eius possimus asperiores ex. Temporibus, architecto deserunt
          vero explicabo suscipit aliquid non consequatur perspiciatis?
        </p>
      </div>
    </div>
  );
};

export default Template;
