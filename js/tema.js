function iniciarTema() {
  const boton = document.querySelector("#btn-tema");
  if (boton === null) {
    return;
  }

  function aplicarTema(oscuro) {
    document.body.classList.toggle("modo-oscuro", oscuro);
    boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    boton.setAttribute("aria-pressed", oscuro ? "true" : "false");
  }

  let guardado = null;
  try {
    guardado = localStorage.getItem("tema");
  } catch (error) {
    console.log("No se pudo leer localStorage:", error.message);
  }
  aplicarTema(guardado === "oscuro");

  boton.addEventListener("click", function () {
    const oscuro = !document.body.classList.contains("modo-oscuro");
    aplicarTema(oscuro);
    try {
      localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    } catch (error) {
      console.log("No se pudo guardar el tema:", error.message);
    }
    console.log("Modo oscuro activo:", oscuro);
  });
}

iniciarTema();