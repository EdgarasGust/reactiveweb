import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import NavMenuItem from "../ui/NavMenuItem";
import { links } from "../utils/constants";
import toast from "react-hot-toast";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const date = new Date().getFullYear();

  function onClickHandler() {
    if (location.pathname === "/contacts") {
      return toast.success("You are already on the contacts page");
    }
    navigate("/contacts");
  }

  const filteredLinks = links.filter((link) => link.name !== "Contacts");

  return (
    <footer className="bg-stone-100 pt-5 dark:bg-black">
      
      <ul className="flex justify-center gap-3 sm:pt-0 md:gap-7">
        {filteredLinks.map((link) => (
          <NavMenuItem textSize="sm" link={link} key={link.name} />
        ))}
      </ul>
      <div className="flex justify-center py-4 sm:py-5">
        <Button btnType="secondary" onClick={onClickHandler}>
          Contact me
        </Button>
      </div>
      <p className="text-center"> &copy; {date} Reactive Web</p>
    </footer>
  );
}

export default Footer;
