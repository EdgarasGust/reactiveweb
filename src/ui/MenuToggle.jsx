import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isDarkMode, toggle }) => (
  <button
    aria-label="menu button"
    onClick={toggle}
    className="absolute left-[16px] top-[17px] z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        stroke={isDarkMode ? "lightgrey" : "black"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        stroke={isDarkMode ? "lightgrey" : "black"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={isDarkMode ? "lightgrey" : "black"}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
