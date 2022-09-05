"use strict";

const wrapperIntro = document.querySelector(".wrapper--intro");
const mainElements = document.querySelector(".main--elements");
const htmlImg = document.getElementById("html--img");
const cssImg = document.getElementById("css--img");
const jsImg = document.getElementById("js--img");
const reactImg = document.getElementById("react--img");
const angularImg = document.getElementById("angular--img");
const vueImg = document.getElementById("vue--img");
const gitImg = document.getElementById("git--img");
const htmlRow = document.querySelector(".html--row");
const htmlTxt = document.getElementById("html--txt");
const htmlBtn = document.getElementById("html--btn");
const cssRow = document.querySelector(".css--row");
const cssTxt = document.getElementById("css--txt");
const cssBtn = document.getElementById("css--btn");
const jsRow = document.querySelector(".js--row");
const jsTxt = document.getElementById("js--txt");
const jsBtn = document.getElementById("js--btn");
const reactRow = document.querySelector(".react--row");
const reactTxt = document.getElementById("react--txt");
const reactBtn = document.getElementById("react--btn");
const angularRow = document.querySelector(".angular--row");
const angularTxt = document.getElementById("angular--txt");
const angularBtn = document.getElementById("angular--btn");
const vueRow = document.querySelector(".vue--row");
const vueTxt = document.getElementById("vue--txt");
const vueBtn = document.getElementById("vue--btn");
const gitRow = document.querySelector(".git--row");
const gitTxt = document.getElementById("git--txt");
const gitBtn = document.getElementById("git--btn");
const frontEndBtn = document.querySelector(".front-end--btn");
//MODAL
const frontEndModal = document.getElementById("front-end-modal");
const closeFrontEndModal = document.getElementById("front-end-modal-close");
//HTML MODAL
const htmlModal = document.getElementById("html-modal");
const closeHtmlModalBtn = document.getElementById("html-modal-close");
//CSS MODAL
const cssModal = document.getElementById("css-modal");
const closeCssModalBtn = document.getElementById("css-modal-close");
//JAVASCRIPT MODAL
const jsModal = document.getElementById("js-modal");
const closeJSModalBtn = document.getElementById("js-modal-close");
//REACT MODAL
const reactModal = document.getElementById("react-modal");
const closeReactModalBtn = document.getElementById("react-modal-close");
//ANGULAR MODAL
const angularModal = document.getElementById("angular-modal");
const closeAngularModalBtn = document.getElementById("angular-modal-close");
//VUE MODAL
const vueModal = document.getElementById("vue-modal");
const closeVueModalBtn = document.getElementById("vue-modal-close");
//GIT MODAL
const gitModal = document.getElementById("git-modal");
const closeGitModalBtn = document.getElementById("git-modal-close");

//Function Wrapper Intro-Visibility
const changeWrapperVisibility = function () {
  wrapperIntro.style.visibility = "hidden";
};
const wrapperVisibilityTimeout = setTimeout(changeWrapperVisibility, 4000);

//Function Main Elements Intro-Visibility
const changeMainElementsVisibility = function () {
  mainElements.style.visibility = "visible";
};
const mainElementsVisibilityTimeout = setTimeout(
  changeMainElementsVisibility,
  4000
);

//Languages Timeout Functions
//HTML
const changeHtmlImageVisibility = () => {
  htmlImg.style.visibility = "visible";
  htmlImg.classList.add("fade-in");
  htmlRow.style.visibility = "visible";
  htmlRow.classList.add("fade-in-two");
  htmlTxt.style.visibility = "visible";
  htmlTxt.classList.add("fade-in-two");
  htmlBtn.style.visibility = "visible";
  htmlBtn.classList.add("fade-in-two");
};
const htmlImageVisibilityTimeout = setTimeout(changeHtmlImageVisibility, 5000);

