function TimeLineItem({ content, index, className = "" }) {
  return (
    <>
      <div
        className={`mt-2 rounded-2xl px-5 py-2 text-left shadow-2xl dark:shadow-none dark:hover:border ${className}`}
      >
        <h3 className="border-b pb-1 ">
          {index < 9 ? `0${index + 1}` : index + 1}
        </h3>
        <h2 className="py-2  md:text-lg capitalize font-semibold">{content?.title}</h2>
        <ul className="pl-4 ">
          {content?.text.map((li) => (
            <li className="list-disc  pb-3 text-sm lg:text-lg" key={li}>
              {li}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TimeLineItem;
