import { Link } from "react-router-dom";
import Button from "./Button";

function ContactCard() {
  return (
    <div className="container mx-auto mt-16 flex justify-center  ">
      <div className="rounded-xl border dark:border-indigo-300 py-6 px-2 mx-2 text-center shadow-xl sm:px-16 sm:py-8 bg-stone-100 dark:bg-transparent">
        <h3 className="text-2xl sm:text-2xl">Have questions? Let`s talk.</h3>
        <p className="mb-5 mt-5 text-sm md:text-md">
          I will respond to all your questions regarding the creation of a
          website. <br /> Typically, email responses are provided within one
          business day.
        </p>
        <Link to="/contacts">
          <Button btnType="primary">Let&#39;s talk</Button>
        </Link>
      
      </div>
    </div>
  );
}

export default ContactCard;
