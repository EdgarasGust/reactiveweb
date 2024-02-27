import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useProjectLinkHandler } from "../hooks/useLinkHandler";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const SideBarMenuItem = ({ link, toggle }) => {
  const handleLinkClick = useProjectLinkHandler(link.link);

  return (   
    <motion.li
      onClick={toggle}
      className="mb-4 flex cursor-pointer list-none align-middle"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        className="w-48 flex-1 border-b p-1 text-stone-700 dark:border-b-stone-500 dark:text-stone-300"
        to={link.link}
        onClick={handleLinkClick}
      >
        <span> &#183;</span> {link.name}
      </NavLink>
    </motion.li>    
     
  );
};
