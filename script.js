"use strict";

const inputEmail = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const btnNotify = document.querySelector(".btn");

// const validEmail = function () {
//   const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   const html = `<p class="email-error hidden"><i>Please provide valid email adress</i></p>`;

//   if (!re.test(inputEmail.value)) {
//     // inputEmail.innerHTML = "";
//     inputEmail.insertAdjacentHTML("afterend", html);
//     inputEmail.style.borderColor = "red";
//     inputEmail.focus();
//     emailError.classList.remove("hidden");
//     return false;
//   } else {
//     // inputEmail.innerHTML="";
//     emailError.classList.add("hidden");
//     inputEmail.style.borderColor = "#d0daf3";
//     inputEmail.focus();
//     return true;
//   }
// };

/////// Version 1 
const validEmail = function () {
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!re.test(inputEmail.value)) {
    emailError.classList.remove("hidden");
    inputEmail.style.borderColor = "red";
    inputEmail.focus();
    return false;
  } else {
    emailError.classList.add("hidden");
    inputEmail.style.borderColor = "#d0daf3";
    inputEmail.focus();
    return true;
  }
};

btnNotify.addEventListener("click", validEmail);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validEmail();
  }
});
