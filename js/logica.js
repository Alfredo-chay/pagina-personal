/* ===================================================
   CLASE 9: INTRODUCCIÓN A JAVASCRIPT Y CONDICIONALES
   ===================================================
   CAMBIO DE HOY (Clase 9): este archivo es NUEVO.
   CAMBIO DE HOY (Clase 15): ahora vive en la carpeta js/.
   practica-js.html lo carga con <script src="js/logica.js">.

   Es el primer archivo de JavaScript de nuestra landing page.
   Vive en la MISMA carpeta del proyecto (junto a index.html y
   styles.css) y lo carga la página practica-js.html con:

       <script src="logica.js"></script>

   Hoy todavía NO cambiamos nada de la página con JavaScript:
   todo lo que hace este archivo es pensar y mostrar resultados
   en la CONSOLA del navegador. Para verla:
       F12 (o clic derecho > Inspeccionar) > pestaña "Console".

   En la Clase 11 conectaremos esta misma lógica al index.html
   para que la página reaccione de verdad (eso se llama DOM).
   (CAMBIO DE HOY, Clase 10: antes decía "Clase 10"; el DOM llega
   en la Clase 11. Hoy seguimos en la consola con loops y funciones.)

   Los datos que usamos aquí (nombre, meses de práctica, nivel)
   salen de NUESTRA PROPIA landing page: de la sección "Sobre mí",
   de la tabla "Mis avances" y del select del formulario.
   =================================================== */


/* ---------------------------------------------------
   Un detalle visual para la consola (opcional)
   ---------------------------------------------------
   console.log normalmente escribe texto plano. Si el texto
   empieza con %c, el segundo valor es un "mini CSS" que el
   navegador aplica a ese mensaje. Lo usamos solo para que los
   títulos de cada sección se vean como en nuestra página
   (mismo azul y turquesa de styles.css). No es obligatorio:
   el resto de mensajes usa console.log normal.            */
const estiloTitulo =
  "background:#065a82; color:white; font-weight:bold; padding:4px 10px; border-radius:4px;";

function titulo(texto) {
  console.log("%c" + texto, estiloTitulo);
}


/* ===================================================
   PARTE 1 · TEORÍA
   =================================================== */

/* ---------------------------------------------------
   1.2 VARIABLES: let y const
   ---------------------------------------------------
   Una variable es una "caja con nombre" donde guardamos un
   dato para usarlo después.
   - const: la caja se cierra con candado. Su valor NO se
     puede reasignar. Es la opción por defecto.
   - let: la caja se puede abrir y cambiar su contenido.
     Solo la usamos si el valor de verdad va a cambiar.
   - var: existe, pero es la forma antigua. En el curso NO
     la usamos.                                           */
titulo("1.2 · Variables con let y const");

const nombre = "Alfredo";        // mi nombre no va a cambiar → const
let mesesDePractica = 1;        // esto sí cambia con el tiempo → let

console.log("Nombre:", nombre);
console.log("Meses de práctica (antes):", mesesDePractica);

mesesDePractica = mesesDePractica + 1;   // ✔️ con let SÍ se puede reasignar
console.log("Meses de práctica (después):", mesesDePractica);

// nombre = "Otra persona";
// ↑ Si quitan las dos barras de esta línea, la consola mostrará un
//   error rojo: "Assignment to constant variable". Así comprobamos
//   que una const no se puede reasignar. (Pruébenlo y luego vuelvan
//   a comentarla.)
//
// CAMBIO DE HOY (Clase 10): esta línea estaba SIN comentar después de
// la demostración de la clase pasada. Un error así DETIENE todo el
// archivo: nada de lo que viene después se ejecuta (ni la Clase 9 ni
// la Clase 10). Por eso la volvemos a comentar con // al inicio.


/* ---------------------------------------------------
   1.3 TIPOS DE DATOS BÁSICOS
   ---------------------------------------------------
   Cada dato tiene un tipo. typeof nos dice cuál es.       */
titulo("1.3 · Tipos de datos");

