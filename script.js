/* ===================================================
   CLASE 11: ARRAYS, OBJETOS E INTRODUCCIÓN AL DOM
   ===================================================
   CAMBIO DE HOY (Clase 11): este archivo es NUEVO.

   ¿Por qué otro archivo si ya tenemos logica.js?
   - logica.js es nuestro "laboratorio": lo carga
     practica-js.html y ahí practicamos en las Clases 9 y 10.
   - script.js es el JavaScript de la LANDING PAGE de verdad:
     lo carga index.html. A partir de hoy, todo lo que haga
     que nuestro Proyecto 1 piense y reaccione va aquí.

   Se conecta al final del <body> de index.html con:

       <script src="script.js"></script>

   Igual que en las clases pasadas, hoy todo se muestra en la
   CONSOLA (F12 > Console). Hoy SOLO LEEMOS la página: en la
   Clase 12 la vamos a modificar y le vamos a agregar eventos.
   =================================================== */


/* ---------------------------------------------------
   2.1 ¿Está conectado?
   ---------------------------------------------------
   Lo primero que se hace al enlazar un archivo nuevo:
   un mensaje de prueba. Si aparece en la consola de
   index.html, el <script> está bien escrito.             */
console.log("Conectado");

// El mismo truco de la Clase 9 para que los títulos de la
// consola se vean con los colores de nuestra página.
const estilo = "background:#065a82; color:white; font-weight:bold; padding:4px 10px; border-radius:4px;";
function seccion(texto) {
  console.log("%c" + texto, estilo);
}


/* ===================================================
   PARTE 1 · TEORÍA
   =================================================== */

/* ---------------------------------------------------
   1.2 ARREGLOS (arrays)
   ---------------------------------------------------
   Un arreglo es una LISTA ORDENADA de valores guardada
   en UNA sola variable. Va entre corchetes [ ] y cada
   valor se separa con coma.
   - El primer elemento está en la posición (índice) 0.
   - .length dice cuántos elementos hay.
   - .push(valor) agrega un elemento AL FINAL.           */
seccion("1.2 · Arreglos");

const colores = ["rojo", "verde", "azul"];

console.log(colores[0]);        // "rojo"  → el índice empieza en 0
console.log(colores[2]);        // "azul"  → el último es length - 1
console.log(colores.length);    // 3

colores.push("amarillo");       // agrega al final
console.log(colores);           // ["rojo", "verde", "azul", "amarillo"]
console.log(colores.length);    // 4 → length se actualiza solo

// También podemos CAMBIAR un elemento por su posición.
// (Aunque colores es const, su CONTENIDO sí se puede cambiar:
//  const solo impide reasignar la variable completa.)
colores[1] = "turquesa";
console.log(colores);           // ["rojo", "turquesa", "azul", "amarillo"]

// Recorrer un arreglo con for (Clase 10): los nombres de las
// secciones de nuestro <main>.
const secciones = ["Sobre mí", "Mis intereses", "Mis avances", "Contáctame"];

for (let i = 0; i < secciones.length; i++) {
  console.log("Sección " + (i + 1) + ": " + secciones[i]);
}


/* ---------------------------------------------------
   1.3 OBJETOS
   ---------------------------------------------------
   Un objeto agrupa datos RELACIONADOS en pares
   propiedad: valor, entre llaves { }.
   - Cada par se separa con coma.
   - Se lee con punto (objeto.propiedad) o con corchetes
     (objeto["propiedad"]).                              */
seccion("1.3 · Objetos");

const estudiante = {
  nombre: "Alfredo",
  edad: 21,
  nivel: "intermedio",
};
// La coma después del último valor es opcional; la dejamos
// porque así es más fácil agregar otra propiedad después.

console.log(estudiante.nombre);       // "Alfredo"  → notación de punto
console.log(estudiante["edad"]);      // 21        → notación de corchetes

// Los corchetes sirven cuando el NOMBRE de la propiedad está
// guardado en una variable:
const queQuieroVer = "nivel";
console.log(estudiante[queQuieroVer]); // "intermedio"

// Cambiar una propiedad y agregar una nueva:
estudiante.nivel = "avanzado";
estudiante.curso = "Programación Web Básica";
console.log(estudiante);


/* ---------------------------------------------------
   1.3 ARREGLO DE OBJETOS
   ---------------------------------------------------
   Una de las estructuras más usadas en JavaScript real:
   una lista donde cada elemento es un objeto. Aquí está
   la tabla "Mis avances" de nuestra landing, convertida
   en datos: cada fila es un objeto.                      */
seccion("1.3 · Arreglo de objetos: Mis avances");

const avances = [
  { lenguaje: "HTML", nivel: "Básico", meses: 1 },
  { lenguaje: "CSS", nivel: "Principiante", meses: 0 },
  { lenguaje: "JavaScript", nivel: "Sin empezar", meses: 0 },
];

