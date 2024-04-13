function calcularIMC(peso, altura) {
    var alturaMetrosCuadrados = altura * altura;
    var IMC = peso / alturaMetrosCuadrados;
    return IMC;
}


var pesoLibras = 160;
var altura = 1.75;


var pesoKg = parseFloat(pesoLibras) * 0.453592;
altura = parseFloat(altura);

if (isNaN(pesoKg) || isNaN(altura) || pesoKg <= 0 || altura <= 0) {
    console.log("Por favor, ingresa valores válidos para peso y altura.");
} else {
    var imc = calcularIMC(pesoKg, altura);
    console.log("Tu IMC es: " + imc.toFixed(2));
}
