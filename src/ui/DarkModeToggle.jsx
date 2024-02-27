import { useDarkMode } from "../context/useDarkMode";
import ToggleSwitch from "./ToggleSwitch";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleChange = (event) => {
    toggleDarkMode(event.target.checked);
  };
  return (
    <ToggleSwitch
      checked={isDarkMode}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      uncheckedIcon="../sun.png"
      checkedIcon="../night.png"
    />
  );
}

export default DarkModeToggle;
