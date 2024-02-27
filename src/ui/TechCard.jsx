function TechCard({ card }) {
  const { icon, heading, text } = card;
  return (
    <div className="mt-4 px-3 pt-1 md:w-full shadow-xl h-full border-t rounded-2xl dark:border-none ">
      <img
        src={icon}
        alt={heading}
        className="mx-auto mb-4 h-16 w-16  p-2 dark:rounded-full dark:bg-stone-100"
      />
      <h3 className="font-semi-bold mb-3 text-center text-xl">{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

export default TechCard;
