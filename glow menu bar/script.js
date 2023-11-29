const selected = document.getElementById("selected");
const notsvg = document.getElementById("notificationsvg").firstElementChild;
const homesvg = document.getElementById("homesvg").firstElementChild;
const settingsvg = document.getElementById("settingsvg").firstElementChild;
const profilesvg = document.getElementById("profilesvg").firstElementChild;

function notificationfn() {
  selected.classList.add("notification");
  selected.classList.remove("setting");
  selected.classList.remove("profile");
  selected.classList.remove("home");
  notsvg.style.fill = "#03254c";
  homesvg.style.fill = "#d0efff";
  settingsvg.style.fill = "#d0efff";
  profilesvg.style.fill = "#d0efff";
  var action = gsap.timeline();
  action
    .to("#notificationsvg", { duration: 0.2, rotation: 10 })
    .to("#notificationsvg", { duration: 0.2, rotation: -30 })
    .to("#notificationsvg", { duration: 0.2, rotation: 30 })
    .to("#notificationsvg", { duration: 0.2, rotation: 0 });
}
function setting() {
  notsvg.style.fill = "#d0efff";
  homesvg.style.fill = "#d0efff";
  settingsvg.style.fill = "#03254c";
  profilesvg.style.fill = "#d0efff";

  var action = gsap.timeline();
  action
    .to("#settingsvg", { duration: 0.4, rotation: 600 })
    .to("#settingsvg", { duration: 0.4, rotation: 0 });
  selected.classList.remove("notification");
  selected.classList.add("setting");
  selected.classList.remove("profile");
  selected.classList.remove("home");
}
function profile() {
  notsvg.style.fill = "#d0efff";
  homesvg.style.fill = "#d0efff";
  settingsvg.style.fill = "#d0efff";
  profilesvg.style.fill = "#03254c";
  var action = gsap.timeline();
  action
    .to("#profilesvg", { duration: 0.4, y: -8 })
    .to("#profilesvg", { duration: 0.4, y: 0 });
  selected.classList.remove("notification");
  selected.classList.remove("setting");
  selected.classList.add("profile");
  selected.classList.remove("home");
}
function home() {
  notsvg.style.fill = "#d0efff";
  homesvg.style.fill = "#03254c";
  settingsvg.style.fill = "#d0efff";
  profilesvg.style.fill = "#d0efff";

  var action = gsap.timeline();
  action
    .to("#homesvg", { duration: 0.4, x: 6 })
    .to("#homesvg", { duration: 0.4, x: 0 });
  selected.classList.remove("notification");
  selected.classList.remove("setting");
  selected.classList.remove("profile");
  selected.classList.add("home");
}