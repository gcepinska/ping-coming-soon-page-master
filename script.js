"use strict";

const inputEmail = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const btnNotify = document.querySelector(".btn");

///// Version 1
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

/// Version 2

// const validEmail = function () {
//   const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   const html = `<p class="email-error"><i>Please provide valid email adress</i></p>`;
//   const emailError = document.querySelector(".email-error");
  
//   if (!re.test(inputEmail.value)) {
//     inputEmail.insertAdjacentHTML("afterend", html);
//     emailError.innerHTML = "";
//     inputEmail.style.borderColor = "red";
//     inputEmail.focus();
//     return false;
//   } else {
//     emailError.innerHTML = "";
//     inputEmail.style.borderColor = "#d0daf3";
//     inputEmail.focus();
//     return true;
//   }
// };

btnNotify.addEventListener("click", validEmail);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validEmail();
  }
});
