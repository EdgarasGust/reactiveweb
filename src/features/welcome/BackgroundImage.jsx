import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { DM_HOME_SEC_BG_IMAGE, LM_HOME_SEC_BG_IMAGE } from "../../utils/constants";

export function BackgroundImage({ isDarkMode }) {
  const [typeAnim, isInViewType] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={typeAnim}
      className="flex h-[400px] items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat text-center "
      style={{
        backgroundImage: `url(${
          isDarkMode ? DM_HOME_SEC_BG_IMAGE : LM_HOME_SEC_BG_IMAGE
        })`,
      }}
    >
      {isInViewType && (
        <TypeAnimation
          sequence={[
            "Let's Build Your Unique Business Website Together",
            1000,
            () => {
              const el = document.querySelector(".typeAnimationCursor");
              el?.classList.remove("typeAnimationCursor");
            },
          ]}
          wrapper="h3"
          cursor={false}
          repeat={0}
          id="typeAnimation"
          className="typeAnimationCursor inline-block text-xl  text-black dark:text-white sm:text-3xl"
        />
      )}
    </section>
  );
}