const lenguaje = "JavaScript";     // string: texto, siempre entre comillas
const mesesHTML = 1;               // number: número entero...
const promedio = 87.5;             // ...o con decimales (es el mismo tipo)
const terminoProyecto1 = true;     // boolean: solo true o false
let proximoProyecto;               // undefined: declarada, aún sin valor
const segundoApellido = null;      // null: "vacío" puesto a propósito

console.log(lenguaje, "→", typeof lenguaje);                 // string
console.log(mesesHTML, "→", typeof mesesHTML);               // number
console.log(promedio, "→", typeof promedio);                 // number
console.log(terminoProyecto1, "→", typeof terminoProyecto1); // boolean
console.log(proximoProyecto, "→", typeof proximoProyecto);   // undefined
console.log(segundoApellido, "→", typeof segundoApellido);   // "object" (ver nota)

// NOTA: typeof null devuelve "object". Es un error histórico del
// lenguaje que se mantuvo para no romper páginas antiguas. Basta
// con saber que null significa "vacío a propósito".


/* ---------------------------------------------------
   1.4 OPERADORES
   --------------------------------------------------- */
titulo("1.4 · Operadores aritméticos");

const mesesCSS = 0;
const totalMeses = mesesHTML + mesesCSS;   // suma
console.log("Total de meses (HTML + CSS):", totalMeses);
console.log("10 - 4 =", 10 - 4);           // resta
console.log("6 * 3 =", 6 * 3);             // multiplicación
console.log("20 / 4 =", 20 / 4);           // división
console.log("17 % 5 =", 17 % 5);           // módulo: el RESIDUO de 17 ÷ 5 → 2
console.log("¿8 es par?", 8 % 2 === 0);    // truco clásico: residuo 0 = par

// OJO: el + con textos no suma, UNE (concatena).
console.log("Hola, " + nombre);            // "Hola, Alfredo"
console.log("5" + 3);                      // "53" (texto + número = texto)

titulo("1.4 · Operadores de comparación");

console.log("5 === 5   →", 5 === 5);       // true: mismo valor y mismo tipo
console.log('5 === "5" →', 5 === "5");     // false: number vs string
console.log('5 == "5"  →', 5 == "5");      // true (!) convierte tipos solo
console.log("5 !== 3   →", 5 !== 3);       // true: son distintos
console.log("mesesHTML > mesesCSS →", mesesHTML > mesesCSS);
console.log("18 >= 18  →", 18 >= 18);
// Regla del curso: siempre === y !==. Nunca == ni !=.

titulo("1.4 · Operadores lógicos");

const tieneComputadora = true;
const tieneInternet = false;
console.log("computadora && internet →", tieneComputadora && tieneInternet); // false: falta una
console.log("computadora || internet →", tieneComputadora || tieneInternet); // true: basta una
console.log("!tieneInternet          →", !tieneInternet);                    // true: lo invierte


/* ===================================================
   PARTE 2 · PRÁCTICA
   =================================================== */

/* ---------------------------------------------------
   2.2 EJEMPLO GUIADO: if / else if / else
   ---------------------------------------------------
   El programa revisa las condiciones EN ORDEN, de arriba
   hacia abajo, y ejecuta SOLO el primer bloque cuya
   condición sea true. Los demás se saltan.               */
titulo("2.2 · Ejemplo guiado: inscripción");

const nombreEstudiante = "Alfredo";
let edad = 27;
let esEstudiante = true;

console.log(typeof nombreEstudiante, typeof edad, typeof esEstudiante);

if (edad >= 18 && esEstudiante) {
  console.log(nombreEstudiante + " puede inscribirse con descuento estudiantil.");
} else if (edad >= 18) {
  console.log(nombreEstudiante + " puede inscribirse sin descuento.");
} else {
  console.log(nombreEstudiante + " no cumple con la edad mínima.");
}
// Prueben cambiar esEstudiante a false, o edad a 15, guardar,
// y ver cómo cambia el mensaje en la consola.


