import { TypeAnimation } from "react-type-animation";

function WelcomeHeading() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Unleash Innovation",
          1000,
          "Stand Out",
          2000,
          "Launch Your Creative Journey",
          2000,
          () => {
            const el = document.querySelector(".typeAnimationCursor");
            el?.classList.remove("typeAnimationCursor");
          },
        ]}
        wrapper="h1"
        cursor={false}
        repeat={0}
        className="typeAnimationCursor inline-block text-2xl  sm:text-5xl"
      />

      <h2 className="mt-3 text-center text-sm sm:text-lg">
        Coding Dreams &#x2022; Designing Visions
        <span className="block sm:inline-block">
          &nbsp;&#x2022; Building Realities
        </span>
      </h2>
    </>
  );
}

export default WelcomeHeading;
