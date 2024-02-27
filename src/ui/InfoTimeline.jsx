import { useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TimeLineItemDetails from "./TimeLineItemDetails";

function InfoTimeline({ data }) {
  const isSmallScreen = useMediaQuery("(max-width:767px)");
  const [content, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const contentVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={content}
      className="pb-6"
    >
      <Timeline
        position={isSmallScreen ? "right" : "alternate-reverse"}
        sx={
          isSmallScreen
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : {}
        }
      >
        {data?.map((content, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={{ marginTop: "43px" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={isSmallScreen ? { paddingLeft: 1, paddingRight: 0 } : {}}
            >
              <motion.div variants={contentVariants}>
                {/* Custom component */}
                <TimeLineItemDetails
                  key={content.title}
                  content={content}
                  index={i}
                />
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
}

export default InfoTimeline;
