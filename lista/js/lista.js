/* ===================================================
   PROYECTO 2 · LISTA DE TAREAS — LÓGICA
   CAMBIO DE HOY (Clase 15): este archivo ahora vive en
   lista/js/. Lo carga lista.html con src="js/lista.js".
   Además corregimos dos detalles de nombres (buenas
   prácticas de hoy): un error de ortografía en un mensaje
   y una variable con una letra de más.
   =================================================== */

console.log("Proyecto 2 conectado");

let tareas = [];

const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const mensaje = document.querySelector("#mensaje-error");
const resumen = document.querySelector("#resumen");

function renderizarTareas() {
    lista.innerHTML = "";

    if (tareas.length === 0) {
        const vacia = document.createElement("li");
        vacia.textContent = "No tienes tareas pendientes. ¡Agrega la primera!";
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

        li.addEventListener("click", function () {
            tarea.completada = !tarea.completada;
            renderizarTareas();
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.type = "button";

        btnEliminar.addEventListener("click", function (event) {
            event.stopPropagation();
            tareas.splice(i, 1);
            renderizarTareas();
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
            completadas++
        }
    }

    if (tareas.length === 0) {
        resumen.textContent = "Sin tareas por ahora";
    } else {
        resumen.textContent = completadas + " de " + tareas.length + " completadas";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const textoNuevo = input.value.trim();

    if (textoNuevo === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";   // CAMBIO DE HOY (Clase 15): decía "Ecribe"
        input.focus();
        return;
    }

    mensaje.textContent = "";
    tareas.push({ texto: textoNuevo, completada: false});
    input.value = "";
    input.focus();
    renderizarTareas();

    console.log("Tareas ahora:", tareas);
});

// CAMBIO DE HOY (Clase 15): la variable se llamaba btnLlimpiar (con doble L).
// Funcionaba, pero un nombre mal escrito confunde a quien lee el código.
const btnLimpiar = document.querySelector("#btn-limpiar");

btnLimpiar.addEventListener("click", function () {
    const pendientes = [];

    for (let i = 0; i < tareas.length; i++) {
        if (!tareas[i].completada) {
            pendientes.push(tareas[i]);
        }
    }

    tareas = pendientes;
    renderizarTareas();
});

renderizarTareas();