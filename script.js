const btnToggleTheme = document.querySelector("#themeToggle");
const btnDark = document.querySelector("#theme-toggle-dark-icon");
const btnLight = document.querySelector("#theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  btnLight.classList.remove("hidden");
} else {
  btnDark.classList.remove("hidden");
}

btnToggleTheme.addEventListener("click", eventMode);

function eventMode() {
  btnDark.classList.toggle("hidden");
  btnLight.classList.toggle("hidden");

  //if the theme is already set in local storage
  if (localStorage.getItem("color-theme")) {
    //if light, make dark and save in local storage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    //not in local storage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
