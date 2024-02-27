import { motion } from "framer-motion";
import { SideBarMenuItem } from "./SideBarMenuItem";
import { links } from "../utils/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    y: 0,
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0.5,
    },
    y: -500,
  },
};

export const Navigation = ({ toggle }) => (
  <>
    <motion.ul variants={variants} className="absolute top-24 z-40 w-60 p-5">
      {links.map((link) => (
        <SideBarMenuItem link={link} key={link.name} toggle={toggle} />
      ))}
    </motion.ul>
  </>
);
