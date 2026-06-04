
// ==========================================
// 1. FUNCIÓN CORRESPONDIENTE (LÓGICA PURA)
// ==========================================

/**
 * Procesa el recorte estrictamente mediante parámetros de entrada.
 * @param {string} texto - Cadena de texto previamente validada por main.
 * @param {number} longitud - Número entero previamente validado por main.
 * @returns {string} Devuelve el resultado generado usando la sentencia return de forma explícita.
 */
const miFuncion = (texto, longitud) => {
    const resultadoGenerado = texto.slice(0, longitud);
    return resultadoGenerado;
};


// ==========================================
// 2. FUNCIÓN CONTROLADORA CENTRAL (MAIN)
// ==========================================

/**
 * Función Main: Motor central de la aplicación.
 * Se activa ÚNICAMENTE tras pulsar el botón Ejecutar.
 */
const main = () => {
    // Nodos del DOM necesarios para la lectura y visualización
    const inputTexto = document.getElementById("input-texto");
    const inputLongitud = document.getElementById("input-longitud");
    const resultadoPantalla = document.getElementById("resultado-pantalla");
    const contenedorResultado = document.getElementById("contenedor-resultado");
    const tituloResultado = document.getElementById("titulo-resultado");

    // REQUISITO 1: Lee los datos de la interfaz gráfica
    const textoLeido = inputTexto.value;
    const longitudLeidaRaw = inputLongitud.value;

    // Restablecer estilos visuales por defecto en cada ejecución
    contenedorResultado.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
    tituloResultado.textContent = "Resultado por Pantalla:";
    tituloResultado.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";

    // REQUISITO 2: Valida los datos recopilados antes de proceder
    // Validación A: Comprobar que el texto no esté vacío o compuesto solo por espacios
    if (textoLeido.trim() === "") {
        resultadoPantalla.textContent = "Error: El texto no puede estar vacío.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return; // Interrumpe main debido a datos inválidos
    }

    // Validación B: Comprobar que el campo numérico no esté vacío
    if (longitudLeidaRaw.trim() === "") {
        resultadoPantalla.textContent = "Error: Introduce un número de caracteres.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return;
    }

    const longitudEntera = parseInt(longitudLeidaRaw);

    // Validación C: Comprobar que el número de caracteres no sea negativo
    if (longitudEntera < 0) {
        resultadoPantalla.textContent = "Error: La longitud no puede ser negativa.";
        contenedorResultado.classList.add("border-red-300", "bg-red-50");
        tituloResultado.classList.add("text-red-400");
        return;
    }

    // REQUISITO 3: Pasa los datos validados por parámetro e invoca la función
    // REQUISITO 4: Recibe el resultado y lo almacena estrictamente en una variable
    const resultadoRecibido = miFuncion(textoLeido, longitudEntera);

    // REQUISITO 5: Muestra el resultado final por pantalla
    if (resultadoRecibido === "") {
        resultadoPantalla.textContent = "(Cadena vacía: longitud asignada 0)";
    } else {
        resultadoPantalla.textContent = resultadoRecibido;
    }
};


// ==========================================
// 3. ENTORNO DE ARRANQUE Y ESCUCHADORES
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const btnProcesar = document.getElementById("btn-procesar");
    const btnLimpiar = document.getElementById("btn-limpiar");
    const inputTexto = document.getElementById("input-texto");
    const inputLongitud = document.getElementById("input-longitud");
    const resultadoPantalla = document.getElementById("resultado-pantalla");

    /**
     * Resetea todos los campos de la interfaz a su estado base limpio
     */
    const limpiarCampos = () => {
        inputTexto.value = "";
        inputLongitud.value = "0"; // Regresa al valor cero base inicial
        resultadoPantalla.textContent = "...";
        const contenedor = document.getElementById("contenedor-resultado");
        const titulo = document.getElementById("titulo-resultado");
        contenedor.className = "border border-gray-200 bg-gray-50 rounded-lg p-4 font-mono";
        titulo.className = "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1";
        titulo.textContent = "Resultado por Pantalla:";
    };

    // --- ASIGNACIÓN DE ESCUCHADORES (LISTENERS) DE CLIC ---
    
    // El flujo se ejecuta de forma manual únicamente al hacer clic en este botón
    btnProcesar.addEventListener("click", main);
    btnLimpiar.addEventListener("click", limpiarCampos);
});