/* ---------------------------------------------------
   2.3 SWITCH
   ---------------------------------------------------
   Usamos los mismos valores del <select id="nivel"> del
   formulario "Contáctame": "principiante" e "intermedio".
   - Cada case compara el valor con ===.
   - break detiene el switch; sin él, el código "cae" al
     siguiente case.
   - default atrapa cualquier valor no contemplado.       */
titulo("2.3 · Switch con el nivel del formulario");

const nivel = "intermedio";

switch (nivel) {
  case "principiante":
    console.log("Empezando desde cero.");
    break;
  case "intermedio":
    console.log("Ya tiene bases sólidas.");
    break;
  default:
    console.log("Nivel no reconocido.");
}


/* ===================================================
   2.4 EJERCICIOS PRÁCTICOS DE LÓGICA
   Cada ejercicio muestra su resultado en la consola.
   Cambien los valores de las variables para probar
   todos los caminos posibles.
   =================================================== */

/* ---------------------------------------------------
   EJERCICIO 1 · Etapa según la edad
   menor de edad (menos de 18) · adulto joven (18–25) ·
   adulto (26 o más).
   Truco: el orden importa. Como ya preguntamos "< 18"
   primero, en el else if ya sabemos que edad es 18 o más,
   así que solo falta revisar el límite de arriba (25).   */
titulo("Ejercicio 1 · Etapa según la edad");

const edadPersona = 21;

if (edadPersona < 18) {
  console.log(edadPersona + " años → menor de edad");
} else if (edadPersona <= 25) {
  console.log(edadPersona + " años → adulto joven");
} else {
  console.log(edadPersona + " años → adulto");
}


/* ---------------------------------------------------
   EJERCICIO 2 · ¿Cuál es mayor?
   Comparamos los meses de práctica de dos lenguajes de
   la tabla "Mis avances" (HTML = 1, CSS = 0).            */
titulo("Ejercicio 2 · ¿Cuál es mayor?");

const numeroA = mesesHTML;   // 1
const numeroB = mesesCSS;    // 0

if (numeroA > numeroB) {
  console.log(numeroA + " es mayor que " + numeroB);
} else if (numeroA < numeroB) {
  console.log(numeroB + " es mayor que " + numeroA);
} else {
  console.log("Los dos números son iguales: " + numeroA);
}


/* ---------------------------------------------------
   EJERCICIO 3 · Nota → letra
   A (90 o más) · B (80–89) · C (70–79) · F (menos de 70).
   Mismo truco del ejercicio 1: preguntamos del valor más
   alto al más bajo, así cada else if ya sabe que la nota
   es menor que el límite anterior.                       */
titulo("Ejercicio 3 · Nota → letra");

const nota = 87;
let letra;   // let SIN valor: undefined hasta que el if le asigne una letra

if (nota >= 90) {
  letra = "A";
} else if (nota >= 80) {
  letra = "B";
} else if (nota >= 70) {
  letra = "C";
} else {
  letra = "F";
}
console.log("Nota " + nota + " → " + letra);


/* ---------------------------------------------------
   EJERCICIO 4 · Número → día de la semana (switch)
   Comparamos un número exacto contra 7 posibilidades:
   el caso ideal para switch.                             */
titulo("Ejercicio 4 · Día de la semana");

const diaSemana = 5;
let nombreDia;

switch (diaSemana) {
  case 1: nombreDia = "Lunes"; break;
  case 2: nombreDia = "Martes"; break;
  case 3: nombreDia = "Miércoles"; break;
  case 4: nombreDia = "Jueves"; break;
  case 5: nombreDia = "Viernes"; break;
  case 6: nombreDia = "Sábado"; break;
  case 7: nombreDia = "Domingo"; break;
  default: nombreDia = "Número de día no válido (debe ser del 1 al 7)";
}
console.log("Día " + diaSemana + " → " + nombreDia);


/* ---------------------------------------------------
   EJERCICIO 5 · ¿Puede tomar el curso? (&&)
   Las DOS condiciones tienen que cumplirse a la vez.
   Reutilizamos tieneComputadora, que ya declaramos en la
   parte de operadores lógicos (no se vuelve a declarar:
   declarar dos veces el mismo nombre con const da error). */
