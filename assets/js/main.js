document.addEventListener("DOMContentLoaded", function () {
  const darkBtn = document.getElementById("darkBtn");

  if (!darkBtn) return;

  // Initial state from localStorage
  if (localStorage.getItem("dark") === "1") {
    document.body.classList.add("dark");
    darkBtn.textContent = "☀️ Light Mode";
  }

  // Toggle
  darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    darkBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("dark", isDark ? "1" : "0");
  });
});
