document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const errorMsg = document.querySelector(".error-msg");
  const errorIcon = document.querySelector(".error-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form submitting by default

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
      // invalid
      emailInput.classList.add("invalid");
      errorMsg.style.display = "block"
      errorMsg.textContent = "Please provide a valid email";
      errorIcon.style.display = "block";
    } else {
      // valid
      emailInput.classList.remove("invalid");
      errorMsg.textContent = "";
      errorIcon.style.display = "none";

      // Add code for production to send email.
      console.log("Valid email submitted:", emailValue);
    }
  });
});
