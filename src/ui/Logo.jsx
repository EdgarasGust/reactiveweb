import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { LOGO_DARK } from "../utils/constants";
import { LOGO_LIGHT } from "../utils/constants";

function Logo({ width }) {
  const { isDarkMode } = useDarkMode();

  const logo = isDarkMode ? LOGO_DARK : LOGO_LIGHT;

  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" width={width} height="auto" />
      </Link>
    </>
  );
}

export default Logo;
