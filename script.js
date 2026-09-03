
const form = document.querySelector("form");
do{
if (form) {
  form.addEventListener("submit", (event) => {
    const phone = document.querySelector("#phone").value.trim();
    const email = document.querySelector("#email").value.trim();

    const phonePattern = /^[0-9+\-\s()]{7,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(phone)) {
      event.preventDefault();
      alert("Please enter a valid phone number.");
      return;
    }

    if (!emailPattern.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form is valid and ready to submit.");
  });}
}while(phonePattern.test(phone) && emailPattern.test(email));