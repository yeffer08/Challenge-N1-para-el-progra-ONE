window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function () {
        this.value = this.value.toLowerCase();
    }, true);
    document.getElementById("encriptar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        document.getElementById("resultado").value = encriptar(texto);
    }, true);
    document.getElementById("decencriptar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        document.getElementById("resultado").value = decencriptar(texto);
    }, true);
    document.getElementById("copy").addEventListener("click", function () {
        document.getElementById("resultado").focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
    }, true);
}
function encriptar(texto) {
    let resultado = texto;

    resultado = resultado.replaceAll('é', 'e');
    resultado = resultado.replaceAll('í', 'i');
    resultado = resultado.replaceAll('á', 'a');
    resultado = resultado.replaceAll('ó', 'o');
    resultado = resultado.replaceAll('ú', 'u');

    resultado = resultado = resultado.replaceAll('e', 'enter');
    resultado = resultado.replaceAll('i', 'imes');
    resultado = resultado.replaceAll('a', 'ai');
    resultado = resultado.replaceAll('o', 'ober');
    resultado = resultado.replaceAll('u', 'ufat');
    
    return resultado;  
}

function decencriptar(texto) {
    let resultado = texto;
    resultado = resultado.replaceAll('enter', 'e');
    resultado = resultado.replaceAll('imes', 'i');
    resultado = resultado.replaceAll('ai', 'a');
    resultado = resultado.replaceAll('ober', 'o');
    resultado = resultado.replaceAll('ufat', 'u');
    return resultado;

}