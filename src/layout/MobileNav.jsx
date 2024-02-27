import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/use-dimensions";
import { MenuToggle } from "../ui/MenuToggle";
import { Navigation } from "../ui/Navigation";
import DarkModeToggle from "../ui/DarkModeToggle";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { useDarkMode } from "../context/useDarkMode";
import Logo from "../ui/Logo";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { isDarkMode } = useDarkMode();

  useOnClickOutside(containerRef, () => isOpen && handleToggle());

  function handleToggle() {
    toggleOpen();
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <motion.aside
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="absolute bottom-0 left-0 top-0 z-40 w-64 bg-stone-100 dark:bg-slate-800"
          variants={sidebar}
        />

        <Navigation toggle={handleToggle} />

        <MenuToggle isDarkMode={isDarkMode} toggle={handleToggle} />
      </motion.aside>

      <div className="absolute left-1/2 top-5 -translate-x-1/2 transform">
        <Logo width="75" />
      </div>

      <div className="absolute right-2 top-5">
        <DarkModeToggle />
      </div>
    </>
  );
};
