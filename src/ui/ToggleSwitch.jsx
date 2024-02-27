import { Switch } from "@mui/material";

function ToggleSwitch({ checkedIcon, uncheckedIcon, ...props }) {
  const switchContainerStyle = {
    width: "40px",
    height: "35px",
    marginTop: "1px",
  };

  const switchIconStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <Switch
      {...props}
      style={switchContainerStyle}
      icon={<img alt="Unchecked" src={uncheckedIcon} style={switchIconStyle} />}
      checkedIcon={
        <img alt="Checked" src={checkedIcon} style={switchIconStyle} />
      }
    />
  );
}

export default ToggleSwitch;
