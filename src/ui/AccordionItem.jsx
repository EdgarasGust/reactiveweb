import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function AccordionItem({ item, index, expanded, onChange }) {
  const panelId = `panel${index + 1}`;

  return (
    <Accordion
      expanded={expanded === panelId}
      onChange={onChange(panelId)}
      className={`dark:border dark:border-stone-800 dark:text-white`}
      key={item.title}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={`dark:text-white`} />}
        aria-controls={`${panelId}bh-content`}
        id={`${panelId}bh-header`}
        className={`dark:bg-black text-lg lg:text-xl`}
      >
        {item.title}
      </AccordionSummary>
      <AccordionDetails className={`dark:bg-black`}>
        {item.text.map((li) => (
          <li className="list-disc pb-3 text-sm lg:text-lg" key={li}>
            {li}
          </li>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
