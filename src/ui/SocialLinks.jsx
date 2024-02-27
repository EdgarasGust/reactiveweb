import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
function SocialLinks() {
  return (
    <Link
      to="https://www.linkedin.com/in/edgaras-gustaitis-5393ab257"
      target="_blank"
    >
      <AiOutlineLinkedin className="text-xl" />
    </Link>
  );
}

export default SocialLinks;
