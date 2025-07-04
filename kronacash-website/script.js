// Initialize footer elements.
let waitlist = document.getElementById("waitlist");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let instagram = document.getElementById("instagram");
let contact = document.getElementById("contact");
let donate = document.getElementById("donate");

// Apply underline on mouseover.
waitlist.onmouseover = function () {
  waitlist.style.textDecoration = "underline";
};

facebook.onmouseover = function () {
  facebook.style.textDecoration = "underline";
};

twitter.onmouseover = function () {
  twitter.style.textDecoration = "underline";
};

instagram.onmouseover = function () {
  instagram.style.textDecoration = "underline";
};

contact.onmouseover = function () {
  contact.style.textDecoration = "underline";
};

donate.onmouseover = function () {
  donate.style.textDecoration = "underline";
};

waitlist.onmouseleave = function () {
  waitlist.style.textDecoration = "";
};

facebook.onmouseleave = function () {
  facebook.style.textDecoration = "";
};

twitter.onmouseleave = function () {
  twitter.style.textDecoration = "";
};

instagram.onmouseleave = function () {
  instagram.style.textDecoration = "";
};

contact.onmouseleave = function () {
  contact.style.textDecoration = "";
};

donate.onmouseleave = function () {
  donate.style.textDecoration = "";
};
