import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import { links } from "../utils/constants";
import DarkModeToggle from "../ui/DarkModeToggle";
import NavMenuItem from "../ui/NavMenuItem";

function DesktopNav() {
  return (
    <>
      <nav className="absolute left-0 top-0 flex w-full items-center justify-between bg-transparent px-4 ">
        <Logo width="65" />

        <ul className="flex gap-3 pt-10 sm:pt-0 md:gap-7">
          {links.map((link) => (
            <NavMenuItem link={link} key={link.name} />
          ))}
        </ul>

        <div className="flex items-center">
          <SocialLinks />
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}

export default DesktopNav;