titulo("Ejercicio 5 · ¿Puede tomar el curso?");

const edadAspirante = 17;

if (edadAspirante >= 16 && tieneComputadora) {
  console.log("Puede tomar el curso ✔️");
} else {
  console.log("Todavía no puede tomar el curso ✖️");
}


/* ---------------------------------------------------
   Mensaje final
   --------------------------------------------------- */
console.log("%c¡Lógica de la Clase 9 completa! Sigue la Clase 10: loops y funciones.",
  "color:#3fb8af; font-weight:bold;");

/* ###################################################
   ###################################################

   CLASE 10: LOOPS Y FUNCIONES
   ---------------------------------------------------
   CAMBIO DE HOY (Clase 10): todo lo que está desde aquí
   hacia abajo es NUEVO. Seguimos en el MISMO logica.js:
   la Clase 9 queda arriba (no se borra) y la Clase 10 se
   agrega abajo.

   El problema que resolvemos hoy: en la Clase 9 nuestra
   lógica funcionaba para UN solo caso a la vez (una edad,
   una nota, un día). Si quisiéramos calificar a 30
   estudiantes, tendríamos que copiar y pegar el mismo if
   30 veces. Hoy aprendemos dos herramientas para no
   hacerlo:
     1) LOOPS (ciclos): repiten código muchas veces.
     2) FUNCIONES: guardan código con nombre para
        reutilizarlo cuando queramos.

   ###################################################
   ################################################### */

titulo("CLASE 10 · LOOPS Y FUNCIONES");


/* ---------------------------------------------------
   1.2 CICLO for
   ---------------------------------------------------
   Se usa cuando SABEMOS cuántas veces queremos repetir.
   Tiene tres partes dentro del paréntesis, separadas por
   punto y coma:

     for (let i = 0;   i < 5;   i++) { ... }
          ──┬──────    ──┬──    ─┬─
            │            │       └ 3. Incremento: se ejecuta al
            │            │            FINAL de cada vuelta.
            │            │            i++ es lo mismo que i = i + 1
            │            └ 2. Condición: se revisa ANTES de cada
            │                 vuelta. Si es true, se repite; si es
            │                 false, el ciclo termina.
            └ 1. Inicialización: se ejecuta UNA sola vez, al
                 principio. i es el "contador de vueltas".   */
titulo("1.2 · Ciclo for");

for (let i = 0; i < 5; i++) {
  console.log("Vuelta número " + i);
}
// Resultado: Vuelta número 0, 1, 2, 3, 4 → son 5 vueltas.
// Empieza en 0 porque así cuenta JavaScript (lo vamos a ver con
// los arreglos), y termina en 4 porque cuando i vale 5, la
// condición i < 5 ya es false.

// Variante: contar de 1 a 5 → empezamos en 1 y usamos <=
for (let i = 1; i <= 5; i++) {
  console.log("Contando: " + i);
}

// Variante: contar hacia atrás → i-- resta 1 en cada vuelta
for (let i = 3; i >= 1; i--) {
  console.log("Hacia atrás: " + i);
}


/* ---------------------------------------------------
   1.2 for + ARREGLOS (adelanto)
   ---------------------------------------------------
   Un arreglo (array) es una lista de datos entre corchetes
   [ ], separados por comas. Lo veremos a fondo más adelante;
   hoy solo lo necesitamos para recorrerlo con un for.
   - misIntereses.length → cuántos elementos tiene (4).
   - misIntereses[0] → el PRIMER elemento (se cuenta desde 0).
   Usamos los mismos intereses de la sección "Mis intereses"
   de nuestra landing page.                               */
titulo("1.2 · for recorriendo mis intereses");

const misIntereses = ["Programación", "Natación", "Videojuegos", "Música"];

