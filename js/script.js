// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
