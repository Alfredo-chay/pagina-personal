console.log("Proyecto 2 conectado");

let tareas = [];

const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const mensaje = document.querySelector("#mensaje-error");
const resumen = document.querySelector("#resumen");

function rednderizarTareas() {
  lista.innerHTML = "";

  if (tareas.length === 0) {
    const vacia = document.createElement("li");
    vacia.textContent = "No tiene tareas pendientes. ¡Agregar la primera tarea!";
    vacia.classList.add("vacia");
    lista.appendChild(vacia);
  }

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    const li = document.createElement("li");
    const texto = document.createElement("span");
    texto.textContent = tarea.texto;
    li.appendChild(texto);

    if (tarea.completada) {
      li.classList.add("completada");
    }

    li.addEventListener("click", function() {
      tarea.completada = !tarea.completada;
      rednderizarTareas();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.type = "button";
   
    btnEliminar.addEventListener("click", function(event) {
      event.stopPropagation();
      tareas.splice(i, 1);
      rednderizarTareas();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }

  actualizarResumen();
}

function actualizarResumen() {
  let completadas = 0;

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].completada) {
      completadas++;
    }
  }

  if (tareas.length === 0) {
    resumen.textContent = "sin tareas por ahora";
    } else {
    resumen.textContent = completadas+ "de" + tareas.length + "compñetadas";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const textoNuevo = input.value.trim();

  if (textoNuevo === "") {
    mensaje.textContent = "Escribre una tarea antes de agregarla.";
    input.focus();
    return;
  }

  mensaje.textContent = "";
  tareas.push({ texto: textoNuevo, completada: false });
  input.value = "";
  rednderizarTareas();

  console.log("Tareas ahora:", tareas);
});

const btnlimpiar = document.querySelector("#btn-limpiar");

btnlimpiar.addEventListener("click", function() {
  const pendientes = [];

  for (let i = 0; i < tareas.length; i++) {
    if (!tareas[i].completada) {
      pendientes.push(tareas[i]);
    }
  }

  tareas = pendientes;
  rednderizarTareas();
});

rednderizarTareas();
