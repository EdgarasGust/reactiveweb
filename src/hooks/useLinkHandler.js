import { useLocation, useNavigate } from "react-router-dom";

export function useProjectLinkHandler(link) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e) => {
    if (link === "/projects" && location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (link === "/projects") {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return handleLinkClick;
}
