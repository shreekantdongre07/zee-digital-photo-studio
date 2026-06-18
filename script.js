const form = document.querySelector("#bookingForm");
const studioPhone = "918888600057";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "Customer";
  const service = data.get("service")?.toString().trim() || "Photography service";
  const date = data.get("date")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const lines = [
    `Hi ZEE DIGITAL PHOTOGRAPHY, my name is ${name}.`,
    `I am interested in: ${service}.`,
    date ? `Preferred date: ${date}.` : "",
    message ? `Details: ${message}` : "",
  ].filter(Boolean);

  window.open(`https://wa.me/${studioPhone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
});