for (let i = 0; i < misIntereses.length; i++) {
  console.log("Interés " + (i + 1) + ": " + misIntereses[i]);
}
// (i + 1) va entre paréntesis para que primero SUME y después
// una el número al texto. Sin paréntesis saldría "Interés 01".


/* ---------------------------------------------------
   1.3 CICLO while
   ---------------------------------------------------
   Se usa cuando NO sabemos cuántas vueltas habrá: repite
   MIENTRAS la condición sea true.
   ⚠️ La variable de la condición tiene que cambiar DENTRO
   del ciclo (aquí, intentos++). Si la olvidamos, la
   condición nunca se vuelve false y el ciclo se repite
   para siempre: un CICLO INFINITO, que congela la pestaña.
   (Si les pasa: cierren la pestaña, corrijan y vuelvan a
   abrir la página.)                                      */
titulo("1.3 · Ciclo while");

let intentos = 0;

while (intentos < 3) {
  console.log("Intento número " + intentos);
  intentos++;   // ← ¡indispensable! sin esta línea, ciclo infinito
}

// Ejemplo donde no sabemos de antemano cuántas vueltas habrá:
// ¿cuántos meses de práctica necesito para llegar a 6, si empiezo
// con 1 (como en "Mis avances") y sumo 2 meses por cada bloque?
let mesesActuales = 1;
let bloques = 0;

while (mesesActuales < 6) {
  mesesActuales = mesesActuales + 2;
  bloques++;
}
console.log("Necesito " + bloques + " bloques para llegar a 6 meses o más (quedo en " + mesesActuales + ")");


/* ---------------------------------------------------
   1.4 FUNCIONES
   ---------------------------------------------------
   Una función es un bloque de código con nombre que
   podemos usar (LLAMAR) las veces que queramos.

     function saludar(nombre) {   ← declaración
       return "Hola, " + nombre + "!";
     }

   - function: la palabra que crea la función.
   - saludar: el nombre (un verbo, en camelCase).
   - (nombre): el PARÁMETRO, una variable que recibe un
     valor distinto cada vez que llamamos a la función.
     (Este "nombre" solo existe dentro de la función; no
     choca con la const nombre de la Clase 9.)
   - return: entrega el resultado a quien llamó la función
     y TERMINA la función en ese punto.                   */
titulo("1.4 · Funciones");

function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludar("Alfredo"));     // "Alfredo" es el ARGUMENTO
console.log(saludar("Ana"));        // misma función, otro argumento
console.log(saludar("Carlos"));

// Una función puede recibir VARIOS parámetros, separados por coma.
function sumar(a, b) {
  return a + b;
}
console.log("sumar(3, 4) =", sumar(3, 4));

// Sin return, la función hace su trabajo pero no devuelve nada:
// el resultado es undefined (el tipo que vimos la clase pasada).
function saludarSinReturn(nombre) {
  console.log("Hola desde adentro, " + nombre);
}
const resultado = saludarSinReturn("Alfredo");
console.log("¿Qué devolvió?", resultado);   // undefined

// Dentro de una función podemos usar TODO lo de la Clase 9:
// variables, if/else y switch. Aquí reutilizamos el switch del
// nivel del formulario "Contáctame", ahora como función.
function describirNivel(nivelElegido) {
  switch (nivelElegido) {
    case "principiante":
      return "Empezando desde cero.";
    case "intermedio":
      return "Ya tiene bases sólidas.";
    default:
      return "Nivel no reconocido.";
  }
  // Nota: con return no hace falta break: return ya termina la función.
}
console.log("principiante →", describirNivel("principiante"));
console.log("intermedio   →", describirNivel("intermedio"));


/* ===================================================
   2.1 EJEMPLO GUIADO: for + función
   ===================================================
   Retomamos el ejercicio de notas de la Clase 9, pero
   ahora dentro de una FUNCIÓN y aplicado a una LISTA de
   notas con un for. Antes: un solo if para una sola
   nota. Ahora: la misma lógica para todas las notas.

   Fíjense que aquí no usamos else: cada return termina
   la función, así que si la nota es 95, devuelve "A" y
   ya no revisa las demás líneas.                       */
