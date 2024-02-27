import { motion } from "framer-motion";
import { icons } from "../../data/icons";
import { useInView } from "react-intersection-observer";

function IconList() {
  const [icon, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="container mx-auto mt-16">
      <h3 className="text-center text-3xl">Skills & Tools</h3>
      <p className="pt-4 text-center text-xl">
        For those who know what they’re looking for...
      </p>
      <motion.ul
        className="mt-12 flex flex-wrap items-center justify-center gap-5 "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={icon}
      >
        {icons.map((icon) => (
          <motion.li
            key={icon.id}
            variants={iconVariants}
            className="flex h-32 w-32 flex-col items-center justify-between rounded-lg border p-2 pt-3 shadow-lg dark:border-indigo-300"
          >
            <img
              src={icon.svg}
              alt={icon.id + " icon"}
              width="58"
              height="auto"
            />
            <p className="text-center text-xl capitalize">{icon.id}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default IconList;