for (let i = 0; i < avances.length; i++) {
  // avances[i] es UN objeto; con punto leemos cada propiedad.
  console.log(avances[i].lenguaje + " → " + avances[i].nivel + " (" + avances[i].meses + " meses)");
}


/* ---------------------------------------------------
   1.4 EL DOM
   ---------------------------------------------------
   El DOM (Document Object Model) es la copia en memoria
   que el navegador construye a partir de nuestro HTML:
   cada etiqueta se convierte en un OBJETO que JavaScript
   puede leer (hoy) y modificar (Clase 12).

   La puerta de entrada es "document": un objeto que
   representa toda la página.
   - document.querySelector("selector") → el PRIMER
     elemento que coincide.
   - document.querySelectorAll("selector") → TODOS los que
     coinciden, como una lista que se puede recorrer.

   Los selectores son EXACTAMENTE los mismos de CSS
   (Clase 4): etiqueta (h1), clase (.destacado), id
   (#contacto) y combinaciones (nav a).                   */
seccion("1.4 · El DOM de mi landing page");


/* ===================================================
   PARTE 2 · PRÁCTICA
   =================================================== */

/* ---------------------------------------------------
   2.2 EJEMPLO GUIADO: seleccionar y leer el DOM
   ---------------------------------------------------
   Truco de DevTools: en la consola, pasen el cursor sobre
   el <h1> que aparece. ¡La página resalta ese mismo
   elemento! Es la prueba de que JavaScript lo encontró.  */
seccion("2.2 · Ejemplo guiado");

const titulo = document.querySelector("h1");
console.log(titulo);               // el elemento completo: <h1>Mi Página Personal</h1>
console.log(titulo.textContent);   // solo su texto: "Mi Página Personal"

const enlaces = document.querySelectorAll("nav a");
console.log(enlaces.length);       // 5 enlaces en el menú

// Bonus: querySelectorAll devuelve una lista, así que se puede
// recorrer con for, igual que un arreglo.
for (let i = 0; i < enlaces.length; i++) {
  console.log("Enlace " + (i + 1) + ": " + enlaces[i].textContent);
}


/* ===================================================
   2.3 EJERCICIOS PRÁCTICOS
   =================================================== */

/* ---------------------------------------------------
   EJERCICIO 1 · Arreglo con las secciones del main
   (Reutilizamos el arreglo "secciones" de arriba. Si lo
   escriben desde cero, usen otro nombre: no se puede
   declarar dos veces la misma const.)                    */
seccion("Ejercicio 1 · Secciones del main");

for (let i = 0; i < secciones.length; i++) {
  console.log(secciones[i]);
}


/* ---------------------------------------------------
   EJERCICIO 2 · Objeto perfil con tres propiedades     */
seccion("Ejercicio 2 · Mi perfil");

const perfil = {
  nombre: "Alfredo",
  curso: "Programación Web Básica",
  nivel: "Intermedio",
};

console.log("Nombre: " + perfil.nombre);
console.log("Curso: " + perfil.curso);
console.log("Nivel: " + perfil.nivel);


/* ---------------------------------------------------
   EJERCICIO 3 · El texto del <h1> de mi página         */
seccion("Ejercicio 3 · Mi h1");

const miTitulo = document.querySelector("h1");
console.log(miTitulo.textContent);


/* ---------------------------------------------------
   EJERCICIO 4 · ¿Cuántos <li> tiene mi lista de intereses?
   "ul li" = los li que están dentro de un ul (selector
   descendiente, igual que en CSS).                       */
seccion("Ejercicio 4 · Mis intereses");

const intereses = document.querySelectorAll("ul li");
console.log("Tengo " + intereses.length + " intereses");

for (let i = 0; i < intereses.length; i++) {
  console.log("• " + intereses[i].textContent);
}


/* ---------------------------------------------------
   EJERCICIO 5 · Encontrar el elemento con .destacado
   Es el <strong class="destacado"> de "Sobre mí", el que
   pintamos de rojo en la Clase 4. El punto antes del
   nombre indica que es una CLASE, igual que en CSS.      */
seccion("Ejercicio 5 · El elemento .destacado");

const destacado = document.querySelector(".destacado");
console.log(destacado);
console.log("Texto destacado: " + destacado.textContent);

// ¿Qué pasa si el selector no existe? querySelector devuelve
// null (el "vacío a propósito" de la Clase 9). Si después
// intentamos leer .textContent de null, aparece un error rojo.
const noExiste = document.querySelector(".no-existe");
console.log("¿Encontró .no-existe?", noExiste);   // null


