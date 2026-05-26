// ================= HAMBURGER =================

const hamburger =
  document.getElementById("hamburger");

const navMenu =
  document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

  navMenu.classList.toggle("active");
});

// ================= TYPING ANIMATION =================

// Typing Animation
const typingText =
  document.getElementById("typingText");

const text =
  "Web Developer & UI Designer";

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.textContent +=
      text.charAt(index);

    index++;

    setTimeout(typeEffect, 70);
  }
}

window.addEventListener("load", typeEffect);

// ================= SCROLL REVEAL =================

// Scroll Reveal Animation
const reveals =
  document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealElements);

revealElements();

// ================= PROGRESS BAR =================

// Progress Bar Animate
const progressBars =
  document.querySelectorAll(".progress-fill");

function animateProgress(){

  progressBars.forEach((bar) => {

    const barTop =
      bar.getBoundingClientRect().top;

    if(barTop < window.innerHeight - 50){

      bar.style.width =
        bar.dataset.width;
    }

  });
}

window.addEventListener("scroll", animateProgress);

animateProgress();

// ================= COUNTER =================

// Counter Animation
const counters =
  document.querySelectorAll(".counter");

let counterStarted = false;

function runCounter(){

  const stats =
    document.querySelector(".stats-grid");

  const statsTop =
    stats.getBoundingClientRect().top;

  if(statsTop < window.innerHeight - 100 && !counterStarted){

    counters.forEach((counter) => {

      const target =
        +counter.dataset.target;

      let count = 0;

      const increment =
        target / 80;

      function updateCounter(){

        if(count < target){

          count += increment;

          counter.innerText =
            Math.ceil(count);

          setTimeout(updateCounter, 30);

        } else {

          counter.innerText = target;
        }
      }

      updateCounter();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", runCounter);

runCounter();

// ================= DARK MODE =================

const themeToggle =
  document.getElementById("themeToggle");

const currentTheme =
  localStorage.getItem("theme");

if(currentTheme){

  document.documentElement
    .setAttribute("data-theme", currentTheme);

  themeToggle.textContent =
    currentTheme === "dark"
      ? "☀️"
      : "🌙";
}

themeToggle.addEventListener("click", () => {

  let theme =
    document.documentElement
    .getAttribute("data-theme");

  if(theme === "light"){

    document.documentElement
      .setAttribute("data-theme", "dark");

    localStorage.setItem("theme", "dark");

    themeToggle.textContent = "☀️";

  } else {

    document.documentElement
      .setAttribute("data-theme", "light");

    localStorage.setItem("theme", "light");

    themeToggle.textContent = "🌙";
  }
});

// ================= FORM VALIDATION =================

const form =
  document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name =
    document.getElementById("name");

  const email =
    document.getElementById("email");

  const message =
    document.getElementById("message");

  let valid = true;

  clearErrors();

  if(name.value.trim() === ""){

    showError(name, "Nama wajib diisi");
    valid = false;
  }

  if(email.value.trim() === ""){

    showError(email, "Email wajib diisi");
    valid = false;

  } else if(!validateEmail(email.value)){

    showError(email, "Format email tidak valid");
    valid = false;
  }

  if(message.value.trim().length < 10){

    showError(
      message,
      "Pesan minimal 10 karakter"
    );

    valid = false;
  }

  if(valid){

    alert("Pesan berhasil dikirim!");

    form.reset();
  }
});

function showError(input, message){

  const formGroup =
    input.parentElement;

  const error =
    formGroup.querySelector(".error");

  error.textContent = message;
}

function clearErrors(){

  document
    .querySelectorAll(".error")
    .forEach((error) => {

      error.textContent = "";
    });
}

function validateEmail(email){

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);
}