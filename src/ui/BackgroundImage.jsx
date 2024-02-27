function BackgroundImage({ imageUrl }) {
  return (
    <section
      className="mx-auto h-[600px] max-w-[2600px] bg-stone-300 bg-cover bg-no-repeat bg-center sm:mt-10 xl:h-[800px] dark:bg-black"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></section>
  );
}

export default BackgroundImage;
