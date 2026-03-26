document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message");

  message.textContent = `Thanks ${name}, your appointment request has been submitted.`;

  this.reset();
});