function esPalindromo(texto) {
    texto = texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}


var palabra = "Anita lava la tina";

if (esPalindromo(palabra)) {
    console.log("'" + palabra + "' es un palíndromo.");
} else {
    console.log("'" + palabra + "' no es un palíndromo.");
}
