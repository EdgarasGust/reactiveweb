import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputErrorMsg from "../../ui/InputErrorMsg";
import Button from "../../ui/Button";
import { sendMail } from "../../services/sendMail";
import Spinner from "../../ui/Spinner";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  async function onSubmit(data) {
    if (!isValid) return;
    setIsLoading(true);
    try {
      await sendMail(data);
      navigate("/");
    } catch (error) {
      console.error("Error sending contact form:", error);
    } finally {
      setIsLoading(false);
      reset();
    }
  }

  return (
    <>
      {isLoading && <Spinner />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3 p-1"
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Your name
          </label>

          <input
            className="w-full rounded-lg border px-2 py-2 text-sm focus:outline-blue-200 dark:text-black"
            id="name"
            type="text"
            name="name"
            autoComplete="given-name"
            {...register("name", {
              required: "The name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <InputErrorMsg msg={errors.name.message} />}
        </div>

        <div>
          <label htmlFor="email" className="text-sm">
            Your email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border px-2 py-2 text-sm focus:outline-blue-200 dark:text-black"
            id="email"
            name="email"
            autoComplete="email"
            {...register("email", {
              required: "The email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <InputErrorMsg msg={errors.email.message} />}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm">
            Phone number (optional)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border px-2 py-2 text-sm focus:outline-blue-200 dark:text-black"
            id="phone"
            name="phone"
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm">
            Your message
          </label>
          <textarea
            className="w-full rounded-lg border px-2 py-2 text-sm focus:outline-blue-200 dark:text-black"
            rows="6"
            id="message"
            name="message"
            autoComplete="on"
            {...register("message", {
              required: "The field is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters long",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && <InputErrorMsg msg={errors.message.message} />}
        </div>

        <div className="flex gap-3">
          <input
            type="checkbox"
            id="check"
            name="check"
            {...register("check", {
              required: "Please agree to our terms and conditions to continue",
            })}
          />
          <label htmlFor="check-box" className="text-xs">
            By checking the box, you agree to our policy. Please review our
            terms and conditions for further details.&nbsp;
            <a
              href="policy/Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              The policy
            </a>
          </label>
        </div>
        {errors.check && <InputErrorMsg msg={errors.check.message} />}

        <div>
          <Button
            aria-label="submit button"
            btnType="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