titulo("2.1 · Ejemplo guiado: notas con for + función");

function obtenerLetra(nota) {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  return "F";
}

const notas = [95, 82, 68, 74];

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i] + " -> " + obtenerLetra(notas[i]));
}


/* ===================================================
   2.2 EJERCICIOS PRÁCTICOS
   =================================================== */

/* ---------------------------------------------------
   EJERCICIO 1 · Números del 1 al 20 (for)            */
titulo("Ejercicio 1 · Números del 1 al 20");

for (let i = 1; i <= 20; i++) {
  console.log(i);
}


/* ---------------------------------------------------
   EJERCICIO 2 · Solo los pares del 1 al 20 (for + %)
   Usamos el módulo de la Clase 9: un número es par si
   su residuo entre 2 es 0.                           */
titulo("Ejercicio 2 · Pares del 1 al 20");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Otra forma válida: for (let i = 2; i <= 20; i += 2)
// (i += 2 suma de 2 en 2, así ni siquiera necesitamos el if).


/* ---------------------------------------------------
   EJERCICIO 3 · Cuenta regresiva de 10 a 1 (while)   */
titulo("Ejercicio 3 · Cuenta regresiva");

let cuenta = 10;

while (cuenta >= 1) {
  console.log(cuenta);
  cuenta--;          // resta 1; sin esta línea, ciclo infinito
}
console.log("¡Despegue! 🚀");


/* ---------------------------------------------------
   EJERCICIO 4 · Función esMayorDeEdad(edad)
   Devuelve true o false con return. Como la comparación
   edad >= 18 YA es un boolean, podemos devolverla
   directamente, sin if.                              */
titulo("Ejercicio 4 · esMayorDeEdad()");

function esMayorDeEdad(edadRevisar) {
  return edadRevisar >= 18;
}

console.log("esMayorDeEdad(21) →", esMayorDeEdad(21));   // true
console.log("esMayorDeEdad(18) →", esMayorDeEdad(18));   // true
console.log("esMayorDeEdad(15) →", esMayorDeEdad(15));   // false


/* ---------------------------------------------------
   EJERCICIO 5 · obtenerLetra() con mi propio arreglo
   Reutilizamos la función del ejemplo guiado (no se
   vuelve a declarar) con un arreglo de 5 notas.       */
titulo("Ejercicio 5 · Mis 5 notas");

const misNotas = [100, 88, 76, 91, 59];

for (let i = 0; i < misNotas.length; i++) {
  console.log("Nota " + misNotas[i] + " → " + obtenerLetra(misNotas[i]));
}


/* ---------------------------------------------------
   RETO OPCIONAL · Función esPar(numero) dentro de un for
   Combina todo lo de hoy: función + return + for + if. */
titulo("Reto · esPar() del 1 al 10");

function esPar(numero) {
  return numero % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
  if (esPar(i)) {
    console.log(i + " es par");
  }
}

console.log("%c¡Clase 10 completa! En la Clase 11 estas funciones llegan al index.html.",
  "color:#3fb8af; font-weight:bold;");


/* ===================================================
   CAMBIO DE HOY (Clase 12): DEMO EN VIVO DEL LABORATORIO
   ===================================================
   Un ejemplo pequeño de lo que hoy hacemos en script.js, para
   probarlo aquí mismo en practica-js.html (sección Clase 12):
   1. Seleccionamos el botón y la tarjeta (Clase 11).
   2. Escuchamos el "click" del botón (addEventListener).
   3. Cambiamos la clase (classList.toggle) y el texto
      (textContent) de la tarjeta.                          */
titulo("Clase 12 · Demo: click + classList + textContent");

const demoBoton = document.querySelector("#demo-boton");
const demoTarjeta = document.querySelector("#demo-tarjeta");
const demoTexto = document.querySelector("#demo-texto");
let clics = 0;

