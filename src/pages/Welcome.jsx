import { useDarkMode } from "../context/useDarkMode";
import useResize from "../hooks/useResize";

import WelcomeHeading from "../features/welcome/WelcomeHeading";
import WelcomeIntroduction from "../features/welcome/WelcomeIntroduction";
import IconList from "../features/welcome/IconList";
import { BackgroundImage } from "../features/welcome/BackgroundImage";
import ContactCard from "../ui/ContactCard";
import WelcomePortfolio from "../features/welcome/WelcomePortfolio";
import {
  DM_HOME_BG_IMAGE,
  DM_HOME_BG_IMAGE_MOBILE,
  LM_HOME_BG_IMAGE,
  LM_HOME_BG_IMAGE_MOBILE,
} from "../utils/constants";
import { Helmet } from "react-helmet-async";

function Welcome() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useResize();

  const bgImage = isMobile
    ? isDarkMode
      ? DM_HOME_BG_IMAGE_MOBILE
      : LM_HOME_BG_IMAGE_MOBILE
    : isDarkMode
      ? DM_HOME_BG_IMAGE
      : LM_HOME_BG_IMAGE;

  return (
    <>
      <Helmet>
        <title>Hey there! Welcome aboard!</title>
        <meta
          name="description"
          content="Welcome to the heart of our online space. Get ready for a journey of discovery and connection."
        />
      </Helmet>
      <section
        className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="px-2 pb-12 text-center">
          <WelcomeHeading />
        </div>
      </section>
      <section className="pb-20">
        <WelcomeIntroduction isDarkMode={isDarkMode} />
        <BackgroundImage isDarkMode={isDarkMode} />
        <IconList />
        <section id="projects">
          <WelcomePortfolio />
        </section>
        <ContactCard />
      </section>
    </>
  );
}

export default Welcome;
