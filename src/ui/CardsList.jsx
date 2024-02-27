import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TechCard from "./TechCard";

function CardsList({ cardsArray }) {
  const [card, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-5 px-2 text-justify md:grid-cols-2 lg:grid-cols-3 "
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={card}
    >
      {cardsArray?.map((card) => (
        <motion.div key={card.heading} variants={cardVariants}>
          <TechCard card={card} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default CardsList;