demoBoton.addEventListener("click", function () {
  clics++;                                   // contador (Clase 9)
  demoTarjeta.classList.toggle("encendida"); // pone o quita la clase

  if (demoTarjeta.classList.contains("encendida")) {
    demoTexto.textContent = "💡 ¡Encendida! Llevas " + clics + " clic(s).";
  } else {
    demoTexto.textContent = "Apagada. Llevas " + clics + " clic(s). Vuelve a presionar el botón.";
  }
  console.log("Clic número", clics);
});


/* ===================================================
   CAMBIO DE HOY (Clase 15): CHECKLIST DE LA AUDITORÍA
   ===================================================
   La checklist del laboratorio (sección Clase 15) cuenta
   cuántas casillas están marcadas y mueve una barra de
   progreso. Junta muchas cosas del curso:
   - querySelectorAll + for (Clases 10 y 11)
   - el evento "change" (como "input" de la Clase 12, pero
     para casillas: ocurre al marcar o desmarcar)
   - checkbox.checked → true si la casilla está marcada
   - classList.toggle con un 2.º argumento: toggle("hecho", true)
     PONE la clase y toggle("hecho", false) la QUITA.
   - style.width para el ancho de la barra (Clase 12)      */
titulo("Clase 15 · Checklist de accesibilidad");

const casillas = document.querySelectorAll("#checklist input");
const barra = document.querySelector("#progreso-barra");
const textoProgreso = document.querySelector("#progreso-texto");

function actualizarProgreso() {
  let marcadas = 0;

  for (let i = 0; i < casillas.length; i++) {
    // closest("li") busca el <li> que contiene a la casilla.
    const fila = casillas[i].closest("li");
    fila.classList.toggle("hecho", casillas[i].checked);

    if (casillas[i].checked) {
      marcadas++;
    }
  }

  // Porcentaje: marcadas entre el total, por 100 (Clase 9).
  const porcentaje = (marcadas / casillas.length) * 100;
  barra.style.width = porcentaje + "%";

  if (marcadas === casillas.length) {
    textoProgreso.textContent = "🎉 ¡" + marcadas + " de " + casillas.length + "! Tu página está lista para publicarse.";
  } else {
    textoProgreso.textContent = marcadas + " de " + casillas.length + " revisados";
  }
}

for (let i = 0; i < casillas.length; i++) {
  // Fíjense: actualizarProgreso va SIN paréntesis. Le entregamos la función
  // para que el navegador la llame cuando ocurra el evento; con paréntesis
  // la ejecutaríamos una sola vez, ahora mismo.
  casillas[i].addEventListener("change", actualizarProgreso);
}

actualizarProgreso();   // primer dibujo: 0 de 8

titulo("Clase 16 · Generador del nombre del sitio");
 
const inputSitio = document.querySelector("#nombre-sitio");
const vistaNombre = document.querySelector("#vista-nombre");
const consejoUrl = document.querySelector("#consejo-url");
 
// Una función (Clase 10) que recibe un texto y devuelve el nombre limpio.
// Cada línea hace UNA transformación, en orden:
function crearNombreSitio(texto) {
  return texto
    .toLowerCase()                       // 1. todo a minúsculas: "Página" → "página"
    .normalize("NFD")                    // 2. separa la letra de su tilde: "á" → "a" + "´"
    .replace(/[̀-ͯ]/g, "")     // 3. borra las tildes que quedaron sueltas
    .replace(/ñ/g, "n")                  // 4. (por si acaso) ñ → n
    .replace(/[^a-z0-9]+/g, "-")         // 5. lo que NO sea letra o número → un guion
    .replace(/^-+|-+$/g, "");            // 6. quita los guiones del principio y del final
}
/* ¿Qué es eso de /.../g? Se llama EXPRESIÓN REGULAR: un "patrón" para
   buscar texto. Por ejemplo, /[^a-z0-9]+/g significa "uno o más
   caracteres que NO sean letras de la a a la z ni números", y la g
   (global) dice "todas las veces que aparezca, no solo la primera".
   No hace falta memorizarlas: lo importante es entender QUÉ hace cada
   línea. */
 