//CSS
const changeCsslImageVisibility = function () {
  cssImg.style.visibility = "visible";
  cssImg.classList.add("fade-in");
  cssRow.style.visibility = "visible";
  cssRow.classList.add("fade-in-two");
  cssTxt.style.visibility = "visible";
  cssTxt.classList.add("fade-in-two");
  cssBtn.style.visibility = "visible";
  cssBtn.classList.add("fade-in-two");
};
const cssImageVisibilityTimeout = setTimeout(changeCsslImageVisibility, 5500);

//JAVASCRIPT
const changeJsImageVisibility = function () {
  jsImg.style.visibility = "visible";
  jsImg.classList.add("fade-in");
  jsRow.style.visibility = "visible";
  jsRow.classList.add("fade-in-two");
  jsTxt.style.visibility = "visible";
  jsTxt.classList.add("fade-in-two");
  jsBtn.style.visibility = "visible";
  jsBtn.classList.add("fade-in-two");
};
const jsImageVisibilityTimeout = setTimeout(changeJsImageVisibility, 6000);

//REACT
const changeReactImageVisibility = function () {
  reactImg.style.visibility = "visible";
  reactImg.classList.add("fade-in");
  reactRow.style.visibility = "visible";
  reactRow.classList.add("fade-in-two");
  reactTxt.style.visibility = "visible";
  reactTxt.classList.add("fade-in-two");
  reactBtn.style.visibility = "visible";
  reactBtn.classList.add("fade-in-two");
};
const reactImageVisibilityTimeout = setTimeout(
  changeReactImageVisibility,
  6500
);

//ANGULAR
const changeAngularImageVisibility = function () {
  angularImg.style.visibility = "visible";
  angularImg.classList.add("fade-in");
  angularRow.style.visibility = "visible";
  angularRow.classList.add("fade-in-two");
  angularTxt.style.visibility = "visible";
  angularTxt.classList.add("fade-in-two");
  angularBtn.style.visibility = "visible";
  angularBtn.classList.add("fade-in-two");
};
const angularImageVisibilityTimeout = setTimeout(
  changeAngularImageVisibility,
  7000
);

//VUE
const changeVueImageVisibility = function () {
  vueImg.style.visibility = "visible";
  vueImg.classList.add("fade-in");
  vueRow.style.visibility = "visible";
  vueRow.classList.add("fade-in-two");
  vueTxt.style.visibility = "visible";
  vueTxt.classList.add("fade-in-two");
  vueBtn.style.visibility = "visible";
  vueBtn.classList.add("fade-in-two");
};
const vueImageVisibilityTimeout = setTimeout(changeVueImageVisibility, 7500);

//GIT
const changeGitImageVisibility = function () {
  gitImg.style.visibility = "visible";
  gitImg.classList.add("fade-in");
  gitRow.style.visibility = "visible";
  gitRow.classList.add("fade-in-two");
  gitTxt.style.visibility = "visible";
  gitTxt.classList.add("fade-in-two");
  gitBtn.style.visibility = "visible";
  gitBtn.classList.add("fade-in-two");
};
const gitImageVisibilityTimeout = setTimeout(changeGitImageVisibility, 8000);

//MODALS
//Default function
const modalsFunction = function (openBtn, modal, closeBtn) {
  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
};
//FRONT-END-BUTTON
modalsFunction(frontEndBtn, frontEndModal, closeFrontEndModal);
//HTML BUTTON
modalsFunction(htmlBtn, htmlModal, closeHtmlModalBtn);
//CSS BUTTON
modalsFunction(cssBtn, cssModal, closeCssModalBtn);
//JAVASCRIPT BUTTON
modalsFunction(jsBtn, jsModal, closeJSModalBtn);
//REACT BUTTON
modalsFunction(reactBtn, reactModal, closeReactModalBtn);
//ANGULAR ROW
modalsFunction(angularBtn, angularModal, closeAngularModalBtn);
//VUE ROW
modalsFunction(vueBtn, vueModal, closeVueModalBtn);
//GIT ROW
modalsFunction(gitBtn, gitModal, closeGitModalBtn);
