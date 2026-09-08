const doctores = [
  {
    nombre: "Dr. James Wilson",
    especialidad: "Cardiología",
    estado: "Activo",
    claseEstado: "status-active",
  },
  {
    nombre: "Dra. Elena Rodriguez",
    especialidad: "Neurología",
    estado: "Activo",
    claseEstado: "status-active",
  },
  {
    nombre: "Dr. Robert Chen",
    especialidad: "Pediatría",
    estado: "De Licencia",
    claseEstado: "status-leave",
  },
];

function cargarDoctores() {
  const tbody = document.getElementById("product-table-body");
  if (!tbody) return;

  tbody.innerHTML = ""; // Limpia la tabla por seguridad

  doctores.forEach((doctor) => {
    const fila = document.createElement("tr");

    // Celda Nombre (incluye un ícono de FontAwesome simulando el avatar)
    const tdNombre = document.createElement("td");
    tdNombre.innerHTML = `<i class="fa-solid fa-circle-user" style="color: var(--text-secondary); font-size: 1.5rem; vertical-align: middle; margin-right: 10px;"></i> <strong>${doctor.nombre}</strong>`;

    const tdEspecialidad = document.createElement("td");
    tdEspecialidad.textContent = doctor.especialidad;
    tdEspecialidad.style.color = "var(--text-secondary)";

    const tdEstado = document.createElement("td");
    tdEstado.innerHTML = `<span class="status-dot ${doctor.claseEstado}"></span> <span style="color: var(--text-secondary); font-weight: 500;">${doctor.estado}</span>`;

    // Ensamblaje de la fila
    fila.appendChild(tdNombre);
    fila.appendChild(tdEspecialidad);
    fila.appendChild(tdEstado);

    tbody.appendChild(fila);
  });
}

// 3. Inicialización de eventos cuando el HTML está listo
document.addEventListener("DOMContentLoaded", () => {
  cargarDoctores();

  // Lógica del menú lateral móvil
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      if (window.innerWidth < 768) sidebar.classList.toggle("open");
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && sidebar) sidebar.classList.remove("open");
  });

  // Lógica de Cerrar Sesión
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});
