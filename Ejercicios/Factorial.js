function factorial(numero) {

    if (numero === 0 || numero === 1) {
        return 1;
    } else {

        let resultado = 1;

        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


var numeroUsuario = 105;


if (!isNaN(numeroUsuario)) {
    console.log("El factorial de " + numeroUsuario + " es: " + factorial(numeroUsuario));
} else {
    console.log("Por favor, ingresa un número válido.");
}
