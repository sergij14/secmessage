"use strict";

const { hash } = window.location;
const message = atob(hash.replace("#", ""));

const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");
const messageShow = document.querySelector("#message-show");

if (message) {
  messageForm.classList.add("hide");
  messageShow.classList.remove("hide");
  messageShow.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="sec-message">${message}</h2>`
  );
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  messageForm.classList.add("hide");
  linkForm.classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypeted = btoa(input.value);
  const link = document.querySelector("#link-input");
  link.value = `${window.location}#${encrypeted}`;
  link.select();
  link.addEventListener("click", () => link.select());
});
