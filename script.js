const yearElement = document.querySelector("#updated-year");

if (yearElement) {
  yearElement.dateTime = String(new Date().getFullYear());
  yearElement.textContent = String(new Date().getFullYear());
}