inputSitio.addEventListener("input", function () {
  const original = inputSitio.value;
  const nombre = crearNombreSitio(original);
 
  // Limpiamos los colores del intento anterior (como en la Clase 12).
  consejoUrl.classList.remove("ok", "aviso");
 
  if (nombre === "") {
    vistaNombre.textContent = "tu-sitio";
    consejoUrl.textContent = "Escribe arriba y mira cómo queda tu dirección.";
  } else if (nombre.length > 63) {
    // Netlify acepta nombres de hasta 63 caracteres.
    vistaNombre.textContent = nombre;
    consejoUrl.textContent = "⚠️ Muy largo: " + nombre.length + " caracteres. Usa 63 o menos.";
    consejoUrl.classList.add("aviso");
  } else if (nombre !== original) {
    // Hubo que cambiar algo (mayúsculas, espacios, tildes...).
    vistaNombre.textContent = nombre;
    consejoUrl.textContent = "✎ Lo ajustamos: en una URL no van mayúsculas, espacios ni tildes.";
    consejoUrl.classList.add("aviso");
  } else {
    vistaNombre.textContent = nombre;
    consejoUrl.textContent = "✔️ ¡Nombre válido! Así quedaría tu sitio en Netlify.";
    consejoUrl.classList.add("ok");
  }
 
  console.log("Escribiste:", original, "→ nombre del sitio:", nombre);
});
 
console.log("%c¡Clase 16! Este laboratorio ya puede estar publicado en internet 🌐",
  "color:#e8b054; font-weight:bold;");

/* ===================================================
   CAMBIO NUEVO: MODO OSCURO EN EL LABORATORIO
   ===================================================
   Es la misma idea que ya hicimos en index.html (script.js,
   Clase 12), ahora en practica-js.html:
   1. Seleccionamos el botón (Clase 11).
   2. Escuchamos su "click" (addEventListener, Clase 12).
   3. Con classList ponemos o quitamos la clase "modo-oscuro" del
      <body>. Todo el diseño oscuro vive en css/styles.css
      (body.modo-oscuro ...); JavaScript solo decide CUÁNDO.

   Extra: guardamos la elección en localStorage, una pequeña
   memoria del navegador. Así, si la persona activa el modo
   oscuro, la página lo recuerda al recargar y también cuando
   cambia entre index.html y el laboratorio (los dos archivos
   usan la misma clave: "tema").

   El try / catch es por seguridad: algunos navegadores bloquean
   localStorage (por ejemplo, en una ventana privada). Si pasa,
   el botón sigue funcionando; solo que no recuerda la elección. */
titulo("Modo oscuro · click + classList + localStorage");

const botonTemaLab = document.querySelector("#btn-tema");

// Pone o quita el modo oscuro, cambia el texto del botón y avisa
// al lector de pantalla con aria-pressed (igual que en script.js).
function aplicarTema(oscuro) {
  if (oscuro) {
    document.body.classList.add("modo-oscuro");
    botonTemaLab.textContent = "☀️ Modo claro";
  } else {
    document.body.classList.remove("modo-oscuro");
    botonTemaLab.textContent = "🌙 Modo oscuro";
  }
  botonTemaLab.setAttribute("aria-pressed", oscuro ? "true" : "false");
}

// Al cargar la página: ¿había quedado guardado el modo oscuro?
let temaGuardadoLab = null;
try {
  temaGuardadoLab = localStorage.getItem("tema");
} catch (error) {
  console.log("No se pudo leer el tema guardado:", error);
}
aplicarTema(temaGuardadoLab === "oscuro");

botonTemaLab.addEventListener("click", function () {
  // Si todavía NO tiene la clase, el nuevo estado será oscuro.
  const ahoraOscuro = !document.body.classList.contains("modo-oscuro");
  aplicarTema(ahoraOscuro);

  try {
    localStorage.setItem("tema", ahoraOscuro ? "oscuro" : "claro");
  } catch (error) {
    console.log("No se pudo guardar el tema:", error);
  }
  console.log("Modo oscuro activo:", ahoraOscuro);
});