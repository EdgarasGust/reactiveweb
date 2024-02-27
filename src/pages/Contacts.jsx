import { Helmet } from "react-helmet-async";
import { useDarkMode } from "../context/useDarkMode";

import ContactDetails from "../features/contacts/ContactDetails";
import ContactForm from "../features/contacts/ContactForm";
import useResize from "../hooks/useResize";
import BackgroundImage from "../ui/BackgroundImage";
import { CONTACTS_BG_IMAGE, CONTACTS_BG_MOBILE } from "../utils/constants";

function Contacts() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useResize();

  return (
    <>
      <Helmet>
        <title>Let&apos;s get in touch, shall we?</title>
        <meta
          name="description"
          content="Ready to connect? Drop me a line, send a carrier pigeon, or summon me with smoke signals. I'm all ears!"
        />
      </Helmet>
      <BackgroundImage
        imageUrl={isMobile ? CONTACTS_BG_MOBILE : CONTACTS_BG_IMAGE}
      />
      <section className="pt-24">
        <div className="container mx-auto mb-8 grid grid-cols-1 px-2 sm:px-0 md:grid-cols-3 lg:grid-cols-2">
          <div className="col-span-2 mb-14 md:mb-0 lg:col-span-1">
            <h2 className="text-4xl">Drop Me A Line</h2>
            <h4 className="mb-4 mt-1">
              Feel free to contact me for any project or collaboration.
            </h4>
            <ContactForm />
          </div>
          <ContactDetails isDarkMode={isDarkMode} />
        </div>
      </section>
    </>
  );
}

export default Contacts;
