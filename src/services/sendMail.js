import toast from "react-hot-toast";

export async function sendMail(data) {
  const { name, email, phone, message } = data;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, message }),
  };

  try {
    const response = await fetch(
      "https://reactiveweb.lt/api/mail.php",
      requestOptions,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    toast.success("Message sent successfully!");

    return data;
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
    throw error;
  }
}