/* ###################################################
   CLASE 12: MODIFICAR EL DOM, EVENTOS Y VALIDACIÓN
   ###################################################
   CAMBIO DE HOY (Clase 12): todo lo que sigue es NUEVO.
 
   En la Clase 11 solo LEÍMOS la página (querySelector +
   textContent). Hoy damos tres pasos más:
   1. CAMBIAR lo que seleccionamos (texto, HTML, estilos y clases).
   2. ESCUCHAR eventos (click, submit, input) con addEventListener.
   3. VALIDAR el formulario de la Clase 3 antes de "enviarlo".
 
   Esta vez los resultados se ven EN LA PÁGINA, no solo en la
   consola. La consola la seguimos usando para revisar errores.
   ################################################### */
 
 
/* ---------------------------------------------------
   1.2 MODIFICAR CONTENIDO: textContent e innerHTML
   ---------------------------------------------------
   - elemento.textContent = "texto";  → cambia SOLO el texto.
     Si escribimos etiquetas, se ven tal cual (<strong>), no
     se interpretan. Es la opción segura para texto simple.
   - elemento.innerHTML = "<strong>texto</strong>"; → cambia el
     contenido INTERPRETANDO las etiquetas HTML. Útil para dar
     formato, pero NUNCA con texto que escribió un usuario
     (alguien podría meter código en la página).              */
seccion("Clase 12 · 1.2 Modificar contenido");
 
// El distintivo del footer (Clase 11) ahora dice que la página
// ya REACCIONA. Lo seleccionamos con su clase, igual que en CSS.
const badge = document.querySelector(".badge-js");
badge.textContent = "⚡ JavaScript activo · la página ya reacciona a tus clics";
 
// El párrafo vacío de "Sobre mí": lo llenamos con innerHTML para
// que el <strong> se vea en negritas de verdad.
const saludo = document.querySelector("#saludo");
saludo.innerHTML = "👋 ¡Hola! Esta página ya <strong>reacciona</strong>: " +
                   "prueba el modo oscuro, marca tus intereses favoritos y envía el formulario.";
 
// Comparación: si hubiéramos usado textContent, en la página se
// verían las etiquetas escritas: "...ya <strong>reacciona</strong>..."
console.log("Saludo (solo texto):", saludo.textContent);
 
 
/* ---------------------------------------------------
   1.2 MODIFICAR ESTILOS: style y classList
   ---------------------------------------------------
   - elemento.style.propiedad = "valor"; → cambia UNA propiedad
     CSS. Las propiedades con guion se escriben en camelCase:
       background-color  →  backgroundColor
       font-size         →  fontSize
   - elemento.classList.add("clase")    → agrega una clase
     elemento.classList.remove("clase") → la quita
     elemento.classList.toggle("clase") → la pone si no está y
                                          la quita si está
     elemento.classList.contains("clase") → true / false
 
   Buena práctica: preferimos classList, porque el diseño se
   queda en styles.css (Clase 4) y JavaScript solo decide
   CUÁNDO aplicarlo. style lo usamos para cambios pequeños.   */
seccion("Clase 12 · 1.2 Modificar estilos");
 
// Un cambio pequeño con style: el distintivo pasa a verde "activo".
badge.style.backgroundColor = "#1c6b5f";
badge.style.color = "white";
 
 
/* ===================================================
   1.3 EVENTOS con addEventListener
   ===================================================
   elemento.addEventListener("evento", function () {
     // lo que pasa CADA VEZ que ocurre el evento
   });
   - 1er argumento: el nombre del evento, entre comillas.
   - 2º argumento: una función (Clase 10) SIN nombre. No la
     llamamos nosotros: la llama el navegador cuando ocurre
     el evento.                                              */
 
/* ---------------------------------------------------
   INTERACCIÓN 1 · Botón de modo oscuro (click + toggle)   */
seccion("Clase 12 · 1.3 Evento click: modo oscuro");
 
const botonTema = document.querySelector("#btn-tema");
 
botonTema.addEventListener("click", function () {
  // document.body es el <body>: no hace falta querySelector.
  document.body.classList.toggle("modo-oscuro");
 
  // ¿Quedó puesta la clase? Cambiamos el texto del botón según
  // el resultado (if / else de la Clase 9).
  if (document.body.classList.contains("modo-oscuro")) {
    botonTema.textContent = "☀️ Modo claro";
  } else {
    botonTema.textContent = "🌙 Modo oscuro";
  }
 
  console.log("Modo oscuro activo:", document.body.classList.contains("modo-oscuro"));
});
 
 
/* ---------------------------------------------------
   INTERACCIÓN 2 · Intereses favoritos (click en una LISTA)
   ---------------------------------------------------
   Reutilizamos "intereses" del Ejercicio 4 de la Clase 11
   (querySelectorAll("ul li")). Con un for le ponemos un
   addEventListener a CADA li.                              */
seccion("Clase 12 · 1.3 Evento click: intereses favoritos");
 
