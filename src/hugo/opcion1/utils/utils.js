/**
 * Función para truncar un texto a un máximo de palabras.
 *
 * @param {string} texto - El texto que se va a truncar.
 * @param {number} maxPalabras - El número máximo de palabras permitidas en el texto final.
 * @returns {string} - El texto truncado, seguido de "..." si se ha truncado.
 */
export function truncateText(texto, maxPalabras) {
    // Divido el texto en palabras
    let palabras = texto.split(" ");

    // Verifico si el texto excede el límite de palabras
    if (palabras.length > maxPalabras) {
        // Trunco el texto y agrego "..."
        let textoTruncado = palabras.slice(0, maxPalabras).join(" ") + "...";
        return textoTruncado;
    } else {
        // Devuelvo el texto original si no excede el límite
        return texto;
    }
}
// Información del desarrollador
// Nombre: Hugo Segura
// Compañía: HyM Soft
