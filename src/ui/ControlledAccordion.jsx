import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export default function ControlledAccordion({ dataArray }) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {dataArray.map((item, index) => (
        <AccordionItem
          item={item}
          index={index}
          expanded={expanded}
          onChange={handleChange}
          key={item.title}
        />
      ))}
    </>
  );
}
