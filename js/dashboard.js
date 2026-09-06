document.addEventListener("DOMContentLoaded", () => {
  // 1. Manejo del menú lateral en móviles
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        sidebar.classList.toggle("open");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && sidebar) {
      sidebar.classList.remove("open");
    }
  });

  // 2. Manejo de Cierre de Sesión
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});
