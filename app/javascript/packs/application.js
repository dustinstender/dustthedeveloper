// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";


// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';


// slide in //
function slideIn() {
  const sliders = document.querySelectorAll(".slide-in")
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -75px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider)
  })
}

// fade in skills //
function fadeIn() {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -75px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  slideIn();
  fadeIn();
});
