document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message");

  if (!name || !email || !date) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  message.style.color = "green";
  message.textContent = `Thanks ${name}, your appointment request has been submitted.`;

  this.reset();
});

/* Smooth scroll helper */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}