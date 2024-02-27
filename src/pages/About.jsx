import { Helmet } from "react-helmet-async";
import ContactCard from "../ui/ContactCard";

function About() {
  return (
    <>
      <Helmet>
        <title>Meet the Mover and Shaker Behind the Scenes</title>
        <meta
          name="description"
          content="Get acquainted with the mastermind pulling the strings! Dive into the journey and passions of the lone wolf."
        />
      </Helmet>
      <section className=" bg-stone-100 pt-20 dark:bg-black md:pt-28">
        <div className="grid-col-1 container mx-auto grid max-w-6xl md:grid-cols-2 ">
          <div className="px-4 text-center sm:pl-4 sm:text-left">
            <h3 className="text-3xl font-semibold text-stone-500">
              Hi there, I&apos;m Edgaras!
            </h3>
            <h1 className="mt-3 text-3xl sm:text-left">
              A Front-end Developer
            </h1>
            <p className="mt-3 pb-4 text-justify">
              As a seasoned front-end developer, I bring a wealth of experience
              and innovation to every project. Operating independently, I focus
              on crafting cutting-edge solutions using the latest front-end
              technologies. My approach is driven by a passion for turning ideas
              into remarkable digital experiences. <br /> <br /> In a world
              where data meets design, I bridge the gap, delivering top-notch
              digital strategies. My expertise encompasses comprehensive Website
              Development, ensuring your digital vision comes to life with
              engaging designs, seamless functionality, and exceptional
              performance. From conceptualization to execution, I am dedicated
              to bringing your ideas into the digital world.
            </p>
          </div>
          <div className=" flex justify-end pt-6 sm:justify-end sm:pt-0 ">
            <img
              src="bgImages/aboutMe.webp"
              alt="The developer"
              width="246"
              height="384"
            />
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto max-w-6xl px-4 text-justify  ">
          <h2 className="mb-3 pt-10 text-center text-3xl">
            Why choose my services?
          </h2>
          <p>
            As an experienced freelance website creator and developer, I am
            dedicated to crafting and transforming websites for individuals and
            businesses. Recognizing that each client is unique, with distinct
            needs and budgets, I offer personalized services to meet those
            specific requirements.
          </p>
          <br />
          <p>
            My approach is straightforward. I listen to my clients, understand
            their vision, and collaborate with them to achieve their goals. I
            don&apos;t base my choices on assumptions; I rely on data-driven
            solutions. Whether you require a complete website redesign or a
            brand-new website from scratch, I&apos;m here to assist every step
            of the way. I do it well and efficiently.
          </p>
          <br />
          <p>
            With a keen eye for detail, I am committed to creating visually
            stunning and responsive user-friendly websites. I believe that a
            well-crafted website not only enhances visual appeal but also
            contributes to boosting your business’s online presence, generating
            leads, and increasing conversions.
          </p>
          <br />
          <p>
            Passionate about my work, I look forward to working with you to
            bring your website vision to life
          </p>
          <br />
          <p>Contact me today to get started!</p>
        </div>
        <ContactCard />
      </section>
    </>
  );
}

export default About;
