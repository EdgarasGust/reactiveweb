import { EMAIL, PHONE_LT, PHONE_UK } from "../../utils/constants";

function ContactDetails({ isDarkMode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7 text-center">
      <div className="flex flex-col items-center gap-y-1">
        <a href={`tel:${PHONE_UK}`}>
          <img
            src={
              isDarkMode
                ? "contactImages/call-dark.png"
                : "contactImages/call.png"
            }
            alt="call"
            width="45px"
            height="45px "
          />
        </a>
        <p>
          <b>Give me a call</b>
        </p>
        <p>
          <a href={`tel:${PHONE_UK}`}>{PHONE_UK}</a>
        </p>
        <p>
          <a href={`tel:${PHONE_LT}`}>{PHONE_LT}</a>
        </p>
      </div>

      <div className="flex flex-col items-center gap-y-1">
        <a href={`mailto:${EMAIL}`}>
          <img
            src={
              isDarkMode
                ? "contactImages/mail-dark.png"
                : "contactImages/mail.png"
            }
            alt="mail"
            width="45px"
            height="45px"
          />
        </a>
        <p>
          <b>Mail me</b>
        </p>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </div>
  );
}

export default ContactDetails;
