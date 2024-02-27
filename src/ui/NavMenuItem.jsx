import { NavLink } from "react-router-dom";
import { useProjectLinkHandler } from "../hooks/useLinkHandler";

function NavMenuItem({ link, textSize = "xs" }) {
  const handleLinkClick = useProjectLinkHandler(link.link);

  return (
    <li>
      <NavLink
        onClick={handleLinkClick}
        className={`active-link text-${textSize} sm:pl-0 md:text-sm`}
        to={link.link}
      >
        {link.name}
      </NavLink>
    </li>
  );
}

export default NavMenuItem;