const contadorFavoritos = document.querySelector("#contador-favoritos");
 
// Función (Clase 10) que cuenta cuántos li tienen la clase
// "favorito" y escribe el resultado en el h2.
function actualizarContador() {
  const favoritos = document.querySelectorAll("ul li.favorito");
  if (favoritos.length === 0) {
    contadorFavoritos.textContent = "";   // vacío → .contador:empty lo oculta
  } else {
    contadorFavoritos.textContent = "★ " + favoritos.length + " favorito(s)";
  }
}
 
for (let i = 0; i < intereses.length; i++) {
  intereses[i].addEventListener("click", function () {
    // Gracias a "let", cada vuelta recuerda SU propia i: el
    // clic en "Diseño" cambia "Diseño" y no otro interés.
    intereses[i].classList.toggle("favorito");
    actualizarContador();
    console.log("Clic en: " + intereses[i].textContent);
  });
}
 
 
/* ===================================================
   1.4 y 2.1 · FORMULARIO: submit + preventDefault + validación
   ===================================================
   - El evento "submit" se escucha en el <form>, NO en el botón:
     el formulario se envía con el botón o con Enter.
   - event es un objeto (Clase 11) con información del evento.
     event.preventDefault() cancela lo que el navegador haría
     solo: enviar los datos y RECARGAR la página. Como todavía
     no tenemos servidor, lo manejamos con JavaScript.
   - input.value es lo que la persona escribió en el campo.
   - texto.includes("@") devuelve true si el texto tiene "@".   */
seccion("Clase 12 · 2.1 Validación del formulario");
 
const formulario = document.querySelector("form");
const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#correo");
const mensajeError = document.querySelector("#mensaje-error");
 
formulario.addEventListener("submit", function (event) {
  event.preventDefault();   // ¡primero! sin esto la página se recarga
 
  // 1) Limpiamos lo que haya quedado del intento anterior.
  mensajeError.classList.remove("error", "exito");
  nombreInput.classList.remove("campo-error");
  correoInput.classList.remove("campo-error");
 
  // 2) Revisamos los campos en orden (if / else if de la Clase 9).
  if (nombreInput.value === "") {
    mensajeError.textContent = "✖ El nombre es obligatorio.";
    mensajeError.classList.add("error");
    nombreInput.classList.add("campo-error");
    nombreInput.focus();   // el cursor regresa al campo con el error
 
  } else if (!correoInput.value.includes("@")) {
    // ! (NO, Clase 9): "si el correo NO incluye @"
    mensajeError.textContent = "✖ El correo debe incluir una @ (ejemplo: nombre@correo.com).";
    mensajeError.classList.add("error");
    correoInput.classList.add("campo-error");
    correoInput.focus();
 
  } else {
    // 3) Todo está bien: mensaje de éxito con el nombre escrito.
    mensajeError.textContent = "✔ ¡Gracias, " + nombreInput.value + "! Tu mensaje fue enviado correctamente.";
    mensajeError.classList.add("exito");
  }
 
  /* En el EJEMPLO GUIADO (diapositivas) lo hicimos primero con
     style, así:
       mensajeError.style.color = "red";     // error
       mensajeError.style.color = "green";   // éxito
     Funciona, pero solo cambia el color. Con classList
     reutilizamos .error y .exito de styles.css: color, fondo,
     borde y animación de una sola vez.                      */
 
  console.log("Formulario revisado · nombre:", nombreInput.value, "· correo:", correoInput.value);
});
 
/* ---------------------------------------------------
   RETO ★ · Contador de caracteres (evento "input")
   ---------------------------------------------------
   "input" ocurre CADA VEZ que cambia el contenido del campo:
   con cada letra que se escribe o se borra.               */
seccion("Clase 12 · Reto: evento input");
 
const mensajeTexto = document.querySelector("#mensaje");   // el <textarea>
const contadorMensaje = document.querySelector("#contador-mensaje");
 
mensajeTexto.addEventListener("input", function () {
  // .length también funciona con textos (Clase 11): cuenta letras.
  contadorMensaje.textContent = mensajeTexto.value.length + " caracteres";
});
 
 
// (Va después del reto porque también limpia su contador.)
// Botón "Borrar" (type="reset", Clase 3): el formulario dispara el
// evento "reset". Aprovechamos para limpiar también los mensajes.
formulario.addEventListener("reset", function () {
  mensajeError.textContent = "";
  mensajeError.classList.remove("error", "exito");
  nombreInput.classList.remove("campo-error");
  correoInput.classList.remove("campo-error");
  contadorMensaje.textContent = "0 caracteres";
});
 
console.log("%c¡Clase 12 completa! La página ya cambia, escucha eventos y valida el formulario.",
  "color:#3fb8af; font-weight:bold;");