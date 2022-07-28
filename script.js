"use strict";

const inputEmail = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const btnNotify = document.querySelector(".btn");

const validEmail = function () {
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!re.test(inputEmail.value)) {
    emailError.classList.remove("hidden");
    inputEmail.focus();
    return false;
  } else {
    emailError.classList.add("hidden");
    inputEmail.focus();
    return true;
  }
};

btnNotify.addEventListener("click", validEmail);
